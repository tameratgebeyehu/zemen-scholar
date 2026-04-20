-- ==============================================================================
-- ZEMEN SCHOLAR SUPABASE SCHEMA
-- Relational Database Architecture
-- ==============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================================
-- 1. USERS TABLE
-- =========================================

-- The profiles table links exactly to auth.users (Supabase native auth)
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    country_target TEXT CHECK (country_target IN ('USA', 'UK', 'Canada', 'Germany', 'Australia', 'Other')),
    grade_level TEXT CHECK (grade_level IN ('Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Graduate', 'Other')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: RLS (Row Level Security) Policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view and edit their own profiles."
    ON public.users FOR ALL
    USING (auth.uid() = id);

-- Trigger to automatically create a profile in `users` upon Auth Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- =========================================
-- 2. ROADMAP SYSTEM & PROGRESS
-- =========================================

CREATE TABLE public.roadmap_steps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    step_name TEXT UNIQUE NOT NULL,
    description TEXT,
    order_index INTEGER NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- user_roadmap_progress automatically tracks status
CREATE TABLE public.user_roadmap_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    step_id UUID REFERENCES public.roadmap_steps(id) ON DELETE CASCADE,
    step_name TEXT NOT NULL, -- Denormalized for convenience
    status TEXT DEFAULT 'locked' CHECK (status IN ('locked', 'active', 'completed')),
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, step_id)
);

ALTER TABLE public.user_roadmap_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users control their own roadmap progress." 
    ON public.user_roadmap_progress FOR ALL USING (auth.uid() = user_id);


-- =========================================
-- 3. EXAMS SYSTEM
-- =========================================

CREATE TABLE public.user_exam_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    exam_type TEXT NOT NULL CHECK (exam_type IN ('IELTS', 'SAT', 'TOEFL', 'Duolingo')),
    score INTEGER,
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, exam_type)
);

CREATE TABLE public.exam_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exam_type TEXT NOT NULL CHECK (exam_type IN ('IELTS', 'SAT', 'TOEFL', 'Duolingo')),
    question_text TEXT NOT NULL,
    options JSONB NOT NULL, -- E.g. [{"id": "A", "text": "Apple"}, ...]
    correct_answer TEXT NOT NULL,
    explanation TEXT,
    difficulty_level TEXT CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.user_exam_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    question_id UUID REFERENCES public.exam_questions(id) ON DELETE CASCADE NOT NULL,
    selected_answer TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    answered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, question_id)
);

ALTER TABLE public.user_exam_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users control their exam progress." ON public.user_exam_progress FOR ALL USING (auth.uid() = user_id);

ALTER TABLE public.user_exam_answers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users control their own exam answers." ON public.user_exam_answers FOR ALL USING (auth.uid() = user_id);

ALTER TABLE public.exam_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Exam questions apply to all authenticated users read-only." ON public.exam_questions FOR SELECT USING (auth.role() = 'authenticated');


-- =========================================
-- 4. DOCUMENTS SYSTEM
-- =========================================

CREATE TABLE public.user_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    document_type TEXT NOT NULL, -- e.g., 'passport', 'transcript', 'bank_statement'
    file_url TEXT, -- Path in Supabase storage bucket
    status TEXT DEFAULT 'missing' CHECK (status IN ('missing', 'uploaded', 'verified', 'rejected')),
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    verified_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(user_id, document_type)
);

ALTER TABLE public.user_documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users control their own documents." ON public.user_documents FOR ALL USING (auth.uid() = user_id);

-- Storage Buckets logic requires SQL setup (Note: Typically created natively in Supabase dashboard)
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', false) ON CONFLICT DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('profile_pictures', 'profile_pictures', true) ON CONFLICT DO NOTHING;


-- =========================================
-- 5. UNIVERSITIES SYSTEM
-- =========================================

CREATE TABLE public.universities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    tuition_fee NUMERIC,
    required_gpa NUMERIC(3,2),
    required_tests JSONB, -- e.g. {"IELTS": 6.5, "SAT": 1200}
    website_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.user_university_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    university_id UUID REFERENCES public.universities(id) ON DELETE CASCADE NOT NULL,
    status TEXT DEFAULT 'saved' CHECK (status IN ('saved', 'applied', 'accepted', 'rejected', 'waitlisted')),
    applied_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, university_id)
);

ALTER TABLE public.user_university_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users control their university applications." ON public.user_university_applications FOR ALL USING (auth.uid() = user_id);

ALTER TABLE public.universities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Universities are readable by all." ON public.universities FOR SELECT USING (true);


-- =========================================
-- 6. VISA TRACKING SYSTEM
-- =========================================

CREATE TABLE public.visa_checklist (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    country TEXT NOT NULL,
    step_name TEXT NOT NULL,
    required_documents JSONB, -- Array of required docs mapping to user_documents.document_type
    tips TEXT,
    warnings TEXT,
    step_order INTEGER NOT NULL,
    UNIQUE(country, step_name)
);

CREATE TABLE public.user_visa_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    checklist_id UUID REFERENCES public.visa_checklist(id) ON DELETE CASCADE NOT NULL,
    step_name TEXT NOT NULL, -- Denormalized
    status TEXT DEFAULT 'locked' CHECK (status IN ('locked', 'active', 'completed')),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, checklist_id)
);

ALTER TABLE public.user_visa_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage their visa progress." ON public.user_visa_progress FOR ALL USING (auth.uid() = user_id);

ALTER TABLE public.visa_checklist ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visa checklists are globally readable." ON public.visa_checklist FOR SELECT USING (true);


-- =========================================
-- 7. USER ANALYTICS (ACTIVITY LOGS)
-- =========================================

CREATE TABLE public.user_activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    activity_type TEXT NOT NULL, -- e.g., 'login', 'completed_task', 'test_attempt'
    metadata JSONB DEFAULT '{}'::jsonb, -- dynamic payload
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.user_activity_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view only their own logs" ON public.user_activity_logs FOR SELECT USING (auth.uid() = user_id);
-- Insert policy may be allowed for authenticated users if triggered from client side.
CREATE POLICY "Users can insert their own logs" ON public.user_activity_logs FOR INSERT WITH CHECK (auth.uid() = user_id);


-- =========================================
-- 8. UTILITY FUNCTIONS & TRIGGERS
-- =========================================

-- Trigger function to automatically update `updated_at` columns globally
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_modtime BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_roadmap_progress_modtime BEFORE UPDATE ON public.user_roadmap_progress FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_exam_progress_modtime BEFORE UPDATE ON public.user_exam_progress FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_univ_apps_modtime BEFORE UPDATE ON public.user_university_applications FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_visa_prog_modtime BEFORE UPDATE ON public.user_visa_progress FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- End of File

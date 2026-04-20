import { RoadmapStep, DocumentGuide, OfflineStep } from '../types';

export const MOTIVATIONS = [
  "Start early to increase your chances exponentially.",
  "Preparation beats luck when it comes to scholarships.",
  "Your dream university is looking for students just like you."
];

export const ROADMAP_DATA: Record<string, RoadmapStep[]> = {
  'Grade 9': [
    {
      id: 'g9_step1',
      title: 'The Golden Rule: GPA is King',
      description: 'Your grades in Grade 9 matter just as much as Grade 12. Aim for a 90% average or above to protect your "Cumulative GPA" for top tier universities.',
      checklists: [
        'Maintain 90%+ Grades in all subjects',
        'Focus especially on Math and English foundations',
        'Request an official grading scale from your school',
        'Attend at least 95% of your classes daily'
      ]
    },
    {
      id: 'g9_step2',
      title: 'Master the English Language',
      description: 'Study English to become fluent, not just to pass exams. Improving your vocabulary early prevents "cramming" for IELTS/TOEFL later.',
      checklists: [
        'Read English news or books for 30 mins daily',
        'Learn 5 new "Advanced" words from our glossary daily',
        'Watch educational YouTube videos in English',
        'Start keeping an English-only journal'
      ]
    },
    {
      id: 'g9_step3',
      title: 'Start Your "Extra" Life',
      description: 'Scholarships aren\'t just for nerds; they want leaders. Join one or two clubs to prove you do more than just study.',
      checklists: [
        'Join at least one school or community club',
        'Aim for a leadership role (or start your own club)',
        'Track your participation hours weekly',
        'Join Mini-Media, Charity, or a Sports team'
      ]
    },
    {
      id: 'g9_step4',
      title: 'Community Service (The Heart)',
      description: 'International scholarships love students who help Ethiopia. Proving you have "Social Impact" early is a massive differentiator.',
      checklists: [
        'Volunteer for at least 2 hours per week',
        'Tutor younger kids in your neighborhood',
        'Help at a local church/mosque or cleaning campaign',
        'Participate in "Yelemat Tirat" or local social work'
      ]
    },
    {
      id: 'g9_step5',
      title: 'The Scholarship Folder',
      description: 'Organization separates winners from losers. Start saving your "Receipts" of success immediately.',
      checklists: [
        'Create a physical folder for all certificates',
        'Set up a digital folder on your phone/computer',
        'Save every "Student of the Month" or sports award',
        'Document all volunteer hours with signed letters'
      ]
    },
    {
      id: 'g9_summary',
      title: 'Summary Checklist (Grade 9)',
      description: 'Your final checklist for success this year. Keep these habits strong to win that scholarship later.',
      checklists: [
        'Maintain 90%+ Grades (Daily - High Priority)',
        'Read English Books/Articles (30 mins/Day - High Priority)',
        'Active Club Membership (Weekly - Medium Priority)',
        'Volunteer Work (Weekly - Medium Priority)',
        'Save Certificates/Awards (As they happen - Essential)'
      ]
    }
  ],
  'Grade 10': [
    {
      id: 'g10_step1',
      title: 'National Exam Strategy (EGSECE)',
      description: 'The first thing scholarships look for is your national exam result. Aim for straight As to prove you are in the top percentage of students in Ethiopia.',
      checklists: [
        'Aim for straight As in all subjects',
        'Start practicing with quiz apps like Ethio Learn',
        'Focus on Scholastic Aptitude and Critical Thinking',
        'Solve at least 5 years of past national papers'
      ]
    },
    {
      id: 'g10_step2',
      title: 'The Great Stream Choice',
      description: 'Choose between Natural and Social Science based on your strengths and dream career—not because of peer pressure.',
      checklists: [
        'Choose Natural Science for STEM scholarships',
        'Choose Social Science for Law, Business, or IR scholarships',
        'Research which subjects you enjoy most',
        'Consult with a school counselor about your strengths'
      ]
    },
    {
      id: 'g10_step3',
      title: 'Digital SAT and English Light Prep',
      description: 'Start meeting the global exams early. The way SAT questions are asked is very different from the Ethiopian National Exam.',
      checklists: [
        'Take a free practice Digital SAT on Khan Academy',
        'Become familiar with SAT "trick" questions early',
        'Look into programs like Ethio College Prep (ECP)',
        'Move from "Basic" to "Intermediate" in our glossary'
      ]
    },
    {
      id: 'g10_step4',
      title: 'Level Up Your Leadership',
      description: 'Committees look for leadership potential. Moving from a member to a club officer is a massive differentiator for your profile.',
      checklists: [
        'Run for a Club Officer position (President, Secretary)',
        'Organize one small community or school project',
        'Document your project with photos and letters',
        'Join the school student union if possible'
      ]
    },
    {
      id: 'g10_step5',
      title: 'Research Early Access Programs',
      description: 'Specialized schools take students after Grade 10 and often offer full scholarships for international high school study.',
      checklists: [
        'Look into UWC (United World Colleges) Ethiopia',
        'Research the African Leadership Academy (ALA)',
        'Mark application deadlines on your calendar',
        'Check UWC Ethiopia social media for dates'
      ]
    },
    {
      id: 'g10_summary',
      title: 'Summary Checklist (Grade 10)',
      description: 'Your core missions for finishing junior high strong and preparing for pre-university life.',
      checklists: [
        'Solve 5+ years of past EGSECE papers',
        'Run for a student union or club position',
        'Complete one Khan Academy Digital SAT diagnostic',
        'Check UWC/ALA application requirements',
        'Finalize your Grade 11/12 stream selection'
      ]
    }
  ],
  'Grade 11': [
    {
      id: 'g11_step1',
      title: 'Standardized Test Season',
      description: 'This is the year you move from prepping to taking exams. Taking the SAT in Spring allows you the summer to restudy if needed.',
      checklists: [
        'Take your first SAT in March or May',
        'Take IELTS, TOEFL, or Duolingo by year end',
        'Check if your target schools accept Duolingo',
        'Secure a reliable internet connection for online tests'
      ]
    },
    {
      id: 'g11_step2',
      title: 'Deep Extracurriculars and Internships',
      description: 'Colleges look for specialization. Pick 1 or 2 big projects instead of 5 small clubs to show expertise and commitment.',
      checklists: [
        'Enter a Science Fair or start a coding project',
        'Publish an article or lead a major fundraiser',
        'Find a summer "Job Shadow" or internship',
        'Document your impact with results and metrics'
      ]
    },
    {
      id: 'g11_step3',
      title: 'Strategic College List Building',
      description: 'Don\'t wait for Grade 12 to find schools. Aim to find 10-15 universities that offer full funding for international students.',
      checklists: [
        'Research Need-Blind schools (Harvard, MIT, etc.)',
        'Identify Mastercard Foundation partner universities',
        'Check Government scholarships (Hungary, Turkey, etc.)',
        'Verify if schools provide full financial aid'
      ]
    },
    {
      id: 'g11_step4',
      title: 'Building Letter of Recommendation Relationships',
      description: 'You will need two teachers to write strong letters for you next year. Ensure they know your character beyond your grades.',
      checklists: [
        'Engage actively and ask smart questions in class',
        'Help peers and show leadership in the classroom',
        'Identify two core subject teachers for your LOR',
        'Share your goals and CV with your chosen teachers'
      ]
    },
    {
      id: 'g11_step5',
      title: 'Personal Statement First Draft',
      description: 'By the end of Grade 11, you should have a first draft of your "Story." Authenticity is key to a winning application.',
      checklists: [
        'Draft your Common Application personal statement',
        'Identify a unique challenge or story from your life',
        'Get initial feedback from an English teacher',
        'Refine your "Why this major" narrative'
      ]
    },
    {
      id: 'g11_milestones',
      title: 'Grade 11 Milestone Calendar',
      description: 'Your month-by-month guide to staying on track for the application season.',
      checklists: [
        'Sept-Dec: Research 10 scholarships & requirements',
        'Jan-March: Intense SAT and English study',
        'April-June: Take the SAT and English exams',
        'July-August: Summer Internship + Essay Draft'
      ]
    }
  ],
  'Grade 12': [
    {
      id: 'g12_step1',
      title: 'The Big Three Deadlines',
      description: 'International scholarships have specific windows. Missing these dates often means waiting an entire year to reapply.',
      checklists: [
        'Oct-Nov: Submit Early Action (Harvard, MIT, etc.)',
        'January: Submit Regular Decision applications',
        'Feb-April: Apply for Mastercard and Govt programs',
        'Finalize all university portal accounts by October'
      ]
    },
    {
      id: 'g12_step2',
      title: 'Mastercard Scholars Strategy',
      description: 'The Mastercard Foundation is one of the best "Full-Ride" opportunities for Ethiopian students. Focus on their partner institutions.',
      checklists: [
        'Check partner universities (UoG, Ashesi, Makerere)',
        'Check the Mastercard website in early October',
        'Complete separate scholarship application forms',
        'Focus on community impact and leadership essays'
      ]
    },
    {
      id: 'g12_step3',
      title: 'Last Chance SAT and English Windows',
      description: 'If your scores need improvement, you have one final window. Use the summer before Grade 12 for intense practice.',
      checklists: [
        'October SAT: Last date for Early Action',
        'December SAT: Absolute last date for Regular Decision',
        'Take final English proficiency tests if needed',
        'Practice with full-length timed mock exams'
      ]
    },
    {
      id: 'g12_step4',
      title: 'National Exam vs Scholarship Tactics',
      description: 'The biggest trap is waiting until after the National Exam. You must apply for scholarships as your "7th Subject" during classes.',
      checklists: [
        'Apply for scholarships during Grade 12 classes',
        'Don\'t wait for National Exam results to apply',
        'Treat scholarship portals as a core daily subject',
        'Balance application essays with school studies'
      ]
    },
    {
      id: 'g12_step5',
      title: 'Letters of Recommendation and Transcripts',
      description: 'September is the month for logistics. Ensure you have all official stamps and that your teachers have your CV.',
      checklists: [
        'Request official Transcripts (Grades 9, 10, and 11)',
        'Ensure school director stamps all official documents',
        'Provide teachers with your CV for specific LORs',
        'Follow up on teacher submissions early'
      ]
    },
    {
      id: 'g12_calendar',
      title: 'Grade 12 Master Calendar',
      description: 'Your high-level timeline for the final application and departure phase.',
      checklists: [
        'Sept-Oct: Finalize Essay and choose 10 schools',
        'Nov 1st: Submit Early Action applications',
        'Jan 1st: Submit Regular Decision applications',
        'Feb-March: Apply for Govt Scholarships',
        'April: Receive acceptances and compare aid',
        'May-June: Visa Interviews and National Exam prep',
        'Aug-Sept: Depart for your dream university'
      ]
    },
    {
      id: 'g12_summary',
      title: 'Summary of the 4-Year Journey',
      description: 'Reflecting on your growth from builder to leader to global applicant.',
      checklists: [
        'Grade 9: Build the GPA and start initial clubs',
        'Grade 10: Ace the National Exam and take lead roles',
        'Grade 11: Take standardized tests and write your story',
        'Grade 12: Apply early, often, and secure the Full-Ride'
      ]
    }
  ]
};

export const DOCUMENTS_GUIDE_DATA: DocumentGuide[] = [
  {
    id: 'passport',
    title: 'Passport',
    shortDescription: 'Your primary identification for international travel.',
    fullDescription: 'An official government document that certifies your identity and citizenship for international travel purposes.',
    whyItMatters: 'Every university and embassy requires a valid passport to even begin the application process. It is the first document you must possess.',
    prepSteps: [
      'Locate your nearest Main Immigration Office.',
      'Prepare 2-4 passport-sized color photos.',
      'Bring your National ID (Original and Copy).',
      'Pay the processing fee at the designated bank.',
      'Complete the application form and wait for processing.'
    ],
    tips: [
      'Ensure your passport is valid for at least 6 months after your intended travel date.',
      'Keep a digital color scan of all pages.'
    ],
    mistakes: [
      'Submitting an expired passport.',
      'Providing blurry or old photographs.'
    ]
  },
  {
    id: 'transcript',
    title: 'Academic Transcript',
    shortDescription: 'Official record of your high school or university grades.',
    fullDescription: 'A comprehensive record of your academic performance, including all courses taken and grades achieved.',
    whyItMatters: 'Universities use your transcript to evaluate your academic ability and eligibility for scholarships.',
    prepSteps: [
      'Visit your school’s registrar or main office.',
      'Request several official signed and stamped copies.',
      'Ensure the transcript is translated into English by a certified body.',
      'Obtain an official grading scale explanation from your school.'
    ],
    tips: [
      'Keep the original copies in a dry, safe location.',
      'Request transcripts early as they can take time to process.'
    ],
    mistakes: [
      'Using unofficial or student-copy transcripts.',
      'Missing official school stamps or signatures.'
    ]
  },
  {
    id: 'recommendation',
    title: 'Recommendation Letter',
    shortDescription: 'Validation of your character from instructors.',
    fullDescription: 'A formal letter written by a teacher, professor, or employer describing your character and academic potential.',
    whyItMatters: 'It provides an external perspective on your study habits, leadership, and suitability for the program.',
    prepSteps: [
      'Identify 2-3 teachers who know you well and like your work.',
      'Politely ask them if they can write a strong recommendation.',
      'Provide them with your Resume (CV) or a list of your achievements.',
      'Give them at least 3 weeks to write the letter.'
    ],
    tips: [
      'Ask teachers of core subjects like Math, English, or Science.',
      'Ensure the letter is on an official school letterhead.'
    ],
    mistakes: [
      'Asking for a letter at the last minute.',
      'Submitting a generic letter that doesn’t mention your specific strengths.'
    ]
  },
  {
    id: 'personal_statement',
    title: 'Personal Statement',
    shortDescription: 'Your chance to tell your story and goals.',
    fullDescription: 'A formal essay you write to explain why you want to study at a specific university and why you deserve a spot.',
    whyItMatters: 'It is often the deciding factor for scholarships and admissions, as it shows your personality beyond your grades.',
    prepSteps: [
      'Brainstorm your long-term career goals and motivations.',
      'Write a first draft focusing on why you chose this specific major.',
      'Ask a teacher or mentor to review your draft and provide feedback.',
      'Refine, proofread for grammar, and format as a clean PDF.'
    ],
    tips: [
      'Be authentic and tell a real story from your life.',
      'Focus on what you will contribute to the university community.'
    ],
    mistakes: [
      'Plagiarizing from the internet. Universities have strict detection tools.',
      'Writing too much about childhood and not enough about academic goals.'
    ]
  },
  {
    id: 'bank_statement',
    title: 'Bank Statement',
    shortDescription: 'Proof that you can afford your education.',
    fullDescription: 'An official document from a bank showing the current balance of your (or your sponsor’s) savings account.',
    whyItMatters: 'Embassies require this to ensure you won’t face financial hardship while abroad.',
    prepSteps: [
      'Ensure the account has sufficient funds for at least one year of tuition.',
      'Request an official bank statement from your bank manager.',
      'Get the statement stamped and signed officially.',
      'Ensure the statement is dated within 30 days of your application.'
    ],
    tips: [
      'If your sponsor is not your parent, prepare a formal affidavit of support.',
      'Show the equivalent value in USD or EUR if the bank can provide it.'
    ],
    mistakes: [
      'Using an old statement (> 30 days).',
      'Insufficient funds to cover the full required cost.'
    ]
  }
];

export const UNIVERSITY_APP_STEPS: OfflineStep[] = [
  {
    id: 'app_1',
    stepNumber: 1,
    title: 'Choose Universities',
    description: 'Find universities that match your academic profile, budget, and career goals.',
    checklist: ['Research at least 5 universities', 'Check tuition fees & scholarship options', 'List entry requirements for each'],
    tips: ['Aim for 2 "Reach", 2 "Target", and 2 "Safety" schools.'],
    mistakes: ['Only applying to top-tier "Ivy League" schools without backups.']
  },
  {
    id: 'app_2',
    stepNumber: 2,
    title: 'Check Requirements',
    description: 'Verify the specific test scores and documents needed for each school.',
    checklist: ['Check required English test scores (IELTS/TOEFL)', 'Verify minimum GPA requirements', 'Note all application deadlines'],
    tips: ['Create a spreadsheet to track deadlines for every school.'],
    mistakes: ['Missing an application deadline by even a single day.']
  },
  {
    id: 'app_3',
    stepNumber: 3,
    title: 'Prepare Documents',
    description: 'Gather and translate your school records and write your statement.',
    checklist: ['Request and stamp high school transcripts', 'Draft and refine your Personal Statement', 'Ask 2-3 teachers for recommendation letters'],
    tips: ['Ensure your recommendation letters are on official school letterhead.'],
    mistakes: ['Using generic, recycled personal statements for different schools.']
  },
  {
    id: 'app_4',
    stepNumber: 4,
    title: 'Submit Application',
    description: 'Complete the forms on university portals and pay the fees.',
    checklist: ['Fill out university portal details', 'Pay application fees (or request waiver)', 'Upload all required PDF documents'],
    tips: ['Double check your passport name matches the application name exactly.'],
    mistakes: ['Leaving required fields empty in the portal.']
  },
  {
    id: 'app_5',
    stepNumber: 5,
    title: 'Wait for Response',
    description: 'Monitor your email and university portals for your admission decision.',
    checklist: ['Check email daily (including Spam)', 'Log into university portals for updates', 'Prepare for potential video interviews'],
    tips: ['Some schools may ask for an interview—practice speaking clearly.'],
    mistakes: ['Ignoring requests for additional documentation or information.']
  }
];

export const VISA_PROCESS_STEPS: OfflineStep[] = [
  {
    id: 'visa_1',
    stepNumber: 1,
    title: 'Receive Admission',
    description: 'Get your official acceptance letter and immigration forms (e.g. I-20 or CAS).',
    checklist: ['Signed admission offer letter', 'Verify I-20/CAS immigration details', 'Save digital and physical copies'],
    tips: ['Ensure your major and start dates on the form are correct.'],
    mistakes: ['Signing an offer letter for a school you don\'t intend to attend.']
  },
  {
    id: 'visa_2',
    stepNumber: 2,
    title: 'Prepare Visa Docs',
    description: 'Gather your financial, academic, and identification documents for the embassy.',
    checklist: ['Obtain official Bank Statement', 'Prepare valid Passport', 'Fill out embassy form (e.g. DS-160 for USA)'],
    tips: ['Ensure your Bank Statement was issued in the last 30 days.'],
    mistakes: ['Submitting forged or altered financial documents. This leads to bans.']
  },
  {
    id: 'visa_3',
    stepNumber: 3,
    title: 'Book Appointment',
    description: 'Pay the mandatory government visas fees and schedule your interview.',
    checklist: ['Pay application fee (MRV/SEVIS)', 'Schedule interview at the nearest embassy', 'Print appointment confirmation page'],
    tips: ['Book as early as possible—dates can fill up months in advance.'],
    mistakes: ['Paying the wrong fee category for your specific visa type.']
  },
  {
    id: 'visa_4',
    stepNumber: 4,
    title: 'Attend Interview',
    description: 'Visit the embassy and answer the officer\'s questions truthfully.',
    checklist: ['Bring all original documents', 'Practice mock interview questions', 'Dress professionally and be punctual'],
    tips: ['Be honest about your plans and prove you intend to return home.'],
    mistakes: ['Memorizing robotic answers that don\'t sound authentic.']
  },
  {
    id: 'visa_5',
    stepNumber: 5,
    title: 'Get Decision',
    description: 'Wait for the embassy to return your passport with the visa stamp.',
    checklist: ['Check passport tracking status', 'Receive passport from courier/embassy', 'Book your flight to your destination!'],
    tips: ['Don\'t book non-refundable flights until the visa is in your hand.'],
    mistakes: ['Quitting your job or school before you officially have the visa.']
  }
];

export interface GlossaryItem {
  term: string;
  definition: string;
  amharic?: string;
  example?: string;
  category: string;
}

export const GLOSSARY_DATA: GlossaryItem[] = [
  // 1. CORE APPLICATION TERMS
  // 1. CORE APPLICATION TERMS
  { 
    term: "Application", 
    definition: "The formal process of requesting admission to a university. It involves submitting your academic history, personal essays, and financial records through a digital system. Tip: Use a professional email address (like name.last@gmail.com) and always save a PDF copy of your submitted application for your records.", 
    amharic: "የመግቢያ ማመልከቻ - ወደ ዩኒቨርሲቲ ለመግባት የሚደረግ ይፋዊ ጥያቄ። ይህ የግል መረጃን፣ የትምህርት ማስረጃዎችን እና ድርሰቶችን ለዩኒቨርሲቲው ማስገባት ያካትታል።", 
    category: "Application" 
  },
  { 
    term: "Admission", 
    definition: "The official decision by a university to allow a student to enroll in their academic programs. Admission can be competitive, meaning schools only pick the best-fit students from a large pool of applicants. Tip: Research 'Admission Rates' for each school to understand your chances of getting in early on.", 
    amharic: "መግቢያ - አንድ ተማሪ በጥራቱ እና በትምህርት ዝግጁነቱ ታይቶ በዩኒቨርሲቲው ትምህርቱን እንዲጀምር የሚሰጥ ይፋዊ ፈቃድ።", 
    category: "Application" 
  },
  { 
    term: "Offer Letter", 
    definition: "A formal document sent by a university confirming that you have been accepted. It outlines your major, school start dates, and any financial aid or scholarships awarded to you. Tip: Print multiple copies; you will need this letter for your Passport and Visa applications.", 
    amharic: "የተቀባይነት ደብዳቤ - ዩኒቨርሲቲው ተማሪውን መቀበሉን የሚያረጋግጥበት ይፋዊ ሰነድ። ይህ ደብዳቤ ስለ ትምህርት ክፍያ እና ስኮላርሺፕ ዝርዝር መረጃ ይይዛል።", 
    category: "Application" 
  },
  { 
    term: "Acceptance Letter", 
    definition: "Often used interchangeably with an Offer Letter, this is the official welcoming document from the admissions office. It confirms your place in the incoming class. Tip: Check the 'Acceptance Deadline'—if you don't officially respond by that date, the school might give your spot to someone else.", 
    amharic: "የተቀባይነት ደብዳቤ - የዩኒቨርሲቲው የመግቢያ ቢሮ ተማሪውን መቀበሉን የሚያሳውቅበት እና እንኳን ደህና መጣህ የሚልበት ይፋዊ ሰነድ።", 
    category: "Application" 
  },
  { 
    term: "Rejection Letter", 
    definition: "A notice that a university is unable to offer you admission for the specific semester you applied for. While hard to receive, it is often just a result of high competition. Tip: Don't let one rejection stop you. Use it as a learning experience and focus on your other applications or improved backup plans.", 
    amharic: "ካልተቀበሉ የሚላክ ደብዳቤ - ዩኒቨርሲቲው በቂ ቦታ ስለሌለው ወይም ሌሎች መስፈርቶች ባለመሟላታቸው ተማሪውን መቀበል አለመቻሉን የሚገልጽበት ደብዳቤ።", 
    category: "Application" 
  },
  { 
    term: "Waitlist", 
    definition: "A category for applicants who were not initially accepted but may be offered a spot if some admitted students decline their offer. It is effectively a 'backup' list. Tip: If waitlisted, send a 'Letter of Continued Interest' to the school expressing that they are still your top choice if a spot opens up.", 
    amharic: "ተጠባባቂ ዝርዝር - ተማሪው በቀጥታ ባይገባም፣ ቦታ ቢተርፍ እንዲገባ የሚመዘገብበት ዝርዝር። ይህ ማለት ውጤታችሁ ጥሩ ቢሆንም በቦታ እጥረት የተነሳ ተጠባባቂ መሆናችሁን ያሳያል።", 
    category: "Application" 
  },
  { 
    term: "Deferred Admission", 
    definition: "When a university delays their decision on your application (Early) to the Regular cycle, or when you choose to delay your start date. Tip: If your result is deferred, use the extra time to update the school with your latest high school grades or new achievements.", 
    amharic: "ውሳኔው የዘገየ ማመልከቻ - ዩኒቨርሲቲው ተማሪው ይበልጥ ብቁ መሆኑን ለማረጋገጥ ውሳኔ ለመስጠት ለሌላ ጊዜ ሲያስተላልፈው።", 
    category: "Application" 
  },
  { 
    term: "Enrollment", 
    definition: "The final step where you officially become a student by signing up for classes and paying any required deposits. Tip: Once you enroll, you will likely get a school email address—start checking it daily as all official communication will move there.", 
    amharic: "ምዝገባ - ትምህርት ለመጀመር የሚደረግ የመጨረሻ እና ይፋዊ ምዝገባ። ይህ ደረጃ የተማሪነት መታወቂያ የምታገኙበት ደረጃ ነው።", 
    category: "Application" 
  },
  { 
    term: "Matriculation", 
    definition: "The formal process of entering a university as a candidate for a degree. It marks the technical beginning of your academic career at the school. Tip: Matriculation dates are strict—ensure you have finalized all your paperwork before this date to avoid being dropped from the system.", 
    amharic: "ዩኒቨርሲቲ የመግባት ሂደት - አንድ ተማሪ ለመጀመሪያ ጊዜ የዩኒቨርሲቲ ተማሪ ሆኖ የሚመዘገብበት እና ትምህርቱን ጀመረ የሚባልበት ይፋዊ ሂደት።", 
    category: "Application" 
  },
  { 
    term: "Orientation", 
    definition: "Events organized to help new students adapt to campus life, meet faculty, and find their way around. Tip: Orientation is the best time to make new friends. Try to talk to at least 3 people every day during the first week to build your support network.", 
    amharic: "የመጀመሪያ ትውውቅ - አዲስ ተማሪዎች ስለ ዩኒቨርሲቲው ሕይወት፣ ስለ ግቢው ህጎች እና ስለ ትምህርቱ ግንዛቤ እንዲያገኙ የሚዘጋጅ ፕሮግራም።", 
    category: "Application" 
  },
  { 
    term: "Application Cycle", 
    definition: "The yearly period during which applications are accepted, reviewed, and finalized (roughly August to April). Tip: Always start your research one full year BEFORE the cycle begins so you have your test scores and essays ready by the first deadline.", 
    amharic: "የማመልከቻ ጊዜ - በአንድ ዓመት ውስጥ ማመልከቻዎች የሚላኩበት እና ዩኒቨርሲቲዎች ውሳኔ የሚሰጡበት አጠቃላይ የጊዜ ገደብ።", 
    category: "Application" 
  },
  { 
    term: "Application Portal", 
    definition: "An online platform (like Common App or a university's own site) where students create profiles and upload all documents. Tip: Don't wait until the last day to upload documents; portals often crash right before a big deadline due to high traffic.", 
    amharic: "የማመልከቻ ዌብሳይት - ተማሪዎች የትምህርት ማስረጃዎቻቸውን የሚጭኑበት፣ ማመልከቻቸውን የሚልኩበት እና የውጤታቸውን ደረጃ የሚከታተሉበት የዩኒቨርሲቲው ድረ-ገጽ።", 
    category: "Application" 
  },
  { 
    term: "Application Status", 
    definition: "Information provided in your portal about whether your folder is incomplete, under review, or has a final decision. Tip: Check your status once a week. If a transcript is missing, the status tracker is often the only way you will know.", 
    amharic: "የማመልከቻው ደረጃ - የእናንተ ማመልከቻ በምን ሁኔታ ላይ እንዳለ (ለምሳሌ፦ ምስክር ወረቀቱ ደርሷል፣ እየታየ ነው) የሚገልጽ መረጃ።", 
    category: "Application" 
  },

  // 2. UNIVERSITY TYPES & SYSTEM
  // 2. UNIVERSITY TYPES & SYSTEM
  { 
    term: "College", 
    definition: "An institution of higher education that focuses primarily on undergraduate degrees. While 'College' can refer to a standalone school, it can also be a specialized division within a larger university (e.g., the College of Art). Tip: In the US, people often say 'going to college' even if they are attending a university; they are essentially the same for undergraduate studies.", 
    amharic: "ኮሌጅ - በዋናነት የመጀመሪያ ዲግሪ (Bachelor's) ላይ የሚያተኩር የትምህርት ተቋም። በዩኒቨርሲቲ ውስጥ ያለ ንዑስ የትምህርት ክፍልንም ሊያመለክት ይችላል።", 
    category: "University Types" 
  },
  { 
    term: "University", 
    definition: "A large academic institution that offers both undergraduate and graduate degrees (Masters and PhDs). Universities are often hub-spots for research and have multiple specialized colleges under their name. Tip: If you are interested in deep scientific research or want a wide variety of social clubs, a large university might be the perfect environment for you.", 
    amharic: "ዩኒቨርሲቲ - ብዙ ኮሌጆችን የያዘ እና ከፍተኛ ትምህርት እንዲሁም ጥናትና ምርምር የሚደረግበት ትልቅ የትምህርት ተቋም።", 
    category: "University Types" 
  },
  { 
    term: "Liberal Arts College", 
    definition: "A type of college that emphasizes a broad base of knowledge in the sciences, humanities, and arts rather than just technical training. This approach builds critical thinking and communication skills that stay with you for life. Tip: Liberal Arts Colleges (LACs) are famous for very small class sizes, meaning you will have a closer relationship with your professors.", 
    amharic: "ሊበራል አርትስ ኮሌጅ - ተማሪዎች በአንድ ዘርፍ ብቻ ከመወሰን ይልቅ በተለያዩ የትምህርት ዘርፎች ሰፊ እውቀት እንዲጨብጡ እና የማሰብ ችሎታቸው እንዲያድግ የሚያደርግ የኮሌጅ ዓይነት።", 
    category: "University Types" 
  },
  { 
    term: "Community College", 
    definition: "A two-year institution that provides associate degrees and certificates at a much lower cost than four-year universities. Many students attend for two years and then transfer to a high-ranking university to finish their degree. Tip: This is known as the '2+2' path—it is a smart way for international students to save thousands of dollars on tuition while still graduating from a top-tier school.", 
    amharic: "የማህበረሰብ ኮሌጅ - ለሁለት ዓመት የሚሰጥ ትምህርት ሲሆን በመቀጠል ወደ ትልቅ ዩኒቨርሲቲ ለመሸጋገር እና ወጪን ለመቀነስ የሚረዳ የትምህርት ተቋም።", 
    category: "University Types" 
  },
  { 
    term: "Technical Institute", 
    definition: "An institution that focuses almost exclusively on engineering, physical sciences, and technical vocational training. These schools are highly specialized and often have strong ties to industry leaders. Tip: Schools like MIT or Caltech are technical institutes. They are ideal if you have a clear passion for a high-level STEM career from day one.", 
    amharic: "የቴክኒክ ተቋም - በምህንድስና፣ በሳይንስ እና በቴክኖሎጂ ላይ ብቻ የሚያተኩር እና ተማሪዎችን ለተግባራዊ ስራ የሚያዘጋጅ የትምህርት ተቋም።", 
    category: "University Types" 
  },
  { 
    term: "Public University", 
    definition: "A school that is largely funded by the state or national government. They are usually very large and offer more affordable tuition for local residents. Tip: Public universities often have massive alumni networks, which can be a huge advantage when you are looking for jobs later in your career.", 
    amharic: "የመንግስት ዩኒቨርሲቲ - በመንግስት በጀት የሚተዳደር፣ ብዙ ጊዜ ትልቅ ቅጥር ግቢ እና በርካታ ተማሪዎች ያሉት ተቋም።", 
    category: "University Types" 
  },
  { 
    term: "Private University", 
    definition: "An institution funded by private donations, endowments, and tuition rather than government money. They are often smaller than public schools and may have more specialized facilities. Tip: Don't ignore private schools just because of their high cost—many elite private universities offer the most generous financial aid packages for international students.", 
    amharic: "የግል ዩኒቨርሲቲ - በግለሰቦች ወይም በድርጅቶች የሚተዳደር እና በመንግስት በጀት የማይደገፍ የትምህርት ተቋም።", 
    category: "University Types" 
  },
  { 
    term: "Research University", 
    definition: "A university that places a massive focus on professor-led research projects and academic publications. These schools often have advanced laboratories and high-tech resources. Tip: As an undergraduate at a research university, you can often apply to be a 'Research Assistant'—which looks incredible on your future resume or Master's application.", 
    amharic: "የምርምር ዩኒቨርሲቲ - ከፍተኛ ጥናትና ምርምር ላይ ትኩረት የሚያደርግ እና ተማሪዎች ከፕሮፌሰሮቻቸው ጋር ምርምር እንዲያደርጉ እድል የሚሰጥ ተቋም።", 
    category: "University Types" 
  },
  { 
    term: "Ivy League", 
    definition: "A group of eight elite private universities in the US (including Harvard, Yale, and Princeton) known for their high academic standards and prestige. Admission to these schools is extremely selective. Tip: While prestigious, the 'Ivy League' is actually an athletic conference name. There are many other schools (like Stanford or Duke) that are just as prestigious but are not technically 'Ivies'.", 
    amharic: "አይቪ ሊግ - በአሜሪካ ውስጥ የሚገኙ 8 በጣም ዝነኛ እና ጥራት ያላቸው የግል ዩኒቨርሲቲዎች ስብስብ። እነዚህ ዩኒቨርሲቲዎች ለመግባት በጣም አስቸጋሪ ናቸው።", 
    category: "University Types" 
  },
  { 
    term: "Campus", 
    definition: "The physical land and collection of buildings belonging to a university, including everything from classrooms and libraries to dormitories and gyms. Tip: Before choosing a school, look at a map of its campus. Some are 'City Campuses' spread through a city, while others are 'Rural Campuses' located in peaceful, quiet areas.", 
    amharic: "ግቢ - የዩኒቨርሲቲው ሕንፃዎች፣ ቤተ-መጻሕፍት፣ መማሪያ ክፍሎች እና የተማሪዎች መኖሪያ የሚገኙበት አጠቃላይ ስፍራ።", 
    category: "University Types" 
  },
  { 
    term: "Faculty", 
    definition: "The entire teaching and research staff of a university, including professors, lecturers, and teaching assistants. It can also refer to a large department like the 'Faculty of Law'. Tip: Getting to know your faculty during 'Office Hours' is the best way to get a mentor and eventually a strong recommendation letter.", 
    amharic: "ፋኩልቲ - በዩኒቨርሲቲው ውስጥ የሚያስተምሩ መምህራን እና ተመራማሪዎች ስብስብ። እንዲሁም አንድን የትምህርት ዘርፍ ሊያመለክት ይችላል።", 
    category: "University Types" 
  },
  { 
    term: "Department", 
    definition: "A specialized division within a university focused on a specific field of study (e.g., the Physics Department). Your major will be housed within one of these departments. Tip: Each department has its own 'Head' or 'Chair'. If you want to change your major or need special academic help, they are the office to visit.", 
    amharic: "ዲፓርትመንት - በአንድ የትምህርት ዘርፍ ላይ ትኩረት የሚያደርግ የዩኒቨርሲቲው ክፍል (ለምሳሌ፦ የታሪክ ዲፓርትመንት)።", 
    category: "University Types" 
  },

  // 3. ACADEMIC STRUCTURE
  // 3. ACADEMIC STRUCTURE
  { 
    term: "GPA", 
    definition: "Grade Point Average: A numerical representation of your academic performance across all your classes. It is usually measured on a 4.0 scale in the US. Tip: If your school doesn't use a 4.0 scale, don't worry—most universities use 'WES' or internal systems to convert your Ethiopian grades into a GPA they understand.", 
    amharic: "የውጤት አማካይ (GPA) - ተማሪው በትምህርቱ ያለውን ብቃት የሚያሳይ የቁጥር መግለጫ። በአሜሪካ አብዛኛው ጊዜ እስከ 4.0 ይለካል።", 
    category: "Academics" 
  },
  { 
    term: "Transcript", 
    definition: "An official document from your high school or university that lists every course you took and the grade you received. It must be stamped and sealed to be considered official. Tip: Always keep an extra official, sealed copy of your transcript at home; sometimes you need to mail it directly to embassies or evaluation agencies.", 
    amharic: "የትምህርት ማስረጃ (ትራንስክሪፕት) - ተማሪው የተማራቸውን ትምህርቶች እና ያገኘውን ውጤት የሚዘረዝር የትምህርት ቤት ይፋዊ መግለጫ።", 
    category: "Academics" 
  },
  { 
    term: "Course Load", 
    definition: "The total number of credits or classes you are taking during a single school term. A 'Full-Time' student usually takes 12 to 18 credits. Tip: Don't take too many difficult classes in your first semester while you are still adjusting to a new country and language.", 
    amharic: "የትምህርት መጠን - በአንድ ሴሚስተር ውስጥ ተማሪው የሚወስዳቸው የትምህርት አይነቶች ወይም የክሬዲት ሰዓት ብዛት።", 
    category: "Academics" 
  },
  { 
    term: "Credit Hour", 
    definition: "A unit of measure for academic work, usually based on how many hours per week you spend in a classroom. Most classes are 3 or 4 credits. Tip: To graduate on time (in 4 years), you usually need to complete around 30 credits per year.", 
    amharic: "የክሬዲት ሰዓት - የትምህርቱን ስፋት እና ክብደት ለመለካት የሚያገለግል መስፈርት። ብዙ ጊዜ በአንድ ሳምንት ውስጥ በክፍል ውስጥ የሚፈጅን ሰዓት ያሳያል።", 
    category: "Academics" 
  },
  { 
    term: "Semester", 
    definition: "An academic year divided into two equal parts, usually lasting 15 to 18 weeks each (Fall and Spring). Tip: The 'Fall Semester' (starting in August/September) is the main entry point for most international students and has the most scholarship opportunities.", 
    amharic: "ሴሚስተር - አንድን የትምህርት ዘመን ለሁለት በመክፈል የሚሰጥ የትምህርት ጊዜ (ብዙውን ጊዜ ከ15-18 ሳምንታት ይቆያል)።", 
    category: "Academics" 
  },
  { 
    term: "Quarter System", 
    definition: "An academic calendar that divides the year into four segments (Fall, Winter, Spring, Summer), each lasting about 10 weeks. Tip: Quarters move very fast; you will have exams every few weeks, so you must stay highly organized from the very first day.", 
    amharic: "የሩብ ዓመት ስርዓት - የትምህርት ዘመኑን በአራት ከፍሎ የሚሰጥበት የጊዜ ሰሌዳ። ትምህርቱ በጣም ፈጣን በመሆኑ ጠንካራ ዝግጅት ይጠይቃል።", 
    category: "Academics" 
  },
  { 
    term: "Honors Program", 
    definition: "Specialized, more challenging versions of regular undergraduate courses designed for high-achieving students. These programs often come with smaller classes and special research opportunities. Tip: Being in an 'Honors' program looks great on your resume and can sometimes lead to more scholarship money.", 
    amharic: "የላቀ የትምህርት ፕሮግራም - ጎበዝ ተማሪዎች ይበልጥ እንዲዳብሩ ተብሎ የሚዘጋጅ እና ፈታኝ የሆኑ የትምህርት አይነቶችን የያዘ ፕሮግራም።", 
    category: "Academics" 
  },
  { 
    term: "Elective", 
    definition: "A class that you choose to take because you are interested in it, rather than one that is strictly required for your major. Tip: Use your electives to build practical skills (like public speaking or coding) even if they aren't part of your main degree.", 
    amharic: "ተመራጭ ትምህርት - ተማሪው በራሱ ፍላጎት መርጦ የሚወስደው ትምህርት። ይህ ከዋናው ትምህርት በተጨማሪ አዳዲስ እውቀቶችን ለማግኘት ይረዳል።", 
    category: "Academics" 
  },
  { 
    term: "Prerequisite", 
    definition: "A basic course that must be completed before you are allowed to enroll in a more advanced course. Tip: Always check the prerequisites when planning your schedule so you don't find yourself unable to take a class you need for graduation.", 
    amharic: "ቅድመ-መስፈርት - ወደ ቀጣዩ እና ከበድ ወዳለው ትምህርት ከመታለፉ በፊት መወሰድ ያለበት መሠረታዊ ትምህርት።", 
    category: "Academics" 
  },

  // 5. FINANCIAL TERMS
  // 5. FINANCIAL TERMS
  { 
    term: "Scholarship", 
    definition: "Financial assistance awarded to students based on merit, academic success, or other specific criteria. This money does not need to be repaid. Tip: Start your scholarship search as early as possible—some applications close 6 months before you even start university.", 
    amharic: "የነፃ ትምህርት እድል (ስኮላርሺፕ) - ተማሪው በትምህርት ብቃቱ ወይም በሌሎች መስፈርቶች ታይቶ የሚሰጥ የገንዘብ ድጋፍ። ይህ ገንዘብ ተማሪው የሚመልሰው አይደለም።", 
    category: "Financial" 
  },
  { 
    term: "Financial Aid", 
    definition: "An all-encompassing term for scholarships, grants, and loans provided to help students pay for college. It can come from the university, private organizations, or the government. Tip: Always complete all the financial aid forms requested by your school (like the CSS Profile) to maximize your chances of getting help.", 
    amharic: "የፋይናንስ ድጋፍ - አንድ ተማሪ የትምህርት ወጪውን እንዲሸፍን የሚደረግ ማንኛውም ዓይነት የገንዘብ ድጋፍ (ስኮላርሺፕን፣ እርዳታን እና ብድርን ያካትታል)።", 
    category: "Financial" 
  },
  { 
    term: "Grant", 
    definition: "A form of financial aid that does NOT have to be repaid, often awarded based on financial need rather than academic merit. Consider this 'free money' for your education. Tip: Research 'Institutional Grants' provided by specific universities—some are very generous to students from developing countries.", 
    amharic: "የትምህርት እርዳታ - ለተማሪው በነፃ የሚሰጥ እና የማይመለስ ገንዘብ። ይህ ብዙ ጊዜ የሚሰጠው የገንዘብ እጥረት ላለባቸው ተማሪዎች ነው።", 
    category: "Financial" 
  },
  { 
    term: "Loan", 
    definition: "Money borrowed to pay for education that must be paid back over time, usually with interest. While helpful, it’s best to minimize loans as much as possible. Tip: Understand the difference between 'Subsidized' and 'Unsubsidized' loans before signing any agreement, as interest rates can vary greatly.", 
    amharic: "የትምህርት ብድር - ለትምህርት ተበድረውት በኋላ የሚከፈል ገንዘብ። ለዚህ ተበዳሪው የተወሰነ ወለድ ሊከፍል ይችላል።", 
    category: "Financial" 
  },
  { 
    term: "Work-Study", 
    definition: "A program that allows students to work part-time jobs on campus to earn money that helps pay for their education and living expenses. Tip: Try to find a work-study job in a library or computer lab—these often allow you to study during quiet hours while you are 'on the clock'.", 
    amharic: "ስራና ትምህርት - አንድ ተማሪ በዩኒቨርሲቲው ግቢ ውስጥ በትርፍ ጊዜው እየሰራ ገቢ የሚያገኝበት እና የትምህርት ወጪውን የሚደጉምበት ፕሮግራም።", 
    category: "Financial" 
  },
  { 
    term: "Tuition Fee", 
    definition: "The amount of money charged by a university for instruction and academic services. This is usually the largest part of your college cost. Tip: Check if your university offers a 'Tuition Waiver'—sometimes if you maintain a very high GPA, the school will waive part of this fee.", 
    amharic: "የትምህርት ክፍያ - ዩኒቨርሲቲው ለሚሰጠው ትምህርት እና አገልግሎት ተማሪው የሚከፍለው የገንዘብ መጠን።", 
    category: "Financial" 
  },
  { 
    term: "Cost of Attendance (COA)", 
    definition: "The total estimated price of attending a university for one year, including tuition, housing, books, and transportation. Tip: The 'Sticker Price' listed as COA is rarely what you actually pay after scholarships, but you will need to prove you have this much money for your visa.", 
    amharic: "ጠቅላላ የትምህርት ወጪ (COA) - ለትምህርት ክፍያ፣ ለመኖሪያ፣ ለምግብ እና ለሌሎች አስፈላጊ ወጪዎች በአንድ ዓመት ውስጥ የሚያስፈልግ ጠቅላላ የገንዘብ መጠን።", 
    category: "Financial" 
  },
  { 
    term: "Living Expenses", 
    definition: "The daily costs of being a student, such as rent, groceries, transportation, and healthcare. These are separate from your tuition fees. Tip: Living in a shared apartment off-campus is often cheaper than living in a luxury dorm, but make sure to account for travel costs to classes.", 
    amharic: "የኑሮ ወጪ - ለምግብ፣ ለመጓጓዣ እና ለሌሎች ዕለታዊ ፍላጎቶች የሚያስፈልግ ወጪ። ይህ በትምህርት ክፍያ ውስጥ የማይካተት ነው።", 
    category: "Financial" 
  },
  { 
    term: "Bank Statement", 
    definition: "An official document from your bank showing the current balance of your savings or checking account. It is used as proof that you can afford your studies. Tip: For visa purposes, ensure your bank statement is 'Liquid' (ready to use) and has been issued within the last 30 to 60 days.", 
    amharic: "የባንክ መግለጫ - ተማሪው ወይም ስፖንሰሩ ለትምህርት የሚሆን በቂ ገንዘብ እንዳላቸው የሚያሳይ ከባንክ የሚሰጥ ይፋዊ ሰነድ።", 
    category: "Financial" 
  },
  { 
    term: "Sponsor", 
    definition: "A person or organization (like a parent or a scholarship foundation) that agrees to pay for your education and living costs. Tip: If your sponsor is not a direct relative, you will likely need a formal 'Affidavit of Support' to satisfy immigration and university requirements.", 
    amharic: "ስፖንሰር - የተማሪውን የትምህርት እና የኑሮ ወጪ ለመሸፈን ይፋዊ ኃላፊነት የሚወስድ ግለሰብ ወይም ድርጅት።", 
    category: "Financial" 
  },

  // 14. TIMELINE TERMS
  // 14. TIMELINE TERMS
  { 
    term: "Early Decision", 
    definition: "A binding application plan where you promise to attend the university if you are accepted. You can only apply to one school under this plan, and if you are admitted, you must withdraw all other applications. Tip: Only apply Early Decision (ED) to your absolute #1 dream school that you are 100% sure you can afford.", 
    amharic: "ቀደምት ውሳኔ (ED) - አንድ ተማሪ በአንድ ዩኒቨርሲቲ ብቻ የሚያመለክትበት እና ከተቀበሉት የግድ እዛው መግባት ያለበት የቅበላ አይነት።", 
    category: "Strategy" 
  },
  { 
    term: "Early Action", 
    definition: "A non-binding application plan that allows you to submit your application early and receive a decision months before Regular Decision students. Unlike Early Decision, you are not forced to attend if accepted. Tip: Applying Early Action (EA) is highly recommended—it shows the school you are organized and gives you more time to plan your visa and housing.", 
    amharic: "ቀደምት ተግባር (EA) - ተማሪው ቀድሞ የሚያመለክትበት እና ቀድሞ ውሳኔ የሚያገኝበት፣ ነገር ግን የግድ እዛው መግባት የሌለበት የቅበላ አይነት።", 
    category: "Strategy" 
  },
  { 
    term: "Regular Decision", 
    definition: "The standard timeframe for submitting your application, usually with deadlines in January or February. Decisions are typically released in late March or early April. Tip: Use the 'Regular' cycle for schools where you need more time to retake the SAT or polish your final essays.", 
    amharic: "መደበኛ ውሳኔ - አብዛኛው ተማሪ የሚያመለክትበት እና በዓመቱ መጀመሪያ (ጥር/የካቲት) የሚጠናቀቅ የማመልከቻ ጊዜ።", 
    category: "Application" 
  },
  { 
    term: "Rolling Admission", 
    definition: "A policy where universities review applications as they arrive and send out decisions continuously until all spots are filled. There is no single set deadline. Tip: With rolling admission, the earlier you apply, the better your chances. Applying late in the year might mean all the scholarship money has already been given away.", 
    amharic: "ተከታታይ ቅበላ - ዩኒቨርሲቲው ማመልከቻዎች በደረሱት ቅደም ተከተል እያየ ውሳኔ የሚሰጥበት እና ቦታው እስኪሞላ የሚቀጥልበት ስርዓት።", 
    category: "Application" 
  },
  { 
    term: "Deadline", 
    definition: "The final date and time by which an application or specific document must be submitted to be considered. Missing a deadline by even one minute can lead to an automatic rejection. Tip: Aim to submit everything at least 3 days before the official deadline to avoid stress from internet outages or payment portal errors.", 
    amharic: "የመጨረሻ ቀን (ዴድላይን) - ማመልከቻ ወይም ማስረጃዎች መቅረብ ያለባቸው የመጨረሻው ቀን። ከዚህ ቀን ማለፍ ውድቅ ያደርጋል።", 
    category: "Application" 
  },

  // 15. VISA TERMS
  // 15. VISA TERMS
  { 
    term: "Student Visa", 
    definition: "The official immigration document (like the F-1 for the US) that allows you to live and study in a foreign country for a set period. It is usually stamped into your passport. Tip: Your visa allows you to enter the country, but your 'I-20' or 'CAS' status is what allows you to stay there legally.", 
    amharic: "የተማሪ ቪዛ - አንድ ተማሪ በሌላ ሀገር ገብቶ እንዲማር የሚሰጠው ይፋዊ የጉዞ እና የፈቃድ ሰነድ።", 
    category: "Visa" 
  },
  { 
    term: "I-20", 
    definition: "A US government document issued by your university that proves you are a legitimate student and have the funds to pay for your education. Tip: The 'SEVIS ID' number on your I-20 is unique to you—you will need it to pay your visa fees and book your interview.", 
    amharic: "አይ-20 (I-20) - በአሜሪካ ለመማር የሚያስችል እና ተማሪው በቂ ገንዘብ እንዳለው የሚያረጋግጥ በዩኒቨርሲቲው የሚሰጥ ይፋዊ ሰነድ።", 
    category: "Visa" 
  },
  { 
    term: "SEVIS", 
    definition: "The Student and Exchange Visitor Information System. It is the automated system the US government uses to track international students and their legal status. Tip: You must pay the 'SEVIS Fee' online before your visa interview; without the receipt, the embassy will not even look at your application.", 
    amharic: "ሴቪስ (SEVIS) - በአሜሪካ የሚገኙ ዓለም አቀፍ ተማሪዎችን መረጃ ለመከታተል የሚያገለግል የመንግስት የመረጃ ስርዓት።", 
    category: "Visa" 
  },
  { 
    term: "Visa Interview", 
    definition: "A face-to-face meeting with a consular officer at an embassy. They will ask you questions about your study plans, finances, and reasons for choosing that country. Tip: Be honest, maintain eye contact, and be prepared to explain exactly why your chosen major is important for your future career in Ethiopia.", 
    amharic: "የቪዛ ቃለ መጠይቅ - በኤምባሲ ውስጥ ከቪዛ መኮንን ጋር የሚደረግ የፊት ለፊት ግንኙነት። ዓላማው የተማሪውን እውነተኛነት ማረጋገጥ ነው።", 
    category: "Visa" 
  },
  { 
    term: "Home Ties", 
    definition: "Evidence proving that you have strong connections to your home country (like family, property, or a job offer) and intend to return after graduating. Tip: Mentioning specific local projects or family responsibilities during your interview can help prove your intention to return to Ethiopia.", 
    amharic: "ከሀገር ጋር ያለ ቁርኝት - ተማሪው ትምህርቱን ሲጨርስ ወደ ሀገሩ የመመለስ አዝማሚያ እና ፍላጎት እንዳለው የሚያሳዩ ማስረጃዎች።", 
    category: "Visa" 
  },

  // 9. APPLICATION COMPONENTS
  // 9. APPLICATION COMPONENTS
  { 
    term: "Recommendation Letter", 
    definition: "A formal letter written by a teacher, counselor, or employer that describes your character, academic abilities, and potential for success at a university. These letters provide a third-party perspective on your profile. Tip: Choose recommenders who know you well and can share specific stories about your leadership or problem-solving skills rather than just listing your grades.", 
    amharic: "የድጋፍ ደብዳቤ - ስለ ተማሪው ባህሪ፣ የትምህርት ብቃት እና ውጤታማነት በመምህራን ወይም በሚያውቁት ሰዎች የሚጻፍ የምስክርነት ደብዳቤ።", 
    category: "Components" 
  },
  { 
    term: "CV/Resume", 
    definition: "A structured document that summarizes your academic history, work experience, extracurricular activities, and skills. It allows admission officers to see your entire profile at a glance. Tip: Keep your resume to one page and use 'Action Verbs' (like 'Led', 'Created', 'Organized') to describe your achievements clearly.", 
    amharic: "የስራ እና የትምህርት ታሪክ (ሲቪ) - የተማሪውን የትምህርት ደረጃ፣ የክህሎት አይነቶች እና ከትምህርት ውጭ ያደረጋቸውን ተሳትፎዎች በአጭሩ የሚያሳይ ሰነድ።", 
    category: "Components" 
  },
  { 
    term: "Portfolio", 
    definition: "A collection of your best creative work, such as drawings, photography, or coding projects. This is usually required for majors like Architecture, Design, or Computer Science. Tip: Quality is better than quantity—only include items that show your unique style and high level of technical skill.", 
    amharic: "የስራ ስብስብ (ፖርትፎሊዮ) - ተማሪው የሰራቸውን ምርጥ የፈጠራ ስራዎች (ስዕል፣ ፎቶግራፍ፣ ኮዲንግ) በአንድ ላይ አቀናጅቶ የሚያሳይበት ሰነድ።", 
    category: "Components" 
  },

  // MORE RECENTLY ADDED CATEGORIES MAPPED
  // MORE RECENTLY ADDED CATEGORIES MAPPED
  { 
    term: "Reach School", 
    definition: "A university where your academic stats (GPA and Test Scores) are slightly below the average admitted student. These schools are difficult but worth applying to if you have a very strong personal story. Tip: Don't fill your whole list with Reach schools—applying to 2 or 3 is usually a balanced approach.", 
    amharic: "ከፍተኛ ተፎካካሪ ዩኒቨርሲቲ - ተማሪው ለመግባት ከፍተኛ ጥረት የሚጠይቅበት እና የቅበላ እድሉ ጠባብ የሆነ፣ ነገር ግን ቢሞከር ውጤታማ ሊሆን የሚችል ተቋም።", 
    category: "Strategy" 
  },
  { 
    term: "Match School", 
    definition: "A university where your academic profile matches exactly with the average admitted student from previous years. You have a solid, realistic chance of being accepted here. Tip: These are the 'core' of your list—ensure you find Match schools that you actually love and would be happy to attend.", 
    amharic: "ተመጣጣኝ ዩኒቨርሲቲ - የተማሪው ውጤት ከዩኒቨርሲቲው አማካይ የቅበላ ውጤት ጋር የሚመጣጠንበት እና የመግባት እድሉ ከፍተኛ የሆነ ተቋም።", 
    category: "Strategy" 
  },
  { 
    term: "Safety School", 
    definition: "A university where your academic stats are significantly higher than the average student they admit. You are almost certain to get in and may even qualify for large merit scholarships. Tip: Never call a school 'just a safety'—choose Safety schools where you would be genuinely excited to study if your other options fall through.", 
    amharic: "አስተማማኝ ዩኒቨርሲቲ - ተማሪው ያለምንም ጥርጥር እንደሚቀበሉት እርግጠኛ የሚሆንበት እና ውጤቱ ከሚጠየቀው በላይ የሆነለት ተቋም።", 
    category: "Strategy" 
  },
  { 
    term: "Need-Blind", 
    definition: "An admission policy where the university does not look at your financial situation when deciding whether to accept you. This is the gold standard for international students seeking high aid. Tip: Only a few elite schools like Harvard, Yale, and MIT are truly need-blind for international students, so these spots are extremely competitive.", 
    amharic: "የገንዘብ ሁኔታን ያላገናዘበ መግቢያ - ዩኒቨርሲቲው ተማሪውን ለመቀበል ሲወስን ተማሪው መክፈል ይችላል ወይስ አይችልም የሚለውን ግምት ውስጥ የማይገባበት የቅበላ ስርዓት።", 
    category: "Financial" 
  },
  { 
    term: "Need-Aware", 
    definition: "An admission policy where the university considers your ability to pay when making their final decision. If they have two equal candidates but only one needs a full scholarship, they may pick the student who can pay. Tip: If you are applying to a need-aware school, try to prove your extraordinary value through your essays and extracurriculars to outweigh your financial need.", 
    amharic: "የገንዘብ ሁኔታን ያገናዘበ መግቢያ - ዩኒቨርሲቲው ተማሪውን ለመቀበል ሲወስን ተማሪው የትምህርት ክፍያ መክፈል መቻሉን ወይም እርዳታ መፈለጉን ግምት ውስጥ የሚያስገባበት ስርዓት።", 
    category: "Financial" 
  },
  { 
    term: "Yield Protection", 
    definition: "A controversial admission strategy where a university rejects or waitlists over-qualified students because they believe the student will choose a higher-ranked school. This helps the university maintain a high 'Yield Rate' (the percentage of accepted students who actually enroll). Tip: If you are significantly over-qualified for a school, make sure to show extra interest through emails or interviews so they know you are serious about attending.", 
    amharic: "የቅበላ መጠን ጥበቃ (Yield Protection) - ዩኒቨርሲቲው ተማሪው የተሻለ ቦታ ያገኛል ብሎ ሲያስብ 'አልቀበልም' የሚልበት የተንኮል አሰራር።", 
    category: "Strategy" 
  },
  { 
    term: "Gap Year", 
    definition: "A break of one year taken between graduating from high school and starting university. Many students use this time to work, volunteer, or gain specific skills to improve their application profile. Tip: If you take a gap year, make sure you can explain to admission officers exactly what you achieved during that time—don't just say you were 'resting'.", 
    amharic: "የእረፍት ዓመት (Gap Year) - ከሁለተኛ ደረጃ ትምህርት በኋላ እና ዩኒቨርሲቲ ከመግባቱ በፊት ለተለያዩ ጠቃሚ ተግባራት (ስራ፣ በጎ ፈቃድ) የሚወሰድ የአንድ ዓመት እረፍት።", 
    category: "Strategy" 
  },

  // 10. ESSAY & WRITING TERMS
  { 
    term: "Personal Statement", 
    definition: "A main essay (usually 650 words for the Common App) where you share your personal story, values, and why you are a unique candidate. It is your best chance to 'speak' directly to the admission officers. Tip: Don't just list your achievements; tell a story about a specific moment that changed how you think or see the world.", 
    amharic: "የግል መግለጫ (Personal Statement) - ተማሪው ስለ ማንነቱ፣ ስለ ህይወት ልምዱ እና ስለ አላማው የሚጽፈው ዋና ድርሰት።", 
    category: "Writing" 
  },
  { 
    term: "Supplemental Essay", 
    definition: "Additional short essays required by specific universities in addition to the main personal statement. They often ask, 'Why this school?' or 'How will you contribute to our campus?' Tip: Research the school’s specific clubs and traditions so you can give very specific answers in these essays.", 
    amharic: "ተጨማሪ ድርሰት - አንዳንድ ዩኒቨርሲቲዎች ከአጠቃላይ ድርሰቱ በተጨማሪ ተማሪው ስለ ተቋሙ ያለውን እውቀት ለመለካት የሚጠይቋቸው አጫጭር ጽሁፎች።", 
    category: "Writing" 
  },
  { 
    term: "Statement of Purpose (SOP)", 
    definition: "An essay common for Graduate applications and some technical undergraduate programs that focuses strictly on your academic goals, research interests, and career path. Tip: Keep this essay professional and showcase your deep knowledge of the subject you want to study.", 
    amharic: "የአላማ መግለጫ - ተማሪው ሊማርበት ባሰበው ዘርፍ ያለውን እውቀት እና የወደፊት የጥናት እቅዱን በዝርዝር የሚገልጽበት ድርሰት።", 
    category: "Writing" 
  },
  { 
    term: "Motivation Letter", 
    definition: "Similar to an SOP, this letter explains 'why' you want to take a specific course and 'how' it fits into your long-term life plans. It is more common in European university systems. Tip: Clearly link your past experiences to the specific resources provided by the university you are applying to.", 
    amharic: "የፍላጎት መግለጫ - ተማሪው ለምን ያንን ትምህርት እና ዩኒቨርሲቲ እንደመረጠ በዝርዝር የሚገልጽበት ደብዳቤ።", 
    category: "Writing" 
  },
  { 
    term: "Hook", 
    definition: "The very first sentence or paragraph of your essay designed to grab the reader's attention immediately. Tip: Avoid starting with a famous quote; instead, start with a vivid description of an action or a surprising thought to make the reader want to keep reading.", 
    amharic: "ሳቢ መጀመሪያ - የድርሰቱ አንባቢን ትኩረት ለመሳብ የሚያገለግል የመጀመሪያው አረፍተ ነገር ወይም አንቀጽ።", 
    category: "Writing" 
  },
  { 
    term: "Authenticity", 
    definition: "The quality of being genuine and honest in your writing. Admission officers can easily tell when an essay sounds 'fake' or over-polished by an adult. Tip: Use your natural voice. If you wouldn't say a word out loud in a conversation, don't use it in your essay just to sound 'smart'.", 
    amharic: "እውነተኛነት - በድርሰት ውስጥ ተማሪው የራሱን እውነተኛ ማንነት እና ስሜት በታማኝነት መግለጹን የሚያመለክት ሲሆን ይህም ለቅበላ በጣም አስፈላጊ ነው።", 
    category: "Writing" 
  },

  // 16. CAREER & WORK TERMS
  { 
    term: "Internship", 
    definition: "A period of work experience, often during the summer, where a student works for a company to gain practical skills in their field of study. Some internships are paid, while others offer academic credit. Tip: Internships are the best way to secure a job offer before you even graduate. Aim to complete at least two internships during your 4 years of study.", 
    amharic: "ልምምድ (Internship) - ተማሪው በተማረበት የትምህርት ዘርፍ ላይ ተግባራዊ እውቀት ለማግኘት የሚያደርገው ጊዜያዊ የስራ ልምምድ።", 
    category: "Career" 
  },
  { 
    term: "OPT", 
    definition: "Optional Practical Training. A program in the US that allows international students on F-1 visas to work for 12 months in their field of study after graduation. STEM majors can often extend this for an additional 24 months. Tip: Plan your OPT early! You must apply for this through your university's international office before you graduate.", 
    amharic: "ኦፒቲ (OPT) - በዩናይትድ ስቴትስ ውስጥ ትምህርታቸውን ያጠናቀቁ ዓለም አቀፍ ተማሪዎች ለተወሰነ ጊዜ (ብዙውን ጊዜ 1 ዓመት) በሰለጠኑበት ሙያ እንዲሰሩ የሚሰጥ ፈቃድ።", 
    category: "Career" 
  },
  { 
    term: "CPT", 
    definition: "Curricular Practical Training. A program that allows international students to gain work experience through internships or work-study while they are still enrolled in classes. Tip: CPT is a great way to earn money and build a US-based resume while you are still a student, but it must be directly related to your major.", 
    amharic: "ሲፒቲ (CPT) - ተማሪው ትምህርቱን ሳይጨርስ በዘርፉ የስራ ልምምድ በማድረግ እንዲሰራ የሚሰጥ ፈቃድ።", 
    category: "Career" 
  },
  { 
    term: "Networking", 
    definition: "The process of building professional relationships with professors, alumni, and industry professionals. These connections can lead to mentorship and job opportunities. Tip: Don't be afraid to reach out to alumni from your school on LinkedIn; most are happy to give a few minutes of advice to a younger student from their home country.", 
    amharic: "ሙያዊ ትስስር (Networking) - ለወደፊት የስራ እድል እና ለሙያ እድገት የሚረዱ ጠቃሚ ግንኙነቶችን ከሰዎች ጋር መፍጠር።", 
    category: "Career" 
  },

  // 19. UNIVERSITY EVALUATION TERMS
  { 
    term: "Class Size", 
    definition: "The number of students enrolled in a single course. Small classes (15-25 students) allow for more direct interaction with professors, while large lecture halls can have hundreds of students. Tip: Check the 'Student-to-Faculty' ratio of a university; a lower ratio (like 10:1) usually means more personal attention for you.", 
    amharic: "የክፍል ተማሪዎች ብዛት - በአንድ ትምህርት ውስጥ የሚገኙ ተማሪዎች ብዛት። አነስተኛ የክፍል ተማሪዎች ብዛት ያለው ተቋም ለመማር የተሻለ ነው።", 
    category: "Metrics" 
  },
  { 
    term: "Graduation Rate", 
    definition: "The percentage of students who complete their degree program within 4 or 6 years. A high graduation rate is a sign that the university provides strong academic and financial support to its students. Tip: If a school's graduation rate is below 50%, research why—it might mean students move away because they are unhappy or lack support.", 
    amharic: "የምረቃ መጠን - ትምህርታቸውን በገቡበት ጊዜ ውስጥ በአግባቡ አጠናቅቀው የሚወጡ ተማሪዎች መቶኛ።", 
    category: "Metrics" 
  },
  { 
    term: "Accreditation", 
    definition: "The formal recognition by an official body that a university meets specific academic standards. Only attend accredited institutions to ensure your degree is recognized by employers and other universities. Tip: In the US, look for 'Regional Accreditation', which is the highest standard. Avoid 'Unaccredited' schools as their degrees are often worthless.", 
    amharic: "ይፋዊ እውቅና (አክሬዲቴሽን) - አንድ የትምህርት ተቋም የተቀመጠለትን የጥራት ደረጃ ማሟላቱን የሚያረጋግጥ ይፋዊ ምስክርነት።", 
    category: "Metrics" 
  },

  // 21. RISKS & ERRORS
  { 
    term: "Misrepresentation", 
    definition: "The act of providing false information, forged documents, or exaggerated achievements on your application. This is a serious offense that can lead to immediate rejection or permanent bans from applying. Tip: Your reputation is your most valuable asset. Always tell the truth; admission officers are trained to spot lies and verify every detail.", 
    amharic: "የሀሰት መረጃ (Misrepresentation) - በማመልከቻ ላይ ተማሪው ያልሆነውን ነኝ ማለት ወይም የሀሰት ሰነድ ማቅረብ፤ ይህ ከቅበላ ውጭ ያደርጋል።", 
    category: "Risks" 
  },
  { 
    term: "Incomplete Application", 
    definition: "An application that is missing one or more required items, such as a transcript, an essay, or a test score. Most universities will not review your file until every single item is received. Tip: Check your university 'Applicant Portal' at least twice a week—if something is missing, it will be listed there as an 'Action Item'.", 
    amharic: "ያልተሟላ ማመልከቻ - አስፈላጊ የሆኑ ሰነዶች ወይም መረጃዎች ጎድለውት ለውሳኔ ያልቀረበ ማመልከቻ።", 
    category: "Risks" 
  },

  // 22. SCAMS & SAFETY
  { 
    term: "Scholarship Scam", 
    definition: "Fraudulent offers of financial aid that require you to pay a 'processing fee' or 'guarantee fee' upfront. Legitimate scholarships NEVER ask for money from the student. Tip: If a scholarship result comes to you without you ever applying for it, or if they ask for your credit card details, it is 100% a scam.", 
    amharic: "የነፃ ትምህርት ማጭበርበር - 'ገንዘብ ክፈልና የነፃ ትምህርት እድል እንሰጥሃለን' የሚሉ የማጭበርበሪያ ዘዴዎች። እውነተኛ ስኮላርሺፕ ክፍያ አይጠይቅም።", 
    category: "Safety" 
  },
  { 
    term: "Fake Admission", 
    definition: "Acceptance letters sent by fake agencies or 'diploma mills' that are not real universities. These letters cannot be used for visa purposes. Tip: Always verify that the school exists on official government lists (like the US 'DHS' school search) before paying any deposits or celebrating.", 
    amharic: "የሀሰት ቅበላ - እውቅና በሌላቸው ድርጅቶች የሚላክ እና ለቪዛ የማይጠቅም የሀሰት የመግቢያ ደብዳቤ።", 
    category: "Safety" 
  },

  // BASICS HELPERS
  { 
    term: "Undergraduate", 
    definition: "A student who is studying for their first university degree, usually a Bachelor’s degree. This level focuses on foundational knowledge in a specific major. Tip: This will be you! Ensure you focus on 'Undergraduate Admissions' sections of university websites to find the right forms.", 
    amharic: "ቅድመ-ዲግሪ ተማሪ - የመጀመሪያ ዲግሪውን ለመያዝ በመማር ላይ ያለ ተማሪ።", 
    category: "Basics" 
  },
  { 
    term: "Graduate", 
    definition: "A student who has already completed a Bachelor’s degree and is now pursuing a higher level of study, such as a Master’s or a PhD. Tip: Graduate school is much more focused on research and specialized professional skills compared to undergraduate study.", 
    amharic: "ድህረ-ምረቃ ተማሪ - የመጀመሪያ ዲግሪውን አጠናቆ ለሁለተኛ ወይም ለሦስተኛ ዲግሪ (Masters/PhD) በመማር ላይ ያለ ተማሪ።", 
    category: "Basics" 
  },
  { 
    term: "Bachelor's Degree", 
    definition: "The standard academic degree awarded by a university after usually four years of full-time undergraduate study. Common types include Bachelor of Science (BS) or Bachelor of Arts (BA). Tip: Your major doesn't always define your career—many people with History degrees go on to become successful CEOs or lawyers.", 
    amharic: "የመጀመሪያ ዲግሪ - አብዛኛውን ጊዜ ለአራት ዓመታት የሚሰጥ የቅድመ-ዲግሪ ትምህርት ማረጋገጫ።", 
    category: "Basics" 
  },
  { 
    term: "Double Major", 
    definition: "A program where a student completes the requirements for two different majors simultaneously, earning one degree with two specializations. Tip: While impressive, a double major is very demanding—ensure you can handle the heavy courseload before committing.", 
    amharic: "ድርብ ሜጀር - አንድ ተማሪ በአንድ ጊዜ ሁለት የተለያዩ የትምህርት ዓይነቶችን አጣምሮ የሚማርበት እና ለሁለቱም እውቅና የሚያገኝበት ስርዓት።", 
    category: "Basics" 
  },
  { 
    term: "Minor", 
    definition: "A secondary academic subject that you focus on alongside your primary major. It usually requires fewer classes than a full major. Tip: Use a minor to learn a skill that complements your major (e.g., Major in Business with a Minor in Computer Science).", 
    amharic: "ማይነር - ከዋናው የትምህርት ዓይነት ጎን ለጎን ተማሪው ጥቂት ክፍሎችን ወስዶ የሚመረቅበት ሁለተኛ የትምህርት ዘርፍ።", 
    category: "Basics" 
  },

  // 12. TEST TERMS
  { 
    term: "Standardized Test", 
    definition: "Examinations like the SAT, ACT, TOEFL, or IELTS that are used by universities to compare students from different schools and countries on a level playing field. These tests measure specific skills like mathematics, reading, and English proficiency. Tip: Don't let one bad test score define you; many universities now look at your 'highest' score and prioritize your school grades over these one-day exams.", 
    amharic: "መደበኛ ፈተናዎች (Standardized Tests) - እንደ SAT እና TOEFL ያሉ ተማሪዎች ከዩኒቨርስቲው መስፈርት ጋር ያላቸውን ተነፃፃሪ ብቃት ለመለካት የሚያገለግሉ ዓለም አቀፍ ፈተናዎች።", 
    category: "Testing" 
  },
  { 
    term: "Test Optional", 
    definition: "An admission policy where a university allows you to choose whether or not to submit your SAT or ACT scores. If you have a high GPA but a low test score, you can choose to hide your score to protect your application. Tip: If your test score is above the school's average, always submit it—it can help you secure additional merit scholarships.", 
    amharic: "ፈተና እንደ አማራጭ (Test Optional) - ዩኒቨርሲቲው የSAT ወይም ACT ውጤትን ማስገባት እንደ ግዴታ ሳይሆን እንደ ተማሪው ፍላጎት የሚያይበት የቅበላ ስርዓት።", 
    category: "Testing" 
  },
  { 
    term: "Superscore", 
    definition: "The practice where a university takes your highest section scores from different test dates to create a new, higher total score. For example, if you did better in Math in October but better in Reading in December, they will combine those two highest marks. Tip: Since many schools superscore, it is often worth taking the SAT twice to try and improve individual sections without worrying about the others.", 
    amharic: "ከፍተኛ ውጤት ጥምረት (Superscore) - ዩኒቨርሲቲው ተማሪው ከተለያዩ የፈተና ቀናት ያገኘውን ከፍተኛውን ውጤት ብቻ መርጦ በመደምር የሚይዝበት አሰራር።", 
    category: "Testing" 
  },

  // 13. PLATFORMS
  { 
    term: "Common Application", 
    definition: "The most widely used online platform that allows you to apply to over 1,000 universities using a single set of forms and one main essay. It simplifies the process by letting you manage all your deadlines and documents in one place. Tip: Create your Common App account in the summer before Grade 12 so you can start filling out the basic information early and avoid the last-minute rush.", 
    amharic: "የጋራ ማመልከቻ (Common App) - ተማሪዎች ወደ ብዙ ዩኒቨርሲቲዎች በአንድ ጊዜ ለማመልከት የሚያስችላቸው ትልቁ የመስመር ላይ መድረክ።", 
    category: "Platforms" 
  },
  { 
    term: "Coalition App", 
    definition: "An alternative application platform similar to the Common App, but with a focus on helping students from underrepresented or low-income backgrounds. It includes a 'Locker' feature where you can store achievements starting from Grade 9. Tip: Only about 150 schools use the Coalition App; check if your schools require it before spending time setting up a profile.", 
    amharic: "ኮሊሽን አፕ (Coalition App) - ተማሪዎች ወደ ተመረጡ ዩኒቨርሲቲዎች ለማመልከት የሚጠቀሙበት ሌላው አማራጭ የመስመር ላይ መድረክ።", 
    category: "Platforms" 
  },

  // 17. EXTRACURRICULAR TERMS
  { 
    term: "Extracurriculars", 
    definition: "Any activity you participate in outside of your regular school classes, such as sports, music, community service, or student clubs. These activities show admission officers your interests, skills, and character. Tip: Admission officers prefer to see 'Depth' (long-term commitment) rather than 'Breadth' (joining 10 clubs for only one week each).", 
    amharic: "ከትምህርት ውጭ እንቅስቃሴዎች - ተማሪው ከመደበኛው ትምህርት ውጭ የሚያደርጋቸው እንደ ስፖርት፣ ጥበብ እና በጎ ፈቃድ ያሉ ተሳትፎዎች።", 
    category: "Activities" 
  },
  { 
    term: "Passion Project", 
    definition: "A self-directed, independent activity you start because you are deeply interested in a specific topic. It could be writing a book, starting a small business, or building a local community project. Tip: A passion project is the best way to stand out because it proves you have 'Initiative' and don't need a teacher to tell you how to be productive.", 
    amharic: "የፍላጎት ፕሮጀክት - አንድ ተማሪ በራሱ ተነሳሽነት የሚጀምረው እና የሚወደውን ስራ ወይም ጥናት በተግባር የሚያሳይበት የግል ተግባር።", 
    category: "Activities" 
  },
  { 
    term: "Initiative", 
    definition: "The ability to assess and start things independently without being asked or forced. In an application, showing initiative means you saw a problem in your community and took the first step to fix it. Tip: Describe specific moments where you led a change; for example, 'I noticed my school lacked a library, so I organized a book drive'.", 
    amharic: "ተነሳሽነት (Initiative) - አንድን ስራ ወይም ፕሮጀክት ያለ ማንም ረዳትነት ወይም ትዕዛዝ በራስ ፍላጎት የመጀመር እና የመምራት ብቃት።", 
    category: "Activities" 
  },

  // 20. FINANCIAL SYSTEMS
  { 
    term: "FAFSA", 
    definition: "The Free Application for Federal Student Aid. This is the main form used by US citizens and permanent residents to apply for government grants and loans. Tip: Even if you are an international student, many US colleges will still mention FAFSA on their websites; just remember that as an Ethiopian student, you will usually fill out the CSS Profile or ISFAA instead.", 
    amharic: "ፋፍሳ (FAFSA) - የዩናይትድ ስቴትስ ዜጎች ከመንግስት የትምህርት እርዳታ ለማግኘት የሚሞሉበት ቅጽ።", 
    category: "Financial" 
  },
  { 
    term: "CSS Profile", 
    definition: "A detailed online application managed by the College Board that many private universities use to determine your eligibility for non-government financial aid. It asks very specific questions about your family's income, assets, and expenses. Tip: The CSS Profile has a fee ($25), but you can often request a 'Fee Waiver' from the university if the cost is too high for your family.", 
    amharic: "ሲኤስኤስ ፕሮፋይል (CSS Profile) - የግል ዩኒቨርሲቲዎች ለአንድ ተማሪ የሚሰጠውን የገንዘብ እርዳታ መጠን ለመወሰን የሚጠቀሙበት ዝርዝር የፋይናንስ መግለጫ ቅጽ።", 
    category: "Financial" 
  },
  { 
    term: "ISFAA", 
    definition: "The International Student Financial Aid Application. This is a paper or PDF form that some universities use instead of the CSS Profile to gather financial information from international students. Tip: Since it's a PDF, you can fill it out for free! If a school gives you a choice between the CSS Profile and ISFAA, choose ISFAA to save money on application fees.", 
    amharic: "አይኤስኤፍኤኤ (ISFAA) - ዓለም አቀፍ ተማሪዎች የፋይናንስ ሁኔታቸውን ለዩኒቨርሲቲው ለማሳወቅ የሚሞሉት ነፃ የፋይናንስ ቅጽ።", 
    category: "Financial" 
  },

  // outcome
  { 
    term: "Accepted", 
    definition: "The best possible outcome! It means the university has officially offered you a place in their incoming class. Tip: Once you are accepted, you will usually have until May 1st (National Candidates Reply Date) to decide if you want to attend and pay your enrollment deposit.", 
    amharic: "ተቀባይነት ማግኘት (Accepted) - ዩኒቨርሲቲው ተማሪውን ለማስተማር መስማማቱን የሚገልጽበት አስደሳች ውጤት።", 
    category: "Outcomes" 
  },
  { 
    term: "Waitlisted", 
    definition: "An outcome where the university likes your application but doesn't have enough space to admit you yet. You might be offered a spot later in the spring if other accepted students decide not to attend. Tip: If you are waitlisted at your dream school, write a 'Letter of Continued Interest' (LOCI) to tell them they are still your #1 choice.", 
    amharic: "በተጠባባቂ ዝርዝር መያዝ (Waitlisted) - ዩኒቨርሲቲው ተማሪውን ዝርዝር ውስጥ አስቀምጦ ክፍት ቦታ ሲኖር የሚቀበልበት ሁኔታ።", 
    category: "Outcomes" 
  },
  { 
    term: "Deferred Result", 
    definition: "This usually happens during Early Action or Early Decision. It means the university wants to see the rest of the applicant pool before making a final decision on your file. Tip: Don't be discouraged by a deferral; it is NOT a rejection. Use the extra time to send an updated transcript with your latest high grades.", 
    amharic: "ውሳኔው የተራዘመ (Deferred) - ፍርዱ ለጊዜው ተገትቶ ከሌሎች ተማሪዎች ጋር በድጋሚ የሚታይበት ሂደት።", 
    category: "Outcomes" 
  },

  // Global & Special
  { 
    term: "Fellowship", 
    definition: "A high-prestige grant, usually for graduate students or advanced researchers, that covers all costs and often includes a salary (stipend) for living expenses. Tip: Fellowships are highly competitive and usually require you to have a specific research goal or community project in mind.", 
    amharic: "ፌሎውሺፕ - ለከፍተኛ ጥናትና ምርምር የሚሰጥ የተመረጠ የገንዘብ ድጋፍ እና እድል።", 
    category: "Global" 
  },
  { 
    term: "First-Generation", 
    definition: "A student whose parents did not graduate from a 4-year university. Many colleges have special support programs and scholarships specifically for first-gen students to help them navigate the process. Tip: If you are the first in your family to go to college, make sure to mention this in your essays—it shows your incredible resilience and drive.", 
    amharic: "የመጀመሪያ ትውልድ ተማሪ - በቤተሰቡ ውስጥ የመጀመሪያው የዩኒቨርሲቲ ተማሪ የሆነ።", 
    category: "Basics" 
  },
  { 
    term: "Legacy Admission", 
    definition: "A policy where some universities give a slight advantage to applicants whose parents or grandparents graduated from that same school. Tip: While legacy can help at some private colleges, your grades and essays are still 90% of the decision—never rely on 'legacy' alone to get in.", 
    amharic: "የቤተሰብ ቅድሚያ (Legacy) - አንድ ተማሪ ቤተሰቡ በተማረበት ዩኒቨርሲቲ ውስጥ የሚሰጠው መጠነኛ ቅድሚያ።", 
    category: "Strategy" 
  },

  // Advanced Strategy
  { 
    term: "ROI (Return on Investment)", 
    definition: "A way to calculate if the cost of a degree is worth it based on the future salary you will earn. For example, a high-cost degree in Engineering might have a better ROI than an expensive one in a field with lower starting pay. Tip: Always research the 'Median Starting Salary' for graduates of a university before you take out any loans.", 
    amharic: "የትምህርት ውጤታማነት (ROI) - ለትምህርት የሚወጣው ወጪ እና ተመርቆ ከወጡ በኋላ የሚገኘው ጥቅም ንፅፅር።", 
    category: "Strategy" 
  },
  { 
    term: "Strategic Positioning", 
    definition: "The process of framing your application to fill a specific 'gap' or 'need' in a university's incoming class. For example, if a school wants more students interested in environmental sustainability, you should highlight your work in that area. Tip: Don't try to be 'everything' to everyone; pick two or three themes and become an expert in those.", 
    amharic: "ስልታዊ አቀራረብ - አንድ ተማሪ ራሱን ለዩኒቨርሲቲው በሚያስፈልግ እና ልዩ በሆነ መንገድ አዘጋጅቶ ማቅረቡ።", 
    category: "Strategy" 
  },
  { 
    term: "Profile Building", 
    definition: "The long-term process (usually starting in Grade 9) of choosing classes, activities, and projects that will eventually make your university application look strong. Tip: Profile building isn't about doing things you hate to impress colleges; it's about finding what you love and taking it to a very high level over several years.", 
    amharic: "የብቃት ግንባታ (Profile Building) - ተማሪው አመልካችነቱ ጠንካራ እንዲሆን ከዓመታት በፊት ጀምሮ የሚያደርገው ዝግጅት።", 
    category: "Strategy" 
  },

  // 6. SCHOLARSHIP TYPES
  { 
    term: "Full Ride", 
    definition: "The most generous type of scholarship that covers 100% of tuition, housing, food, books, and sometimes even travel costs. These are extremely rare and highly competitive. Tip: Full rides often have earlier deadlines (like December 1st), so make sure you finish your applications long before the regular January deadline.", 
    amharic: "ሁሉን አቀፍ ነፃ እድል (Full Ride) - የትምህርት ክፍያን፣ የመኖሪያ፣ የምግብ እና ሌሎች ወጪዎችን ሙሉ በሙሉ የሚሸፍን ስኮላርሺፕ።", 
    category: "Financial" 
  },
  { 
    term: "Full Tuition", 
    definition: "A scholarship that covers only the cost of classes (tuition). You or your family will still need to pay for housing, food, and health insurance. Tip: Even with a 'Full Tuition' scholarship, you may still need $15,000–$20,000 USD per year for living expenses in many US cities.", 
    amharic: "የክፍያ ነፃ እድል - የትምህርት ክፍያን ብቻ የሚሸፍን ስኮላርሺፕ፤ ተማሪው የመኖሪያ እና የምግብ ወጪን ይሸፍናል።", 
    category: "Financial" 
  },
  { 
    term: "Partial Scholarship", 
    definition: "A scholarship that covers a specific amount (e.g., $5,000 or $10,000) towards your tuition fees. These are often awarded to help 'bridge the gap' for students who can pay most of their costs. Tip: Don't ignore small partial scholarships! Winning three $5,000 awards can add up to a significant amount of money over four years.", 
    amharic: "ከፊል ነፃ እድል - የትምህርት ወጪን በከፊል ብቻ የሚሸፍን የገንዘብ ድጋፍ።", 
    category: "Financial" 
  },
  { 
    term: "Merit-Based", 
    definition: "Financial aid awarded based on your academic achievements, test scores, or special talents, regardless of your family’s income. Tip: You usually don't need a separate application for merit aid—universities evaluate you for it automatically when you submit your main application.", 
    amharic: "በብቃት ላይ የተመሰረተ (Merit-Based) - በተማሪው የትምህርት ውጤት ወይም ልዩ ክህሎት ላይ ተመስርቶ የሚሰጥ ስኮላርሺፕ።", 
    category: "Financial" 
  },
  { 
    term: "Need-Based Aid", 
    definition: "Financial aid awarded specifically because your family cannot afford the full cost of tuition. Universities calculate this using the CSS Profile or ISFAA. Tip: At 'Meet-Full-Need' schools, if your family can only afford $1,000, the university will cover the remaining $75,000 of the cost for you.", 
    amharic: "በፍላጎት ላይ የተመሰረተ (Need-Based) - በተማሪው የቤተሰብ የገንዘብ አቅም ማነስ ላይ ተመስርቶ የሚሰጥ እርዳታ።", 
    category: "Financial" 
  },

  // 11. RECOMMENDATION TERMS
  { 
    term: "Counselor Req", 
    definition: "A mandatory letter written by your school's guidance counselor or director that explains your academic standing and character within the context of your whole school. Tip: Make sure your school director knows you well! Share your 'School Profile' with them so they can explain how competitive your national exams (like EUEE) actually are.", 
    amharic: "የካውንስለር ምክረ-ሀሳብ - ስለ ተማሪው አጠቃላይ ባህሪ እና ውጤት በትምህርት ቤቱ ሃላፊ የሚጻፍ ደብዳቤ።", 
    category: "Components" 
  },
  { 
    term: "FERPA Waiver", 
    definition: "A legal form where you waive (give up) your right to read your recommendation letters. This ensures that your teachers were 100% honest and that the university can trust their opinion. Tip: ALWAYS waive your FERPA rights. Universities often view 'unwaived' letters as less trustworthy, which can hurt your chances of admission.", 
    amharic: "የመረጃ ምስጢራዊነት ስምምነት (FERPA) - ተማሪው ስለ እሱ የተጻፉ የምክረ-ሀሳብ ደብዳቤዎችን ላለማየት የሚስማማበት ህጋዊ ፎርም።", 
    category: "Basics" 
  },
  { 
    term: "Brag Sheet", 
    definition: "An informal list of your achievements, hobbies, and personal stories that you give to your teachers to help them write a better, more detailed recommendation letter for you. Tip: Include things your teacher might have forgotten—like that one time you helped a classmate or a specific project you felt proud of in their class.", 
    amharic: "የትግባር ዝርዝር (Brag Sheet) - መምህራን ስለ ተማሪው ጠንካራ ጎን እንዲጽፉ የሚረዳቸው የተማሪ ስኬቶች ስብስብ።", 
    category: "Components" 
  },

  // 18. PERSONAL DEVELOPMENT
  { 
    term: "Personal Brand", 
    definition: "The unique combination of skills, experiences, and personality traits that make you stand out from other students. It's the answer to 'Who are you beyond your grades?'. Tip: Your personal brand should be consistent across your essays, activities, and interview. For example: 'The Coder who loves Classical Music'.", 
    amharic: "የግል መለያ (Personal Brand) - አንድ ተማሪ ከሌሎች ተለይቶ የሚታወቅበት የክህሎት እና የባህሪ ጥምረት።", 
    category: "Strategy" 
  },
  { 
    term: "Soft Skills", 
    definition: "Non-technical traits like leadership, communication, empathy, and time management. These are often more important than technical skills because they show how you will interact with others on campus. Tip: Don't just list soft skills; prove them with examples. Instead of saying 'I am a leader,' say 'I managed a team of 10 to clean the local park'.", 
    amharic: "መሰረታዊ ክህሎቶች (Soft Skills) - እንደ ተግባቦት እና አመራር ያሉ ለስኬት አስፈላጊ የሆኑ ማህበራዊ ባህሪያት።", 
    category: "Basics" 
  },

  // 25. SPECIAL TERMS
  { 
    term: "Legacy", 
    definition: "A specific term used when an applicant has a family member who graduated from the university they are applying to. Tip: While Legacy can provide a small 'bump' in admission at some private US schools, it is never a guarantee of acceptance. Stay focused on your own merits.", 
    amharic: "የቤተሰብ ታሪክ (Legacy) - አንድ ተማሪ ቤተሰቡ በተማረበት ትምህርት ቤት ውስጥ ያለው ትስስር።", 
    category: "Strategy" 
  },
  { 
    term: "Underrepresented", 
    definition: "Refers to students from backgrounds, ethnicities, or regions that are not well-represented on a university campus. Ethiopian students are often considered underrepresented in many US and European colleges. Tip: Use your unique cultural background as a strength in your 'Diversity Essay' to show how you will bring a fresh perspective to the campus.", 
    amharic: "ውክልናቸው አነስተኛ የሆኑ - በዩኒቨርሲቲው ውስጥ ቁጥራቸው አነስተኛ የሆኑ የማህበረሰብ ክፍሎች (እንደ ኢትዮጵያውያን)።", 
    category: "Basics" 
  },

  // 28. TOOLS
  // 28. TOOLS
  { 
    term: "Checklist", 
    definition: "A comprehensive tracker used to ensure that every single document—transcripts, essays, scores, and letters—is finished and submitted before the deadline. Tip: Create a digital checklist for each school you apply to, as different universities often have different requirements and deadline dates.", 
    amharic: "የማረጋገጫ ዝርዝር (Checklist) - ሁሉንም አስፈላጊ ሰነዶች ማጠናቀቅዎን ለማረጋገጥ የሚጠቀሙበት የመቆጣጠሪያ ዝርዝር።", 
    category: "Strategy" 
  },

  // NEW ADDITIONS FROM RECENT AUDIT
  { 
    term: "Weighted GPA", 
    definition: "A grade point average calculation that gives extra points for taking difficult classes like Honors, AP, or IB courses. Tip: Your Ethiopian grades do not natively have a weighted system, so universities will automatically recalculate your GPA using their own internal scale.", 
    amharic: "ሚዛናዊ የውጤት አማካይ (Weighted GPA) - ከበድ ያሉ የትምህርት አይነቶችን በመውሰድ ተጨማሪ ነጥብ የሚሰጥበት የውጤት አሰራር።", 
    category: "Academics" 
  },
  { 
    term: "Unweighted GPA", 
    definition: "Your normal grade average without any extra points for difficult classes, usually measured strictly out of 4.0. Tip: Most scholarships rely primarily on your unweighted GPA because it provides a standard, fair comparison across all schools globally.", 
    amharic: "መደበኛ የውጤት አማካይ (Unweighted GPA) - የትምህርቱን ጫና ግምት ውስጥ ሳያስገባ የሚሰላ መደበኛ የውጤት አሰራር።", 
    category: "Academics" 
  },
  { 
    term: "Core Courses", 
    definition: "The essential set of foundational classes a university requires all students to take before they graduate, regardless of their specific major. Tip: This ensures you graduate as a well-rounded thinker, not just someone who only knows one subject.", 
    amharic: "መሠረታዊ ትምህርቶች - ተማሪው ከመመረቁ በፊት መውሰድ ያለበት የግዴታ የጋራ የአጠቃላይ እውቀት ትምህርቶች።", 
    category: "Academics" 
  },
  { 
    term: "Major", 
    definition: "Your primary area of academic focus in university, such as Computer Science, Economics, or Biology. Most of your advanced classes will be in this specific subject. Tip: In the US, you often don't need to declare your official major until the end of your second year.", 
    amharic: "ዋና የትምህርት ዘርፍ (Major) - ተማሪው በዩኒቨርሲቲ ውስጥ አብዛኛውን ጊዜውን አጥንቶ የሚመረቅበት የተለየ የትምህርት መስክ።", 
    category: "Basics" 
  },
  { 
    term: "Interdisciplinary Studies", 
    definition: "A unique major that combines two or more traditional academic disciplines into one cohesive program to solve complex real-world issues. Tip: Degrees like 'Neuroscience & Behavior' or 'Philosophy, Politics and Economics' (PPE) are highly respected interdisciplinary studies.", 
    amharic: "የተዋሃዱ ትምህርቶች - የተለያዩ የትምህርት ዘርፎችን አቀናጅቶ አንድ ላይ እና በማስተሳሰር የሚሰጥ ልዩ ፕሮግራም።", 
    category: "Basics" 
  },
  { 
    term: "Master's Degree", 
    definition: "A graduate academic degree awarded by universities upon completion of a course demonstrating advanced mastery of a specific field. Tip: Master's degrees usually take 1 to 2 years and greatly increase your earning potential.", 
    amharic: "የማስተርስ ዲግሪ (ሁለተኛ ዲግሪ) - ከመጀመሪያ ዲግሪ በኋላ በጥልቀት በማጥናት የሚወሰድ የትምህርት ማስረጃ።", 
    category: "Basics" 
  },
  { 
    term: "PhD", 
    definition: "Doctor of Philosophy. The highest level of academic degree you can earn, focused entirely on independent, original research. Tip: You do not always need a Master's degree to apply for a PhD in the US; exceptional Bachelor's graduates often apply directly.", 
    amharic: "ፒ.ኤች.ዲ (PhD) - ከፍተኛው የምርምር ዲግሪ እና የዶክትሬት ማዕረግ።", 
    category: "Basics" 
  },
  { 
    term: "Postgraduate", 
    definition: "Another term used primarily in the UK and Australia for Graduate-level study (Master's or PhD). Tip: If a university website mentions 'Postgraduate courses,' they are referring to programs you take AFTER completing your Bachelor's degree.", 
    amharic: "ድህረ-ምረቃ - ከመጀመሪያ ዲግሪ በኋላ የሚሰጥ የትምህርት ደረጃ።", 
    category: "Basics" 
  },
  { 
    term: "Accommodation", 
    definition: "Where you sleep and live during your university years, commonly referring to on-campus dormitories or off-campus apartments. Tip: For your first year in a new country, living 'On-Campus' is highly recommended as it makes socializing and making friends much easier.", 
    amharic: "የመኖሪያ አቅርቦት - ተማሪው በዩኒቨርሲቲ ሲማር የሚኖርበት የመኝታ እና የመኖሪያ ስፍራ (ዶርም)።", 
    category: "Financial" 
  },
  { 
    term: "Meal Plan", 
    definition: "A pre-paid university program that allows you to eat a certain number of meals at campus dining halls each semester. Tip: Living in a dorm often makes a meal plan mandatory, which can be expensive. Try to learn how to cook before you move to save money!.", 
    amharic: "የምግብ እቅድ (Meal Plan) - ዩኒቨርሲቲው ለተማሪው በቀን የሚያቀርበው የምግብ እና ካፌ አገልግሎት ቅድመ ክፍያ ስርዓት።", 
    category: "Financial" 
  },
  { 
    term: "Affidavit of Support", 
    definition: "A legally binding letter signed by your sponsor (uncles, parents, or organizations) proving they are financially responsible for your education costs. Tip: This must be notarized in Ethiopia and translated clearly if originally written in Amharic to satisfy US or European immigration.", 
    amharic: "የገንዘብ ድጋፍ ማረጋገጫ (Affidavit of Support) - ስፖንሰሩ ለተማሪው ወጪ ሃላፊነት መውሰዱን የሚያረጋግጥበት ህጋዊ ማረጋገጫ።", 
    category: "Financial" 
  },
  { 
    term: "Institutional Aid", 
    definition: "Grants, scholarships, and fellowships that are provided directly from the university's own budget (instutional funds) rather than from the government or an outside charity. Tip: Private Ivy League schools rely heavily on their own massive institutional aid to fund international students.", 
    amharic: "የተቋም እርዳታ - ከውጭ ድርጅቶች ሳይሆን በቀጥታ ከዩኒቨርሲቲው በጀት የሚሰጥ የገንዘብ ድጋፍ።", 
    category: "Financial" 
  },
  { 
    term: "External Scholarship", 
    definition: "Money awarded to a student by completely outside organizations (like foundations, charities, or businesses) rather than the university itself. Tip: The Mastercard Foundation is one of the most famous external scholarships for African students.", 
    amharic: "የውጭ ስኮላርሺፕ - ከዩኒቨርሲቲው ውጭ ባሉ መንግስታዊ ያልሆኑ ድርጅቶች ወይም ግለሰቦች የሚሰጥ የነፃ ትምህርት እድል።", 
    category: "Financial" 
  },
  { 
    term: "Yield Rate", 
    definition: "The percentage of students who choose to enroll at a university after being offered admission. Universities desperately want this number to be as high as possible. Tip: This is exactly why showing 'Demonstrated Interest' is so important—schools want to admit students who will actually say yes.", 
    amharic: "የምዝገባ መጠን (Yield Rate) - ከተቀበሉት ተማሪዎች ውስጥ በእርግጥ ለመማር የመጡት መቶኛ።", 
    category: "Strategy" 
  },
  { 
    term: "Demonstrated Interest", 
    definition: "The ways you show a college you genuinely want to attend, such as opening their marketing emails, attending virtual tours, or signing up for interviews. Tip: Many universities use software to track whether or not you open their emails. Always click their links to boost your interest score!", 
    amharic: "የታየ ፍላጎት (Demonstrated Interest) - ተማሪው ወደ ዩኒቨርሲቲው ለመግባት ያለውን እውነተኛ ፍላጎት በኢሜይል፣ በጉብኝት እና በአካል የሚያሳይበት መንገድ።", 
    category: "Strategy" 
  },
  { 
    term: "Holistic Review", 
    definition: "An admission policy where colleges view your entire profile—essays, recommendations, extracurriculars, and personal struggles—not just cold test scores. Tip: This is why a brilliantly written Personal Statement can help you overcome an imperfect high school grade.", 
    amharic: "አጠቃላይ ግምገማ (Holistic Review) - ዩኒቨርሲቲው ተማሪውን ከውጤት ባለፈ፣ በባህሪው፣ በህይወት ልምዱ እና በድርሰቱ አጠቃሎ የሚያይበት ስርዓት።", 
    category: "Application" 
  },
  { 
    term: "Tufts Syndrome", 
    definition: "A slang term for 'Yield Protection', referring to the tendency of highly selective universities to reject overqualified students because they assume the student will choose an Ivy League instead. Tip: Write deeply authentic 'Why Us?' essays to prove you aren't just using them as a completely safe backup plan.", 
    amharic: "የተፍስ ሲንድረም (Tufts Syndrome) - ዩኒቨርሲቲዎች ከልክ በላይ ጎበዝ የሆኑ ተማሪዎች 'እንቢ ይሉናል' ብለው በማሰብ መግቢያ ሲከለክሉ የሚፈጠር ክስተት።", 
    category: "Strategy" 
  },
  { 
    term: "Class Profile", 
    definition: "A statistical summary published by universities detailing the demographics, average GPA, SAT scores, and home countries of the students admitted in a given year. Tip: Reviewing the last 3 years of class profiles tells you exactly what profile of student the school favors.", 
    amharic: "የክፍል ገፅታ (Class Profile) - አንድ ዩኒቨርሲቲ በተወሰነ ዓመት የተቀበላቸውን ተማሪዎች አጠቃላይ መረጃ፣ የውጤት አማካይ እና ሌሎች የስታትስቲክስ መረጃዎች ዝርዝር።", 
    category: "Metrics" 
  },
  { 
    term: "Institutional Priorities", 
    definition: "The internal goals of a university for a specific admission year. Sometimes they want to recruit more engineering students, sometimes more international musicians. Tip: You cannot control this! Rejection from a top school is often just because you didn't match their specific demographic priority that year.", 
    amharic: "የተቋሙ ቅድሚያ ፍላጎቶች - ዩኒቨርሲቲዎች በአንድ ዓመት ውስጥ ምን ዓይነት ተማሪዎችን የትኛው ሙያ ላይ ማተኮር ይፈልጋሉ የሚለው ውስጣዊ ፍላጎት።", 
    category: "Strategy" 
  },
  { 
    term: "Essay", 
    definition: "A broad term for any written piece submitted as part of your application. These range from 150-word short answers to 650-word personal statements. Tip: An application essay feels completely different from a high school academic paper—it must be deeply personal and reflective.", 
    amharic: "ድርሰት - ስለ ተማሪው አስተሳሰብ፣ አላማ እና ማንነት ጥልቅ ማብራሪያ የሚሰጥ ጽሁፍ።", 
    category: "Writing" 
  },
  { 
    term: "Diversity Essay", 
    definition: "A specific type of supplemental essay asking how your background, culture, or experiences will add a unique perspective to the university campus. Tip: As an Ethiopian student, your rich cultural heritage and resilience are incredibly valuable assets for this topic.", 
    amharic: "የብዝሃነት ድርሰት (Diversity Essay) - ተማሪው ማንነቱ ወይም ባህሉ በዩኒቨርሲቲው ማህበረሰብ ላይ ምን ዓይነት ልዩ ቀለም ሊያመጣ እንደሚችል የሚጽፍበት ድርሰት።", 
    category: "Writing" 
  },
  { 
    term: "Resume", 
    definition: "A one or two-page formal document detailing your academic successes, work experience, volunteer work, and technical skills. Tip: Formatting is key. Use heavy bullet points and intense action verbs so admission officers can quickly skim your achievements in under 60 seconds.", 
    amharic: "የስራ እና የትምህርት ታሪክ (ሪዙሜ) - ስለ ትምህርት ደረጃ፣ ማህበራዊ ተሳትፎ እና ክህሎት የሚያጠቃልል አጭር ይፋዊ መግለጫ።", 
    category: "Components" 
  },
  { 
    term: "Writing Sample", 
    definition: "A previously graded essay or research paper from your high school that elite English or Humanities universities require to assess your raw academic writing abilities. Tip: Always submit a paper that prominently features a teacher’s positive comments and a high grade directly written on it.", 
    amharic: "የድርሰት ናሙና (Writing Sample) - ተማሪው ቀደም ሲል በትምህርት ቤቱ የጻፈው እና የቋንቋ እንዲሁም የአስተሳሰብ ችሎታውን ለማሳየት የሚላክ የጽሁፍ ማስረጃ።", 
    category: "Components" 
  },
  { 
    term: "Cliché", 
    definition: "An overused phrase or common theme in an essay that lacks originality and makes an admission officer roll their eyes (e.g., 'Volunteering completely changed my life' or 'Success is entirely up to destiny'). Tip: Be specific rather than broad. Avoid starting your essays with famous quotes.", 
    amharic: "የተለመደ እና አሰልቺ ጽሁፍ (Cliché) - በድርሰቶች ላይ በተደጋጋሚ ጥቅም ላይ በመዋሉ የተነሳ አንባቢው የሚሰለቸው የአጻጻፍ ስልት ወይም ታሪክ።", 
    category: "Writing" 
  },
  { 
    term: "Recommender", 
    definition: "The person—usually a teacher, coach, or employer—who writes a structured letter on your behalf attesting to your skills, growth, and moral character. Tip: Choose someone who genuinely likes you and taught you recently, rather than picking a famous director who barely knows your name.", 
    amharic: "ምስክር የሚሰጥ ግለሰብ - የተማሪውን ብቃት በማረጋገጥ የድጋፍ ደብዳቤ የሚጽፍ ህጋዊ ሰው።", 
    category: "Components" 
  },
  { 
    term: "Test Center", 
    definition: "An authorized physical location or university campus where you go to sit for standardized exams like the SAT or IELTS under strict invigilation. Tip: Always register early! Test spots in Ethiopia fill up incredibly fast due to high national demand and limited physical centers.", 
    amharic: "የፈተና ማዕከል - መደበኛ ዓለም አቀፍ ፈተናዎች የሚሰጡበት የተረጋገጠ ማዕከል።", 
    category: "Testing" 
  },
  { 
    term: "Direct Application", 
    definition: "Applying to a university directly through their own exclusive website system rather than using a centralized platform like the Common App. Tip: While some schools force you to use it, trying to manage direct applications for 15 schools is incredibly time-consuming.", 
    amharic: "ቀጥታ ማመልከቻ - የተለያዩ މድረኮችን ሳልጠቀም በቀጥታ በዩኒቨርሲቲው ድረ-ገጽ የሚደረግ ማመልከቻ።", 
    category: "Platforms" 
  },
  { 
    term: "Application Dashboard", 
    definition: "The visual interface on an application platform showing your progress, pending tasks, submitted recommendations, and final submission deadlines. Tip: Check your dashboard daily to ensure a sudden hidden requirement hasn't popped up for your dream school.", 
    amharic: "የማመልከቻ መከታተያ ገፅ - ማመልከቻው የደረሰበትን ደረጃ እና ቀሪ ስራዎችን የሚያሳይ ማዕከላዊ ገፅ።", 
    category: "Platforms" 
  },
  { 
    term: "Priority Deadline", 
    definition: "An extremely early application deadline that guarantees you are considered for the absolute largest scholarships and institutional financial aid pools. Tip: The priority deadline is strictly the ONLY deadline you should care about if you need heavily subsidized funding.", 
    amharic: "የቅድሚያ መጠናቀቂያ ቀን - ዩኒቨርሲቲው ለዋና ዋና ስኮላርሺፖች የሚወስነው ትልቁ እና ወሳኙ የማመልከቻ የመጨረሻ ጊዜ።", 
    category: "Application" 
  },

  // NEW ADDITIONS FROM PART TWO AUDIT
  { 
    term: "Visa Approval", 
    definition: "The successful outcome of your Embassy interview where the officer grants you permission to travel and study. Tip: Ask the officer when your passport will be ready for pickup so you can plan your flights strictly after you have it in hand.", 
    amharic: "የቪዛ ፈቃድ - በኤምባሲው ቃለ መጠይቅ መሰረት ቪዛዎ ተቀባይነት ማግኘቱን የሚገልጽ ውሳኔ።", 
    category: "Visa" 
  },
  { 
    term: "Visa Rejection", 
    definition: "When a consular officer denies your visa application, often under Section 214(b) (failure to prove home ties). Tip: Don't argue with the officer. Politely ask what you can improve, wait a few months, and apply again with stronger financial or home-tie evidence.", 
    amharic: "የቪዛ ክልከላ - የቪዛ ማመልከቻዎ በኤምባሲው ውድቅ ሲደረግ።", 
    category: "Visa" 
  },
  { 
    term: "Embassy", 
    definition: "The official diplomatic representation of a country (like the US Embassy in Addis Ababa) where you go for your visa interview. Tip: Arrive at least 30 minutes early to your appointment and expect long security lines.", 
    amharic: "ኤምባሲ - የውጭ ሀገርን ወክሎ የሚሰራ እና የቪዛ ፈቃድ የሚሰጥ ይፋዊ መንግስታዊ ተቋም።", 
    category: "Visa" 
  },
  { 
    term: "Consulate", 
    definition: "A smaller branch of an embassy that handles minor diplomatic matters and often processes visas. Tip: Ensure you book your visa appointment at the correct consulate/embassy location designated for your region.", 
    amharic: "ቆንስላ (Consulate) - ከኤምባሲ ያነሰ እና በተለይ የቪዛ አገልግሎት የሚሰጥ ዲፕሎማሲያዊ ተቋም።", 
    category: "Visa" 
  },
  { 
    term: "Immigration Officer", 
    definition: "The government official who interviews you and decides whether to grant your visa. Tip: They are trained to detect lies through body language. Always maintain eye contact and speak confidently.", 
    amharic: "የኢሚግሬሽን መኮንን - የቪዛ ቃለ መጠይቅ የሚያደርግ እና የቪዛ ውሳኔ የሚሰጥ ባለስልጣን።", 
    category: "Visa" 
  },
  { 
    term: "DS-160", 
    definition: "The primary online non-immigrant visa application form required by the US government. Tip: Save your DS-160 'Application ID' immediately. If the page refreshes, you will lose all your progress without it.", 
    amharic: "ዲኤስ-160 (DS-160) - ለዩናይትድ ስቴትስ የቪዛ ማመልከቻ የሚሞላው ዋናው የመስመር ላይ ቅጽ።", 
    category: "Visa" 
  },
  { 
    term: "Travel History", 
    definition: "The record of other countries you have legally visited in the past. Tip: A strong travel history (even to neighboring African countries) shows the embassy that you respect visa laws and always return home.", 
    amharic: "የጉዞ ታሪክ - ተማሪው ቀደም ሲል ወደ ተለያዩ ሀገራት ያደረገው የጉዞ ማስረጃ እና ማህደር።", 
    category: "Visa" 
  },
  { 
    term: "Employment", 
    definition: "Secured, legal work either during your studies (On-Campus) or after graduation (OPT/CPT). Tip: International students usually cannot legally work off-campus during their first year without special permission.", 
    amharic: "የስራ ስምሪት - በህጋዊ መንገድ ተቀጥሮ መስራት እና ክፍያ ማግኘት።", 
    category: "Career" 
  },
  { 
    term: "Work Authorization", 
    definition: "The legal government permission required for an international student to work in the host country and earn money. Tip: Working 'under the table' without this authorization can result in immediate deportation and a lifetime ban.", 
    amharic: "የስራ ፈቃድ - ዓለም አቀፍ ተማሪዎች በሚማሩበት ሀገር ውስጥ ህጋዊ ስራ እንዲሰሩ የሚሰጥ መንግስታዊ ፈቃድ።", 
    category: "Career" 
  },
  { 
    term: "Job Market", 
    definition: "The current state of employment opportunities in a specific country or field. Tip: Choose a STEM (Science, Tech, Engineering, Math) major if you want the strongest leverage in the global job market.", 
    amharic: "የስራ ገበያ - በአንድ ሀገር ውስጥ ላለ ሙያ ያለው የስራ ፍላጎት እና አቅርቦት።", 
    category: "Career" 
  },
  { 
    term: "Career Path", 
    definition: "The long-term sequence of jobs you plan to take to reach your ultimate professional goal. Tip: Universities love applicants who have a clear, realistic career path rather than a vague 'I want to be successful' answer.", 
    amharic: "የስራ እና ሙያ ጉዞ - አንድ ግለሰብ የወደፊት ሙያዊ አላማውን ለማሳካት የሚከተለው መሰላል።", 
    category: "Career" 
  },
  { 
    term: "Volunteering", 
    definition: "Offering your time to help others or work for a non-profit organization without payment. Tip: True volunteering shows empathy; don't just do it for 3 days right before your application is due.", 
    amharic: "በጎ ፈቃድ (Volunteering) - ያለ ክፍያ ማህበረሰብን ለማገልገል ፍቃደኛ ሆኖ መስራት።", 
    category: "Activities" 
  },
  { 
    term: "Community Service", 
    definition: "Actions taken to directly improve the quality of life for the people in your local area. Tip: Highlight specific problems you solved in your community (like providing clean water or tutoring local kids).", 
    amharic: "የማህበረሰብ አገልግሎት - በአካባቢዎ ላሉ ሰዎች የሚሰጥ ቀጥተኛ እና በጎ እርዳታ።", 
    category: "Activities" 
  },
  { 
    term: "Impact", 
    definition: "The measurable difference you made during a project or leadership role. Tip: Always quantify your impact. Say 'Raised 10,000 Birr to feed 50 families' instead of 'Raised money for the poor'.", 
    amharic: "የፈጠረው ተጽዕኖ (Impact) - አንድ ተግባር በሰዎች ህይወት ላይ ያመጣው የሚታይ ለውጥ።", 
    category: "Activities" 
  },
  { 
    term: "Certificate", 
    definition: "An official document proving you completed a short course or mastered a specific skill (e.g., Coursera Graphic Design Certificate). Tip: These are great to attach to your resume to prove your hard technical skills.", 
    amharic: "የምስክር ወረቀት - አንድን አጭር ስልጠና ወይም ክፍለ ጊዜ ማጠናቀቅዎን የሚያሳይ ማስረጃ።", 
    category: "Activities" 
  },
  { 
    term: "LinkedIn", 
    definition: "A professional social media platform used globally for networking, finding internships, and showcasing your resume. Tip: Create your LinkedIn profile in Grade 11 and start connecting with alumni from the universities you want to attend.", 
    amharic: "ሊንክዲን (LinkedIn) - ሙያዊ ትስስር ለመፍጠር እና የስራ ልምድን ለማሳየት የሚያገለግል ዓለም አቀፍ ማህበራዊ ሚዲያ።", 
    category: "Career" 
  },
  { 
    term: "Hard Skills", 
    definition: "Specific, teachable abilities that can be defined and measured, such as coding, typing, accounting, or speaking a foreign language. Tip: Mention exact tools you know (like Python, Photoshop, or QuickBooks) on your resume.", 
    amharic: "የሙያ ክህሎቶች (Hard Skills) - በቀላሉ ሊለኩ እና ሊማሩ የሚችሉ እንደ ኮዲንግ ወይም ሒሳብ ያሉ ቴክኒካዊ እውቀቶች።", 
    category: "Basics" 
  },
  { 
    term: "Communication Skills", 
    definition: "A critical 'Soft Skill' involving your ability to clearly express complex ideas in writing and speech. Tip: The university interview and your personal statement are the primary ways they test this skill.", 
    amharic: "የመግባባት ክህሎት - ሀሳብን በግልፅ እና በሚስብ መልኩ መግለጽ እና የሌሎችን መስማት መቻል።", 
    category: "Basics" 
  },
  { 
    term: "Student-Faculty Ratio", 
    definition: "The number of students enrolled per every one professor at a university. Tip: A ratio like 10:1 means very small, personal classes. A ratio of 30:1 means massive lecture halls where the professor rarely knows your name.", 
    amharic: "የተማሪ እና መምህር ምጥጥን - ለአንድ መምህር ስንት ተማሪዎች እንዳሉ የሚያሳይ ቁጥር፤ ዝቅተኛ ሲሆን ይሻላል።", 
    category: "Metrics" 
  },
  { 
    term: "Diversity", 
    definition: "A campus environment that includes students from vastly different countries, races, religions, and economic backgrounds. Tip: Adding your Ethiopian perspective is highly valued because it naturally increases the campus diversity.", 
    amharic: "ብዝሃነት (Diversity) - ከተለያዩ ባህሎች፣ ሀይማኖቶች እና ሀገራት የመጡ ተማሪዎች ስብስብ።", 
    category: "Metrics" 
  },
  { 
    term: "Inclusion", 
    definition: "Policies and resources that ensure minority/international students feel welcomed, safe, and supported socially. Tip: Look for universities that feature dedicated 'International Student Support' offices to prove their inclusion.", 
    amharic: "አካታችነት (Inclusion) - ሁሉም ተማሪ ያለአድልዎ እኩል ተሳትፎ እና ድጋፍ እንዲያገኝ የሚደረግበት ስርዓት።", 
    category: "Metrics" 
  },
  { 
    term: "Campus Culture", 
    definition: "The overall 'vibe', traditions, and social atmosphere of a university. Some are 'Sports-heavy', while others are 'Artistic' or 'Intensely Academic'. Tip: Use YouTube vlogs made by current students to see what the culture is truly like.", 
    amharic: "የግቢ ባህል - የዩኒቨርሲቲው ተማሪዎች የየዕለት ህይወት፣ ባህሪ እና ማህበራዊ ዝንባሌ።", 
    category: "Metrics" 
  },
  { 
    term: "Climate", 
    definition: "The typical weather patterns in the city where the university is located. Tip: Don't underestimate this! Moving from Ethiopia to a severely freezing state like Minnesota requires serious adjustment and expensive winter clothing.", 
    amharic: "የአየር ንብረት - ዩኒቨርሲቲው በሚገኝበት አካባቢ ያለው የሙቀት ወይም የብርድ ሁኔታ።", 
    category: "Basics" 
  },
  { 
    term: "Safety", 
    definition: "The crime statistics and security protocols for a campus. Tip: In the US, every university is legally required to publish highly detailed 'Campus Crime Reports' on their websites—always check these before enrolling.", 
    amharic: "ደህንነት - በዩኒቨርሲቲው ግቢ እና አካባቢው ያለው የጥበቃ እና የሰላም ሁኔታ።", 
    category: "Metrics" 
  },
  { 
    term: "Financial Aid Package", 
    definition: "The final official combination of scholarships, grants, loans, and work-study completely outlining how much you have to pay. Tip: Wait until you receive this specific official document before deciding if a school is truly 'free' or too expensive.", 
    amharic: "የፋይናንስ ድጋፍ ጥቅል - ዩኒቨርሲቲው ለተማሪው የፈቀደውን የተቀናጀ የገንዘብ እርዳታ እና ብድር የሚያሳይ መግለጫ።", 
    category: "Financial" 
  },
  { 
    term: "Tuition Discount", 
    definition: "A direct reduction in the sticker price of the university purely to incentivize a good student to enroll. Tip: Private colleges use this heavily. They might offer a '$20,000 discount', but mathematically, the remaining $50,000 could still be unpayable.", 
    amharic: "የትምህርት ክፍያ ቅናሽ - ተማሪውን ለመሳብ ሲባል ዩኒቨርሲቲው በትምህርት ክፍያው ላይ የሚያደርገው ቀጥተኛ ቅናሽ።", 
    category: "Financial" 
  },
  { 
    term: "Financial Appeal", 
    definition: "A formal written request asking a university to reconsider giving you more money because their initial financial aid package was too low. Tip: You can only successfully appeal if you have proof of a change in your family's finances or a better offer from a competing school.", 
    amharic: "የፋይናንስ ይግባኝ - የተፈቀደው የገንዘብ እርዳታ አነስተኛ ከሆነ ዩኒቨርሲቲው በድጋሚ እንዲገመግመው የሚቀርብ ጥያቄ።", 
    category: "Financial" 
  },
  { 
    term: "Negotiation", 
    definition: "The process of trying to leverage your admission offers against one another to secure a better financial deal. Tip: Use a polite tone. Explain that 'School A' is your #1 choice, but 'School B' offered you more money, and ask if they can match it.", 
    amharic: "ድርድር - የተሻለ የገንዘብ እርዳታ ለማግኘት ከዩኒቨርሲቲው ጋር የሚደረግ ዘዴኛ ግንኙነት።", 
    category: "Financial" 
  },
  { 
    term: "Application Mistake", 
    definition: "Errors like choosing the wrong intended major, forgetting to upload a document, or having critical typos in an essay. Tip: Print your application on physical paper and read it out loud before you press submit—it's the best way to catch mistakes.", 
    amharic: "የማመልከቻ ስህተት - ፎርም ሲሞሉ ወይም ጽሁፍ ሲያዘጋጁ የሚሰሩ ትናንሽ ግን ዋጋ የሚያስከፍሉ ስህተቶች።", 
    category: "Risks" 
  },
  { 
    term: "Missing Documents", 
    definition: "When a required piece of paperwork (like an English test score or translation) has not reached the admissions office. Tip: Assume things will get lost on the internet. Check your portal relentlessly and have backup PDFs ready.", 
    amharic: "የጎደሉ ሰነዶች - ዩኒቨርሲቲው የጠየቃቸው እና ገና ያልደረሱት ወይም ያልተሟሉ ማስረጃዎች።", 
    category: "Risks" 
  },
  { 
    term: "Inconsistency", 
    definition: "When parts of your application contradict each other (e.g., your essay highlights intense poverty, but your ISFAA form shows massive bank savings). Tip: Admission officers review the application as a whole. Inconsistencies destroy trust and lead to automatic rejection.", 
    amharic: "የመረጃ አለመጣጣም (Inconsistency) - በማመልከቻ ላይ የሚሞሉ የተለያዩ መረጃዎች እርስ በእርስ ሲጋጩ።", 
    category: "Risks" 
  },
  { 
    term: "Fraudulent Agency", 
    definition: "A fake business or person that claims they can 'guarantee' you admission and a visa for a massive fee. Tip: No one can 'guarantee' a visa. If an agency writes fake documents for you, you will face a permanent lifetime ban from entering that country.", 
    amharic: "አታላይ ኤጀንሲ - የሀሰት ማረጋገጫዎችን እና ቪዛን በእርግጠኝነት እንሰጣለን ብለው ገንዘብ የሚቀበሉ ህገ-ወጥ ድርጅቶች።", 
    category: "Safety" 
  },
  { 
    term: "Misleading Information", 
    definition: "Data provided by predatory websites or agencies that incorrectly promise 'Easy Full Rides' or 'No Requirements needed'. Tip: Always cross-reference facts directly on the official `.edu` completely verified website of the university.", 
    amharic: "አሳሳች መረጃ - በተለያዩ ድረገፆች እና ሰዎች የሚነዙ የተሳሳቱ እና እውነት የሌላቸው ወሬዎች።", 
    category: "Safety" 
  },
  { 
    term: "Fake Offer Letter", 
    definition: "A forged admission document provided by scammers so they can charge you an 'Agency Success Fee'. Tip: Real universities always give you a dedicated online portal. If you can't log into a real `.edu` portal, the letter is completely fake.", 
    amharic: "የሀሰት የመግቢያ ደብዳቤ - በአታላይ ደላላዎች ተሰርቶ የሚቀርብ እና ህጋዊ ያልሆነ የመግቢያ (Acceptance) ደብዳቤ።", 
    category: "Safety" 
  },
  { 
    term: "Enrollment Deposit", 
    definition: "A non-refundable fee (usually $200–$500) you must pay to formally reserve your seat at a university after accepting their offer. Tip: Only pay ONE enrollment deposit. Paying multiple deposits is highly unethical and can result in all your offers being revoked.", 
    amharic: "የመመዝገቢያ ቅድመ ክፍያ - ተማሪው ዩኒቨርሲቲው በፈቀደለት ቦታ ላይ መማሩን ለማረጋገጥ የሚከፍለው አነስተኛ ገንዘብ።", 
    category: "Application" 
  },
  { 
    term: "Exchange Program", 
    definition: "A highly formalized program where a student studies at a partner university in a different country for one semester or a year while maintaining enrollment at their home school. Tip: Consider using opportunities like 'Erasmus+' for fully-funded exchange programs if studying in Europe.", 
    amharic: "የልውውጥ ፕሮግራም - አንድ ተማሪ ከዋናው ትምህርት ቤቱ ጋር ባለው ስምምነት መሰረት ለተወሰነ ጊዜ በሌላ ሀገር ሄዶ የሚማርበት ስርዓት።", 
    category: "Global" 
  },
  { 
    term: "Summer Program", 
    definition: "Intensive 2-8 week academic or leadership camps usually held during high school summer breaks. Tip: Highly prestigious summer camps (like MIT RSI) are free and essentially guarantee admission, but paid 'pay-to-play' camps at Ivy League campuses often mean nothing for your college application.", 
    amharic: "የክረምት ፕሮግራም - በክረምት ዕረፍት ወቅት የሚሰጡ ልዩ አጫጭር እና ጠቃሚ የትምህርት ወይም የክህሎት ስልጠናዎች።", 
    category: "Global" 
  },
  { 
    term: "Study Abroad Program", 
    definition: "Often similar to an exchange program, where you spend a semester in a foreign country absorbing a new culture while earning credits toward your degree. Tip: Your financial aid usually perfectly travels with you during university-approved study abroad trips.", 
    amharic: "ውጭ ሀገር መማር - በዩኒቨርሲቲው ቆይታ ውስጥ ለተወሰነ ጊዜ (ለምሳሌ አንድ ሴሚስተር) ወደ ሌላ ሀገር ሄዶ ትምህርትን መከታተል።", 
    category: "Global" 
  },
  { 
    term: "Exchange Student", 
    definition: "A student who participates in a formal domestic or international exchange. Tip: Serving as a 'Buddy' for an incoming exchange student at your high school looks amazing on your resume's intercultural awareness section.", 
    amharic: "የልውውጥ ተማሪ - በልውውጥ ፕሮግራም ምክንያት ጊዜያዊ ትምህርቱን እየተከታተለ ያለ ተማሪ።", 
    category: "Global" 
  },
  { 
    term: "Diversity Factor", 
    definition: "The unique non-academic traits you bring to a campus, such as coming from a deeply rural background or being the very first to leave your region. Tip: Elite schools don't just want smart people—they want a highly diverse, interesting 'dinner table'. You are part of that.", 
    amharic: "የብዝሃነት ጠቀሜታ - ከተለየ ባህል ወይም ማህበረሰብ መምጣትዎ ዩኒቨርሲቲው ውስጥ የሚፈጥረውን አዎንታዊ አስተዋፅኦ የሚያመለክት ነው።", 
    category: "Strategy" 
  },
  { 
    term: "Rural Background Advantage", 
    definition: "Universities actively look for highly talented students from extremely rural or heavily disadvantaged areas because it proves tremendous resilience. Tip: If you didn't have access to heavy AP classes because of where you live, admission officers will judge you fairly based 'in the context' of your environment.", 
    amharic: "የገጠር አስተዳደግ ጠቀሜታ - ዩኒቨርሲቲዎች ከገጠር ለሚመጡ ጠንካራ እና ትልቅ አቅም ላላቸው ተማሪዎች የሚሰጡት የተለየ ትኩረት እና እውቅና።", 
    category: "Strategy" 
  },
  { 
    term: "Long-Term Planning", 
    definition: "The intensely strategic process of mapping out your academic profile, tests, and essays over a 2 to 3-year timeline. Tip: Do not wait until Grade 12! The most successful scholarship winners began their club leadership strategies in Grade 9.", 
    amharic: "የረጅም ጊዜ እቅድ - ማመልከቻን ለማሳካት የሚያስችሉ ስራዎችን (እንደ ፈተና እና በጎ ፈቃድ) ከዓመታት በፊት ጀምሮ በጥንቃቄ ማቀድ።", 
    category: "Strategy" 
  },
  { 
    term: "Application Narrative", 
    definition: "The cohesive 'story' that your entire application tells. Every single essay, recommendation, and activity should tightly point toward the same core message about who you are. Tip: The best narratives are simple. E.g. 'I am an Ethiopian innovator who uses code to solve agricultural problems.'", 
    amharic: "የማመልከቻው ታሪክ - ተማሪው በማመልከቻው ውስጥ የሚያጎላው ዋና እና ተከታታይ የሆነ ማንነቱን የሚገልፅ ጭብጥ።", 
    category: "Strategy" 
  },
  { 
    term: "Ranking", 
    definition: "Lists published by companies (like US News) that order universities from 'Best' to 'Worst'. Tip: Avoid obsession with rankings. A heavily ranked #40 engineering school is usually infinitely better for an aspiring engineer than the aggressively ranked #1 overarching 'liberal arts' school.", 
    amharic: "የደረጃ አሰጣጥ (Ranking) - የተለያዩ አጥኚ ድርጅቶች ዩኒቨርሲቲዎችን በላቀነታቸው የሚመድቡበት ቅደም ተከተል።", 
    category: "Metrics" 
  },
  { 
    term: "Employment Rate", 
    definition: "The strict percentage of graduating students who actively secure a job in their chosen field within precisely 6 months of graduation. Tip: This is vastly more important than 'Rankings'. High employment rates prove the university's degree commands immense respect from local employers.", 
    amharic: "የስራ ስምሪት መጠን - ተማሪዎች ከተመረቁ በኋላ ባሉት 6 ወራት ውስጥ ስራ የማግኘታቸው መቶኛ።", 
    category: "Metrics" 
  },
  { 
    term: "Alumni Network", 
    definition: "The massive community of past graduates from a specific university. Tip: An intensely loyal alumni network (like Harvard or Dartmouth) can literally guarantee your job interviews just because you share the exact same university background.", 
    amharic: "የቀድሞ ተማሪዎች ትስስር (Alumni Network) - ከተመሳሳይ ዩኒቨርሲቲ የተመረቁ ሰዎች ያላቸው ህብረት እና የሚፈጥሩት የስራ እድል።", 
    category: "Metrics" 
  },
  { 
    term: "Scholarship Database", 
    definition: "Specialized websites or internal tools used relentlessly to hunt for external funding. Tip: Avoid using Google mechanically; use deeply targeted databases specifically filtered for 'International Students studying in [Country]'.", 
    amharic: "የስኮላርሺፕ ቋት - የተለያዩ የነፃ ትምህርት እድሎችን በተደራጀ መልኩ ፈልጎ ለማግኘት የሚያስችል መረጃ ማዕከል።", 
    category: "Tools" 
  },
  { 
    term: "University Search Engine", 
    definition: "Deep filtering tools (like CollegeBoard BigFuture) that let you actively search for incredibly specific needs, like 'Universities in New York offering Full Financial Aid for International Biology Majors'. Tip: These tools save you hundreds of hours of manual website searching.", 
    amharic: "የዩኒቨርሲቲ መፈለጊያ (Search Engine) - አንድ ተማሪ ለፍላጎቱ የሚመጥን ዩኒቨርሲቲ ለማግኘት የሚጠቀምበት የድረገፅ ቴክኖሎጂ።", 
    category: "Tools" 
  },
  { 
    term: "Opportunity Platforms", 
    definition: "Aggregator tools or local networks (like Zemen Scholar) that specifically curate high-value, fully vetted mentorship, learning, and international application resources for students. Tip: Check platform boards weakly—highly competitive resources close quickly.", 
    amharic: "የእድል ማዕከላት - ትምህርታዊ እና ስራ ነክ እድሎችን፣ ክፍት ቦታዎችን እና መረጃዎችን የሚያቀርቡ መድረኮች (እንደ ዘመን ስኮላር)።", 
    category: "Tools" 
  },

  // NEW ADDITIONS FROM PART THREE AUDIT
  { 
    term: "Institutional Fit", 
    definition: "How well a student's academic goals, personality, and values perfectly align with a specific university's mission and campus culture. Tip: Elite schools reject thousands of perfect GPA students every year simply because they are not a 'good fit' for the school's unique vibe.", 
    amharic: "የተቋም ተስማሚነት - የተማሪው ማንነት፣ አላማ እና ባህሪ ከዩኒቨርሲቲው አጠቃላይ ባህል እና ፍላጎት ጋር ያለው መጣጣም።", 
    category: "Strategy" 
  },
  { 
    term: "Applicant Pool", 
    definition: "The total group of students applying to a specific university in the same year. Tip: You are not judged against a perfect standard; you are only judged against the other students in your specific applicant pool (often separated by country or region).", 
    amharic: "የአመልካቾች ስብስብ - በአንድ ዓመት ውስጥ ለአንድ ዩኒቨርሲቲ የሚያመለክቱ አጠቃላይ ተማሪዎች ብዛት፣ በተለይም ከተመሳሳይ ሀገር።", 
    category: "Metrics" 
  },
  { 
    term: "Admission Committee", 
    definition: "The group of university officials who read applications, debate your profile, and vote on whether to admit or reject you. Tip: These are normal human beings, not robots. Write your essays to connect with human emotions.", 
    amharic: "የመግቢያ ኮሚቴ - ማመልከቻዎችን አጥንቶ ተማሪን ለመቀበል ወይም ላለመቀበል የመጨረሻ ውሳኔ የሚሰጥ የባለሙያዎች ስብስብ።", 
    category: "Application" 
  },
  { 
    term: "Review Cycle", 
    definition: "The timeline over which applications are read, scored, and decided upon. Tip: Applying early often places you in an earlier review cycle when the committee is less tired and has more scholarship money available.", 
    amharic: "የግምገማ ዑደት - ማመልከቻዎች የሚነበቡበት፣ የሚመዘኑበት እና ውሳኔ የሚሰጥበት የጊዜ ሰሌዳ።", 
    category: "Application" 
  },
  { 
    term: "File Review", 
    definition: "The physical or digital process where an admissions officer opens your application and reads every single document you submitted. Tip: An average file review takes only 8 to 12 minutes! Your profile must be instantly understandable.", 
    amharic: "ውሳኔ ሰጭ ግምገማ - የዩኒቨርሲቲው ባለሙያ የተማሪውን ሙሉ ማህደር እና ማመልከቻ አንብቦ የሚመረምርበት ሂደት።", 
    category: "Application" 
  },
  { 
    term: "Reader Notes", 
    definition: "The private comments an admissions officer writes directly on your file after reading it (e.g., 'Incredible essay, but weak math scores'). Tip: Under US law, you can actually request to see these notes after you enroll at the university via a FERPA request.", 
    amharic: "የአንባቢ ማስታወሻ - ማመልከቻውን ያነበበው ባለስልጣን በተማሪው ማህደር ላይ የሚፅፈው የግል አስተያየት እና ምልክት።", 
    category: "Application" 
  },
  { 
    term: "Committee Decision", 
    definition: "The final, binding vote taken by the admission team after debating your file. Tip: Once this decision is made, it is incredibly rare for it to be overturned unless a massive administrative error occurred.", 
    amharic: "የኮሚቴ ውሳኔ - ሙሉው ቡድን ከተከራከረ በኋላ ተማሪውን በተመለከተ የሚሰጠው የመጨረሻ እና የማይቀለበስ ዉሳኔ።", 
    category: "Application" 
  },
  { 
    term: "Enrollment Target", 
    definition: "The exact number of students a university needs to enroll to hit their financial and academic goals for the year. Tip: If the target is 1,000 students, they might admit 2,500 knowing that many will choose to go elsewhere.", 
    amharic: "የምዝገባ ኢላማ - ዩኒቨርሲቲው ገቢውን እና የትምህርት ጥራቱን ለማስጠበቅ በአንድ ዓመት ውስጥ ለመቀበል ያቀደው ትክክለኛ የተማሪዎች ብዛት።", 
    category: "Strategy" 
  },
  { 
    term: "Class Shaping", 
    definition: "The meticulous process where universities select a perfectly balanced class—ensuring they have enough musicians, engineers, international students, and athletes. Tip: Being well-rounded is good, but being the 'missing piece' in their structured class shape is better.", 
    amharic: "የክፍል ቅርፅ አወቃቀር - ዩኒቨርሲቲዎች የተለያዩ ተሰጥኦ ያላቸውን እና ከተለያዩ ዳራዎች የመጡ ተማሪዎችን በጥንቃቄ መርጠው ሚዛናዊ ማህበረሰብ የሚፈጥሩበት ጥበብ።", 
    category: "Strategy" 
  },
  { 
    term: "Strategic Admission", 
    definition: "Accepting a student not just because they are smart, but because they serve a specific strategic goal for the university (e.g., expanding into a new geographic region). Tip: Ethiopian students inherently offer geographic diversity to US colleges.", 
    amharic: "ስልታዊ ቅበላ - ተማሪን ከውጤት ባለፈ ዩኒቨርሲቲው ላለው ልዩ እና ስልታዊ አላማ ብሎ ሲቀበል።", 
    category: "Strategy" 
  },
  { 
    term: "Competitive Applicant", 
    definition: "A student whose GPA, test scores, and profile perfectly match the middle 50% or top 25% of the university's historical acceptance data. Tip: If your scores are below the middle 50%, you are a 'Reach' applicant, not quite a competitive one.", 
    amharic: "ተፎካካሪ አመልካች - ውጤቱ እና መገለጫው ዩኒቨርሲቲው ከሚቀበላቸው አማካይ ተማሪዎች ጋር እኩል የሆነ ወይም የሚበልጥ ጠንካራ ተማሪ።", 
    category: "Application" 
  },
  { 
    term: "Academic Rigor", 
    definition: "The absolute difficulty of the classes you took in high school. Tip: Taking 5 easy subjects and getting an A is often viewed as MUCH worse than taking 5 incredibly hard subjects and getting a mix of A's and B's.", 
    amharic: "የትምህርት አቅም እና ክብደት - ተማሪው በሁለተኛ ደረጃ ትምህርት ቤቱ የወሰዳቸው የትምህርት አይነቶች ያላቸው የከበደ ጥልቀት።", 
    category: "Academics" 
  },
  { 
    term: "Contextual Evaluation", 
    definition: "When admission officers judge your achievements strictly within the context of your environment. Tip: If your school in Ethiopia did not offer AP classes, you will not be penalized for not taking them because of contextual evaluation.", 
    amharic: "በነባራዊ ሁኔታ ላይ የተመሰረተ ግምገማ - ተማሪውን ከሚኖርበት አካባቢ፣ ካለው አቅርቦት እና ማህበራዊ ሁኔታ አንፃር መመዘን።", 
    category: "Application" 
  },
  { 
    term: "Overqualification", 
    definition: "When a student's profile is so incredibly strong that a mid-tier university assumes the student will refuse their offer to go to Harvard or MIT instead. Tip: This immediately leads to 'Tufts Syndrome' and results in a surprising rejection.", 
    amharic: "ከልክ ያለፈ ብቃት - የተማሪው ውጤት ከዩኒቨርሲቲው ደረጃ በጣም የላቀ በመሆኑ ዩኒቨርሲቲው 'አይመጣም' ብሎ ሲያስብ።", 
    category: "Strategy" 
  },
  { 
    term: "Underqualification", 
    definition: "Failing to meet the absolute minimum academic or financial benchmarks required by the university. Tip: Don't waste application fees on schools where you are severely underqualified unless there is a massive compelling personal story protecting you.", 
    amharic: "መሰረታዊ ብቃት ማነስ - የተማሪው መገለጫ ዩኒቨርሲቲው ካስቀመጠው ዝቅተኛ የመግቢያ መስፈርት በታች ሲሆን።", 
    category: "Strategy" 
  },
  { 
    term: "Personal Narrative", 
    definition: "The core, central story you choose to tell about your life, linking your past struggles to your future collegiate ambitions. Tip: Your narrative should be visible in your essay, your activities, AND your recommendation letters.", 
    amharic: "የግል ታሪክ - ተማሪው ስለ ማህበራዊ ዳራው፣ ስላጋጠመው ፈተና እና የወደፊት ህልሙ በተቀናጀ መልኩ የሚያቀርበው ጭብጥ።", 
    category: "Writing" 
  },
  { 
    term: "Positioning Strategy", 
    definition: "Deciding exactly how you want the admission committee to view you (e.g., 'The Environmental Scientist' vs 'The Business Leader'). Tip: You cannot be everything at once. Pick one strategic position and commit to it deeply.", 
    amharic: "የአቀራረብ ስልት - ኮሚቴው እንዴት እንዲያይዎት እንደሚፈልጉ መወሰን እና ማመልከቻዎን በዚያ ዙሪያ መገንባት።", 
    category: "Strategy" 
  },
  { 
    term: "Unique Angle", 
    definition: "The specific detail about your life that absolutely no one else in the applicant pool possesses. Tip: 'I love computer science' is not an angle. 'I built a coding system to track local crop harvests in my village' is a highly unique angle.", 
    amharic: "ልዩ አቅጣጫ - ከተለመደው የአመልካቾች ታሪክ ወጣ ያለ እና እርስዎን ብቻ የሚገልፅ አዲስ የትኩረት ነጥብ።", 
    category: "Writing" 
  },
  { 
    term: "Value Proposition", 
    definition: "What you specifically bring to the university campus in exchange for their scholarship money. Tip: Always answer the invisible question: 'Why should we pay hundreds of thousands of dollars to bring you here?'", 
    amharic: "እሴት ማቅረብ - ዩኒቨርሲቲው ለተማሪው ከሚያደርገው ድጋፍ አንፃር ተማሪው ለዩኒቨርሲቲው ማህበረሰብ የሚመልሰው አስተዋፅኦ።", 
    category: "Strategy" 
  },
  { 
    term: "Differentiation", 
    definition: "The active process of making yourself completely distinct from thousands of other smart, qualified students globally. Tip: Perfect grades do not differentiate you—your unique passions and community impact do.", 
    amharic: "መለየት (Differentiation) - ራስን ከሌሎች በመቶ ሺዎች ከሚቆጠሩ ጎበዝ ተማሪዎች ልዩ አድርጎ የማቅረብ ስራ።", 
    category: "Strategy" 
  },
  { 
    term: "Identity Framing", 
    definition: "Controlling the narrative of how your culture, gender, or incredibly specific background has shaped your worldview. Tip: Framing your Ethiopian identity as a powerful source of resilience is a brilliant application move.", 
    amharic: "ማንነትን መቅረፅ - ባህልዎ ወይም ማህበራዊ ዳራዎ አስተሳሰብዎን እንዴት እንደቀረፀው በአዎንታዊ መልኩ መግለፅ።", 
    category: "Strategy" 
  },
  { 
    term: "Impact Statement", 
    definition: "A deeply compressed 1-2 sentence summary of exactly what you achieved in a project, used heavily on resumes. Tip: Always follow the formula: 'Accomplished [X] as measured by [Y] by doing [Z]'.", 
    amharic: "የተጽዕኖ መግለጫ - አንድ ተማሪ የሰራውን ስራ አጭር፣ ግልፅ እና ማስረጃ ባለው መልኩ የሚያቀርብበት ዓረፍተ ነገር።", 
    category: "Writing" 
  },
  { 
    term: "Personal Brand Statement", 
    definition: "A defining 'tagline' the admissions officer uses to instantly summarize you to the rest of the committee. Tip: E.g., 'She is the debating champion who codes websites for local clinics.'", 
    amharic: "ስብዕናን የሚገልጽ ዐረፍተ-ነገር - የአመልካቹን ጠንካራ መለያ ባህሪዎች በአጭሩ እና በሚስብ መልኩ የሚገልፅ መፈክራዊ ፅሁፍ።", 
    category: "Strategy" 
  },
  { 
    term: "Thematic Consistency", 
    definition: "Ensuring every single part of your application supports the same fundamental story without contradictions. Tip: If you say you love literature, but have zero books or writing clubs on your activity list, your consistency is broken.", 
    amharic: "የጭብጥ ወጥነት - በማመልከቻው ውስጥ ያሉት ድርሰቶች፣ 추천 ደብዳቤዎች እና ተግባራት ሁሉም ወደ አንድ ማዕከላዊ ታሪክ የሚያመሩ መሆናቸው።", 
    category: "Strategy" 
  },
  { 
    term: "Narrative Arc", 
    definition: "The structured journey a well-written personal essay follows—usually from struggle, to realization, to growth. Tip: Don't just complain about a problem in an essay; the arc must end with how you powerfully overcame it.", 
    amharic: "የታሪክ ጉዞ - ፅሁፍ ከችግር ጀምሮ ወደ መፍትሄ እና የእድገት ነጥብ የሚያደርገው ተከታታይ የስነ-ፅሁፍ ጉዞ።", 
    category: "Writing" 
  },
  { 
    term: "Emotional Depth", 
    definition: "The raw vulnerability shown in an essay that makes the admissions officer feel personally connected to you. Tip: It means admitting a real weakness or failure, rather than pretending you have always been historically perfect.", 
    amharic: "ስሜታዊ ጥልቀት - አንባቢን በሚነካ እና እውነተኛ የህይወት ፈተናን በሚያንፀባርቅ መልኩ ሀሳብን የመግለፅ ብቃት።", 
    category: "Writing" 
  },
  { 
    term: "Intellectual Curiosity", 
    definition: "A deep, unprompted desire to learn things outside of the required school curriculum purely for the joy of knowing. Tip: Elite colleges value this above almost everything else. Prove it by mentioning independent projects or incredibly niche books you read.", 
    amharic: "የዕውቀት ጥማት - ከትምህርት ቤት ግዴታ ውጭ በራስ ተነሳሽነት አዳዲስ ነገሮችን የማወቅ እና የማጥናት ከፍተኛ ፍላጎት።", 
    category: "Academics" 
  },
  { 
    term: "Authentic Voice", 
    definition: "Writing an essay that genuinely sounds like an intelligent 18-year-old, not a 50-year-old professor holding a dictionary. Tip: Do not use a thesaurus to replace every simple word. Write exactly how you natively speak when exploring a deep topic.", 
    amharic: "እውነተኛ ድምፅ - ድርሰትን ያለአላስፈላጊ ጌጥ፣ በራስ ተፈጥሯዊ የቋንቋ እና የአስተሳሰብ ዘይቤ መፃፍ።", 
    category: "Writing" 
  },
  { 
    term: "Reflection Depth", 
    definition: "Analyzing precisely WHY an event mattered, not just WHAT the event was. Tip: 80% of an essay should be deep reflection on your internal feelings, and only 20% should be the action that caused it.", 
    amharic: "ጥልቅ ማስተንተን - አንድ ድርጊት ምን እንደሆነ ብቻ ሳይሆን በህይወት ወይም አመለካከት ላይ ለምን ለውጥ እንዳመጣ በጥልቀት ማብራራት።", 
    category: "Writing" 
  },
  { 
    term: "Self-Awareness", 
    definition: "The ability to accurately view your own strengths, flaws, and specific place in the broader world. Tip: Admitting you were wrong about something in an essay shows massive self-awareness.", 
    amharic: "ራስን ማወቅ - የግል ጥንካሬን እና ድክመትን በሚገባ ተረድቶ፣ ለለውጥ ዝግጁ መሆንን ማሳየት።", 
    category: "Basics" 
  },
  { 
    term: "Insight Development", 
    definition: "Taking a very simple daily observation and expanding it into a deep philosophical or academic insight. Tip: An essay about watching a spider build a web can easily become a profound insight into structural engineering and patience.", 
    amharic: "እይታን ማሳደግ - ተራ የሚመስልን ክስተት ወደ ትልቅ የህይወት ፍልስፍና እና ትምህርት መቀየር።", 
    category: "Writing" 
  },
  { 
    term: "Essay Cohesion", 
    definition: "How well the paragraphs in a writing sample literally stick together and transition smoothly into the main thesis. Tip: A cohesive essay feels like one continuous, unshakeable thought from the first sentence to the last.", 
    amharic: "የፅሁፍ መስተጋብር - በድርሰት ውስጥ ያሉ አንቀፆች ሳይቆራረጡ እና ሀሳባቸው ሳይበተን በቀላሉ የሚተሳሰሩበት ሁኔታ።", 
    category: "Writing" 
  },
  { 
    term: "Topic Selection", 
    definition: "The immensely critical strategic choice of what exact subject to write your personal statement on. Tip: The best topics are completely 'mundane' everyday things that reveal a massive truth about your hidden personality.", 
    amharic: "የርዕስ ምርጫ - ለድርሰት የሚሆን ትክክለኛ፣ የሚስብ እና የተማሪውን ማንነት በደንብ ሊያሳይ የሚችል ሀሳብ መምረጥ።", 
    category: "Writing" 
  },
  { 
    term: "Overused Topics", 
    definition: "Subjects that admission officers read thousands of times a week (e.g., scoring the winning goal in sports, or going on a mission trip). Tip: If you must write about an overused topic, your specific 'angle' must be incredibly unique to survive.", 
    amharic: "በብዛት የተዘወተሩ ርዕሶች - ለኮሚቴው አሰልቺ የሆኑ እና ብዙ አመልካቾች የሚፅፉባቸው የተለመዱ ታሪኮች (ለምሳሌ የስፖርት ድል)።", 
    category: "Writing" 
  },
  { 
    term: "Essay Strategy", 
    definition: "Planning out exactly which specific personality traits each supplemental essay will cover so you don't accidentally repeat yourself. Tip: Map it out: Essay 1 covers Leadership, Essay 2 covers Intellectual Curiosity, Essay 3 covers Empathy.", 
    amharic: "የድርሰት ስልት - እያንዳንዱ አጭር ድርሰት የተማሪውን የተለየ ባህሪ እንዲያሳይ በጥንቃቄ ማቀድ እና መከፋፈል።", 
    category: "Writing" 
  },
  { 
    term: "Structural Flow", 
    definition: "The mechanical rhythm of your sentences in an essay. Tip: Read your essay aloud. If you physically run out of breath reading a sentence, your structural flow is broken and the sentence is far too long.", 
    amharic: "የአወቃቀር ፍሰት - አንባቢ ሳይሰለች እና ሀሳብ ሳይቋረጥበት ፅሁፉን በተረጋጋ ሁኔታ እንዲያነብ የሚረዳ የቃላት እና የአንቀፅ አደራደር።", 
    category: "Writing" 
  },
  { 
    term: "Student Profile", 
    definition: "The complete, overarching summary of who you are as an applicant, encompassing your grades, tests, and entire personality. Tip: Always ask yourself: 'If I had 30 seconds to describe my student profile, what are the top 3 bullet points?'", 
    amharic: "የተማሪ መገለጫ - የተማሪው ውጤት፣ ስብዕና እና ማህበራዊ ተሳትፎ የተካተተበት አጠቃላይ ገፅታ።", 
    category: "Strategy" 
  },
  { 
    term: "Academic Profile", 
    definition: "The strict, numbers-based side of your application—specifically your absolute GPA, ranking, AP/IB courses, and SAT/ACT scores. Tip: A weak academic profile cannot easily be saved by a strong essay at Top 20 universities.", 
    amharic: "አካዳሚያዊ መገለጫ - ዩኒቨርሲቲው የሚመለከተው ጥብቅ የውጤት፣ የደረጃ እና የፈተናዎች ስብስብ።", 
    category: "Academics" 
  },
  { 
    term: "Holistic Profile", 
    definition: "A complete profile balancing high academic achievements directly with profound personal character and community impact. Tip: Schools like Stanford strictly demand a 'Holistic Profile', refusing to admit 'Grade-obsessed robots'.", 
    amharic: "ሁለንተናዊ መገለጫ - ከትምህርት ቤት ውጤት ጋር ሰብዓዊነትን እና ክህሎትን አጣምሮ የያዘ የተሟላ ስብዕና።", 
    category: "Strategy" 
  },
  { 
    term: "Spike", 
    definition: "A highly intense, specialized superiority in one incredibly specific area (e.g., an internationally ranked math competitor). Tip: MIT and Ivy League schools aggressively prefer students with massive 'Spikes' over generally 'well-rounded' students.", 
    amharic: "ልዩ አቅም (Spike) - በአንድ የተለየ ትምህርት ወይም ክህሎት ላይ ያለ ከፍተኛ እና ዓለም አቀፍ ደረጃ ያለው የበላይነት።", 
    category: "Strategy" 
  },
  { 
    term: "Well-Rounded Student", 
    definition: "A student who is 'pretty good' at everything (e.g., B+ average, plays one sport, in one club) but definitively master of nothing. Tip: Being completely well-rounded is actually a massive disadvantage at top-tier elite universities.", 
    amharic: "ሁለገብ ተማሪ - በሁሉም ነገር ጥሩ የሆነ ነገር ግን በአንድ የተለየ ነገር ላይ የላቀ ብቃት የሌለው ተማሪ።", 
    category: "Strategy" 
  },
  { 
    term: "Portfolio Strength", 
    definition: "The visual or written body of specific work you have accumulated (art pieces, published apps, heavily researched papers). Tip: Include a link to an online portfolio (like a GitHub or Behance) in the 'Additional Info' section.", 
    amharic: "የስራ ክምችት ጥንካሬ - ተማሪው ያዘጋጃቸው የጥበብ፣ የሶፍትዌር ወይም የምርምር ስራዎች ጥራት እና ብዛት።", 
    category: "Strategy" 
  },
  { 
    term: "Activity Depth", 
    definition: "How deeply committed you are to an extracurricular activity over an extended duration. Tip: 4 continuous years of intense dedication to ONE local charity beats 1 week of volunteering at 10 different random clubs.", 
    amharic: "የክህሎት ጥልቀት - በአንድ ማህበራዊ ተግባር ወይም ክበብ ውስጥ ለረጅም ጊዜ የቆየ እና ትልቅ ለውጥ ያመጣ ተሳትፎ።", 
    category: "Activities" 
  },
  { 
    term: "Leadership Impact", 
    definition: "The exact, measurable results of your time managing a team or project. Tip: Being 'President' is just a title. Leadership Impact is proving you doubled the club's membership and raised $5,000 for local schools during your presidency.", 
    amharic: "የአመራር ተጽዕኖ - በቡድን መሪነት ቦታ ላይ ሆኖ ያመጣው ግልፅ፣ የሚታይ እና የሚለካ ውጤት።", 
    category: "Activities" 
  },
  { 
    term: "Initiative Ownership", 
    definition: "Starting something completely from scratch, such as founding a brand new debate club when your school refused to fund one. Tip: Universities incredibly respect founders because it proves they are fearless self-starters.", 
    amharic: "የፈጠራ ባለቤትነት - የሌሎችን መንገድ ከመከተል ይልቅ አዲስ ክበብ፣ ድርጅት ወይም ፕሮጀክት በራስ አነሳሽነት መፍጠር።", 
    category: "Activities" 
  },
  { 
    term: "Tier System", 
    definition: "The informal ranking of extracurriculars, where Tier 1 refers to intense international/national achievements, and Tier 4 refers to simple local school club attendance. Tip: Aim to have at least one solid Tier 2 (State/National level) activity to be highly competitive.", 
    amharic: "የእንቅስቃሴ ደረጃ (Tier System) - ማህበራዊ ተሳትፎዎችን ከዓለም አቀፍ (Tier 1) እስከ ጓዳዊ (Tier 4) የሚመድብበት ስርዓት።", 
    category: "Activities" 
  },
  { 
    term: "Impact Level", 
    definition: "The profound magnitude of effect your actions had—did you alter your school, your specific city, or your entire home country? Tip: Even local impact counts heavily if the depth of the change was transformative to the people involved.", 
    amharic: "የተጽዕኖ ደረጃ - ያደረጉት አስተዋፅኦ የተሰማበት ርቀት፤ በትምህርት ቤት፣ በከተማ ወይስ በሀገር አቀፍ ደረጃ?።", 
    category: "Activities" 
  },
  { 
    term: "Leadership Tier", 
    definition: "The rank of leadership held (e.g., National Founder vs Local Assistant Secretary). Tip: Don't artificially inflate your title on the application; admission officers cross-check leadership validity with your school counselor.", 
    amharic: "የአመራር እርከን - የተማሪው የኃላፊነት ደረጃ (ከአገር አቀፍ መሪ እስከ ተራ አስተባባሪ)።", 
    category: "Activities" 
  },
  { 
    term: "Participation vs Leadership", 
    definition: "The critical difference between just sitting in a chair at club meetings (Participation) versus actively directing the club's entire future (Leadership). Tip: Move heavily from participation to leadership by Grade 11.", 
    amharic: "ተሳትፎ እና አመራር - በክበብ ውስጥ ዝም ብሎ ተገኝቶ ከማዳመጥ እና ክበቡን በሃላፊነት ከመርታት መካከል ያለው ትልቅ ልዩነት።", 
    category: "Activities" 
  },
  { 
    term: "Scale of Impact", 
    definition: "The absolute quantitative reach of your work (e.g., reaching 100 students vs reaching 10,000 students via app integration). Tip: Use hard data numbers whenever discussing the scale of your impact.", 
    amharic: "የተጽዕኖ መጠን - ስራዎ ስንት ሰዎችን ተደራሽ እንዳደረገ እና ምን ያህል ህይወትን እንደለወጠ በቁጥር የሚሰላ መለኪያ።", 
    category: "Activities" 
  },
  { 
    term: "Sustainability", 
    definition: "Whether the specific project you built will actively survive and continue to operate after you leave for college. Tip: Proving that you trained younger students to take over your club flawlessly proves ultimate leadership sustainability.", 
    amharic: "ቀጣይነት (Sustainability) - ተማሪው መስርቶት የነበረው በጎ ተግባር ወይም ክበብ እሱ ዩኒቨርሲቲ ከገባ በኋላም ሳይፈርስ የመቀጠል አቅም።", 
    category: "Activities" 
  },
  { 
    term: "Skill Acquisition", 
    definition: "The rapid, intentional process of learning a highly valuable, marketable technical or soft skill alongside your regular high school studies. Tip: Dedicate 1 hour every single weekend to an online course to completely master a new skill by graduation.", 
    amharic: "ክህሎትን መቅሰም - ከመደበኛ ትምህርት ጎን ለጎን ሆን ብሎ ጠቃሚ የሆኑ ቴክኒካዊ እውቀቶችን የማዳበር ሂደት።", 
    category: "Career" 
  },
  { 
    term: "Certification Pathway", 
    definition: "A structured series of professional exams (like CompTIA, AWS, or Google Pro) proving global competency in a field. Tip: These certifications are heavily respected by university admissions as incredible proof of your self-learning dedication.", 
    amharic: "የምስክር ወረቀት ማግኛ መንገድ - አንድን ሙያ በዓለም አቀፍ ደረጃ ለማረጋገጥ የሚወሰዱ ተከታታይ የኦንላይን ፈተናዎች እና ስልጠናዎች።", 
    category: "Career" 
  },
  { 
    term: "Career Alignment", 
    definition: "When your stated major intricately matches the specific extracurriculars you have spent years doing. Tip: If you say you want to study Computer Science but all your activities are strictly poetry and dance, your alignment is fundamentally flawed.", 
    amharic: "ከሙያ ጋር ማጣመር - ለዩኒቨርሲቲ ያመለከቱበት የትምህርት ዘርፍ እና በሁለተኛ ደረጃ ት/ቤት የነበረዎት ተሳትፎ እርስ በእርስ መደጋገፍ።", 
    category: "Career" 
  },
  { 
    term: "Professional Exposure", 
    definition: "Real-world experience gained deeply through heavily shadowing professionals, attending intense industry conferences, or completing corporate internships. Tip: Cold-email local businesses in Addis Ababa asking if you can 'shadow' them for a weekend.", 
    amharic: "የሙያ ትውውቅ - ከተለያዩ ባለሙያዎች ጋር በመገናኘት፣ ጉባኤዎችን በመታደም እና ስራዎችን በመጎብኘት የሚገኝ እውነተኛ የስራ ዓለም ልምድ።", 
    category: "Career" 
  },
  { 
    term: "Industry Insight", 
    definition: "Understanding exactly how a specific career heavily operates in the real world, rather than just theoretically. Tip: An essay discussing the hidden logistics of Ethiopian agriculture proves massive industry insight.", 
    amharic: "የዘርፉ ጥልቅ ግንዛቤ - አንድ የሙያ ዘርፍ በተግባር እንዴት እንደሚሰራ በትክክል የመረዳት ብቃት።", 
    category: "Career" 
  },
  { 
    term: "Career Exploration", 
    definition: "The active process of aggressively testing different fields (coding, biology, art) during early high school to heavily narrow down your final focus. Tip: Grade 9 and 10 are purely for exploration; Grade 11 and 12 are strictly for specialized execution.", 
    amharic: "የስራ መስክ ፍለጋ - በልጅነት የተለያዩ ትምህርቶችን እና ክበቦችን በመሞከር ትክክለኛ ፍላጎትን የማግኘት ሂደት።", 
    category: "Career" 
  },
  { 
    term: "Skill Portfolio", 
    definition: "The massive, combined toolkit of both hard and soft abilities you have methodically gathered to present to an employer or admission board. Tip: A powerful portfolio mixes 'Code writing' (Hard) with 'Public Speaking' (Soft).", 
    amharic: "የክህሎት ቋት - ተማሪው ያዳበራቸው አጠቃላይ ቴክኒካዊ እና ማህበራዊ እውቀቶች ስብስብ።", 
    category: "Career" 
  },
  { 
    term: "International Applicant", 
    definition: "A heavily scrutinized category of applicants applying from completely outside the host university's country, requiring highly complex visa and financial verifications. Tip: International acceptance rates are historically vastly lower than domestic rates.", 
    amharic: "ዓለም አቀፍ አመልካች - ከሌላ አገር ሆኖ ለትምህርት የሚያመለክት እና የተለያየ የቪዛ ህግ የሚመለከተው ተማሪ።", 
    category: "Global" 
  },
  { 
    term: "Global Competition", 
    definition: "The absolute reality that you are directly fighting for spots against incredibly elite, heavily tutored students from hyper-competitive nations like China, India, and South Korea. Tip: Your essay's authentic cultural story is your best weapon against perfect global robot-scores.", 
    amharic: "ዓለም አቀፍ ፉክክር - በዓለም ዙሪያ ካሉ እጅግ ብሩህ ተማሪዎች ጋር ለተወሰኑ የዩኒቨርሲቲ ወንበሮች የሚደረግ ከፍተኛ ግብግብ።", 
    category: "Global" 
  },
  { 
    term: "Regional Representation", 
    definition: "The incredibly advantageous desire of universities to admit students from heavily underrepresented continents, like Africa, to instantly boost their global diversity statistics. Tip: Being the 'only Ethiopian' in the applicant pool often works in your heavy favor.", 
    amharic: "ቀጠናዊ ውክልና - ዩኒቨርሲቲዎች ከሁሉም የዓለም ክፍል ተማሪዎች እንዲኖራቸው በማሰብ ለአፍሪካውያን የሚሰጡት ስትራቴጂካዊ ቦታ።", 
    category: "Global" 
  },
  { 
    term: "Diversity Advantage", 
    definition: "The specific 'bump' in admission likelihood granted to students whose culture, extreme geographic background, or heavy life experiences wildly enrich traditional campus debates. Tip: Lean deeply into your Ethiopian identity—it is an incredible global asset.", 
    amharic: "የብዝሃነት ጠቀሜታ - ከተለየ ባህል እና አስተዳደግ መምጣት ዩኒቨርሲቲ ለመግባት የሚፈጥረው ትልቅ አዎንታዊ እድል።", 
    category: "Strategy" 
  },
  { 
    term: "Geographic Context", 
    definition: "How deeply admission boards weigh your absolute access to resources based strictly on where you physically lived. Tip: Getting a 1350 SAT while living in deeply rural Ethiopia is frequently considered massively more impressive than getting a 1500 SAT while attending an elite million-dollar New York private school.", 
    amharic: "መልክዓ-ምድራዊ ነባራዊ ሁኔታ - ተማሪው ያደገበት አካባቢ የትምህርት ግብዓት እጥረት ውጤቱን ሲመዝኑ ታሳቢ የሚደረግበት ፍትሃዊ ስርዓት።", 
    category: "Strategy" 
  },
  { 
    term: "Educational Inequality", 
    definition: "The massive, systemic disparity in access to high-quality tutoring, advanced labs, and elite guidance counselors entirely dependent on your geography or wealth. Tip: Elite admissions heavily factor local inequality into their deep holistic review processes.", 
    amharic: "የትምህርት አቅርቦት ልዩነት - በገንዘብ ወይም በአካባቢ ምክንያት ከፍተኛ ጥራት ባለው ትምህርት እና ምክር ላይ የሚፈጠር መበላለጥ።", 
    category: "Global" 
  },
  { 
    term: "Opportunity Gap", 
    definition: "The profound deficit in advanced opportunities (like AP exams or massive club networks) fundamentally available to international students compared to wealthy domestic students. Tip: Admission readers are heavily trained not to penalize you for massive opportunity gaps entirely outside your control.", 
    amharic: "የእድል ክፍተት - ባደጉ ሀገራት እና በማደግ ላይ ባሉ ሀገራት ባሉ ተማሪዎች መካከል የሚፈጠረን ከፍተኛ የትምህርት መገልገያ እጦት።", 
    category: "Global" 
  },

  // NEW ADDITIONS FROM PART FOUR AUDIT
  { 
    term: "Financial Gap", 
    definition: "The exact difference between what a university costs and what your family can physically afford. Tip: If a school costs $80k and your family can pay $5k, your 'financial gap' is a massive $75k that MUST be covered by scholarships.", 
    amharic: "የገንዘብ ክፍተት - ዩኒቨርሲቲው ከሚጠይቀው አጠቃላይ ክፍያ እና ቤተሰብዎ መክፈል ከሚችለው ገንዘብ መካከል ያለው ልዩነት።", 
    category: "Financial" 
  },
  { 
    term: "Funding Gap", 
    definition: "When a scholarship pays for your tuition, but completely fails to cover your housing, food, or flights. Tip: A 'full tuition' scholarship still leaves a massive funding gap for living expenses! Always hunt for 'Full Ride' instead.", 
    amharic: "የድጋፍ መጉደል - የተገኘው የነፃ ትምህርት የትምህርት ክፍያን ቢሸፍንም ለመኖሪያ፣ ለምግብ እና ለትራንስፖርት የሚሆን ገንዘብ ሲያጥር።", 
    category: "Financial" 
  },
  { 
    term: "Cost Coverage", 
    definition: "The exact percentage of your total four-year expenses that a university formulaically agrees to pay. Tip: Never trust verbal promises; only trust the exact Cost Coverage percentage written legally on your Financial Aid Offer.", 
    amharic: "የወጪ ሽፋን - ዩኒቨርሲቲው ወይም የነፃ ትምህርት ሰጪው ድርጅት የሚሸፍነው አጠቃላይ የወጪ መቶኛ።", 
    category: "Financial" 
  },
  { 
    term: "Affordability Strategy", 
    definition: "Intentionally applying to heavily endowed wealthy private schools rather than public state schools because wealthy schools have exponentially more money to give international students. Tip: Avoid US 'State' schools if you need full financial aid.", 
    amharic: "የክፍያ መቻል ስልት - የነፃ ትምህርት እርዳታ በብዛት ሊሰጡ ወደሚችሉ ሀብታም የግል ትምህርት ቤቶች ብቻ ሆን ብሎ ማመልከት።", 
    category: "Strategy" 
  },
  { 
    term: "Budget Planning", 
    definition: "Calculating your exact monthly living costs BEFORE you accept an offer. Tip: A scholarship in New York City is worth significantly less than a scholarship in Ohio because New York rent will consume your entire budget.", 
    amharic: "የበጀት እቅድ - የትምህርት ቤቱን ድጋፍ ከመቀበልዎ በፊት በተማሩበት ከተማ የሚኖርዎትን ወርሃዊ የኑሮ ውድነት በቅድሚያ ማስላት።", 
    category: "Financial" 
  },
  { 
    term: "Financial Planning", 
    definition: "Managing a strictly rigid timeline of when application fees, CSS profiles, and test fees must be paid. Tip: The application process alone can cost $500+. Use fee waivers heavily to survive.", 
    amharic: "የገንዘብ ዝግጅት - ለማመልከቻ ሂደት (ለፈተና፣ ለፖስታ እና ለቪዛ) የሚያስፈልገውን ወጪ አስቀድሞ ማዘጋጀት።", 
    category: "Financial" 
  },
  { 
    term: "Financial Sustainability", 
    definition: "Proving you can legally survive all four years of college, not just the first semester. Tip: Visa officers will deny you if your funding only covers Year 1 with no logical plan for Years 2, 3, and 4.", 
    amharic: "የገንዘብ አቅም ቀጣይነት - ለፈጀው 4 ዓመት ትምህርት የሚያስፈልግ ገንዘብ ሳይቋረጥ የመገኘቱ አስተማማኝነት።", 
    category: "Financial" 
  },
  { 
    term: "Offer Comparison", 
    definition: "The strategic act of placing two university acceptance letters side-by-side to calculate which one actually leaves you with the lowest debt. Tip: $40,000 off a $90,000 school is vastly worse than $20,000 off a $30,000 school.", 
    amharic: "የእድሎች ማነፃፀር - ከተለያዩ ዩኒቨርሲቲዎች የተገኙትን የትምህርት ጥሪዎች ከጥራት እና ከክፍያ አንፃር ማወዳደር።", 
    category: "Strategy" 
  },
  { 
    term: "Net Cost", 
    definition: "The brutal, exact amount of money you must pay out of pocket after all grants, loans, and scholarships are subtracted from the total sticker price. Tip: Focus purely on 'Net Cost', completely ignore 'Total Cost'.", 
    amharic: "የተጣራ ክፍያ - ዩኒቨርሲቲው ከሚጠይቀው አጠቃላይ ክፍያ ላይ ስኮላርሺፕ ከተቀነሰ በኋላ እርስዎ ከኪስዎ የሚከፍሉት ትክክለኛ ገንዘብ።", 
    category: "Financial" 
  },
  { 
    term: "Scholarship Matching", 
    definition: "The automated or deeply manual process of finding niche foundations that perfectly match your exact profile (e.g., 'Scholarships for African Women in STEM'). Tip: The more niche the match, the higher your odds of winning.", 
    amharic: "የስኮላርሺፕ ተዛምዶ - የተማሪውን ፍላጎት፣ ጾታ ወይም የትምህርት ዘርፍ ፈልገው ከሚረዱ የተለዩ ድጋፎች ጋር ማገናኘት።", 
    category: "Financial" 
  },
  { 
    term: "Scholarship Fit", 
    definition: "How heavily your background aligns with the specific mission of the billionaires who funded the scholarship. Tip: If the Gates Scholarship is about 'Leadership', do not send them an essay purely about your math grades.", 
    amharic: "የስኮላርሺፕ አላማ ተስማሚነት - የተማሪው የህይወት አላማ ድጋፉን ከሚሰጠው አካል (ድርጅት) ራዕይ ጋር ያለው መጣጣም።", 
    category: "Strategy" 
  },
  { 
    term: "Competitive Scholarship", 
    definition: "A massively prestigious, fully funded award (like the MasterCard Foundation or Stamps Scholar) that requires a completely separate, highly stressful application process. Tip: Treat these like applying to a separate Ivy League school.", 
    amharic: "ከፍተኛ ፉክክር ያለበት ስኮላርሺፕ - በጣም ብዙ ተማሪዎች የሚወዳደሩበት እና ለመሸነፍ ከባድ የሆነ ሙሉ የነፃ ትምህርት ዕድል።", 
    category: "Financial" 
  },
  { 
    term: "Scholarship Portfolio", 
    definition: "Building a highly diversified safety net by winning 15 different small $1,000 scholarships locally to stack onto your major university grant. Tip: Small local scholarships have virtually no competition compared to massive national ones.", 
    amharic: "የስኮላርሺፕ ስብስብ - ከዩኒቨርሲቲ ከሚገኘው በተጨማሪ የተለያዩ ትናንሽ የነፃ ትምህርት እድሎችን በማዕከል መሰብሰብ እና መጠቀም።", 
    category: "Strategy" 
  },
  { 
    term: "Scholarship Strategy", 
    definition: "The exact calendar methodology of applying to easy/small scholarships in September, massive ones in November, and localized university ones in January. Tip: Never apply blindly; strictly map your deadlines.", 
    amharic: "የነፃ ትምህርት ስልት - በተለያየ ጊዜ የሚወጡ ልዩ ልዩ የስኮላርሺፕ እድሎችን በማጥናት ቀነ-ገደባቸውን የጠበቀ ማመልከቻ ማስገባት።", 
    category: "Strategy" 
  },
  { 
    term: "Award Criteria", 
    definition: "The ultra-specific, inflexible rules a foundation uses to digitally filter out 90% of applicants instantly (e.g., 'Must have 3.9 GPA'). Tip: Do not apply if you do not meet the core criteria; their computers will auto-reject you.", 
    amharic: "የሽልማት መስፈርት - አንድን ስኮላርሺፕ ለማግኘት የሚያስፈልጉ ጥብቅ እና ግልፅ የግምገማ ደንቦች እና ውጤቶች።", 
    category: "Application" 
  },
  { 
    term: "Selection Process", 
    definition: "The grueling, multi-round gauntlet including document review, psychometric testing, and intense panel interviews to win full funding. Tip: Survive round 1 with grades, win round 3 with charisma.", 
    amharic: "የምርጫ ሂደት - ማመልከቻ ከገባበት ጊዜ ጀምሮ በፈተና እና በቃለ-መጠይቅ ታጅቦ አሸናፊው እስከሚታወቅበት ያለው እርምጃ።", 
    category: "Application" 
  },
  { 
    term: "Evaluation Metrics", 
    definition: "The hidden grading rubric (often out of 100 points) that committees strictly use to rank you against others. Tip: E.g., Academics: 40pts, Leadership: 30pts, Essay: 20pts, Recommendations: 10pts.", 
    amharic: "የግምገማ መለኪያዎች - 코ሚቴው የተማሪውን ፅሁፍ፣ ውጤት እና አመራር በነጥብ (ከ100 በመቶ) የሚመዝንበት መስፈርት።", 
    category: "Application" 
  },
  { 
    term: "Document Alignment", 
    definition: "Ensuring the spelling of your name on your passport strictly matches your high school transcript and your SAT profile. Tip: In Ethiopia, mismatched Father/Grandfather names completely destroy visa applications.", 
    amharic: "የሰነዶች መጣጣም - በፓስፖርት፣ በትምህርት ማስረጃ እና በማመልከቻ ላይ ያለው የተማሪው እና የቤተሰብ ስም ፊደል አፃፃፍ በትክክል አንድ አይነት መሆን።", 
    category: "Visa" 
  },
  { 
    term: "Consistency Across Documents", 
    definition: "Making sure the stories in your counselor recommendation don't heavily contradict the stories in your personal essay. Tip: If you claim you were the debate president, but your counselor says you never joined a club, you are instantly rejected.", 
    amharic: "የማስረጃዎች ወጥነት - በተማሪው ፅሁፍ እና በመምህራን 추천 ደብዳቤ ላይ ያሉ መረጃዎች እርስ በእርስ ሳይጋጩ መደገፍ መቻላቸው።", 
    category: "Application" 
  },
  { 
    term: "Verification", 
    definition: "When a university or embassy physically contacts your high school in Ethiopia to aggressively confirm that your transcripts are not forged. Tip: Always warn your principal that a US university might randomly call them.", 
    amharic: "ማረጋገጥ (Verification) - ዩኒቨርሲቲዎች የተላከላቸውን ውጤት ትክክለኛነት ለማረጋገጥ በቀጥታ ወደ ኢትዮጵያ ያሉት ት/ቤቶች ደውለው ሲያጣሩ።", 
    category: "Application" 
  },
  { 
    term: "Document Authenticity", 
    definition: "The undeniable legal proof of a document's origin, highly verified through official school stamps and sealed envelopes. Tip: A transcript sent from a personal Gmail is useless; it MUST be sent directly from the school's official domain.", 
    amharic: "የማስረጃ ትክክለኛነት - የትምህርት ቤቱ ኦፊሴላዊ ማህተም እና ፊርማ ያረፈበት፣ እንዳይጭበረበር በተዘጋ ፖስታ የሚላክ ሰነድ።", 
    category: "Application" 
  },
  { 
    term: "Translation", 
    definition: "The exact, legally certified conversion of your Amharic high school records into English. Tip: You cannot translate it yourself! It must be done by a legally certified translation agency or strictly by your school.", 
    amharic: "ትርጉም - በአማርኛ የተፃፉ የትምህርት ማስረጃዎችን (ፔድ፣ ካርድ) እውቅና ባለው ተርጓሚ ወደ እንግሊዘኛ መቀየር።", 
    category: "Application" 
  },
  { 
    term: "Official Copy", 
    definition: "A document heavily stamped, signed, and directly mailed (or emailed via a secure portal like CommonApp) by an authorized school official. Tip: A photo you took of your transcript on your iPhone is never an 'Official Copy'.", 
    amharic: "ኦፊሴላዊ ቅጂ - በትምህርት ቤቱ ማህተም የተረጋገጠ እና በቀጥታ ከትምህርት ቤቱ ወደ ዩኒቨርሲቲው የሚላክ ማስረጃ።", 
    category: "Application" 
  },
  { 
    term: "Certified Document", 
    definition: "A brutally strict legal verification where an official (like the Ministry of Education) physically stamps a copy of your degree proving it matches the original. Tip: European universities aggressively require this.", 
    amharic: "የተረጋገጠ ሰነድ - በሚመለከተው የመንግስት አካል (እንደ ትምህርት ሚኒስቴር) ወይም በፍርድ ቤት ትክክለኛነቱ ማረጋገጫ ያገኘ ማስረጃ።", 
    category: "Application" 
  },
  { 
    term: "Decision Factors", 
    definition: "The heavily prioritized list of requirements (Money vs Prestige vs Location) you use to ruthlessly decide which final admission offer to magically accept. Tip: Ignore the university's marketing; base your decision purely on your strict, personal factors.", 
    amharic: "የውሳኔ መስፈርቶች - በተለያዩ ዩኒቨርሲቲዎች መካከል ለመምረጥ የሚያገለግሉ ዋና ዋና ነጥቦች (ክፍያ፣ ጥራት፣ ደህንነት)።", 
    category: "Strategy" 
  },
  { 
    term: "Trade-Off", 
    definition: "Accepting a massive negative to secure a massive positive (e.g., attending a vastly lower-ranked school specifically because they gave you a massive full-ride scholarship). Tip: This is the smartest move 90% of Ethiopian applicants will make.", 
    amharic: "መስዋዕትነት (Trade-Off) - የተሻለ የነፃ ትምህርት ለማግኘት ሲባል ዝቅተኛ ደረጃ ወዳለው ዩኒቨርሲቲ መሄድን የመሰሉ የጥቅም ልውውጦች።", 
    category: "Strategy" 
  },
  { 
    term: "Opportunity Cost", 
    definition: "The hidden financial or academic loss of what you DID NOT choose. Tip: The opportunity cost of wasting 4 months studying for the SAT is that you massively neglected your extracurricular clubs and essay writing.", 
    amharic: "የአማራጭ ዋጋ - አንዱን ውሳኔ በመምረጥዎ ምክንያት ያጡት የሌላኛው እድል ጥቅም፣ ጊዜ ወይም ገንዘብ።", 
    category: "Strategy" 
  },
  { 
    term: "Risk Assessment", 
    definition: "Deeply analyzing whether the 2% chance of getting into Harvard is actually worth $85 in application fees, or if you should route that money to a safer school. Tip: Always build a perfectly balanced college list to mathematically mitigate risk.", 
    amharic: "የስጋት ግምገማ - ለምዝገባ እና ለፈተና የሚወጣውን ገንዘብ፣ ተቀባይነት ከማግኘት ዕድል አንፃር ሚዛናዊ መሆኑን ማጥናት።", 
    category: "Strategy" 
  },
  { 
    term: "Long-Term Value", 
    definition: "Choosing a major or a university based strictly on its absolute earning potential 10 years after graduation. Tip: Don't just look at the starting salary; vastly examine the career growth ceiling of your degree.", 
    amharic: "የረጅም ጊዜ ጠቀሜታ - ዩኒቨርሲቲ ወይም የትምህርት ዘርፍ ሲመርጡ አሁን ላይ ካለው ድምቀት ይልቅ ከ10 አመት በኋላ ለሚኖርዎት ስራ ያለውን ፋይዳ ማየት።", 
    category: "Career" 
  },
  { 
    term: "Strategic Choice", 
    definition: "A coldly calculated decision made purely to maximize your chances of survival, funding, and employment, ignoring entirely emotional vanity. Tip: Going to a 'No-name' school for free is a vastly superior strategic choice than going into $200k debt for an Ivy League.", 
    amharic: "ስልታዊ ምርጫ - በስሜት ሳይሆን ሁሉንም አማራጮች አጥንቶ፣ በእውነታ ላይ ተመስርቶ የሚደረግ ትርፋማ ውሳኔ።", 
    category: "Strategy" 
  },
  { 
    term: "Test Strategy", 
    definition: "Knowing exactly WHICH standardized tests highlight your brilliance and which expose your weaknesses, then strategically ignoring the bad ones. Tip: If your math is incredible but your English is weak, aggressively prioritize the SAT over the ACT.", 
    amharic: "የፈተና ስልት - የግል ጥንካሬን (ሂሳብ ወይም እንግሊዘኛ) አውቆ የተሻለ ውጤት ሊያመጡ የሚችሉበትን ፈተና መርጦ መስራት።", 
    category: "Metrics" 
  },
  { 
    term: "Score Optimization", 
    definition: "Intensely studying exclusively the specific question types you get wrong, rather than wastefully taking generic practice tests. Tip: Massive score jumps only happen when you violently attack your weaknesses.", 
    amharic: "ውጤትን ማሳደግ - በፈተና ዝግጅት ወቅት ብዙ ጊዜ በሚሳሳቱባቸው ጥያቄዎች ላይ ብቻ ጊዜ ወስዶ በማጥናት አጠቃላይ ውጤትን ማሻሻል።", 
    category: "Strategy" 
  },
  { 
    term: "Retake Strategy", 
    definition: "Deciding mathematically if spending another 3 months studying for the SAT will actually raise your score enough to matter. Tip: Only retake a test if you are aggressively missing a specific scholarship cutoff by 10 or 20 points.", 
    amharic: "እንደገና የመፈተን ስልት - ያስመዘገቡት የSAT ወይም አስልኬት ውጤት በቂ ካልሆነ፣ ምን ያህል ጊዜ ለዝግጅት ወስዶ በድጋሚ መፈተን የተሻለ እንደሆነ መወሰን።", 
    category: "Strategy" 
  },
  { 
    term: "Score Choice", 
    definition: "A profoundly useful College Board feature that lets you hide your terrible SAT scores and officially send ONLY your best test dates to universities. Tip: Only highly elite schools demand to see 'All Scores'. Most gladly accept Score Choice.", 
    amharic: "የውጤት ምርጫ - የSAT ፈተናን ደጋግመው ከወሰዱ፣ ዝቅተኛውን ደብቀው ከፍተኛውን ውጤት ብቻ ወደ ዩኒቨርሲቲዎች የመላክ መብት።", 
    category: "Metrics" 
  },
  { 
    term: "Preparation Timeline", 
    definition: "The strict 6-9 month aggressive runway you must build before taking the Duolingo, IELTS, or SAT to ensure peak mental conditioning. Tip: Cramming effectively does not work for the SAT reading section.", 
    amharic: "የዝግጅት የጊዜ ሰሌዳ - ለዓለም አቀፍ ፈተናዎች ከመቀመጥ በፊት ቢያንስ ከ6 እስከ 9 ወራት ባለው ጊዜ ውስጥ ጥብቅ የጥናት እቅድ ማውጣት።", 
    category: "Strategy" 
  },
  { 
    term: "Professional Communication", 
    definition: "The hyper-respectful, fiercely formal tone required every single time you interact with an admission officer or financial aid counselor. Tip: Never use slang, emojis, or misspelled words. You are constantly being evaluated.", 
    amharic: "ሙያዊ የኮሙዩኒኬሽን ዘይቤ - ለዩኒቨርሲቲ ባለሞያዎች ወይም የቪዛ ኦፊሰሮች ኢሜይል ሲፅፉ እና ሲነጋገሩ የሚጠቀሙበት የክብር እና የእውቀት ቋንቋ።", 
    category: "Basics" 
  },
  { 
    term: "Email Strategy", 
    definition: "The exact 3-paragraph rigid structure you use to email a university: 1. Who I am, 2. My specific question, 3. My gratitude. Tip: Keep it under 150 words. Admission officers despise reading overly long, rambling emails.", 
    amharic: "የኢሜይል አፃፃፍ ስልት - ለዩኒቨርሲቲ የሚላክ መልዕክት አጭር፣ ነጥቡን የነካ እና ጥያቄው ግልፅ ሆኖ በእንግሊዘኛ የሚፃፍበት መንገድ።", 
    category: "Strategy" 
  },
  { 
    term: "Follow-Up Email", 
    definition: "A highly polite reply sent exactly 5 to 7 days after your original email if they completely ignored you. Tip: Do not email them every day! Wait patiently, then send a gentle, singular 'circling back' email.", 
    amharic: "ማስታወሻ ኢሜይል (Follow-Up) - የመጀመሪያውን ኢሜይል ከላኩና ምላሽ ካጡ፣ ከሳምንት በኋላ በትህትና መልሰው ለማስታወስ የሚልኩት አጭር ፅሁፍ።", 
    category: "Strategy" 
  },
  { 
    term: "Inquiry Email", 
    definition: "The first message heavily deployed to a university specifically asking a deeply thoughtful question that is definitively NOT found on their website. Tip: Asking 'What is your GPA requirement?' instantly shows you are too lazy to read their website.", 
    amharic: "የመጠየቂያ ኢሜይል - በድረገፅ ላይ የማይገኝ ነገር ግን ለውሳኔዎ ወሳኝ የሆነ ጥያቄን (ለምሳሌ ስለ ልዩ ስኮላርሺፕ) ለዩኒቨርሲቲው መጠየቅ።", 
    category: "Strategy" 
  },
  { 
    term: "Cold Email", 
    definition: "An aggressively brave message sent to a completely random American professor begging for a summer research internship. Tip: Roughly 90% of cold emails fail, but the 10% that succeed completely transform your application profile.", 
    amharic: "የእድል ሙከራ ኢሜይል (Cold Email) - በጭራሽ ለማያውቁት ሀብታም ድርጅት ወይም ፕሮፌሰር የእርዳታ፣ የስራ ወይም የምርምር እድል እንዲሰጡዎት የሚጠይቁበት ደብዳቤ።", 
    category: "Strategy" 
  },
  { 
    term: "Formal Tone", 
    definition: "The strict academic voice completely devoid of contractions (don't, can't) and slang required tightly for university essays and official forms. Tip: Use a Formal Tone rigorously for your Common App Essay.", 
    amharic: "መደበኛ የቋንቋ ዘይቤ - በይፋዊ ሰነዶች፣ ፅሁፎች እና ኢሜይሎች ላይ የጐዳና እና የጓደኛ ቃላትን (slangs) ሙሉ በሙሉ በማስወገድ የሚፃፍ አካዳሚያዊ አገላለፅ።", 
    category: "Writing" 
  },
  { 
    term: "Informal Tone", 
    definition: "A more deeply relaxed, conversational speaking voice. Tip: Only use this highly dangerous tone if a specific supplemental essay massively begs you to be 'quirky' or 'fun'.", 
    amharic: "ኢ-መደበኛ አገላለፅ - ማመልከቻ ላይ የተጠየቀው ጥያቄ አዝናኝ እና ግላዊ ሲሆን (ለምሳሌ 'የሚወዱት ፊልም ምንድነው?') የሚፃፍበት ነፃ ቋንቋ።", 
    category: "Writing" 
  },
  { 
    term: "Communication Clarity", 
    definition: "Removing absolutely every useless, complex word from your essay so your precise point is violently obvious within a 3-second scan. Tip: Flowery language heavily ruins communication clarity. Keep it brutally simple.", 
    amharic: "ግልፅ የሆነ ግንኙነት - አንባቢው ምንም ሳይደናገር የዋናውን ሀሳብ መልዕክት በቀጥታ እና በአራት ነጥብ እንዲረዳ አድርጎ የመፃፍ ብቃት።", 
    category: "Writing" 
  },
  { 
    term: "Confidence", 
    definition: "Writing about your massive club achievements without minimizing your leadership out of severe false modesty. Tip: The admission officer cannot read your mind; if you saved the club from destruction, boldly state that you saved it.", 
    amharic: "በራስ መተማመን - በተሰራ ስራ፣ በተገኘ ውጤት እና በማህበራዊ ተሳትፎ ሳያፍሩ እና የራስን ጥረት ሳያሳንሱ በድፍረት ማቅረብ።", 
    category: "Basics" 
  },
  { 
    term: "Imposter Syndrome", 
    definition: "The deeply terrifying feeling that you are secretly a 'fake' and the admission committee made a severe mistake by heavily accepting you. Tip: Every single student at Harvard intensely feels Imposter Syndrome. You rightfully earned your spot.", 
    amharic: "የአቅም ማነስ ፍርሃት (Imposter Syndrome) - በጣም ትልቅ እና ታዋቂ ዩኒቨርሲቲ ሲደርስዎ 'ምናልባት ተሳስተው እንጂ እኔ ለዚህ አልመጥንም' ብሎ ራስን መጠራጠር።", 
    category: "Strategy" 
  },
  { 
    term: "Motivation", 
    definition: "The deeply internal fire required to routinely wake up at 5:00 AM completely alone to practice brutal SAT math questions for 6 straight months. Tip: External discipline always brutally overrides fleeting internal motivation over time.", 
    amharic: "ተነሳሽነት - ያለ አሰልጣኝ እና አስገዳጅ ጠዋት ተነስቶ ለፈተና ለማጥናት እና ከባድ ማመልከቻዎችን ለመሙላት የሚያስችል ውስጣዊ ጥንካሬ።", 
    category: "Basics" 
  },
  { 
    term: "Burnout", 
    definition: "The complete, devastating collapse of your physical and mental health caused by taking 6 APs, leading 4 clubs, and intensely sleeping only 3 hours a night. Tip: Avoid severe burnout by aggressively rejecting any activity that doesn't strictly serve your Core Narrative.", 
    amharic: "የአዕምሮ ድካም (Burnout) - በአንድ ጊዜ ብዙ ፈተና፣ ትምህርት እና የክበብ ሀላፊነቶችን በማብዛት የሚመጣ የመሰልቸት እና ያለመቻል ስሜት።", 
    category: "Basics" 
  },
  { 
    term: "Consistency Discipline", 
    definition: "The robotic, unwavering ability to intensely work on your university essays for exactly 1 hour every single day, completely regardless of your shifting mood. Tip: Cramming essays the night before the deadline brutally shows in the sloppy writing.", 
    amharic: "ያቋረጠ የዲስፕሊን ስራ - ስሜትዎ ጥሩ ቢሆንም ባይሆንም በየቀኑ ለተወሰነ ሰዓት በቋሚነት ለማመልከቻዎ ወይም ለጥናትዎ ጊዜ መስጠት።", 
    category: "Strategy" 
  },
  { 
    term: "Focus", 
    definition: "Ruthlessly ignoring heavy distractions (like intensely partying or endlessly doom-scrolling TikTok) to firmly secure your family's financial freedom via a massive US scholarship. Tip: Severe focus means prioritizing your 5-year future totally over your 5-minute present.", 
    amharic: "ትኩረት ሰብስቦ መስራት - ጊዜን የሚያባክኑ ነገሮችን (እንደ ሶሻል ሚዲያ) በመተው፣ በነፃ ትምህርት ህልም ላይ ብቻ አዕምሮን አጥብቆ ማሳረፍ።", 
    category: "Basics" 
  },
  { 
    term: "Growth Mindset", 
    definition: "The deeply resilient belief that drastically failing a brutal physics exam doesn't mean you are 'hopelessly stupid', it just means you haven't mastered profoundly studying it 'YET'. Tip: Admission officers intensely love students who explicitly demonstrate a massive growth mindset.", 
    amharic: "የእድገት አስተሳሰብ - በፈተና መውደቅን እንደ መጨረሻ ሳይሆን አጥንቶ የተሻለ ለመሆን እንደሚያስችል የማየት አዎንታዊ አመለካከት።", 
    category: "Basics" 
  },
  { 
    term: "Resilience", 
    definition: "The incredibly aggressive capability to calmly absorb 12 brutal rejection letters from US colleges, only to instantly pivot and aggressively secure a full-ride scholarship in Canada. Tip: Ethiopian applicants endure profound odds. Resilience is your defining trait.", 
    amharic: "አለመበገር - ከብዙ ዩኒቨርሲቲዎች 'አልተቀበልንም' የሚል ደብዳቤ ቢመጣም ተስፋ ሳይቆርጡ ሌላ አማራጭ (እንደ ካናዳ ወይም ጀርመን) የመፈለግ ፅናት።", 
    category: "Basics" 
  },
  { 
    term: "Overconfidence", 
    definition: "Arrogantly assuming that your 4.0 GPA guarantees entry into Stanford, leading you to recklessly ignore applying to highly necessary Safety schools. Tip: Stanford brutally rejects heavily overconfident 4.0 students literally every single day.", 
    amharic: "ከልክ ያለፈ በራስ መተማመን - ውጤቴ ጥሩ ስለሆነ ትላልቅ ዩኒቨርሲቲዎች በእርግጠኝነት ይቀበሉኛል ብሎ በማሰብ መካከለኛ ት/ቤቶችን መተው።", 
    category: "Strategy" 
  },
  { 
    term: "Under-preparation", 
    definition: "Tragically showing up perfectly to the grueling US Embassy Visa Interview completely missing your highly critical I-20 document or banking logs. Tip: Under-preparation brutally equals Instant Rejection.", 
    amharic: "በቂ ያልሆነ ዝግጅት - ለቪዛ ቃለ መጠይቅ ወይም ለማመልከቻ የሚያስፈልጉ መሰረታዊ የባንክ እና የትምህርት ጥራት ማስረጃዎችን ሳይዙ መቅረብ።", 
    category: "Strategy" 
  },
  { 
    term: "Poor Planning", 
    definition: "Realizing with pure horror on December 30th that your deeply critical ED2 deadline is January 1st and your required school counselor is intensely on vacation. Tip: Start your rigorous application checklist exactly in September.", 
    amharic: "ደካማ እቅድ አወጣጥ - ቀነ-ገደብ ሊያልቅ ቀናት ሲቀሩ የድጋፍ ደብዳቤ (Recommendation) ለመጠየቅ መሯሯጥ እና መረበሽ።", 
    category: "Strategy" 
  },
  { 
    term: "Weak Narrative", 
    definition: "Submitting an incredibly scattered, highly confusing application where you severely claim to love 'Biology', wrote an essay about 'Economics', and only aggressively participate in 'Art' clubs. Tip: A weak narrative deeply confuses admission readers.", 
    amharic: "ደካማ የተሳትፎ ታሪክ - ተማሪው የፃፈው ድርሰት፣ የመረጠው የትምህርት ዘርፍ እና ያደረገው ክበብ ተሳትፎ እርስ በእርስ የማይገናኝ ሲሆን።", 
    category: "Writing" 
  },
  { 
    term: "Generic Application", 
    definition: "Sending an application drastically devoid of any actual human personality, reading exactly like 10,000 other boring international applicants. Tip: Do not submit a violently generic essay about 'Working Hard'. Submit a highly vivid story about your life.", 
    amharic: "የተለመደ እና አሰልቺ ማመልከቻ - የራስ የሆነ ልዩ ማንነት እና ህይወት የሌለው፣ በሚሊዮን ከሚቆጠሩ አመልካቾች ጋር በትክክል የሚመሳሰል አቀራረብ።", 
    category: "Application" 
  },
  { 
    term: "Lack of Direction", 
    definition: "Applying randomly to 25 vastly different universities ranging from small religious nursing schools to massive secular tech hubs simply hoping 'anyone accepts me'. Tip: Universities can profoundly sense you lack direction in your wildly generic 'Why Us?' essays.", 
    amharic: "የአላማ ግልፅነት ማጣት - ምን መሆን እንደሚፈልጉ ሳይወስኑ በዝምድና የማይገናኙ የተለያዩ ዩኒቨርሲቲዎች እና የትምህርት ዘርፎች ላይ ማመልከት።", 
    category: "Strategy" 
  },
  { 
    term: "Rejection Reason", 
    definition: "The mostly hidden, brutally internal note a massive university wrote strictly indicating exactly why you failed (e.g., 'Financial gap insanely too large for us to cover'). Tip: International rejections are 80% about your total massive lack of funds, not your GPA.", 
    amharic: "የውድቅ ምክንያት - ዩኒቨርሲቲው ተማሪውን ያልተቀበለበት መሰረታዊ ችግር (ብዙ ጊዜ ምክንያቱ ተማሪው የጠየቀው ከፍተኛ የገንዘብ እርዳታ ነው)።", 
    category: "Application" 
  },
  { 
    term: "Weak Profile", 
    definition: "Presenting a drastically empty high school resume featuring zero rigorous leadership, zero rigorous clubs, and strictly baseline grades. Tip: If your profile is weak entering Grade 12, heavily rely on your brutally stellar Essay to save you.", 
    amharic: "ደካማ መገለጫ - ከትምህርት ቤት ውጤት ውጭ ምንም አይነት የክበብ፣ የበጎ ፈቃድ ወይም የስራ ልምድ እና አመራር የሌለው ባዶ ማህደር።", 
    category: "Strategy" 
  },
  { 
    term: "Misfit Application", 
    definition: "Desperately applying to heavily conservative, strictly religious universities when your deep personal essay is entirely about radically fighting for intense LGBTQ rights. Tip: Do your intense, massive research on 'Institutional Fit' to violently avoid a Misfit Application rejection.", 
    amharic: "የማይመጥን ማመልከቻ - የተማሪው የፖለቲካ፣ አመለካከት ወይም ስብዕና ከዩኒቨርሲቲው ጥብቅ ህግ ወይም ባህል ጋር ሙሉ በሙሉ ሲጋጭ።", 
    category: "Strategy" 
  },
  { 
    term: "Competitive Disadvantage", 
    definition: "The severe, undeniable reality that heavily under-resourced Ethiopian applicants are actively fighting hyper-tutored billionaires globally for the exact same singular admission spot. Tip: Mitigate this by intensely targeting regionally diverse universities that violently desperately need African representation.", 
    amharic: "የፉክክር ድክመት - ባደጉት አገራት ያሉ ተማሪዎች ከሚያገኙት የትምህርት ግብዓት እና ምክር አንፃር ሲታይ የኢትዮጵያውያን ተማሪዎች ያላቸው ዝቅተኛ አቅም።", 
    category: "Global" 
  },
  { 
    term: "Limited Opportunities", 
    definition: "The deeply grim shortage of available massive scholarships physically open to strict international citizens. Tip: Ignore 'Federal Aid' explicitly meant for US Citizens. Aggressively search only for strictly 'International Merit' scholarships.", 
    amharic: "የተገደበ እድል - አብዛኛው የነፃ ትምህርት እና ከፍተኛ የገንዘብ እርዳታ ያደጉ አገራት ዜጎች ብቻ ስለሚፈቀድ በውጪ ዜጎች ላይ የሚፈጠረው ጥበት።", 
    category: "Strategy" 
  },

  // NEW ADDITIONS FROM PART FIVE AUDIT
  { 
    term: "Visa Intent", 
    definition: "The strict legal assumption by embassies that you secretly plan to immigrate permanently rather than just study. Tip: Your entire visa interview must relentlessly aggressively prove your clear 'intent' to return to Ethiopia.", 
    amharic: "የቪዛ አላማ (Visa Intent) - ኢምባሲዎች 'ተማሪው ትምህርቱን እንደጨረሰ አይመለስም' ብለው የሚያስቡትን ጥርጣሬ አሳማኝ በሆነ መንገድ የመቅረፍ ግዴታ።", 
    category: "Visa" 
  },
  { 
    term: "Study Purpose Clarity", 
    definition: "Your deeply articulated, unshakeable reasoning for exactly why you must study your major in the US instead of locally. Tip: 'The US is a good country' is a terrible reason. 'My US university offers the singular robotics lab I need' is perfect clarity.", 
    amharic: "የትምህርት አላማ ግልፅነት - 'ለምን በኢትዮጵያ መማር አልቻልክም?' ለሚለው የቪዛ ጥያቄ የሚሰጥ የተብራራ፣ ተወዳዳሪ የሌለው እና አሳማኝ ምላሽ።", 
    category: "Visa" 
  },
  { 
    term: "Financial Proof Strength", 
    definition: "How deeply credible and completely liquid the bank statements you present to the embassy are. Tip: Sudden, massive deposits into a previously empty bank account one week before the interview look insanely suspicious and cause instant rejections.", 
    amharic: "የገንዘብ ማስረጃ ጥንካሬ - ለቪዛ የሚቀርበው የባንክ መግለጫ ታማኝነት እና ገንዘቡ ወዲያውኑ ለጥቅም ሊውል የሚችል (Liquid) መሆኑ።", 
    category: "Visa" 
  },
  { 
    term: "Interview Confidence", 
    definition: "Making calm, steady eye contact with the immigration officer and answering questions strictly within 2 seconds. Tip: Memorizing answers perfectly makes you sound like a robot; natural, authoritative confidence wins approvals.", 
    amharic: "የቃለ-መጠይቅ ድፍረት - በቪዛ ቃለ-መጠይቅ ወቅት ጥያቄዎችን ያለመደናገጥ፣ በቀጥታ አይን ለአይን እየተያዩ እና በራስ መተማመን የመመለስ ብቃት።", 
    category: "Visa" 
  },
  { 
    term: "Risk Profile", 
    definition: "The aggressive, algorithmic calculation an embassy makes about whether you will overstay your visa or drop out of school. Tip: Having zero prior international travel deeply raises your Risk Profile.", 
    amharic: "የስጋት ግምገማ (Risk Profile) - በኢምባሲ ባለሙያዎች ዘንድ ተማሪው ህገ-ወጥ ስደተኛ ሊሆን ይችላል ወይስ አይችልም ተብሎ የሚሰላበት ሚዛን።", 
    category: "Visa" 
  },
  { 
    term: "Online Presence", 
    definition: "The absolute sum of everything visible when someone types your exact legal name into Google. Tip: Admission officers occasionally absolutely Google you. Ensure your Twitter and Facebook are entirely devoid of controversies.", 
    amharic: "ዲጂታል ህልውና (Online Presence) - ስምዎ በጉግል ሲፈለግ የሚመጣው አጠቃላይ መረጃ፣ የሶሻል ሚዲያ እና የድረገፅ ገፅታ።", 
    category: "Professional" 
  },
  { 
    term: "Digital Footprint", 
    definition: "The permanent, totally un-erasable trail of data you leave behind on the internet across years. Tip: A deeply positive digital footprint showcasing charity work and GitHub code greatly enhances elite applications.", 
    amharic: "የኢንተርኔት አሻራ (Digital Footprint) - ተማሪው በበይነ-መረብ ላይ ለዓመታት ያጠራቀመው እና በቀላሉ የማይሰረዝ የፎቶ፣ የፅሁፍ እና መረጃ ስብስብ።", 
    category: "Professional" 
  },
  { 
    term: "Personal Website", 
    definition: "A custom domain (e.g., yourname.com) aggressively utilized to centralize your entire portfolio, blogs, and severe academic accomplishments. Tip: Linking a beautiful personal website in your application proves massive technical initiative.", 
    amharic: "የግል ድረ-ገፅ - ተማሪው የሰራቸውን ስራዎች፣ ፅሁፎች እና ሙሉ ማህደሩን በአንድ ላይ ሰብስቦ የሚያቀርብበት ቴክኖሎጂያዊ መድረክ።", 
    category: "Professional" 
  },
  { 
    term: "LinkedIn Profile", 
    definition: "The absolute gold-standard professional networking platform incredibly essential for elite high schoolers attempting to secure internships. Tip: Have a hyper-professional photo and firmly declare your intended major in your headline.", 
    amharic: "ሊንክድ-ኢን (LinkedIn) - ባለሙያዎችን እና አሰሪዎችን ለማግኘት፣ እንዲሁም የሙያ ክህሎትን ለማሳየት የሚጠቅም ዓለም አቀፍ የሶሻል ሚዲያ።", 
    category: "Professional" 
  },
  { 
    term: "Online Portfolio", 
    definition: "A highly visual, deeply curated gallery of your intense creative works (art, code, writing) actively hosted on platforms like GitHub, Behance, or Medium. Tip: Show, never just tell. Link directly to the code.", 
    amharic: "የስራ ክምችት ማሳያ (Online Portfolio) - ተማሪው የሰራቸውን ስዕሎች፣ ሶፍትዌሮች ወይም ድርሰቶች ሰዎች እንዲያዩት በኢንተርኔት የሚያስቀምጥበት ዘዴ።", 
    category: "Professional" 
  },
  { 
    term: "Public Profile", 
    definition: "The violently curated version of your life specifically engineered for public consumption by universities and profound employers. Tip: Your private life should be aggressively locked behind private accounts; your public profile should be pristine.", 
    amharic: "ይፋዊ መገለጫ (Public Profile) - ለዩኒቨርሲቲ እና ለአሰሪዎች ተብሎ በጥንቃቄ የተዘጋጀ እና ማንም ሰው ሊያየው የሚችል የኢንተርኔት ላይ ማንነት።", 
    category: "Professional" 
  },
  { 
    term: "Self-Development", 
    definition: "The punishingly rigorous, completely self-directed pursuit of expanding your intellect deeply beyond any formal high school requirement. Tip: Elite admissions profoundly favor autodidacts (people who completely teach themselves).", 
    amharic: "ራስን ማሳደግ - ያለ መምህር እና ግዳጅ በራስ ተነሳሽነት አዳዲስ ክህሎቶችን እና እውቀቶችን የማዳበር ጥልቅ ሂደት።", 
    category: "Basics" 
  },
  { 
    term: "Time Management", 
    definition: "The merciless blocking of your limited hours to strictly balance 5 AP classes, wildly intense SAT prep, and leadership execution. Tip: You do not 'find' time; you ruthlessly 'make' time by severely cutting out distractions.", 
    amharic: "የጊዜ አጠቃቀም - ለጥናት፣ ለማህበራዊ ህይወት እና ለማመልከቻ ዝግጅት የሚሆንን ጊዜ ያለምንም ብክነት በጥንቃቄ የማከፋፈል ጥበብ።", 
    category: "Strategy" 
  },
  { 
    term: "Discipline", 
    definition: "Forcing yourself brutally to completely execute your highly specific plans even when you are totally devoid of internal motivation. Tip: Discipline, strictly not motivation, is what inherently gets you into MIT.", 
    amharic: "ዲሲፕሊን - ስሜትም ሆነ ጉልበት ባይኖርም እንኳን ግዴታን እና የተቀመጠን እቅድ ያለማቅማማት የመፈፀም ጥንካሬ።", 
    category: "Basics" 
  },
  { 
    term: "Habit Building", 
    definition: "The architectural engineering of your specific daily routine so that rigorous studying definitively becomes a completely automatic reflex rather than a massive dreadful chore. Tip: Start intensely small. Master studying for 15 minutes perfectly before attempting 4 hours.", 
    amharic: "ልማድን መገንባት - ከባድ የሚመስሉ ተግባራትን (እንደ SAT ጥናት) በየቀኑ በጥቂቱ በማድረግ ወደ ቀላል እና አንገብጋቢ የህይወት ክፍልነት መቀየር።", 
    category: "Basics" 
  },
  { 
    term: "Productivity", 
    definition: "Maximizing the absolute total output of extremely high-quality work generated strictly within a tiny amount of time. Tip: Busy is NOT productive. Re-reading a textbook is just busy; specifically writing flashcards is productive.", 
    amharic: "አምራችነት (Productivity) - በአጭር ጊዜ ውስጥ ከፍተኛ ጥራት እና ዋጋ ያለውን ስራ ወይም ጥናት የመስራት ብቃት (ዝም ብሎ ከመጠመድ በተለየ)።", 
    category: "Strategy" 
  },
  { 
    term: "Focus System", 
    definition: "A deeply militaristic framework (like the Pomodoro Technique) rigorously designed to violently protect your mind from immediate technological distractions. Tip: Put your phone in a completely different room while writing essays.", 
    amharic: "የትኩረት ስርዓት - ትኩረት የሚከፋፍሉ ነገሮችን (እንደ ስልክ) ሙሉ በሙሉ አርቆ በአንድ ስራ ላይ ብቻ አዕምሮን የማሰር ቴክኒክ (ለምሳሌ ፖሞዶሮ)።", 
    category: "Strategy" 
  },
  { 
    term: "Credit Transfer", 
    definition: "The aggressively bureaucratic process of moving specifically valid academic credits directly from a local Ethiopian university strictly to an American institution. Tip: Most top US universities violently refuse to accept African university credits.", 
    amharic: "የክሬዲት ዝውውር - በኢትዮጵያ ዩኒቨርሲቲ የተወሰዱ የተወሰኑ ኮርሶችን ወደ አሜሪካ ዩኒቨርሲቲ በማስቆጠር ትምህርትን የማሳጠር ሂደት።", 
    category: "Academics" 
  },
  { 
    term: "Academic Flexibility", 
    definition: "The profoundly immense freedom intrinsic to US colleges where you can routinely change your strict engineering major entirely to history in your heavily 2nd year. Tip: Never feel terrifyingly 'locked in' to the major you boldly put on your application.", 
    amharic: "አካዳሚያዊ ነፃነት - በአሜሪካ የትምህርት ስርዓት ውስጥ ተማሪዎች ከገቡ በኋላም የትምህርት ዘርፋቸውን (Major) በቀላሉ የመቀየር ሰፊ መብት።", 
    category: "Academics" 
  },
  { 
    term: "Curriculum Design", 
    definition: "The exact, rigid architecture of specific classes strictly required to definitively graduate. Tip: An 'Open Curriculum' (like Brown University) means absolutely zero required core classes; you completely design your own terrifyingly free path.", 
    amharic: "የስርዓተ-ትምህርት አወቃቀር - ለመመረቅ ግዴታ መወሰድ ያለባቸው ኮርሶች እና ተማሪው በራሱ ምርጫ የሚማራቸው ትምህርቶች ድብልቅ ስርዓት።", 
    category: "Academics" 
  },
  { 
    term: "Academic Freedom", 
    definition: "The intense, violently defended right of both professors and students to rigorously research profoundly controversial topics without severe governmental or administrative punishment. Tip: US classrooms explicitly demand you violently debate your professor.", 
    amharic: "የምርምር እና ሀሳብ ነፃነት - ተማሪዎችም ሆኑ መምህራን ማናቸውንም ስሱ ርዕሰ ጉዳዮች ያለ መንግስት ጣልቃ ገብነት ሙሉ በሙሉ የመመራመር መብት።", 
    category: "Academics" 
  },
  { 
    term: "Learning System", 
    definition: "The deeply cultural operational method entirely governing how knowledge is aggressively transferred (e.g., Ethiopian brutally rote memorization vs American intensely seminar-based deep analysis). Tip: Quickly adapt to 'discussion-based' ranking.", 
    amharic: "የመማር ማስተማር ስርዓት - በኢትዮጵያ ካለው 'አስታውሶ የመፃፍ' ባህል በተለየ አሜሪካ ውስጥ በክፍል ውስጥ ባለው 'የክርክር እና የትንታኔ' ተሳትፎ ላይ የተመሰረተ ትምህርት።", 
    category: "Academics" 
  },
  { 
    term: "Culture Shock", 
    definition: "The profoundly terrifying, deeply disorienting psychological massive trauma universally experienced when radically immersing yourself entirely strictly within a totally foreign culture. Tip: It flawlessly hits exactly 3 months into your first US semester. Prepare for it completely.", 
    amharic: "የባህል ድንጋጤ - ወደ አዲስ አገር ሲሄዱ ከምግብ፣ ከቋንቋ እና ከሰዎች ባህሪ ልዩነት የተነሳ የሚፈጠር ጊዜያዊ የስነ-ልቦና መረበሽ።", 
    category: "Global" 
  },
  { 
    term: "Adaptability", 
    definition: "Your deeply vital capacity to immediately completely rewire your behavioral norms strictly to wildly survive and thrive in a profoundly new cultural environment. Tip: The most successful international students aggressively adapt instantly.", 
    amharic: "ተለማማጭነት - አዲስ አካባቢ, የአየር ንብረት እና የትምህርት ስርዓት ሲያጋጥም በፍጥነት አኗኗርን እና አስተሳሰብን አስተካክሎ የመቀጠል ብቃት።", 
    category: "Basics" 
  },
  { 
    term: "Cross-Cultural Communication", 
    definition: "The highly nuanced ability to perfectly accurately convey massive ideas strictly across deeply rigid international cultural boundaries without causing incredibly accidental catastrophic offense. Tip: What is completely normal in Addis Ababa can be deeply offensive in Boston.", 
    amharic: "የባህላዊ መስተጋብር - የተለያየ አስተዳደግ እና እምነት ካላቸው የተለያዩ አገራት ተማሪዎች ጋር አክብሮትን በጠበቀ መልኩ ሀሳብን የመለዋወጥ ክህሎት።", 
    category: "Global" 
  },
  { 
    term: "Global Mindset", 
    definition: "Intensely viewing critically massive world issues permanently through heavily multiple international lenses rather than strictly one deeply localized perspective. Tip: A profoundly deep Global Mindset inherently forces Ivy League admission.", 
    amharic: "ዓለም አቀፋዊ አስተሳሰብ - ችግሮችን እና መፍትሄዎችን ከግል ወይም ከአገር አቀፍ እይታ ባለፈ ከዓለም አቀፍ ማህበረሰብ አንፃር የመረዳት ስፋት።", 
    category: "Global" 
  },
  { 
    term: "Social Integration", 
    definition: "The proactive, intensely frightening process of specifically forcing yourself to tightly make friends strictly entirely outside your completely safe Ethiopian cultural clique. Tip: Never exclusively isolate purely with other international students.", 
    amharic: "ማህበራዊ ውህደት - ከራስ አገር ልጆች ጋር ብቻ ከመሰብሰብ ወጥቶ ከተለያዩ አገራት እና ከአሜሪካውያን ተማሪዎች ጋር ጓደኝነትን ማዳበር።", 
    category: "Global" 
  },
  { 
    term: "Employability", 
    definition: "The absolute quantitative attractiveness of your highly specific skill profile directly to corporate massive recruiters immediately upon graduation. Tip: Heavy liberal arts majors must rigorously stack intense internships to wildly boost their employability.", 
    amharic: "የመቀጠር አቅም - ተማሪው ከተመረቀ በኋላ ስራ ሰጪዎችን (ድርጅቶችን) በመሳብ በፍጥነት ስራ የማግኘት ያለው እምቅ እና ተፈላጊ ክህሎት።", 
    category: "Career" 
  },
  { 
    term: "Career Pathway", 
    definition: "The explicitly structured, multi-step rigid roadmap rigorously guiding you inherently from a terrified college heavily freshman accurately into a profound highly-paid industry professional. Tip: The intensely finest universities explicitly force you perfectly onto this pathway.", 
    amharic: "የስራ መስመር - ከዩኒቨርሲቲ መግቢያ ጀምሮ እስከ ዋናው ስራ ዓለም ድረስ ያለውን የእድገት እና የልምድ መሰላል የሚያሳይ እቅድ።", 
    category: "Career" 
  },
  { 
    term: "Internship Pipeline", 
    definition: "The highly secretive, completely deeply established institutional relationships heavily linking exclusive specific universities flawlessly directly to exclusive massive corporations (e.g., UPenn directly to Wall Street). Tip: Check completely if your deeply targeted school officially has a massive pipeline heavily into your chosen precise industry.", 
    amharic: "የተለማማጭነት ትስስር (Pipeline) - አንዳንድ ዩኒቨርሲቲዎች ከታላላቅ ዓለም አቀፍ ኩባንያዎች ጋር ያላቸው ቀጥተኛ የተማሪዎች የስራ ልምምድ ምደባ ስምምነት።", 
    category: "Career" 
  },
  { 
    term: "Job Placement", 
    definition: "The totally dedicated, intensely critical university completely administrative department perfectly explicitly entirely tasked purely with violently securing you a strictly high-paying job. Tip: Heavily investigate the exact intensely specific 'Job Placement Rate' tightly heavily before accepting completely any offer.", 
    amharic: "ስራ ማስያዝ - ዩኒቨርሲቲዎች ተማሪዎቻቸው እንደተመረቁ ተገቢው ስራ እንዲያገኙ የሚረዱበት የተደራጀ የትብብር እና የምክር አገልግሎት።", 
    category: "Career" 
  },
  { 
    term: "Industry Demand", 
    definition: "The macroeconomic availability of jobs in a specific sector. Tip: Choose your major where there is explicit industry demand (e.g. Software Engineering, Healthcare) to guarantee your post-graduation work visa (OPT).", 
    amharic: "የስራ ገበያ ፍላጎት - በአንድ የተወሰነ ጊዜ ላይ የትኛው የትምህርት ዘርፍ (ለምሳሌ ኮምፒውተር ሳይንስ) ከፍተኛ የሰው ሀይል እና ክፍያ እንደሚጠይቅ የሚያሳይ የዘመኑ ሁኔታ።", 
    category: "Career" 
  },
  { 
    term: "Immigration Policy", 
    definition: "The constantly shifting legal framework governing your right to enter, study, and conditionally work in a host country. Tip: Always consult your university's International Student Office before making any legal decisions.", 
    amharic: "የኢሚግሬሽን ህግ - የውጪ አገር ዜጎች በአገር ውስጥ ለመግባት፣ ትምህርት ለመከታተል እና ለመቆየት መንግስት የሚያወጣቸው ጥብቅ ድንጋጌዎች።", 
    category: "Visa" 
  },
  { 
    term: "Visa Regulation", 
    definition: "The exact, inflexible rules attached to your specific visa class. Tip: An F-1 student visa technically requires you to maintain a full course load every single semester; dropping below it violates your regulation.", 
    amharic: "የቪዛ ደንብ - የተማሪ ቪዛ (F-1) ያዢዎች ሊያከብሯቸው የሚገቡ ዝርዝር የስራ እና የትምህርት ገደቦች። ደንብ መጣስ ቪዛን ሙሉ በሙሉ ያስረክባል።", 
    category: "Visa" 
  },
  { 
    term: "Work Restriction", 
    definition: "The strict legal limit on how international students can earn money. Tip: Under standard US rules, you are strictly restricted to working a maximum of 20 hours per week exclusively on-campus during your first year.", 
    amharic: "የስራ ገደብ - ዓለም አቀፍ ተማሪዎች በዩኒቨርሲቲው ግቢ ውስጥ ብቻ በሳምንት ቢበዛ ለ20 ሰዓታት እንዲሰሩ የሚፈቅድ ህጋዊ ክልከላ።", 
    category: "Visa" 
  },
  { 
    term: "Legal Status", 
    definition: "Your recognized standing in the eyes of the host country's government. Tip: If you fail your classes or drop out, your legal status expires instantly and you must depart the country.", 
    amharic: "ህጋዊ አቋም - በተማሪ ቪዛ ወደ አሜሪካ ከገቡ በኋላ ያለዎት የህግ ሽፋን እና ጥበቃ። ትምህርት በማቋረጥ ህጋዊ አቋምዎን ሊያጡ ይችላሉ።", 
    category: "Visa" 
  },
  { 
    term: "Compliance", 
    definition: "The absolute adherence to every single rule set by your university and the government. Tip: Compliance is not optional. Missing a single required SEVIS check-in meeting can trigger your deportation.", 
    amharic: "ህግን ማክበር (Compliance) - የዩኒቨርሲቲውን እና የአሜሪካን የኢሚግሬሽን ህጎች ያለምንም እንከን ሙሉ በሙሉ የመተግበር እና የማክበር ግዴታ።", 
    category: "Visa" 
  },

  // NEW ADDITIONS FROM PART SIX AUDIT
  { 
    term: "Data-Driven Decision", 
    definition: "Making critical college choices based purely on hard statistical data (acceptance rates, average financial aid) rather than emotional marketing brochures. Tip: Always fact-check a university's marketing claims against its Common Data Set.", 
    amharic: "በመረጃ የተደገፈ ውሳኔ - ዩኒቨርሲቲ ከማማረጥ አንስቶ በተለያዩ ውሳኔዎች ላይ በስሜት ከመነዳት ይልቅ ትክክለኛ መረጃዎችን እና የቁጥር ውጤቶችን መሰረት በማድረግ መወሰን።", 
    category: "Strategy" 
  },
  { 
    term: "Ranking System", 
    definition: "The highly influential but heavily flawed hierarchical lists (like US News) that arbitrarily categorize universities. Tip: 'Fit' is infinitely more important than 'Rank'. A #40 school might give you a full ride while a #10 gives you nothing.", 
    amharic: "የደረጃ አሰጣጥ ስርዓት - እንደ ዩ.ኤስ ኒውስ ያሉ ተቋማት ዩኒቨርሲቲዎችን ከ1ኛ ጀምሮ የሚደረድሩበት ስርዓት (ይህ ደረጃ ለተማሪው ምቾት እንዳልሆነ መታወቅ አለበት)።", 
    category: "Strategy" 
  },
  { 
    term: "Metrics", 
    definition: "The rigid numerical criteria (GPA, standardized test scores, class rank) that blindly filter out 90% of applicants before any human reads an essay. Tip: Do not inherently ignore metrics; they are the baseline gatekeepers.", 
    amharic: "መለኪያዎች (Metrics) - ዩኒቨርሲቲዎች የተማሪውን ብቃት ለመመዘን በዋነኛነት የሚጠቀሙባቸው ቁጥራዊ መረጃዎች (እንደ GPA እና SAT)።", 
    category: "Academics" 
  },
  { 
    term: "Statistical Analysis", 
    definition: "The rigorous evaluation of university admission trends to definitively identify your realistic chances. Tip: If a university's acceptance rate for international students needing full aid is 1%, completely recalibrate your expectations.", 
    amharic: "ስታቲስቲካዊ ትንታኔ - የአንድን ዩኒቨርሲቲ ተማሪ የመቀበል አቅም፣ የእርዳታ መጠን እና የውድድር ጠባይ በቁጥር መዝኖ የማለፍ እድልን የመገመት ክህሎት።", 
    category: "Strategy" 
  },
  { 
    term: "Trend Analysis", 
    definition: "Observing multi-year shifts in higher education (e.g., the massive shift toward Test-Optional policies). Tip: Capitalize on new trends. If Computer Science is flooded, position yourself strategically in unique interdisciplinary humanities.", 
    amharic: "የአዝማሚያ ትንታኔ - በዩኒቨርሲቲዎች የቅበላ ስርዓት ላይ በየጊዜው የሚመጡ ለውጦችን (ለምሳሌ ፈተና አለመጠየቅ) ተረድቶ ስልትን መቀየር።", 
    category: "Strategy" 
  },
  { 
    term: "Critical Thinking", 
    definition: "The intellectual refusal to simply accept what you are told without requiring empirical evidence. Tip: The US education system strictly evaluates elite critical thinking; pure rote memorization is functionally useless.", 
    amharic: "ሂሳዊ አስተሳሰብ - የቀረበን ሀሳብ ወይም መረጃ እንዳለ ከመቀበል ይልቅ፡ ከየት መጣ? አላማው ምንድነው? ብሎ የመመርመር እና የማመዛዘን ጥልቅ ብቃት።", 
    category: "Basics" 
  },
  { 
    term: "Analytical Thinking", 
    definition: "The methodical deconstruction of complex, overwhelming problems into manageable, logical parts. Tip: Apply this directly to your application strategy. Do not look at the entire application; break it down into tiny, actionable elements.", 
    amharic: "ትንታኔያዊ አስተሳሰብ - የተወሳሰቡ እና ከባድ ችግሮችን ወይም ትምህርቶችን ወደ ትንንሽ እና ለመፍታት ወደ ሚቀሉ ክፍሎች የመበተን ብቃት።", 
    category: "Basics" 
  },
  { 
    term: "Strategic Thinking", 
    definition: "The proactive calculation of multi-step plans engineered to achieve a highly specific distant goal. Tip: If you want to study AI, a strategic thinker joins the algorithms club in grade 9, not just before senior year applications.", 
    amharic: "ስልታዊ አስተሳሰብ - የዛሬን ጥቃቅን ውሳኔዎች የወደፊቱን የረጅም ጊዜ ግብ እና ራዕይ እንዲያሳኩ አድርጎ የመወሰን እና የማቀድ ጥበብ።", 
    category: "Strategy" 
  },
  { 
    term: "Problem Solving", 
    definition: "The rapid, emotionless process of identifying aggressive roadblocks and building immediate architectural solutions. Tip: When the College Board website crashes on deadline day, problem solvers pivot instantly while others panic.", 
    amharic: "ችግር መፍታት - አንድ ችግር ሲፈጠር በመደናገጥ ፋንታ በእርጋታ እና በአማራጮች ላይ ተመስርቶ መፍትሄ የማፈላለግ እርምጃ።", 
    category: "Basics" 
  },
  { 
    term: "Decision Framework", 
    definition: "A mental model utilized to make brutally logic-based decisions when faced with two highly complex choices. Tip: Use a framework to compare financial aid packages by mapping out the exact 4-year debt potential.", 
    amharic: "የውሳኔ ማዕቀፍ - በሁለት ወይም ከዛ በላይ ከባድ ምርጫዎች መካከል ውሳኔ ለመስጠት (ለምሳሌ የትኛውን ዩኒቨርሲቲ ልምረጥ?) የሚረዳ የተደራጀ ህግ ወይም ሚዛን።", 
    category: "Strategy" 
  },
  { 
    term: "Opportunity Mapping", 
    definition: "The relentless tracking and hunting of uniquely obscure scholarships, hidden mentorships, and exclusive grants. Tip: Elite opportunities are never handed to you; you must aggressively map and extract them across the internet.", 
    amharic: "የእድል ፍለጋ ጥበብ - በአካባቢዎም ሆነ በበይነ-መረብ ላይ ያሉትን የነፃ ትምህርት፣ የበጎ ፈቃድ እና የስራ ስልጠና ውድድር እድሎችን አድኖ የመጠቀም ብቃት።", 
    category: "Strategy" 
  },
  { 
    term: "Opportunity Cost", 
    definition: "The absolute value of the next best choice that you deliberately passed up. Tip: The strict opportunity cost of studying exclusively for the SAT on a Saturday is missing a transformative leadership networking event.", 
    amharic: "የተተወው እድል ዋጋ - አንድን ነገር ለመስራት ሲወስኑ (ለምሳሌ ለመተኛት) የተውት ሌላኛው ትልቅ እድል (ለምሳሌ የ SAT ጥናት) የሚያስከፍለው ኪሳራ።", 
    category: "Financial" 
  },
  { 
    term: "Opportunity Awareness", 
    definition: "The psychological readiness to rapidly notice and completely seize highly temporary structural advantages. Tip: True opportunity awareness is noticing that a top university suddenly waived application fees for a brief 24-hour window.", 
    amharic: "ስለ እድሎች መንቃት - በትምህርት ቤትዎም ሆነ በውጪ የሚወጡ ማስታወቂያዎችን በማንበብ አዳዲስ እና ጠቃሚ እድሎች ሲመጡ ፈጥኖ የመንቃት እና የመጠቀም ልምድ።", 
    category: "Strategy" 
  },
  { 
    term: "Resource Utilization", 
    definition: "The tactical maximization of incredibly limited operational assets. Tip: A privileged applicant might have a high-paid consultant; ruthless resource utilization is leveraging free Reddit datasets to entirely outcompete them.", 
    amharic: "የግብዓት አጠቃቀም - ትምህርት ቤት፣ ላይብረሪ ወይም ኢንተርኔት ላይ ያሉትን ውስን መረጃዎች እና እርዳታዎች ያለማባከን ለራስ እድገት የማዋል ስልት።", 
    category: "Strategy" 
  },
  { 
    term: "Long-Term Vision", 
    definition: "The ultimate 10-year systemic trajectory defining precisely why you are enduring this intensely painful application process. Tip: Possessing a profound long-term vision actively destroys temporary application burnout triggers.", 
    amharic: "የረጅም ጊዜ ራዕይ - ከኮሌጅ ማመልከቻ ባለፈ፡ ከ10 ወይም 20 ዓመት በኋላ ምን አይነት ሰው መሆን እና ለኢትዮጵያ ምን ማበርከት እፈልጋለሁ የሚለው አቢይ እይታ።", 
    category: "Strategy" 
  },
  { 
    term: "Life Strategy", 
    definition: "The holistic optimization of your mental health, financial independence, and academic rigor in absolute tandem. Tip: A brilliant life strategy prevents you from sacrificing your profound mental health just to secure a higher test score.", 
    amharic: "የህይወት ስልት - አካዳሚክ ብቻ ሳይሆን የጤናም፣ የማህበራዊ ህይወትም ሆነ የገንዘብ አቅም የሚያድግበትና በራስ የመቆም እና ራስን የማስቻል ዘላቂ እቅድ።", 
    category: "Strategy" 
  },
  { 
    term: "Academic Strategy", 
    definition: "The tactical deployment of your limited classroom hours specifically toward subjects that yield maximum application impact. Tip: Dropping an irrelevant elective to focus entirely on elite Calculus is a deliberate, highly potent academic strategy.", 
    amharic: "አካዳሚያዊ ስልት - አላስፈላጊ (ክሬዲት የሌላቸውን) ኮርሶች በመተው፣ የክፍል ደረጃዎን ከፍ በሚያደርጉ AP/IB በሚመስሉ ከባድ ትምህርቶች ላይ ብቻ ጊዜን የማቃጠል ዘይቤ።", 
    category: "Academics" 
  },
  { 
    term: "Career Strategy", 
    definition: "The distinctly preemptive alignment of your undergraduate profound degree directly with specific visa-friendly corporate sectors. Tip: Studying pure Philosophy is intellectually incredible, but technically terrifying for securing a future H-1B visa.", 
    amharic: "የሞያ ማሳደግ ስልት - ተከፋይ ስራ ለማግኘት እንዲረዳ በዪንቨርስቲ ቆይታዎ Internship እና Networking ላይ የሚያደርጉት ጥልቅ የልምድ ክምችት።", 
    category: "Career" 
  },
  { 
    term: "Personal Mission", 
    definition: "The unshakable core psychological reason you operate within the academic elite. Tip: Admission committees radically favor brilliant applicants driven by an intense personal mission over those driven primarily by aggressive parental pressure.", 
    amharic: "ግላዊ ተልዕኮ (Personal Mission) - ተማሪው ኮሌጅ በመማር እና እውቀት በመቅሰም መጨረሻ ላይ ሊሰራው ያሰበው እና በቀላሉ የማይቀየር ታላቅ አላማ።", 
    category: "Basics" 
  },
  { 
    term: "Unrealistic Expectations", 
    definition: "The massive structural delusion that maintaining entirely average baseline grades uniquely qualifies you for a full Ivy League scholarship. Tip: Cross-validate your highest dreams directly against harsh statistical realities immediately.", 
    amharic: "በምኞት ላይ የተመሰረተ ግምት - ደካማ ነጥብ እና መገለጫ ኖሮ 100% ነፃ የትምህርት እድል ከሃርቫርድ ዩኒቨርሲቲ እጠብቃለሁ ብሎ የሚያስከትል አላስፈላጊ የስነ-ልቦና ጫና።", 
    category: "Strategy" 
  },
  { 
    term: "Misleading Information", 
    definition: "Highly confident but profoundly categorically false admission advice delivered routinely by predatory consultants or uninformed online peers. Tip: Verify absolutely every piece of advice strictly against official university websites.", 
    amharic: "አሳሳች መረጃ - በማህበራዊ ሚዲያ እና በሐሰተኛ አማካሪዎች 'የቪዛ ቃለ-መጠይቅ አያስፈልግም' ወይንም 'ዝም ብለህ አፕላይ አድርግ' በሚል የሚነዛ ጎጂ አስተያየት።", 
    category: "Strategy" 
  },
  { 
    term: "Over-competition", 
    definition: "The globally systemic phenomenon where hundreds of thousands of intensely brilliant valedictorians fight purely for a literal handful of elite admission letters. Tip: Bypass standard over-competition by finding radically obscure niche scholarship paths.", 
    amharic: "ከፍተኛ ውድድር - በአለም አቀፍ ደረጃ በሚሊዮን የሚቆጠሩ ብሩህ ተማሪዎች በአንድ ጊዜ ለጥቂት ኮሌጆች እና የገንዘብ እርዳታዎች የሚያደርጉት እጅግ ከባድ ፉክክር።", 
    category: "Strategy" 
  },
  { 
    term: "System Limitations", 
    definition: "The rigid, deeply punishing structural roadblocks intrinsic to developing nations, like chronic internet failure or distinctly missing baseline testing centers. Tip: Top-tier universities explicitly read your unique application through the lens of your specific environment's constraints.", 
    amharic: "የስርዓት መሰናክሎች (System Limitations) - ተማሪውን የሚያግዙ እንደ የክፍያ ስልቶች (Credit Card) መጥፋት ወይም የፈተና መውሰጃ (SAT Center) ማነስ ያሉ ያላደጉ አገራት ፈተናዎች።", 
    category: "Global" 
  },
  { 
    term: "Structural Barriers", 
    definition: "Massive institutional or deeply geographic obstacles designed effectively to gatekeep massive global mobility. Tip: Understanding the severe reality of structural barriers absolutely stops you from deeply blaming yourself for complex, unavoidable systemic failures.", 
    amharic: "መዋቅራዊ እክሎች (Structural Barriers) - የኢትዮጵያ ተማሪ ወደ ዩኒቨርሲቲ ለመግባት ሲያስብ በመንግስት ፖሊሲዎች፣ በባንክ ህጎች፣ ወይም በትምህርት ስርዓቱ ክፍተት ምክንያት የሚያገኘው ጫና።", 
    category: "Global" 
  }
];

export const EXTRACURRICULAR_DATA = [
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Taking responsibility and leading a group towards a goal.',
    whatItMeans: 'Leadership is about showing initiative and the ability to manage a team. Universities value this because it proves you can handle complex responsibilities in any field—from drama to biology.',
    examples: [
      'Leading a school-wide debate or public speaking event',
      'Team captain for sports or an academic club',
      'President of a student council or a specific subject club',
      'Organizing a community project or charity fundraiser'
    ],
    howToStart: [
      'Identify a group or club you already participate in.',
      'Volunteer for a specific role like "Librarian," "Social Media Lead," or "Secretary."',
      'Propose a new activity for your group and offer to manage it.',
      'Maintain your role for at least a year to show consistency.'
    ],
    tips: [
      'Focus on the growth of your team members.',
      'Document the specific challenges you overcame as a leader.',
      'Focus on impact: What improved because you were in charge?'
    ]
  },
  {
    id: 'volunteering',
    title: 'Volunteering',
    description: 'Giving back to your community without expecting pay.',
    whatItMeans: 'Helping others shows empathy and social commitment. This is universally respected for all majors, as it proves you care about making an impact on the world.',
    examples: [
      'Caring for animals at a local shelter',
      'Environmental cleanup or tree-planting initiatives',
      'Teaching basic skills (reading, math, or music) to children',
      'Assisting at a local hospital or nursing home'
    ],
    howToStart: [
      'Look for local organizations or community centers in your neighborhood.',
      'Choose a cause that you are genuinely passionate about.',
      'Start with a small commitment of 1-2 hours a week.',
      'Keep a journal of the people you helped and the skills you learned.'
    ],
    tips: [
      'Universities prefer long-term commitment over one-time large events.',
      'Be reliable—your community depends on your consistency.',
      'Reflect on how volunteering has changed your perspective.'
    ]
  },
  {
    id: 'competitions',
    title: 'Competitions',
    description: 'Testing your skills against others at a high level.',
    whatItMeans: 'Participating in contests proves that you are driven and seek challenges in your chosen field—whether it is creative, scientific, or academic.',
    examples: [
      'Spelling bees, Essay contests, or Debate tournaments',
      'Science fairs or Math Olympiads',
      'Art exhibitions or photography contests',
      'Public speaking and poetry competitions'
    ],
    howToStart: [
      'Ask your teachers for notices about inter-school competitions.',
      'Search for national or international essay contests online.',
      'Join or start a "Competition Prep Club" at your school.',
      'Start with school-level contests to build your confidence.'
    ],
    tips: [
      'Winning is great, but participating shows your passion for the subject.',
      'Focus on 1 or 2 areas that match your intended area of study.',
      'Even if you don\'t win, mention what you learned from the experience.'
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'Creating something from scratch to solve a problem.',
    whatItMeans: 'Personal projects show that you are a "doer" who can turn ideas into reality. This can be anything from a scientific study to a community blog.',
    examples: [
      'Writing and publishing a blog or local history book',
      'Starting a small environmental initiative in your district',
      'Building a piece of furniture, a craft portfolio, or a small app',
      'Conducting an independent research study on a topic you love'
    ],
    howToStart: [
      'Identify a problem or a curiosity in your daily life.',
      'Define a small, achievable goal (e.g., "Write 5 articles about local art").',
      'Dedicate a few hours each week to making progress.',
      'Share your finished project with your teachers or community.'
    ],
    tips: [
      'A finished small project is better than a huge unfinished one.',
      'Keep a "Process Diary" (drafts, sketches, or experiments).',
      'Explain how the project solved a specific problem or answered a question.'
    ]
  },
  {
    id: 'clubs',
    title: 'Clubs',
    description: 'Joining and contributing to organized school groups.',
    whatItMeans: 'Being an active member of a club proves your social skills and your ability to work within a shared interest group over a long period.',
    examples: [
      'Model United Nations (MUN) or Drama societies',
      'Environment, Charity, or Community Wellness clubs',
      'Literature, Language, or Science clubs',
      'Music ensembles, Art clubs, or Chess societies'
    ],
    howToStart: [
      'Visit several clubs during "Intro week" to see which ones fit.',
      'Commit to one or two clubs where you can contribute the most.',
      'Regularly attend meetings and offer to help with organization.',
      'Aim for a leadership position after you have been active for a year.'
    ],
    tips: [
      'It is better to be very active in one club than a silent member of five.',
      'Contribute ideas for new events or group activities.',
      'Use the club to network with students who share your passions.'
    ]
  },
  {
    id: 'online_learning',
    title: 'Online Learning',
    description: 'Mastering new skills via digital platforms.',
    whatItMeans: 'Self-study shows that you are curious and disciplined enough to learn subjects outside of your school curriculum.',
    examples: [
      'Learning a new language through apps or online courses',
      'Taking an intro to Psychology, Business, or Philosophy',
      'Mastering a creative skill like Graphic Design or Photography',
      'Subject deep-dives (e.g., advanced Physics or Global History)'
    ],
    howToStart: [
      'Pick a subject you are interested in (not just one taught in school).',
      'Search for free courses on platforms like edX, Coursera, or Khan Academy.',
      'Set a realistic goal, such as finishing one module per week.',
      'Take notes and complete the final project to prove your knowledge.'
    ],
    tips: [
      'Focus on "Professional Certificates" if they are available for free.',
      'Apply what you learn to a real-world project or essay.',
      'Discuss your online learning in your university personal statement.'
    ]
  }
];
export const SCHOLARSHIP_INSIGHTS_DATA = [
  {
    title: "Awareness",
    items: [
      {
        title: "Why apply for scholarships?",
        explanation: "Scholarships are more than just money; they are an endorsement of your potential. They open doors to global networks, world-class facilities, and a future without the burden of student debt.",
        takeaway: "It is an investment in your future self."
      },
      {
        title: "Scholarship Myths in Ethiopia",
        explanation: "Many believe scholarships are only for high-ranking government officials or the extremely wealthy. In reality, modern scholarships focus on merit, diversity, and your unique story.",
        takeaway: "The only real barrier is not applying."
      },
      {
        title: "The 'Perfect Student' Myth",
        explanation: "You don't need a 100% average to win. Universities look for resilience, community impact, and character. A student with 85% and strong leadership often beats a 99% student with no activities.",
        takeaway: "Progress and character matter more than perfection."
      },
      {
        title: "What Scholarships Really Look For",
        explanation: "Universities seek 'Holistic Excellence.' This means they evaluate your grades, your extracurriculars, your personal essays, and your recommendation letters together as one complete picture.",
        takeaway: "You are more than just your transcript."
      }
    ]
  },
  {
    title: "Mindset",
    items: [
      {
        title: "Be Bold In Your Application",
        explanation: "Cultural modesty can sometimes hold Ethiopian students back. In international applications, it is essential to clearly and proudly state what you have achieved without being shy.",
        takeaway: "Don't hide your light; show them your value."
      },
      {
        title: "Express Your Work Directly",
        explanation: "Instead of saying 'I helped', explain exactly how you helped. Did you lead 10 people? Did you raise 5000 Birr? Be specific and direct about your contributions.",
        takeaway: "Specific results build massive credibility."
      },
      {
        title: "Why Confidence Matters",
        explanation: "Confidence isn't about having all the answers. it's about believing that you can learn and contribute to a global campus environment. Admission officers feel your confidence through your writing.",
        takeaway: "Your belief in yourself is contagious."
      }
    ]
  },
  {
    title: "Strategy",
    items: [
      {
        title: "Start Preparation Early",
        explanation: "Grade 9 and 10 are not too early. Building a strong profile takes years of small, consistent actions. Waiting until Grade 12 is the most common mistake students make.",
        takeaway: "Time is your greatest competitive advantage."
      },
      {
        title: "Importance of Consistency",
        explanation: "Doing a small activity for 3 years is much more impressive than doing a big activity for 2 weeks. Universities look for long-term commitment and steady growth.",
        takeaway: "Reliability is a rare and valued trait."
      },
      {
        title: "Long-term Thinking",
        explanation: "Don't just look at the next 6 months. Think about where you want to be in 5 years. This perspective helps you choose projects and subjects that truly align with your future goals.",
        takeaway: "The 'Now' builds the 'Future'."
      }
    ]
  },
  {
    title: "Deep Thinking",
    items: [
      {
        title: "Why Universities Invest in You",
        explanation: "A scholarship is an investment. The university believes that by educating you for free, you will one day contribute to society, represent their brand well, and make the world better.",
        takeaway: "You are a high-value asset, not a charity case."
      },
      {
        title: "Global Access & Representation",
        explanation: "Diversity makes campuses smarter. By bringing your Ethiopian perspective to a classroom in New York or London, you are helping other students see the world through a broader lens.",
        takeaway: "Your unique perspective is your power."
      },
      {
        title: "Is Scholarship Influence?",
        explanation: "Some argue that international scholarships are a form of soft power and cultural influence. While this is a complex topic, it is important to be aware of the global dynamics you are entering.",
        takeaway: "Stay aware. Think critical. Stay authentic."
      }
    ]
  }
];
export const TIMELINE_STRATEGY_DATA = [
  {
    section: "1. APPLICATION TIMELINE",
    title: "The Roadmap to Success",
    items: [
      {
        title: "Application Timeline",
        explanation: "Preparation should ideally start in Grade 11. Most applications open in August/September and close between December and February for the following Fall intake.",
        tip: "Start your primary research 12-18 months before you plan to travel."
      },
      {
        title: "Fall vs Spring Intake",
        explanation: "Fall (August/September) is the main intake with most scholarships and course options. Spring (January) is smaller but good for those who need more time.",
        tip: "Aim for Fall intake for better scholarship opportunities."
      },
      {
        title: "Key Deadlines",
        explanation: "Early Decision (ED) and Early Action (EA) usually close in November. Regular Decision (RD) usually closes in January or February.",
        tip: "Early Action is non-binding and can increase your chances significantly."
      },
      {
        title: "The Importance of December",
        explanation: "December is the 'Golden Month.' Many top scholarships have deadlines on Dec 1st or Dec 15th. Have all your documents ready by late November.",
        tip: "Don't leave applications for the Christmas holidays—systems often slow down."
      }
    ]
  },
  {
    section: "2. TYPES OF UNIVERSITIES & STRATEGY",
    title: "Building Your School List",
    items: [
      {
        title: "Reach, Match, Safety",
        explanation: "Reach: Your dream schools (very hard). Match: You meet all requirements. Safety: You are over-qualified (guaranteed admission).",
        tip: "A balanced list has 2 Reaches, 3 Matches, and 2 Safeties."
      },
      {
        title: "Need-Blind vs Need-Aware",
        explanation: "Need-Blind schools don't look at your bank account when deciding admission. Need-Aware schools consider if you can pay the tuition fees.",
        tip: "Most US universities are Need-Aware for international students."
      },
      {
        title: "Yield Protection",
        explanation: "Sometimes highly qualified students are rejected from 'easier' schools because the school thinks you will choose a better school instead.",
        tip: "Show genuine interest in every school you apply to, even safeties."
      },
      {
        title: "Choosing 'Best Fit'",
        explanation: "Don't just chase rankings. Choose a university where you will actually thrive academically, socially, and culturally.",
        tip: "Rankings don't tell the whole story; research the community too."
      }
    ]
  },
  {
    section: "3. COLLEGE SELECTION & RESEARCH",
    title: "Deep Dive Research",
    items: [
      {
        title: "Cost of Attendance (COA)",
        explanation: "COA = Tuition + Housing + Food + Books + Insurance. Never look at just the tuition fee; the 'hidden' costs add up fast.",
        tip: "Check if the university provides work-study programs to help with COA."
      },
      {
        title: "Location, Safety, & Climate",
        explanation: "Do you want a big city (NY/London) or a quiet college town? Remember, winters in places like Canada or Germany can be very harsh.",
        tip: "Check the 'Campus Safety' reports—they are public for most US schools."
      },
      {
        title: "Academic Flexibility",
        explanation: "Check if the university allows you to change your major easily or take classes outside your main department.",
        tip: "Liberal Arts Colleges are known for great academic flexibility."
      },
      {
        title: "Building a Balanced List",
        explanation: "Collect and verify info specifically for Ethiopian applicants. Some schools have specific requirements or scholarships for African students.",
        tip: "Use platforms like CommonApp, BigFuture, or UCAS for your research."
      },
      {
        title: "Avoiding Marketing Junk",
        explanation: "You will get many emails saying 'You are a great fit!' Usually, these are mass marketing. verify info on the official university website.",
        tip: "If it sounds too good to be true, double check with a counselor."
      }
    ]
  }
];

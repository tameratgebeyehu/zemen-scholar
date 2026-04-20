import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProfile {
  gradeLevel: string | null;
  country: string | null;
  englishLevel: string | null;
  goal: string | null;
}

const PROFILE_KEY = '@zemen_user_profile';

export const saveUserProfile = async (profile: UserProfile): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(profile);
    await AsyncStorage.setItem(PROFILE_KEY, jsonValue);
    return true;
  } catch (e) {
    console.error('Error saving user profile:', e);
    return false;
  }
};

export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(PROFILE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error reading user profile:', e);
    return null;
  }
};

export const clearUserProfile = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(PROFILE_KEY);
  } catch (e) {
    console.error('Error clearing profile:', e);
  }
};

// --- ROADMAP STORAGE ---

export type StepStatus = 'not_started' | 'in_progress' | 'completed';

export interface RoadmapProgress {
  [gradeKey: string]: {
    [stepId: string]: StepStatus;
  };
}

const ROADMAP_KEY = '@zemen_roadmap_progress';

export const saveRoadmapProgress = async (progress: RoadmapProgress): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(progress);
    await AsyncStorage.setItem(ROADMAP_KEY, jsonValue);
    return true;
  } catch (e) {
    console.error('Error saving roadmap progress:', e);
    return false;
  }
};

export const getRoadmapProgress = async (): Promise<RoadmapProgress> => {
  try {
    const jsonValue = await AsyncStorage.getItem(ROADMAP_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    console.error('Error reading roadmap progress:', e);
    return {};
  }
};

// --- DOCUMENTS STORAGE ---

export type DocumentStatus = 'missing' | 'uploaded' | 'verified';

export interface DocumentsProgress {
  [docId: string]: DocumentStatus;
}

const DOCUMENTS_KEY = '@zemen_documents_progress';

export const saveDocumentsProgress = async (progress: DocumentsProgress): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(progress);
    await AsyncStorage.setItem(DOCUMENTS_KEY, jsonValue);
    return true;
  } catch (e) {
    console.error('Error saving documents progress:', e);
    return false;
  }
};

export const getDocumentsProgress = async (): Promise<DocumentsProgress> => {
  try {
    const jsonValue = await AsyncStorage.getItem(DOCUMENTS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    console.error('Error reading documents progress:', e);
    return {};
  }
};

// --- VISA & APPLICATION STORAGE ---

export interface VisaAppProgress {
  application: { [stepId: string]: StepStatus };
  visa: { [stepId: string]: StepStatus };
}

const VISA_APP_KEY = '@zemen_visa_app_progress';

export const saveVisaAppProgress = async (progress: VisaAppProgress): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(progress);
    await AsyncStorage.setItem(VISA_APP_KEY, jsonValue);
    return true;
  } catch (e) {
    console.error('Error saving visa app progress:', e);
    return false;
  }
};

export const getVisaAppProgress = async (): Promise<VisaAppProgress> => {
  try {
    const jsonValue = await AsyncStorage.getItem(VISA_APP_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : { application: {}, visa: {} };
  } catch (e) {
    console.error('Error reading visa app progress:', e);
    return { application: {}, visa: {} };
  }
};



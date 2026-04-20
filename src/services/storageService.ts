import AsyncStorage from '@react-native-async-storage/async-storage';

export type StepStatus = 'not_started' | 'in_progress' | 'completed' | 'verified' | 'missing' | 'uploaded';

export interface AppData {
  user: {
    grade_level: string | null;
    target_country: string | null;
    english_level?: string | null;
    goal?: string | null;
    onboarding_completed?: boolean | null;
    app_theme?: 'light' | 'dark';
  };
  roadmap_progress: {
    [gradeKey: string]: {
      [stepId: string]: StepStatus;
    };
  };
  documents_progress: {
    [docId: string]: StepStatus;
  };
  application_progress: {
    [stepId: string]: StepStatus;
  };
  visa_progress: {
    [stepId: string]: StepStatus;
  };
  gpa_subjects: { id: string; name: string; percentage: string }[];
}

const STORAGE_KEY = 'zemen_scholar_data';

export const DEFAULT_DATA: AppData = {
  user: {
    grade_level: null,
    target_country: null,
    english_level: null,
    goal: null,
    onboarding_completed: null,
    app_theme: 'light',
  },
  roadmap_progress: {
    grade_9: {},
    grade_10: {},
    grade_11: {},
    grade_12: {},
  },
  documents_progress: {},
  application_progress: {},
  visa_progress: {},
  gpa_subjects: [
    { id: '1', name: 'Math', percentage: '' },
    { id: '2', name: 'English', percentage: '' }
  ],
};

export const storageService = {
  async getAppData(): Promise<AppData> {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        const parsed = JSON.parse(jsonValue);
        // Merge with defaults to handle new fields
        return {
          ...DEFAULT_DATA,
          ...parsed,
          user: { ...DEFAULT_DATA.user, ...parsed.user },
          gpa_subjects: Array.isArray(parsed.gpa_subjects) ? parsed.gpa_subjects : DEFAULT_DATA.gpa_subjects,
        };
      }
      return DEFAULT_DATA;
    } catch (e) {
      console.error('Error loading app data:', e);
      return DEFAULT_DATA;
    }
  },

  async saveAppData(data: AppData): Promise<boolean> {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      return true;
    } catch (e) {
      console.error('Error saving app data:', e);
      return false;
    }
  },

  async updateSection<K extends keyof AppData>(section: K, newData: any): Promise<AppData> {
    const currentData = await this.getAppData();
    
    const updatedData = {
      ...currentData,
      [section]: Array.isArray(newData) 
        ? newData 
        : { ...(currentData[section] as object), ...(newData as object) },
    };
    
    await this.saveAppData(updatedData);
    return updatedData;
  },

  async resetData(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error resetting data:', e);
    }
  },
};

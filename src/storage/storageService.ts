import AsyncStorage from '@react-native-async-storage/async-storage';

export type StepStatus = 'not_started' | 'in_progress' | 'completed' | 'verified' | 'missing' | 'uploaded';

export interface AppData {
  user: {
    grade_level: string | null;
    target_country: string | null;
    english_level?: string | null;
    goal?: string | null;
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
}

const STORAGE_KEY = 'zemen_scholar_data';

export const DEFAULT_DATA: AppData = {
  user: {
    grade_level: null,
    target_country: null,
    english_level: null,
    goal: null,
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
};

export const storageService = {
  /**
   * Loads all app data from AsyncStorage.
   * If no data exists, returns the default structure.
   */
  async getAppData(): Promise<AppData> {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : DEFAULT_DATA;
    } catch (e) {
      console.error('Error loading app data:', e);
      return DEFAULT_DATA;
    }
  },

  /**
   * Saves the entire data object to AsyncStorage.
   */
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

  /**
   * Updates a specific section of the data (e.g., 'user', 'roadmap_progress').
   */
  async updateSection<K extends keyof AppData>(section: K, newData: Partial<AppData[K]>): Promise<AppData> {
    const currentData = await this.getAppData();
    const updatedData = {
      ...currentData,
      [section]: {
        ...currentData[section],
        ...newData,
      },
    };
    await this.saveAppData(updatedData);
    return updatedData;
  },

  /**
   * Resets all data to default.
   */
  async resetData(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error resetting data:', e);
    }
  },
};

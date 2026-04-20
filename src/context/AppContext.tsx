import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppData, DEFAULT_DATA, storageService, StepStatus } from '../services/storageService';
import { theme as baseTheme, lightColors, darkColors } from '../theme/theme';

interface AppContextType {
  state: AppData;
  isLoading: boolean;
  theme: typeof baseTheme;
  updateUser: (userData: Partial<AppData['user']>) => Promise<void>;
  updateRoadmap: (gradeKey: string, stepId: string, status: StepStatus) => Promise<void>;
  updateDocuments: (docId: string, status: StepStatus) => Promise<void>;
  updateApplication: (stepId: string, status: StepStatus) => Promise<void>;
  updateVisa: (stepId: string, status: StepStatus) => Promise<void>;
  updateGPASubjects: (subjects: { id: string; name: string; percentage: string }[]) => Promise<void>;
  resetApp: () => Promise<void>;
  refreshData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppData>(DEFAULT_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTheme, setActiveTheme] = useState(baseTheme);

  // Initialize data on mount
  useEffect(() => {
    const init = async () => {
      const data = await storageService.getAppData();
      setState(data);
      setActiveTheme({
        ...baseTheme,
        colors: data.user.app_theme === 'dark' ? darkColors : lightColors
      });
      setIsLoading(false);
    };
    init();
  }, []);

  const refreshData = async () => {
    const data = await storageService.getAppData();
    setState(data);
  };

  const updateUser = async (userData: Partial<AppData['user']>) => {
    const newState = await storageService.updateSection('user', userData);
    setState(newState);
    if (userData.app_theme !== undefined) {
      setActiveTheme({
        ...baseTheme,
        colors: newState.user.app_theme === 'dark' ? darkColors : lightColors
      });
    }
  };

  const updateRoadmap = async (gradeKey: string, stepId: string, status: StepStatus) => {
    const currentRoadmap = state.roadmap_progress[gradeKey] || {};
    const updatedGradeProgress = { ...currentRoadmap, [stepId]: status };
    
    // Nested update
    const currentData = await storageService.getAppData();
    const updatedData = {
      ...currentData,
      roadmap_progress: {
        ...currentData.roadmap_progress,
        [gradeKey]: updatedGradeProgress
      }
    };
    
    await storageService.saveAppData(updatedData);
    setState(updatedData);
  };

  const updateDocuments = async (docId: string, status: StepStatus) => {
    const newState = await storageService.updateSection('documents_progress', { [docId]: status });
    setState(newState);
  };

  const updateApplication = async (stepId: string, status: StepStatus) => {
    const newState = await storageService.updateSection('application_progress', { [stepId]: status });
    setState(newState);
  };

  const updateVisa = async (stepId: string, status: StepStatus) => {
    const newState = await storageService.updateSection('visa_progress', { [stepId]: status });
    setState(newState);
  };

  const updateGPASubjects = async (subjects: { id: string; name: string; percentage: string }[]) => {
    const newState = await storageService.updateSection('gpa_subjects', subjects);
    setState(newState);
  };

  const resetApp = async () => {
    await storageService.resetData();
    setState(DEFAULT_DATA);
    setActiveTheme({
      ...baseTheme,
      colors: lightColors
    });
  };

  return (
    <AppContext value={{ 
      state, 
      isLoading,
      theme: activeTheme,
      updateUser, 
      updateRoadmap, 
      updateDocuments, 
      updateApplication, 
      updateVisa,
      updateGPASubjects,
      resetApp,
      refreshData
    }}>
      {children}
    </AppContext>

  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const useAppTheme = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within an AppProvider');
  }
  return context.theme;
};

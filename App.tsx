import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, LogBox, BackHandler } from 'react-native';

// Suppress known framework warnings that are safe to ignore
LogBox.ignoreLogs([
  'setLayoutAnimationEnabledExperimental is currently a no-op in the New Architecture',
]);
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { SplashScreen } from './src/screens/SplashScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { RoadmapScreen } from './src/screens/RoadmapScreen';
import { DocumentsGuideScreen } from './src/screens/DocumentsGuideScreen';
import { VisaScreen } from './src/screens/VisaScreen';
import { MoreScreen } from './src/screens/MoreScreen';
import { QAScreen } from './src/screens/QAScreen';
import { VisaQAScreen } from './src/screens/VisaQAScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { VideoGuidesScreen } from './src/screens/VideoGuidesScreen';
import { UsefulResourcesScreen } from './src/screens/UsefulResourcesScreen';
import { WordsToKnowScreen } from './src/screens/WordsToKnowScreen';
import { ExtracurricularScreen } from './src/screens/ExtracurricularScreen';
import { ActivityDetailScreen } from './src/screens/ActivityDetailScreen';
import { SupportScreen } from './src/screens/SupportScreen';
import { ScholarshipInsightsScreen } from './src/screens/ScholarshipInsightsScreen';
import { TimelineStrategyScreen } from './src/screens/TimelineStrategyScreen';
import { GPACalculatorScreen } from './src/screens/GPACalculatorScreen';
import { AboutView } from './src/screens/AboutView';
import { BottomTabs, TabType } from './src/navigation/BottomTabs';
import { AppProvider, useAppContext, useAppTheme } from './src/context/AppContext';
import { theme } from './src/theme/theme';
import { ResponsiveContainer } from './src/components/common/ResponsiveContainer';

type AppRoute = 'splash' | 'onboarding' | 'main' | 'qa' | 'visa_qa' | 'settings' | 'video_guides' | 'useful_resources' | 'words_to_know' | 'extracurricular' | 'activity_detail' | 'socials' | 'support' | 'scholarship_insights' | 'timeline_strategy' | 'gpa_calculator' | 'about_us';

const AppContent = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('splash');
  const [navigationHistory, setNavigationHistory] = useState<AppRoute[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [visaInitialTab, setVisaInitialTab] = useState<'application' | 'visa'>('application');
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [moreScrollY, setMoreScrollY] = useState(0);
  const { isLoading, state } = useAppContext();
  const theme = useAppTheme();

  const navigateTo = (route: AppRoute) => {
    setNavigationHistory(prev => [...prev, currentRoute]);
    setCurrentRoute(route);
  };

  const goBack = () => {
    if (navigationHistory.length > 0) {
      const newHistory = [...navigationHistory];
      const prevRoute = newHistory.pop();
      setNavigationHistory(newHistory);
      setCurrentRoute(prevRoute!);
      return true;
    }
    
    // Tab back behavior: If we are not on home tab, go to home tab
    if (currentRoute === 'main' && activeTab !== 'home') {
      setActiveTab('home');
      return true;
    }
    
    return false; // Exit app
  };

  // Hardware Back Button Handling
  useEffect(() => {
    const backAction = () => {
      return goBack();
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [currentRoute, navigationHistory, activeTab]);

  // Handle auto-reset navigation
  useEffect(() => {
    if (!state.user.onboarding_completed && (currentRoute === 'main' || currentRoute === 'settings')) {
      setCurrentRoute('onboarding');
      setNavigationHistory([]);
    }
  }, [state.user.onboarding_completed]);

  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const renderMainStage = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onNavigate={(dest) => {
          if (dest === 'visa_process') {
            // Go to Visa tab AND land on the Visa (Embassy) section directly
            setVisaInitialTab('visa');
            setActiveTab('visa');
          } else if (['home', 'roadmap', 'documents', 'visa', 'more'].includes(dest)) {
            setVisaInitialTab('application'); // reset for normal visa tab access
            setActiveTab(dest as any);
          } else {
            navigateTo(dest as any);
          }
        }} />;
      case 'roadmap':
        return <RoadmapScreen onNavigate={(route) => navigateTo(route as AppRoute)} />;
      case 'documents':
        return <DocumentsGuideScreen />;
      case 'visa':
        return <VisaScreen initialTab={visaInitialTab} onNavigate={(route) => navigateTo(route as AppRoute)} />;
      case 'more':
      default:
        return (
          <MoreScreen 
            onNavigate={(route) => navigateTo(route as AppRoute)} 
            initialScrollY={moreScrollY}
            onScrollChange={setMoreScrollY}
          />
        );
    }
  };

  const renderScreen = () => {
    switch (currentRoute) {
      case 'splash':
        return <SplashScreen onFinish={() => setCurrentRoute(state.user.onboarding_completed ? 'main' : 'onboarding')} />;
      case 'onboarding':
        return <OnboardingScreen onComplete={() => setCurrentRoute('main')} />;
      case 'qa':
        return <QAScreen onBack={goBack} />;
      case 'visa_qa':
        return <VisaQAScreen onBack={goBack} />;
      case 'settings':
        return <SettingsScreen onBack={goBack} />;
      case 'video_guides':
        return <VideoGuidesScreen onBack={goBack} />;
      case 'useful_resources':
        return <UsefulResourcesScreen onBack={goBack} />;
      case 'words_to_know':
        return <WordsToKnowScreen onBack={goBack} />;
      case 'extracurricular':
        return <ExtracurricularScreen 
          onBack={goBack} 
          onNavigate={(id) => {
            setSelectedActivityId(id);
            navigateTo('activity_detail');
          }} 
        />;
      case 'activity_detail':
        return <ActivityDetailScreen 
          activityId={selectedActivityId || ''}
          onBack={goBack} 
        />;
      case 'support':
        return <SupportScreen onBack={goBack} />;
      case 'scholarship_insights':
        return <ScholarshipInsightsScreen onBack={goBack} />;
      case 'timeline_strategy':
        return <TimelineStrategyScreen onBack={goBack} />;
      case 'gpa_calculator':
        return <GPACalculatorScreen onBack={goBack} />;
      case 'about_us':
        return (
          <AboutView 
            onBack={goBack} 
            onNavigate={(route: string) => navigateTo(route as AppRoute)}
          />
        );
      case 'main':
      default:
        return (
          <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
              {renderMainStage()}
            </View>
            <BottomTabs activeTab={activeTab} onTabPress={setActiveTab} />
          </View>
        );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={state.user.app_theme === 'dark' ? "light-content" : "dark-content"}
      />
      <ResponsiveContainer>
        {renderScreen()}
      </ResponsiveContainer>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 70, // Buffer for the bottom tabs
  },
});

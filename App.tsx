import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, LogBox } from 'react-native';

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
import { MoreInfoScreen } from './src/screens/MoreInfoScreen';
import { WordsToKnowScreen } from './src/screens/WordsToKnowScreen';
import { ExtracurricularScreen } from './src/screens/ExtracurricularScreen';
import { ActivityDetailScreen } from './src/screens/ActivityDetailScreen';
import { SupportScreen } from './src/screens/SupportScreen';
import { ScholarshipInsightsScreen } from './src/screens/ScholarshipInsightsScreen';
import { TimelineStrategyScreen } from './src/screens/TimelineStrategyScreen';
import { GPACalculatorScreen } from './src/screens/GPACalculatorScreen';
import { AboutUsScreen } from './src/screens/AboutUsScreen';
import { BottomTabs, TabType } from './src/navigation/BottomTabs';
import { AppProvider, useAppContext, useAppTheme } from './src/context/AppContext';
import { theme } from './src/theme/theme';

type AppRoute = 'splash' | 'onboarding' | 'main' | 'qa' | 'visa_qa' | 'settings' | 'more_info' | 'words_to_know' | 'extracurricular' | 'activity_detail' | 'socials' | 'support' | 'scholarship_insights' | 'timeline_strategy' | 'gpa_calculator' | 'about_us';

const AppContent = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('splash');
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [moreScrollY, setMoreScrollY] = useState(0);
  const { isLoading, state } = useAppContext();
  const theme = useAppTheme();

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
          if (['home', 'roadmap', 'documents', 'visa', 'more'].includes(dest)) {
            setActiveTab(dest as any);
          } else {
            setCurrentRoute(dest as any);
          }
        }} />;
      case 'roadmap':
        return <RoadmapScreen />;
      case 'documents':
        return <DocumentsGuideScreen />;
      case 'visa':
        return <VisaScreen onNavigate={(route) => setCurrentRoute(route as AppRoute)} />;
      case 'more':
      default:
        return (
          <MoreScreen 
            onNavigate={(route) => setCurrentRoute(route as AppRoute)} 
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
        return <QAScreen onBack={() => setCurrentRoute('main')} />;
      case 'visa_qa':
        return <VisaQAScreen onBack={() => setCurrentRoute('main')} />;
      case 'settings':
        return <SettingsScreen onBack={() => setCurrentRoute('main')} />;
      case 'more_info':
        return <MoreInfoScreen onBack={() => setCurrentRoute('main')} />;
      case 'words_to_know':
        return <WordsToKnowScreen onBack={() => setCurrentRoute('main')} />;
      case 'extracurricular':
        return <ExtracurricularScreen 
          onBack={() => setCurrentRoute('main')} 
          onNavigate={(id) => {
            setSelectedActivityId(id);
            setCurrentRoute('activity_detail');
          }} 
        />;
      case 'activity_detail':
        return <ActivityDetailScreen 
          activityId={selectedActivityId || ''}
          onBack={() => setCurrentRoute('extracurricular')} 
        />;
      case 'support':
        return <SupportScreen onBack={() => setCurrentRoute('main')} />;
      case 'scholarship_insights':
        return <ScholarshipInsightsScreen onBack={() => setCurrentRoute('main')} />;
      case 'timeline_strategy':
        return <TimelineStrategyScreen onBack={() => setCurrentRoute('main')} />;
      case 'gpa_calculator':
        return <GPACalculatorScreen onBack={() => setCurrentRoute('main')} />;
      case 'about_us':
        return (
          <AboutUsScreen 
            onBack={() => setCurrentRoute('main')} 
            onNavigate={(route) => setCurrentRoute(route as AppRoute)}
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
      {renderScreen()}
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

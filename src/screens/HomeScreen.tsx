import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Lightbulb, Target, Sparkles, UserCircle2, Sun, Moon } from 'lucide-react-native';
import { theme as baseTheme } from '../theme/theme';
import { ProgressBar } from '../components/common/ProgressBar';
import { NextStepCard } from '../components/NextStepCard';
import { QuickAccessGrid } from '../components/QuickAccessGrid';
import { Card } from '../components/common/Card';

import { useAppContext, useAppTheme } from '../context/AppContext';
import { ROADMAP_DATA, DOCUMENTS_GUIDE_DATA, UNIVERSITY_APP_STEPS, VISA_PROCESS_STEPS, MOTIVATIONS } from '../constants/appData';




interface Props {
  onNavigate?: (tab: any) => void;
}

export const HomeScreen = ({ onNavigate }: Props) => {
  const { state, updateUser } = useAppContext();
  const theme = useAppTheme();
  const [motivationState] = useState(MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)]);

  const { user } = state;
  const isDark = user.app_theme === 'dark';

  const toggleTheme = async () => {
    await updateUser({ app_theme: isDark ? 'light' : 'dark' });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning,';
    if (hour < 18) return 'Good Afternoon,';
    return 'Good Evening,';
  };


  // --- DYNAMIC PROGRESS CALCULATION ---
  const calculateTotalProgress = () => {
    const { roadmap_progress, documents_progress, application_progress, visa_progress } = state;
    
    // 1. Roadmap Progress
    const allRoadmapSteps = Object.values(ROADMAP_DATA).flat();
    const completedRoadmap = allRoadmapSteps.filter(s => {
      // Find the status across all grade keys
      const allStatusValues = Object.values(roadmap_progress).map(gradeObj => gradeObj[s.id]);
      return allStatusValues.some(status => status === 'completed');
    }).length;
    const roadmapScore = allRoadmapSteps.length > 0 ? (completedRoadmap / allRoadmapSteps.length) : 0;


    // 2. Documents Progress
    const completedDocs = Object.values(documents_progress).filter(s => s === 'verified').length;
    const docScore = DOCUMENTS_GUIDE_DATA.length > 0 ? (completedDocs / DOCUMENTS_GUIDE_DATA.length) : 0;

    // 3. Visa & Application Progress
    const allVisaSteps = [...UNIVERSITY_APP_STEPS, ...VISA_PROCESS_STEPS];
    const completedVisa = allVisaSteps.filter(s => (application_progress[s.id] === 'completed' || visa_progress[s.id] === 'completed')).length;
    const visaScore = allVisaSteps.length > 0 ? (completedVisa / allVisaSteps.length) : 0;

    // Weighted Total
    const total = Math.round(((roadmapScore + docScore + visaScore) / 3) * 100);
    return Math.min(100, Math.max(0, total));
  };

  const progressPercent = calculateTotalProgress();

  const getNextAction = () => {
    const currentGrade = user.grade_level || 'Grade 11';
    const roadmapSteps = ROADMAP_DATA[currentGrade] || [];
    const gradeProgress = state.roadmap_progress[currentGrade] || {};
    
    // Check Roadmap first
    for (const step of roadmapSteps) {
      if (gradeProgress[step.id] !== 'completed') {
        return {
          title: step.title,
          actionText: 'Continue Roadmap',
          route: 'roadmap'
        };
      }
    }

    // Check Documents next
    for (const doc of DOCUMENTS_GUIDE_DATA) {
      if (state.documents_progress[doc.id] !== 'verified') {
        return {
          title: `Prepare: ${doc.title}`,
          actionText: 'View Documents',
          route: 'documents'
        };
      }
    }

    // Check Visa next
    for (const visa of VISA_PROCESS_STEPS) {
      if (state.visa_progress[visa.id] !== 'completed') {
        return {
          title: visa.title,
          actionText: 'View Visa Process',
          route: 'visa'
        };
      }
    }
    
    // Check Application next
    for (const app of UNIVERSITY_APP_STEPS) {
      if (state.application_progress[app.id] !== 'completed') {
        return {
          title: app.title,
          actionText: 'View Application Process',
          route: 'visa'
        };
      }
    }

    return null; // All done!
  };

  const nextAction = getNextAction();


  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Dynamic Native Greeting */}
      <View style={[styles.miniHeader, { backgroundColor: theme.colors.background }]}>
        <View style={styles.headerTextCol}>
          <Text style={[styles.greetingSubtitle, { color: theme.colors.textSecondary }]}>{getGreeting()}</Text>
          <Text style={[styles.greetingTitle, { color: theme.colors.text }]}>Scholar</Text>
        </View>
        <TouchableOpacity 
          style={[styles.themeToggleBtn, { backgroundColor: theme.colors.card }]} 
          onPress={toggleTheme}
          activeOpacity={0.7}
        >
          {isDark ? (
            <Sun color={theme.colors.warning} size={22} />
          ) : (
            <Moon color={theme.colors.text} size={22} />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Section (HERO WIDGET) */}
        <View style={[styles.heroWidget, { backgroundColor: theme.colors.card }]}>
          <View style={styles.heroHeaderRow}>
            <View>
              <Text style={[styles.heroTitle, { color: theme.colors.text }]}>Overall Readiness</Text>
              <Text style={[styles.heroDetail, { color: theme.colors.textSecondary }]}>Your university journey</Text>
            </View>
            <View style={[styles.percentBadge, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.percentBadgeText}>{progressPercent}%</Text>
            </View>
          </View>
          <ProgressBar 
            progress={progressPercent} 
            showLabel={false} 
            height={10}
            fillColor={theme.colors.primary}
            trackColor={theme.colors.border}
          />
        </View>


        {/* Next Step was moved below Quick Access */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
        </View>
        
        <QuickAccessGrid onPressItem={(route) => {
          if (route === 'universities') {
            onNavigate?.('visa');
          } else {
            onNavigate?.(route);
          }
        }} />

        {/* Next Step (Moved to Bottom) - Only shown if there is a next action */}
        {nextAction && (
          <View style={{ marginTop: 20 }}>
            <NextStepCard 
              title={nextAction.title}
              actionText={nextAction.actionText}
              onPress={() => onNavigate?.(nextAction.route)}
            />
          </View>
        )}

        {/* Motivation Card */}
        <View style={[styles.quoteCardContainer, { backgroundColor: theme.colors.card }]}>
          <View style={[styles.quoteIconBox, { backgroundColor: theme.colors.warning + '15' }]}>
            <Sparkles color={theme.colors.warning} size={20} />
          </View>
          <View style={styles.quoteTextCol}>
            <Text style={[styles.quoteHeader, { color: theme.colors.warning }]}>Daily Advisor</Text>
            <Text style={[styles.quoteText, { color: theme.colors.text }]}>{motivationState}</Text>
          </View>
        </View>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseTheme.colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseTheme.colors.background,
  },
  miniHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  themeToggleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  headerTextCol: {
    justifyContent: 'center',
  },
  greetingSubtitle: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  greetingTitle: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 4,
  },
  heroWidget: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  heroHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  heroDetail: {
    fontSize: 14,
    fontWeight: '600',
  },
  percentBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  percentBadgeText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  sectionHeader: {
    marginBottom: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  quoteCardContainer: {
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    ...baseTheme.shadows.light,
  },
  quoteIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  quoteTextCol: {
    flex: 1,
  },
  quoteHeader: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  quoteText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
  },

});

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Globe, GraduationCap, Landmark, CheckCircle2, Target, ChevronRight } from 'lucide-react-native';
import { useAppTheme, useAppContext } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { ProcessStepCard } from '../components/features/ProcessStepCard';
import { PremiumTouchable } from '../components/common/PremiumTouchable';
import { StepStatus } from '../services/storageService';
import { UNIVERSITY_APP_STEPS, VISA_PROCESS_STEPS } from '../constants/appData';

const { width } = Dimensions.get('window');

interface Props {
  onNavigate?: (route: string) => void;
  initialTab?: 'application' | 'visa';
}

export const VisaScreen = ({ onNavigate, initialTab = 'application' }: Props) => {
  const { state, updateApplication, updateVisa } = useAppContext();
  const theme = useAppTheme();
  const [activeTab, setActiveTab] = useState<'application' | 'visa'>(initialTab);
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);

  const { user, application_progress, visa_progress } = state;

  const handleNavigate = (route: string) => {
    if (onNavigate) onNavigate(route);
  };

  const currentSteps = activeTab === 'application' ? UNIVERSITY_APP_STEPS : VISA_PROCESS_STEPS;
  const currentProgress = activeTab === 'application' ? application_progress : visa_progress;

  const handleUpdateStatus = async (type: 'application' | 'visa', stepId: string, newStatus: StepStatus) => {
    if (type === 'application') {
      await updateApplication(stepId, newStatus);
    } else {
      await updateVisa(stepId, newStatus);
    }
  };

  const completedCount = Object.values(currentProgress).filter(s => s === 'completed').length;
  const totalCount = currentSteps.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* minimalist Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              {activeTab === 'application' ? 'University Flow' : 'Embassy Flow'}
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              {activeTab === 'application' ? 'Your academic journey' : 'Your visa process'}
            </Text>
          </View>
          <View style={[styles.countryBadge, { backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.primary + '30' }]}>
            <Globe color={theme.colors.primary} size={14} />
            <Text style={[styles.countryText, { color: theme.colors.primary }]}>{user.target_country || 'USA'} 🇺🇸</Text>
          </View>
        </View>

        {/* Premium Segmented Switcher */}
        <View style={[styles.switcherContainer, { backgroundColor: theme.colors.card }]}>
          <PremiumTouchable 
            style={[styles.switcherTab, activeTab === 'application' && { backgroundColor: theme.colors.primary }]}
            onPress={() => { setActiveTab('application'); setExpandedStepId(null); }}
          >
            <GraduationCap color={activeTab === 'application' ? '#FFF' : theme.colors.textSecondary} size={18} />
            <Text style={[styles.switcherText, { color: activeTab === 'application' ? '#FFF' : theme.colors.textSecondary }]}>
              Apps
            </Text>
          </PremiumTouchable>
          <PremiumTouchable 
            style={[styles.switcherTab, activeTab === 'visa' && { backgroundColor: theme.colors.primary }]}
            onPress={() => { setActiveTab('visa'); setExpandedStepId(null); }}
          >
            <Landmark color={activeTab === 'visa' ? '#FFF' : theme.colors.textSecondary} size={18} />
            <Text style={[styles.switcherText, { color: activeTab === 'visa' ? '#FFF' : theme.colors.textSecondary }]}>
              Visa
            </Text>
          </PremiumTouchable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Journey Progress Card */}
        <View style={[styles.summaryCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.summaryTop}>
            <View style={[styles.iconBox, { backgroundColor: theme.colors.primary + '15' }]}>
              <CheckCircle2 color={theme.colors.primary} size={22} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>YOUR READINESS</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
                {completedCount} of {totalCount} Steps Done
              </Text>
            </View>
            <Text style={[styles.percentText, { color: theme.colors.primary }]}>{progressPercent}%</Text>
          </View>
          <View style={[styles.progressBase, { backgroundColor: theme.colors.border }]}>
            <View style={[styles.progressFill, { width: `${progressPercent}%`, backgroundColor: theme.colors.primary }]} />
          </View>
        </View>

        {activeTab === 'application' && (
          <PremiumTouchable 
            style={[styles.strategyCard, { backgroundColor: theme.colors.primary }]}
            onPress={() => handleNavigate('timeline_strategy')}
          >
            <View style={styles.strategyLeft}>
              <View style={styles.strategyIconBox}>
                <Target color={theme.colors.primary} size={20} />
              </View>
              <View>
                <Text style={styles.strategyTitle}>Timeline & Strategy</Text>
                <Text style={styles.strategySubtitle}>Essential guide for your application</Text>
              </View>
            </View>
            <ChevronRight color="#FFF" size={20} />
          </PremiumTouchable>
        )}

        <View style={styles.timelineWrapper}>
          {currentSteps.map((step, idx) => (
            <ProcessStepCard 
              key={step.id}
              step={step}
              status={currentProgress[step.id] || 'not_started'}
              isLast={idx === currentSteps.length - 1}
              isExpanded={expandedStepId === step.id}
              onExpand={() => setExpandedStepId(expandedStepId === step.id ? null : step.id)}
              onUpdateStatus={(id, status) => handleUpdateStatus(activeTab, id, status)}
            />
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  countryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1,
    gap: 6,
  },
  countryText: {
    fontSize: 12,
    fontWeight: '700',
  },
  switcherContainer: {
    flexDirection: 'row',
    borderRadius: 100,
    padding: 6,
    gap: 6,
  },
  switcherTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 100,
    gap: 8,
  },
  switcherText: {
    fontSize: 14,
    fontWeight: '800',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  summaryCard: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 3,
  },
  summaryTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 16,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  summaryValue: {
    fontSize: 17,
    fontWeight: '800',
    marginTop: 2,
  },
  percentText: {
    fontSize: 20,
    fontWeight: '900',
  },
  progressBase: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  timelineWrapper: {
    paddingLeft: 4,
  },
  strategyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 20,
    marginBottom: 24,
    ...baseTheme.shadows.medium,
  },
  strategyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  strategyIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  strategyTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
  strategySubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '500',
  },
});

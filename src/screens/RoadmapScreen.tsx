import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { theme } from '../theme/theme';
import { GradeSelector, GradeLevel } from '../components/features/roadmap/GradeSelector';
import { OfflineStepCard } from '../components/features/roadmap/OfflineStepCard';


import { useAppContext } from '../context/AppContext';
import { StepStatus } from '../services/storageService';



import { ROADMAP_DATA } from '../constants/appData';
import { RoadmapStep } from '../types';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { ChevronLeft, Target, Award } from 'lucide-react-native';


export const RoadmapScreen = () => {
  const { state, updateRoadmap } = useAppContext();
  const theme = useAppTheme();
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('Grade 11');

  const { user, roadmap_progress } = state;

  useEffect(() => {
    if (user.grade_level) {
      setSelectedGrade(user.grade_level as GradeLevel);
    }
  }, [user.grade_level]);

  const handleUpdateStatus = async (stepId: string, newStatus: StepStatus) => {
    await updateRoadmap(selectedGrade, stepId, newStatus);
  };

  const currentSteps = ROADMAP_DATA[selectedGrade] || [];
  const gradeProgress = roadmap_progress[selectedGrade] || {};
  
  const completedCount = currentSteps.filter(s => gradeProgress[s.id] === 'completed').length;
  const progressPercent = currentSteps.length > 0 ? Math.round((completedCount / currentSteps.length) * 100) : 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Premium Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <View>
          <Text style={[styles.title, { color: theme.colors.text }]}>Roadmap</Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>Your step-by-step path to USA</Text>
        </View>
        <View style={[styles.countryBadge, { backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.primary }]}>
          <Text style={[styles.countryText, { color: theme.colors.primary }]}>{user.target_country || 'USA'} 🇺🇸</Text>
        </View>
      </View>

      <GradeSelector 
        selectedGrade={selectedGrade} 
        onSelectGrade={setSelectedGrade} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Progress Summary Card */}
        <View style={[styles.summaryCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.summaryInfo}>
            <View style={[styles.iconCircle, { backgroundColor: theme.colors.primary + '15' }]}>
              <Award color={theme.colors.primary} size={24} />
            </View>
            <View>
              <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>{selectedGrade} PROGRESS</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
                {completedCount} of {currentSteps.length} Steps Done
              </Text>
            </View>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBarBase, { backgroundColor: theme.colors.border }]}>
              <View style={[styles.progressBarFill, { width: `${progressPercent}%`, backgroundColor: theme.colors.primary }]} />
            </View>
            <Text style={[styles.progressPercent, { color: theme.colors.primary }]}>{progressPercent}%</Text>
          </View>
        </View>

        <View style={styles.timelineWrapper}>
          {currentSteps.map((step, index) => (
            <OfflineStepCard 
              key={step.id}
              step={step}
              status={gradeProgress[step.id] || 'not_started'}
              onToggleStatus={handleUpdateStatus}
              isFirst={index === 0}
              isLast={index === currentSteps.length - 1}
            />
          ))}
        </View>

        {currentSteps.length === 0 && (
          <View style={styles.emptyContainer}>
            <Target color={theme.colors.textSecondary} size={48} />
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>No steps defined for this grade yet.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '500',
  },
  countryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1.5,
  },
  countryText: {
    fontSize: 12,
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
    marginTop: 12,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 3,
  },
  summaryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 2,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBarBase: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: '800',
    width: 40,
    textAlign: 'right',
  },
  timelineWrapper: {
    paddingLeft: 4, // Align with nodes
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 16,
    textAlign: 'center',
  },
});

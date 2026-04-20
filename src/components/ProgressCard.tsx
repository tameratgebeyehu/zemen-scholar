import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
import { theme } from '../theme/theme';

const steps = [
  { id: 1, title: 'Choose Country', status: 'completed' },
  { id: 2, title: 'Take Exams', status: 'in-progress' },
  { id: 3, title: 'Prepare Documents', status: 'not-started' },
  { id: 4, title: 'Apply to Universities', status: 'not-started' },
];

export const ProgressCard = () => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Your Progress</Text>
      <ProgressBar progress={0.35} />
      <View style={styles.stepsContainer}>
        {steps.map((step) => (
          <View key={step.id} style={styles.stepItem}>
            <View style={[
              styles.dot,
              step.status === 'completed' && { backgroundColor: theme.colors.success },
              step.status === 'in-progress' && { backgroundColor: theme.colors.warning },
              step.status === 'not-started' && { backgroundColor: theme.colors.border },
            ]} />
            <Text style={[
              styles.stepText,
              step.status === 'not-started' && { color: theme.colors.textSecondary }
            ]}>
              {step.title}
            </Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
  },
  stepsContainer: {
    marginTop: theme.spacing.md,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: theme.spacing.sm,
  },
  stepText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
  },
});

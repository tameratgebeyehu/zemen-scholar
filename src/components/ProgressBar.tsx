import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../theme/theme';

interface ProgressBarProps {
  progress: number; // 0 to 1
  showLabel?: boolean;
  label?: string;
}

export const ProgressBar = ({ progress, showLabel = true, label = 'Overall Completion' }: ProgressBarProps) => {
  const percentage = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      {showLabel && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>
      )}
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: theme.spacing.sm,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xs,
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  percentage: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  track: {
    height: 8,
    backgroundColor: theme.colors.border,
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.full,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

interface Props {
  progress: number; // 0 to 100
  height?: number;
  showLabel?: boolean;
  fillColor?: string;
  trackColor?: string;
}

export const ProgressBar = ({ 
  progress, 
  height = 8, 
  showLabel = true,
  fillColor,
  trackColor
}: Props) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <View style={styles.container}>
      {showLabel && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Progress</Text>
          <Text style={styles.percentage}>{clampedProgress}%</Text>
        </View>
      )}
      <View style={[styles.track, { height, borderRadius: height / 2, backgroundColor: trackColor || theme.colors.border }]}>
        <View 
          style={[
            styles.fill, 
            { 
              width: `${clampedProgress}%`,
              borderRadius: height / 2,
              backgroundColor: fillColor || theme.colors.primary,
            }
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 4,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  percentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  track: {
    width: '100%',
    backgroundColor: theme.colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});

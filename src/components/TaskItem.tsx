import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { CheckCircle2, Circle } from 'lucide-react-native';
import { theme } from '../theme/theme';

interface TaskItemProps {
  title: string;
  subtext: string;
  completed: boolean;
  onPress?: () => void;
}

export const TaskItem = ({ title, subtext, completed, onPress }: TaskItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        {completed ? (
          <CheckCircle2 stroke={theme.colors.success} size={24} />
        ) : (
          <Circle stroke={theme.colors.border} size={24} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, completed && styles.completedText]}>{title}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.xs,
  },
  iconContainer: {
    marginRight: theme.spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  completedText: {
    color: theme.colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  subtext: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
import { TestCategory } from '../types/tests';

interface Props {
  test: TestCategory;
  onPress: () => void;
}

export const TestCard = ({ test, onPress }: Props) => {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{test.name}</Text>
        <View style={styles.targetBadge}>
          <Text style={styles.targetText}>Target: {test.targetScore}</Text>
        </View>
      </View>
      
      <Text style={styles.description}>{test.shortDescription}</Text>
      
      <View style={styles.progressSection}>
        <ProgressBar progress={test.progress} showLabel={false} />
        <Text style={styles.progressText}>{Math.round(test.progress * 100)}% Complete</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Continue Practice</Text>
        <ChevronRight stroke="#fff" size={18} />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  targetBadge: {
    backgroundColor: `${theme.colors.primary}15`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.sm,
  },
  targetText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  description: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  progressSection: {
    marginBottom: theme.spacing.md,
  },
  progressText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginTop: 4,
    textAlign: 'right',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.md,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 4,
  },
});

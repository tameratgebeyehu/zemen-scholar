import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BookOpen, Lightbulb } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { Card } from './Card';
import { Lesson } from '../types/tests';

interface Props {
  lesson: Lesson;
}

export const LessonCard = ({ lesson }: Props) => {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <BookOpen stroke={theme.colors.primary} size={20} />
        <Text style={styles.title}>{lesson.title}</Text>
      </View>
      
      <Text style={styles.explanation}>{lesson.explanation}</Text>
      
      <View style={styles.exampleBox}>
        <Text style={styles.exampleLabel}>Example:</Text>
        <Text style={styles.exampleText}>{lesson.example}</Text>
      </View>
      
      {lesson.keyTips && lesson.keyTips.length > 0 && (
        <View style={styles.tipsContainer}>
          <View style={styles.tipsHeader}>
            <Lightbulb stroke={theme.colors.warning} size={16} />
            <Text style={styles.tipsTitle}>Key Tips</Text>
          </View>
          {lesson.keyTips.map((tip, index) => (
            <View key={index} style={styles.tipRow}>
              <View style={styles.bullet} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginLeft: 8,
  },
  explanation: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    lineHeight: 22,
    marginBottom: theme.spacing.md,
  },
  exampleBox: {
    backgroundColor: `${theme.colors.primary}10`,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  exampleLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  exampleText: {
    fontSize: 14,
    color: theme.colors.text,
    fontStyle: 'italic',
  },
  tipsContainer: {
    backgroundColor: '#FDFBEB', // Light warning tint
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.warning,
    marginLeft: 6,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.warning,
    marginTop: 8,
    marginRight: 8,
  },
  tipText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    flex: 1,
  },
});

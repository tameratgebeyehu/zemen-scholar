import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../theme/theme';

export type GradeLevel = 'Grade 9' | 'Grade 10' | 'Grade 11' | 'Grade 12';

const GRADES: GradeLevel[] = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

interface Props {
  selectedGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
}

export const GradeSelector = ({ selectedGrade, onSelectGrade }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {GRADES.map((grade) => {
          const isSelected = selectedGrade === grade;
          return (
            <TouchableOpacity
              key={grade}
              activeOpacity={0.8}
              style={[styles.chip, isSelected && styles.chipSelected]}
              onPress={() => onSelectGrade(grade)}
            >
              <Text style={[styles.text, isSelected && styles.textSelected]}>
                {grade}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.md,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipSelected: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  textSelected: {
    color: '#fff',
  },
});

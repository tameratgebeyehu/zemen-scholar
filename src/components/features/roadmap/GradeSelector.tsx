import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAppTheme } from '../../../context/AppContext';
import { theme as baseTheme } from '../../../theme/theme';

export type GradeLevel = 'Grade 9' | 'Grade 10' | 'Grade 11' | 'Grade 12';

const GRADES: GradeLevel[] = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

interface Props {
  selectedGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
}

export const GradeSelector = ({ selectedGrade, onSelectGrade }: Props) => {
  const theme = useAppTheme();

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
              style={[
                styles.chip, 
                { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
                isSelected && { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }
              ]}
              onPress={() => onSelectGrade(grade)}
            >
              <Text style={[
                styles.text, 
                { color: theme.colors.textSecondary },
                isSelected && styles.textSelected
              ]}>
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
    marginVertical: 12,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  chip: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 100, // True pill
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  textSelected: {
    color: '#FFF',
  },
});

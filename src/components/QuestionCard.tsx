import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle2, XCircle } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { Card } from './Card';
import { Question } from '../types/tests';

interface Props {
  question: Question;
  questionIndex: number;
}

export const QuestionCard = ({ question, questionIndex }: Props) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (id: string) => {
    if (!submitted) {
      setSelectedOptionId(id);
    }
  };

  const handleSubmit = () => {
    if (selectedOptionId) {
      setSubmitted(true);
    }
  };

  const selectedOption = question.options.find(opt => opt.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect;

  return (
    <Card style={styles.card}>
      <Text style={styles.questionNumber}>Question {questionIndex + 1}</Text>
      <Text style={styles.questionText}>{question.text}</Text>
      
      <View style={styles.optionsContainer}>
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          let optionStyle = styles.optionNormal;
          let textStyle = styles.optionTextNormal;

          if (submitted) {
            if (option.isCorrect) {
              optionStyle = styles.optionCorrect;
              textStyle = styles.optionTextCorrect;
            } else if (isSelected && !option.isCorrect) {
              optionStyle = styles.optionIncorrect;
              textStyle = styles.optionTextIncorrect;
            }
          } else if (isSelected) {
            optionStyle = styles.optionSelected;
          }

          return (
            <TouchableOpacity 
              key={option.id}
              style={[styles.optionBase, optionStyle]}
              onPress={() => handleSelect(option.id)}
              activeOpacity={submitted ? 1 : 0.7}
            >
              <Text style={[styles.optionText, textStyle]}>{option.text}</Text>
              
              {submitted && option.isCorrect && (
                <CheckCircle2 stroke={theme.colors.success} size={20} />
              )}
              {submitted && isSelected && !option.isCorrect && (
                <XCircle stroke={theme.colors.error} size={20} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {!submitted ? (
        <TouchableOpacity 
          style={[styles.submitButton, !selectedOptionId && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!selectedOptionId}
        >
          <Text style={styles.submitButtonText}>Submit Answer</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.feedbackBox, isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect]}>
          <Text style={[styles.feedbackTitle, isCorrect ? styles.feedbackTitleCorrect : styles.feedbackTitleIncorrect]}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </Text>
          {selectedOption?.explanation && (
            <Text style={styles.feedbackExplanation}>{selectedOption.explanation}</Text>
          )}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.spacing.lg,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  questionText: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: '500',
    marginBottom: theme.spacing.lg,
    lineHeight: 24,
  },
  optionsContainer: {
    marginBottom: theme.spacing.md,
  },
  optionBase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    marginBottom: theme.spacing.sm,
  },
  optionNormal: {
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
  },
  optionSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: '#eff6ff',
  },
  optionCorrect: {
    borderColor: theme.colors.success,
    backgroundColor: '#ecfdf5',
  },
  optionIncorrect: {
    borderColor: theme.colors.error,
    backgroundColor: '#fef2f2',
  },
  optionText: {
    fontSize: 15,
    flex: 1,
    marginRight: 8,
  },
  optionTextNormal: {
    color: theme.colors.text,
  },
  optionTextCorrect: {
    color: theme.colors.success,
    fontWeight: '500',
  },
  optionTextIncorrect: {
    color: theme.colors.error,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  submitButtonDisabled: {
    backgroundColor: theme.colors.border,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackBox: {
    marginTop: theme.spacing.sm,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderLeftWidth: 4,
  },
  feedbackCorrect: {
    backgroundColor: `${theme.colors.success}10`,
    borderLeftColor: theme.colors.success,
  },
  feedbackIncorrect: {
    backgroundColor: `${theme.colors.error}10`,
    borderLeftColor: theme.colors.error,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  feedbackTitleCorrect: {
    color: theme.colors.success,
  },
  feedbackTitleIncorrect: {
    color: theme.colors.error,
  },
  feedbackExplanation: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
});

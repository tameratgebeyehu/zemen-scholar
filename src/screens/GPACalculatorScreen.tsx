import React, { useState, useMemo } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Alert,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Calculator, 
  Info,
  AlertTriangle,
  GraduationCap
} from 'lucide-react-native';
import { useAppContext, useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { PremiumTouchable } from '../components/common/PremiumTouchable';
import { useEffect, useRef } from 'react';

interface Subject {
  id: string;
  name: string;
  percentage: string;
}

interface Props {
  onBack: () => void;
}

export const GPACalculatorScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();
  const { state, updateGPASubjects } = useAppContext();
  const [subjects, setSubjects] = useState<Subject[]>(state.gpa_subjects || []);
  const scrollRef = useRef<ScrollView>(null);

  // Auto-save whenever subjects change
  useEffect(() => {
    updateGPASubjects(subjects);
  }, [subjects]);

  const convertToGPA = (percentageStr: string): { letter: string; points: number } => {
    const p = parseFloat(percentageStr);
    if (isNaN(p)) return { letter: '-', points: 0 };
    
    if (p >= 90) return { letter: 'A', points: 4.0 };
    if (p >= 85) return { letter: 'A-', points: 3.7 };
    if (p >= 80) return { letter: 'B+', points: 3.3 };
    if (p >= 75) return { letter: 'B', points: 3.0 };
    if (p >= 70) return { letter: 'B-', points: 2.7 };
    if (p >= 65) return { letter: 'C+', points: 2.3 };
    if (p >= 60) return { letter: 'C', points: 2.0 };
    if (p >= 55) return { letter: 'D', points: 1.0 };
    return { letter: 'F', points: 0.0 };
  };

  const { overallGPA, subjectResults } = useMemo(() => {
    let totalPoints = 0;
    let count = 0;
    
    const results = subjects.map(s => {
      const res = convertToGPA(s.percentage);
      if (s.percentage !== '') {
        totalPoints += res.points;
        count++;
      }
      return { ...s, ...res };
    });

    const gpa = count > 0 ? (totalPoints / count).toFixed(2) : '0.00';
    return { overallGPA: gpa, subjectResults: results };
  }, [subjects]);

  const getGPAFeedback = (gpa: number) => {
    if (gpa >= 3.8) return { text: 'Very Competitive', color: theme.colors.success };
    if (gpa >= 3.3) return { text: 'Competitive', color: theme.colors.primary };
    if (gpa > 0) return { text: 'Needs Improvement', color: '#FF9500' };
    return { text: 'Enter Scores', color: theme.colors.textSecondary };
  };

  const addSubject = () => {
    setSubjects([...subjects, { 
      id: Math.random().toString(36).substr(2, 9), 
      name: '', 
      percentage: '' 
    }]);
    
    // Scroll to bottom after adding
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    } else {
      Alert.alert('Minimum One Subject', 'You must have at least one subject to calculate GPA.');
    }
  };

  const updateSubject = (id: string, field: 'name' | 'percentage', value: string) => {
    setSubjects(subjects.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const scrollToInput = (index: number) => {
    // Approx height of elements above the first input
    const initialOffset = 260; 
    const itemHeight = 68; // Height of each inputRow + marginBottom
    
    setTimeout(() => {
      scrollRef.current?.scrollTo({
        y: initialOffset + (index * itemHeight),
        animated: true
      });
    }, 100);
  };

  const feedback = getGPAFeedback(parseFloat(overallGPA));

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ArrowLeft color={theme.colors.text} size={24} />
        </TouchableOpacity>
        <View>
          <Text style={[styles.title, { color: theme.colors.text }]}>GPA Calculator</Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>Ethiopia to US 4.0 Scale</Text>
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          ref={scrollRef}
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Result Card */}
          <View style={[styles.resultCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <View style={styles.resultHeader}>
              <View style={[styles.iconBox, { backgroundColor: theme.colors.primary + '15' }]}>
                <GraduationCap color={theme.colors.primary} size={24} />
              </View>
              <View style={[styles.feedbackBadge, { backgroundColor: feedback.color + '15' }]}>
                <Text style={[styles.feedbackText, { color: feedback.color }]}>{feedback.text}</Text>
              </View>
            </View>
            
            <View style={styles.gpaDisplay}>
              <Text style={[styles.gpaValue, { color: theme.colors.text }]}>{overallGPA}</Text>
              <Text style={[styles.gpaLabel, { color: theme.colors.textSecondary }]}>Cumulative GPA</Text>
            </View>
          </View>

          {/* Subjects Section */}
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>SUBJECT SCORES</Text>
            <TouchableOpacity onPress={addSubject} style={styles.addButton}>
              <Plus color={theme.colors.primary} size={20} />
              <Text style={[styles.addButtonText, { color: theme.colors.primary }]}>Add Subject</Text>
            </TouchableOpacity>
          </View>

          {(Array.isArray(subjects) ? subjects : []).map((subject, index) => (
            <View 
              key={subject.id} 
              style={[styles.inputRow, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
            >
              <View style={styles.inputGroup}>
                <TextInput
                  style={[styles.nameInput, { color: theme.colors.text }]}
                  placeholder="Subject (Math...)"
                  placeholderTextColor={theme.colors.textSecondary + '80'}
                  value={subject.name}
                  onChangeText={(val) => updateSubject(subject.id, 'name', val)}
                  onFocus={() => scrollToInput(index)}
                />
                <View style={styles.scoreInputWrapper}>
                  <TextInput
                    style={[styles.scoreInput, { color: theme.colors.text }]}
                    placeholder="0"
                    placeholderTextColor={theme.colors.textSecondary + '80'}
                    keyboardType="numeric"
                    onFocus={() => scrollToInput(index)}
                    maxLength={3}
                    value={subject.percentage}
                    onChangeText={(val) => {
                      if (val === '' || (parseInt(val) >= 0 && parseInt(val) <= 100)) {
                        updateSubject(subject.id, 'percentage', val);
                      }
                    }}
                  />
                  <Text style={[styles.percentSign, { color: theme.colors.textSecondary }]}>%</Text>
                </View>
              </View>

              <View style={styles.rowResults}>
                <View style={[styles.letterBadge, { backgroundColor: theme.colors.primary + '10' }]}>
                  <Text style={[styles.letterText, { color: theme.colors.primary }]}>
                    {convertToGPA(subject.percentage).letter}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => removeSubject(subject.id)} style={styles.deleteButton}>
                  <Trash2 color={theme.colors.error} size={18} />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Disclaimer */}
          <View style={[styles.disclaimer, { backgroundColor: theme.colors.primary + '05', borderColor: theme.colors.border }]}>
            <AlertTriangle color={theme.colors.textSecondary} size={16} />
            <Text style={[styles.disclaimerText, { color: theme.colors.textSecondary }]}>
              This is an estimated conversion. US universities may calculate GPA differently based on specific transcript evaluations.
            </Text>
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 16,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 250, // Massive buffer for the keyboard
  },
  resultCard: {
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    marginBottom: 32,
    ...baseTheme.shadows.medium,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  feedbackText: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  gpaDisplay: {
    alignItems: 'center',
  },
  gpaValue: {
    fontSize: 64,
    fontWeight: '900',
    letterSpacing: -2,
  },
  gpaLabel: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: -4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingRight: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 12,
    gap: 12,
  },
  inputGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  nameInput: {
    flex: 2,
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 8,
  },
  scoreInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000008',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  scoreInput: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
    paddingVertical: 8,
    minWidth: 30,
  },
  percentSign: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 2,
  },
  rowResults: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  letterBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterText: {
    fontSize: 15,
    fontWeight: '800',
  },
  deleteButton: {
    padding: 8,
  },
  disclaimer: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'row',
    gap: 12,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});

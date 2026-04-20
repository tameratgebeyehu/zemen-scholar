import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, ChevronDown } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { TestCategory, Lesson, Question } from '../types/tests';
import { TestCard } from '../components/TestCard';
import { LessonCard } from '../components/LessonCard';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { Card } from '../components/Card';

// ----- MOCK DATA -----
const MOCK_TESTS: TestCategory[] = [
  { id: '1', name: 'IELTS', shortDescription: 'International English Language Testing System.', targetScore: 'Band 7.0+', progress: 0.4 },
  { id: '2', name: 'SAT', shortDescription: 'Scholastic Assessment Test for US Universities.', targetScore: '1450+', progress: 0.15 },
  { id: '3', name: 'TOEFL', shortDescription: 'Test of English as a Foreign Language.', targetScore: '100+', progress: 0.0 },
  { id: '4', name: 'Duolingo', shortDescription: 'Duolingo English Test (DET).', targetScore: '120+', progress: 0.8 },
];

const MOCK_LESSONS: Lesson[] = [
  {
    id: 'l1', testId: '1', title: 'IELTS Reading Strategies',
    explanation: 'Skimming and scanning are essential techniques for the IELTS reading section to manage your time effectively.',
    example: 'Before reading the full passage, scan for keywords mentioned in the questions.',
    keyTips: ['Read the questions first', 'Do not spend more than 1 minute per question', 'Underline names and dates']
  }
];

const MOCK_QUESTIONS: Question[] = [
  {
    id: 'q1', testId: '1', text: 'Which word is a synonym for "Abundant"?',
    options: [
      { id: 'o1', text: 'Scarce', isCorrect: false, explanation: 'Scarce means rare or insufficient.' },
      { id: 'o2', text: 'Plentiful', isCorrect: true, explanation: 'Plentiful means existing in or yielding great quantities.' },
      { id: 'o3', text: 'Meager', isCorrect: false },
      { id: 'o4', text: 'Empty', isCorrect: false }
    ]
  }
];
// ---------------------

type TabType = 'lessons' | 'practice' | 'mock' | 'progress';

export const TestsScreen = () => {
  const [selectedTest, setSelectedTest] = useState<TestCategory | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('lessons');

  // --- Main List View ---
  if (!selectedTest) {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTextSection}>
            <Text style={styles.title}>Test Preparation</Text>
            <Text style={styles.subtitle}>Improve your exam scores step by step</Text>
          </View>
          <TouchableOpacity style={styles.filterDropdown}>
            <Text style={styles.filterText}>All Tests</Text>
            <ChevronDown stroke={theme.colors.text} size={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {MOCK_TESTS.map((test) => (
            <TestCard 
              key={test.id} 
              test={test} 
              onPress={() => setSelectedTest(test)} 
            />
          ))}
        </View>
      </ScrollView>
    );
  }

  // --- Detail View Component ---
  const renderTabContent = () => {
    switch (activeTab) {
      case 'lessons':
        const lessons = MOCK_LESSONS.filter(l => l.testId === selectedTest.id);
        return lessons.length > 0 ? (
          lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)
        ) : (
          <Text style={styles.emptyText}>No lessons available yet.</Text>
        );
      
      case 'practice':
        const questions = MOCK_QUESTIONS.filter(q => q.testId === selectedTest.id);
        return questions.length > 0 ? (
          questions.map((question, index) => (
            <QuestionCard key={question.id} question={question} questionIndex={index} />
          ))
        ) : (
          <Text style={styles.emptyText}>No practice questions available yet.</Text>
        );

      case 'mock':
        return (
          <Card style={styles.centerCard}>
            <Text style={styles.mockTitle}>Full-Length Mock Exam</Text>
            <Text style={styles.mockDesc}>A timer-based test simulation for {selectedTest.name}.</Text>
            <TouchableOpacity style={styles.startMockButton}>
              <Text style={styles.startMockText}>Start Simulation</Text>
            </TouchableOpacity>
          </Card>
        );

      case 'progress':
        return (
          <Card>
            <Text style={styles.progressSectionTitle}>Skills Breakdown</Text>
            <ProgressBar progress={0.6} label="Reading" />
            <ProgressBar progress={0.3} label="Writing" />
            <ProgressBar progress={0.5} label="Listening" />
            <ProgressBar progress={0.8} label="Speaking" />
          </Card>
        );
    }
  };

  const tabs: { key: TabType, label: string }[] = [
    { key: 'lessons', label: 'Lessons' },
    { key: 'practice', label: 'Practice' },
    { key: 'mock', label: 'Mock Test' },
    { key: 'progress', label: 'Progress' }
  ];

  return (
    <View style={styles.container}>
      {/* Detail Header */}
      <View style={styles.detailHeader}>
        <TouchableOpacity style={styles.backButton} onPress={() => setSelectedTest(null)}>
          <ChevronLeft stroke={theme.colors.text} size={24} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <ProgressBar progress={selectedTest.progress} showLabel={true} label={selectedTest.name} />
      </View>

      {/* Tabs Menu */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity 
              key={tab.key} 
              style={[styles.tabButton, isActive && styles.tabButtonActive]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.tabContentScroll} showsVerticalScrollIndicator={false}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: theme.spacing.md,
    paddingTop: 60,
    paddingBottom: theme.spacing.md,
  },
  headerTextSection: {
    flex: 1,
    paddingRight: theme.spacing.sm,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  filterDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.text,
    marginRight: 4,
  },
  content: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: 60,
  },
  // --- Detail Styles ---
  detailHeader: {
    paddingTop: 60,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: theme.spacing.sm,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  backText: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    paddingHorizontal: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabButtonActive: {
    borderBottomColor: theme.colors.primary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  tabTextActive: {
    color: theme.colors.primary,
  },
  tabContentScroll: {
    flex: 1,
    padding: theme.spacing.md,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: theme.colors.textSecondary,
    fontSize: 15,
  },
  centerCard: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  mockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  mockDesc: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  startMockButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.md,
  },
  startMockText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  progressSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
});

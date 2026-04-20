import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronDown, ChevronUp, Search, X } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { PremiumTouchable } from '../components/common/PremiumTouchable';

interface QuestionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const QuestionItem = ({ question, answer, isOpen, onToggle }: QuestionItemProps) => {
  const theme = useAppTheme();
  
  return (
    <View style={[styles.cardContainer, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
      <PremiumTouchable 
        style={styles.cardHeader} 
        onPress={onToggle}
      >
        <Text style={[styles.questionText, { color: theme.colors.text }]}>{question}</Text>
        {isOpen ? (
          <ChevronUp color={theme.colors.primary} size={20} />
        ) : (
          <ChevronDown color={theme.colors.textSecondary} size={20} />
        )}
      </PremiumTouchable>
      
      {isOpen && (
        <View style={[styles.answerContainer, { borderTopColor: theme.colors.border + '50' }]}>
          <Text style={[styles.answerText, { color: theme.colors.textSecondary }]}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const FAQ_DATA = [
  {
    id: '1',
    question: 'What GPA do I need to study in the USA?',
    answer: 'Most universities require at least a 3.0 GPA, but top-tier schools look for 3.5+. Community colleges offer pathways for lower GPAs.'
  },
  {
    id: '2',
    question: 'When should I start preparing?',
    answer: 'Start exploring in Grade 9 or 10. By Grade 11, you should be taking standardized tests and preparing application documents.'
  },
  {
    id: '3',
    question: 'Do I need English tests?',
    answer: 'Yes, international students must usually submit TOEFL, IELTS, or Duolingo scores unless they are from an English-speaking country.'
  },
  {
    id: '4',
    question: 'Can I study with a scholarship?',
    answer: 'Absolutely. Many universities offer merit and need-based scholarships. Apply early, as scholarship deadlines are extremely strict.'
  },
  {
    id: '5',
    question: 'How much does it cost to study?',
    answer: 'Tuition ranges from $15k to $60k+ per year. Expect additional living expenses averaging $10k to $20k annually.'
  },
  {
    id: '6',
    question: 'What documents are required?',
    answer: 'Key documents include academic transcripts, English scores, letters of recommendation, SAT/ACT (optional), and a personal essay.'
  },
  {
    id: '7',
    question: 'Can I apply without an agent?',
    answer: 'Yes! Thousands apply independently. Follow our Roadmap step-by-step and you will have exactly what you need to succeed.'
  }
];

interface Props {
  onBack: () => void;
}

export const QAScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = FAQ_DATA.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>General Q&A</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>
            Common questions about studying abroad
          </Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBox, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <Search color={theme.colors.textSecondary} size={20} />
          <TextInput
            style={[styles.searchInput, { color: theme.colors.text }]}
            placeholder="Search questions..."
            placeholderTextColor={theme.colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <X color={theme.colors.textSecondary} size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <QuestionItem
            question={item.question}
            answer={item.answer}
            isOpen={expandedId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        )}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
              No results found for "{searchQuery}"
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    marginLeft: -8,
  },
  headerTextContainer: {
    marginTop: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 4,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 52,
    borderRadius: 100,
    borderWidth: 1,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  cardContainer: {
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    shadowOpacity: 0.05,
    elevation: 2,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    paddingRight: 16,
    lineHeight: 22,
  },
  answerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 0,
    borderTopWidth: 1,
  },
  answerText: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '500',
    marginTop: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

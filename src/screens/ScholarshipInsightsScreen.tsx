import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Lightbulb, Target, Compass, Brain } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { useAppTheme } from '../context/AppContext';
import { SCHOLARSHIP_INSIGHTS_DATA } from '../constants/appData';
import { PremiumTouchable } from '../components/common/PremiumTouchable';

interface Props {
  onBack: () => void;
}

export const ScholarshipInsightsScreen = ({ onBack }: Props) => {
  const currentTheme = useAppTheme();

  const getSectionIcon = (title: string) => {
    switch (title) {
      case 'Awareness': return <Compass color={currentTheme.colors.primary} size={20} />;
      case 'Mindset': return <Target color={currentTheme.colors.primary} size={20} />;
      case 'Strategy': return <Lightbulb color={currentTheme.colors.primary} size={20} />;
      case 'Deep Thinking': return <Brain color={currentTheme.colors.primary} size={20} />;
      default: return <Lightbulb color={currentTheme.colors.primary} size={20} />;
    }
  };

  const SectionHeader = ({ title }: { title: string }) => (
    <View style={styles.sectionHeader}>
      <View style={[styles.sectionIconBox, { backgroundColor: currentTheme.colors.primary + '15' }]}>
        {getSectionIcon(title)}
      </View>
      <Text style={[styles.sectionTitle, { color: currentTheme.colors.text }]}>{title}</Text>
    </View>
  );

  const InsightCard = ({ title, explanation, takeaway }: { title: string, explanation: string, takeaway: string }) => (
    <View style={[styles.card, { 
      backgroundColor: currentTheme.colors.card, 
      borderColor: currentTheme.colors.card === '#FFFFFF' ? currentTheme.colors.border : 'transparent' 
    }]}>
      <Text style={[styles.cardTitle, { color: currentTheme.colors.text }]}>{title}</Text>
      <Text style={[styles.cardExplanation, { color: currentTheme.colors.textSecondary }]}>
        {explanation}
      </Text>
      <View style={[styles.takeawayBox, { backgroundColor: currentTheme.colors.card === '#FFFFFF' ? currentTheme.colors.primary + '08' : currentTheme.colors.primary + '10' }]}>
        <Text style={[styles.takeawayLabel, { color: currentTheme.colors.card === '#FFFFFF' ? currentTheme.colors.primary : '#93C5FD' }]}>KEY TAKEAWAY</Text>
        <Text style={[styles.takeawayText, { color: currentTheme.colors.text }]}>{takeaway}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.colors.background }]} edges={['top']}>
      <View style={[styles.header, { backgroundColor: currentTheme.colors.card, borderBottomColor: currentTheme.colors.border }]}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ArrowLeft color={currentTheme.colors.text} size={24} />
        </TouchableOpacity>
        <View>
          <Text style={[styles.headerTitle, { color: currentTheme.colors.text }]}>Scholarship Insights</Text>
          <Text style={[styles.headerSubtitle, { color: currentTheme.colors.textSecondary }]}>Think deeper, prepare smarter</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {SCHOLARSHIP_INSIGHTS_DATA.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <SectionHeader title={section.title} />
            {section.items.map((item, itemIdx) => (
              <InsightCard 
                key={itemIdx}
                title={item.title}
                explanation={item.explanation}
                takeaway={item.takeaway}
              />
            ))}
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  scrollContent: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  sectionIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  cardExplanation: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
    fontWeight: '400',
  },
  takeawayBox: {
    padding: 12,
    borderRadius: 10,
  },
  takeawayLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  takeawayText: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
});

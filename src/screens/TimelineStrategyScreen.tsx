import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Calendar, Layout, Search, Sparkles } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { useAppTheme } from '../context/AppContext';
import { TIMELINE_STRATEGY_DATA } from '../constants/appData';

interface Props {
  onBack: () => void;
}

export const TimelineStrategyScreen = ({ onBack }: Props) => {
  const currentTheme = useAppTheme();

  const getSectionIcon = (title: string) => {
    if (title.includes('TIMELINE')) return <Calendar color={currentTheme.colors.primary} size={20} />;
    if (title.includes('TYPES')) return <Layout color={currentTheme.colors.primary} size={20} />;
    if (title.includes('COLLEGE')) return <Search color={currentTheme.colors.primary} size={20} />;
    return <Sparkles color={currentTheme.colors.primary} size={20} />;
  };

  const SectionHeader = ({ section, title }: { section: string, title: string }) => (
    <View style={styles.sectionHeader}>
      <View style={[styles.sectionIconBox, { backgroundColor: currentTheme.colors.primary + '15' }]}>
        {getSectionIcon(section)}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.sectionLabel, { color: currentTheme.colors.primary }]}>{section}</Text>
        <Text style={[styles.sectionTitle, { color: currentTheme.colors.text }]}>{title}</Text>
      </View>
    </View>
  );

  const TopicCard = ({ title, explanation, tip }: { title: string, explanation: string, tip?: string }) => (
    <View style={[styles.card, { 
      backgroundColor: currentTheme.colors.card, 
      borderColor: currentTheme.colors.card === '#FFFFFF' ? currentTheme.colors.border : 'transparent' 
    }]}>
      <Text style={[styles.cardTitle, { color: currentTheme.colors.text }]}>{title}</Text>
      <Text style={[styles.cardExplanation, { color: currentTheme.colors.textSecondary }]}>
        {explanation}
      </Text>
      {tip && (
        <View style={[styles.tipBox, { 
          backgroundColor: currentTheme.colors.card === '#FFFFFF' ? '#F0F9FF' : currentTheme.colors.primary + '10', 
          borderColor: currentTheme.colors.card === '#FFFFFF' ? '#BAE6FD' : 'transparent' 
        }]}>
          <Sparkles color={currentTheme.colors.card === '#FFFFFF' ? currentTheme.colors.primary : '#93C5FD'} size={14} style={{ marginTop: 2 }} />
          <Text style={[styles.tipText, { color: currentTheme.colors.card === '#FFFFFF' ? '#0369A1' : '#93C5FD' }]}>
            <Text style={{ fontWeight: '800' }}>Pro Tip: </Text>
            {tip}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.colors.background }]} edges={['top']}>
      <View style={[styles.header, { backgroundColor: currentTheme.colors.card, borderBottomColor: currentTheme.colors.border }]}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ArrowLeft color={currentTheme.colors.text} size={24} />
        </TouchableOpacity>
        <View>
          <Text style={[styles.headerTitle, { color: currentTheme.colors.text }]}>Timeline & Strategy</Text>
          <Text style={[styles.headerSubtitle, { color: currentTheme.colors.textSecondary }]}>Think ahead, apply smarter</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {TIMELINE_STRATEGY_DATA.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <SectionHeader section={section.section} title={section.title} />
            {section.items.map((item, itemIdx) => (
              <TopicCard 
                key={itemIdx}
                title={item.title}
                explanation={item.explanation}
                tip={item.tip}
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
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 14,
  },
  sectionIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
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
    fontWeight: '800',
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  cardExplanation: {
    fontSize: 14.5,
    lineHeight: 20,
    marginBottom: 0,
    fontWeight: '400',
  },
  tipBox: {
    marginTop: 14,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
  },
  tipText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: '#0369A1',
    fontWeight: '500',
  },
});

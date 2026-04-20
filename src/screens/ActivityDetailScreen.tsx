import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Info, HelpCircle, Lightbulb, Rocket } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { EXTRACURRICULAR_DATA } from '../constants/appData';

interface Props {
  activityId: string;
  onBack: () => void;
}

export const ActivityDetailScreen = ({ activityId, onBack }: Props) => {
  const theme = useAppTheme();
  const activity = EXTRACURRICULAR_DATA.find(a => a.id === activityId);

  if (!activity) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: 100, color: theme.colors.text }}>Activity not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={[styles.header, { borderBottomColor: theme.colors.border }]}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{activity.title}</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Core Concept editorial card */}
        <View style={[styles.editorialCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.cardHeaderRow}>
            <Info color={theme.colors.primary} size={20} />
            <Text style={[styles.cardHeaderTitle, { color: theme.colors.text }]}>What it Means</Text>
          </View>
          <Text style={[styles.cardText, { color: theme.colors.textSecondary }]}>{activity.whatItMeans}</Text>
        </View>

        {/* Examples Section */}
        <View style={[styles.editorialCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
           <View style={styles.cardHeaderRow}>
              <Lightbulb color={theme.colors.warning} size={20} />
              <Text style={[styles.cardHeaderTitle, { color: theme.colors.text }]}>Real Examples</Text>
           </View>
           {activity.examples.map((example, i) => (
             <View key={i} style={styles.listItem}>
                <View style={[styles.listDot, { backgroundColor: theme.colors.warning }]} />
                <Text style={[styles.cardText, { color: theme.colors.textSecondary }]}>{example}</Text>
             </View>
           ))}
        </View>

        {/* How to Start Section */}
        <View style={[styles.editorialCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
           <View style={styles.cardHeaderRow}>
              <Rocket color={theme.colors.success} size={20} />
              <Text style={[styles.cardHeaderTitle, { color: theme.colors.text }]}>How to Start</Text>
           </View>
           {activity.howToStart.map((step, i) => (
             <View key={i} style={styles.listItem}>
                <View style={[styles.stepNumberBox, { backgroundColor: theme.colors.success + '15' }]}>
                   <Text style={[styles.stepNumberText, { color: theme.colors.success }]}>{i + 1}</Text>
                </View>
                <Text style={[styles.cardText, { color: theme.colors.textSecondary }]}>{step}</Text>
             </View>
           ))}
        </View>

        {/* Pro Tips Callout */}
        <View style={[styles.tipCallout, { backgroundColor: theme.colors.primary + '05', borderColor: theme.colors.primary + '15' }]}>
           <Text style={[styles.tipCalloutTitle, { color: theme.colors.primary }]}>PRO TIPS FOR SUCCESS</Text>
           {activity.tips.map((tip, i) => (
             <Text key={i} style={[styles.tipText, { color: theme.colors.textSecondary }]}>• {tip}</Text>
           ))}
        </View>

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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  scrollContent: {
    padding: 20,
  },
  editorialCard: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    marginBottom: 16,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  cardHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  cardText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  listDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  stepNumberBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    fontSize: 12,
    fontWeight: '800',
  },
  tipCallout: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    marginTop: 8,
  },
  tipCalloutTitle: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  tipText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
});

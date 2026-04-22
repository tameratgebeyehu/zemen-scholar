import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Star, Award, Users, Code, BookOpen, Heart, Rocket } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { PremiumTouchable } from '../components/common/PremiumTouchable';
import { EXTRACURRICULAR_DATA } from '../constants/appData';
import { useResponsive } from '../hooks/useResponsive';

interface Props {
  onBack: () => void;
  onNavigate: (id: string) => void;
}

export const ExtracurricularScreen = ({ onBack, onNavigate }: Props) => {
  const theme = useAppTheme();
  const { isTablet } = useResponsive();
  const { width } = useWindowDimensions();
  // Always 2-column. Measure actual device width directly.
  const horizontalPadding = isTablet ? 80 : 40;
  const tileWidth = Math.floor((Math.min(width, isTablet ? 850 : width) - horizontalPadding - 12) / 2);

  const getIconForCategory = (id: string) => {
    switch (id) {
      case 'leadership': return Users;
      case 'volunteering': return Heart;
      case 'competitions': return Award;
      case 'projects': return Code;
      case 'clubs': return Star;
      case 'online_learning': return BookOpen;
      default: return Rocket;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Extracurricular Activities</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>
            Build a strong student profile
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Why it Matters Editorial Card */}
        <View style={[styles.heroCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <Text style={[styles.heroTitle, { color: theme.colors.text }]}>Why Activities Matter</Text>
          <View style={styles.heroBullet}>
            <View style={[styles.heroDot, { backgroundColor: theme.colors.primary }]} />
            <Text style={[styles.heroText, { color: theme.colors.textSecondary }]}>Universities look beyond grades to see your character.</Text>
          </View>
          <View style={styles.heroBullet}>
            <View style={[styles.heroDot, { backgroundColor: theme.colors.primary }]} />
            <Text style={[styles.heroText, { color: theme.colors.textSecondary }]}>Activities prove your leadership, teamwork, and initiative.</Text>
          </View>
        </View>

        {/* Suggested For You */}
        <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>SUGGESTED FOR YOU</Text>
        <View style={styles.suggestionRow}>
           <PremiumTouchable 
            style={[styles.suggestionCard, { backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.primary + '20' }]}
            onPress={() => onNavigate('volunteering')}
           >
              <Heart color={theme.colors.primary} size={20} />
              <Text style={[styles.suggestionText, { color: theme.colors.primary }]}>Start with Volunteering</Text>
           </PremiumTouchable>
           <PremiumTouchable 
            style={[styles.suggestionCard, { backgroundColor: theme.colors.success + '10', borderColor: theme.colors.success + '20' }]}
            onPress={() => onNavigate('projects')}
           >
              <Rocket color={theme.colors.success} size={20} />
              <Text style={[styles.suggestionText, { color: theme.colors.success }]}>Try a small project</Text>
           </PremiumTouchable>
        </View>

        {/* Categories Grid */}
        <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary, marginTop: 12 }]}>EXPLORE CATEGORIES</Text>
        <View style={styles.grid}>
          {EXTRACURRICULAR_DATA.map((item) => {
            const Icon = getIconForCategory(item.id);
            return (
              <PremiumTouchable 
                key={item.id}
                style={[styles.tile, { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: tileWidth }]}
                onPress={() => onNavigate(item.id)}
                elevation={2}
              >
                <View style={[styles.tileIconBox, { backgroundColor: theme.colors.primary + '10' }]}>
                  <Icon color={theme.colors.primary} size={24} />
                </View>
                <Text style={[styles.tileTitle, { color: theme.colors.text }]}>{item.title}</Text>
                <Text style={[styles.tileSubtitle, { color: theme.colors.textSecondary }]} numberOfLines={2}>
                  {item.description}
                </Text>
              </PremiumTouchable>
            );
          })}
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
  titleContainer: {
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  heroCard: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 24,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },
  heroBullet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  heroDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  heroText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 16,
    marginLeft: 4,
  },
  suggestionRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  suggestionCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
  },
  suggestionText: {
    fontSize: 13,
    fontWeight: '700',
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tile: {
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
  },
  tileIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  tileTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 4,
  },
  tileSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
  },
});

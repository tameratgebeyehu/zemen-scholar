import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ChevronRight, 
  MessageCircle, 
  Mic, 
  Info, 
  Share2, 
  Settings, 
  HelpCircle, 
  Book,
  ArrowUpRight,
  Star,
  Zap,
  Lightbulb,
  Target,
  Calculator,
  Users,
  Shield,
  Youtube,
  Link
} from 'lucide-react-native';
import { theme as baseTheme } from '../theme/theme';
import { useAppTheme } from '../context/AppContext';
import { PremiumTouchable } from '../components/common/PremiumTouchable';

import { useResponsive } from '../hooks/useResponsive';

interface Props {
  onNavigate?: (route: string) => void;
  initialScrollY?: number;
  onScrollChange?: (y: number) => void;
}

export const MoreScreen = ({ onNavigate, initialScrollY = 0, onScrollChange }: Props) => {
  const theme = useAppTheme();
  const { currentContentWidth, isTablet } = useResponsive();
  const scrollRef = useRef<ScrollView>(null);
  const { width } = useWindowDimensions();

  // Always show 2 columns. Calculate tile width from the actual scroll container padding.
  const horizontalPadding = isTablet ? 40 : 20;
  const columnGap = 16;
  const availableWidth = (isTablet ? Math.min(width, 850) : width) - horizontalPadding * 2 - columnGap;
  const tileWidth = Math.floor(availableWidth / 2);

  // Restore scroll position on mount
  useEffect(() => {
    if (initialScrollY > 0) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ y: initialScrollY, animated: false });
      }, 50); // Small delay to ensure layout is ready
    }
  }, []);

  const handlePress = (id: string) => {
    if (id === 'privacy') {
      Linking.openURL('https://docs.google.com/document/d/1OXSuX0HFVzPhe4zWXoELjdkIdJPt5jUckOvD-3LVqAA/edit?usp=sharing').catch(err => 
        console.error("Failed to open privacy policy", err)
      );
      return;
    }
    if (onNavigate) onNavigate(id);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Dashboard</Text>
        <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>Resources & Support</Text>
      </View>

      <ScrollView 
        ref={scrollRef}
        contentContainerStyle={[styles.scrollContent, isTablet && { paddingHorizontal: 40 }]} 
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(e) => {
          if (onScrollChange) {
            onScrollChange(e.nativeEvent.contentOffset.y);
          }
        }}
      >
        {/* Resource Tiles Grid */}
        <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>LEARNING TOOLS</Text>
        <View style={[styles.grid, isTablet && { justifyContent: 'space-between' }]}>
          <ResourceTile item={{ id: 'qa', title: 'Q&A', desc: 'General study abroad questions', icon: MessageCircle }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'visa_qa', title: 'Visa Prep', desc: 'Master the interview process', icon: Mic }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'words_to_know', title: 'Glossary', desc: 'Terms you must know', icon: Book }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'extracurricular', title: 'Activities', desc: 'Build your profile', icon: Star }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'scholarship_insights', title: 'Insights', desc: 'Preparation strategy', icon: Lightbulb }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'timeline_strategy', title: 'Strategy', desc: 'Timeline & Selecting', icon: Target }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'gpa_calculator', title: 'GPA Calc', desc: 'Ethiopia to US Scale', icon: Calculator }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'video_guides', title: 'Video Guides', desc: 'Expert tutorials', icon: Youtube }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
          <ResourceTile item={{ id: 'useful_resources', title: 'Useful Links', desc: 'Official databases', icon: Link }} theme={theme} tileWidth={tileWidth} onPress={handlePress} />
        </View>

        {/* System Section */}
        <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary, marginTop: 12 }]}>SYSTEM</Text>
        <View style={[styles.listCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <MenuRow item={{ id: 'about_us', title: 'About Zemen Scholar', icon: Users }} isLast={false} theme={theme} onPress={handlePress} />
          <MenuRow item={{ id: 'privacy', title: 'Privacy Policy', icon: Shield }} isLast={false} theme={theme} onPress={handlePress} />
          <MenuRow item={{ id: 'settings', title: 'App Settings', icon: Settings }} isLast={true} theme={theme} onPress={handlePress} />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const ResourceTile = ({ item, theme, tileWidth, onPress }: { item: any, theme: any, tileWidth: number, onPress: (id: string) => void }) => {
  const Icon = item.icon;
  return (
    <PremiumTouchable 
      style={[styles.tile, { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: tileWidth }]}
      onPress={() => onPress(item.id)}
      elevation={2}
    >
      <View style={[styles.tileIconBox, { backgroundColor: theme.colors.primary + '15' }]}>
        <Icon color={theme.colors.primary} size={24} />
      </View>
      <Text style={[styles.tileTitle, { color: theme.colors.text }]}>{item.title}</Text>
      <Text style={[styles.tileSubtitle, { color: theme.colors.textSecondary }]} numberOfLines={2}>
        {item.desc}
      </Text>
    </PremiumTouchable>
  );
};

const MenuRow = ({ item, isLast, theme, onPress }: { item: any, isLast: boolean, theme: any, onPress: (id: string) => void }) => {
  const Icon = item.icon;
  return (
    <PremiumTouchable
      style={[styles.menuRow, !isLast && { borderBottomWidth: 1, borderBottomColor: theme.colors.border }]}
      onPress={() => onPress(item.id)}
    >
      <View style={styles.rowLeft}>
        <View style={[styles.rowIconBox, { backgroundColor: theme.colors.primary + '10' }]}>
          <Icon color={theme.colors.primary} size={18} />
        </View>
        <Text style={[styles.rowTitle, { color: theme.colors.text }]}>{item.title}</Text>
      </View>
      <ChevronRight color={theme.colors.textSecondary} size={18} />
    </PremiumTouchable>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
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
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 16,
    marginLeft: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  tile: {
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
  },
  comingSoonTile: {
    height: 0, // Hidden
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
  listCard: {
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 24,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  rowIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
});

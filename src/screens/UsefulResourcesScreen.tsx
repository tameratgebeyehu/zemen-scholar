import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ExternalLink, Search, LayoutTemplate, DollarSign, Globe2, BookOpen, BarChart3, PenTool, Users, Folder, Lightbulb } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';

// ── Structured Resource Block ──
const ResourceCategoryBlock = ({ category }: { category: any }) => {
  const theme = useAppTheme();
  const Icon = category.icon;

  return (
    <View style={[styles.categoryBlock, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
      <View style={styles.categoryHeader}>
        <View style={[styles.iconBox, { backgroundColor: theme.colors.primary + '15' }]}>
          <Icon color={theme.colors.primary} size={24} />
        </View>
        <View style={styles.categoryHeaderText}>
          <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>{category.title}</Text>
          <Text style={[styles.categorySubtitle, { color: theme.colors.textSecondary }]}>{category.subtitle}</Text>
        </View>
      </View>

      <View style={styles.resList}>
        {category.items.map((item: any, index: number) => (
          <TouchableOpacity 
            key={item.id}
            style={[
              styles.resItem, 
              { borderBottomColor: theme.colors.border },
              index === category.items.length - 1 && { borderBottomWidth: 0 }
            ]}
            onPress={() => Linking.openURL(item.url)}
            activeOpacity={0.7}
          >
            <View style={styles.resItemContent}>
              <Text style={[styles.resItemTitle, { color: theme.colors.primary }]}>{item.title}</Text>
              <Text style={[styles.resItemDesc, { color: theme.colors.textSecondary }]}>{item.description}</Text>
            </View>
            <ExternalLink color={theme.colors.textSecondary} size={18} opacity={0.6} />
          </TouchableOpacity>
        ))}
      </View>

      {category.tips ? (
        <View style={[styles.tipBox, { backgroundColor: theme.colors.warning + '15' }]}>
          <Lightbulb color={theme.colors.warning} size={16} />
          <Text style={[styles.tipText, { color: theme.colors.warning }]}>{category.tips}</Text>
        </View>
      ) : null}
    </View>
  );
};

// ── Database ──
const RESOURCE_CATEGORIES = [
  {
    title: "School Search & Compare",
    subtitle: "Where students find schools and compare data.",
    tips: "Helps students avoid random choices.",
    icon: Search,
    items: [
      { id: 'r1', title: 'Niche', description: 'Rankings, reviews, stats', url: 'https://www.niche.com/' },
      { id: 'r2', title: 'College Board BigFuture', description: 'Official SAT + college search', url: 'https://www.collegeboard.org/' },
      { id: 'r3', title: 'EducationUSA', description: 'Trusted US info', url: 'https://educationusa.state.gov/' },
    ]
  },
  {
    title: "Core Application Platforms",
    subtitle: "These are the main gateways students actually apply through.",
    tips: "MUST HAVE. These are non-negotiable.",
    icon: LayoutTemplate,
    items: [
      { id: 'r4', title: 'Common App', description: 'Apply to 1000+ US universities', url: 'https://www.commonapp.org/' },
      { id: 'r5', title: 'Coalition for College', description: 'Alternative to Common App', url: 'https://www.coalitionforcollegeaccess.org/' },
      { id: 'r6', title: 'UCAS', description: 'UK universities application portal', url: 'https://www.ucas.com/' },
    ]
  },
  {
    title: "Scholarship Databases",
    subtitle: "Where students actually find money.",
    tips: "VERY IMPORTANT. This is where opportunities live.",
    icon: DollarSign,
    items: [
      { id: 'r7', title: 'Scholarships.com', description: 'Massive database of scholarships', url: 'https://www.scholarships.com/' },
      { id: 'r8', title: 'Fastweb', description: 'Targeted scholarships & financial aid', url: 'https://www.fastweb.com/' },
      { id: 'r9', title: 'Opportunity Desk', description: 'Global opportunities for youth', url: 'https://opportunitydesk.org/' },
      { id: 'r10', title: 'ScholarshipPortal', description: 'Find scholarships worldwide', url: 'https://www.scholarshipportal.com/' },
    ]
  },
  {
    title: "Major Global Programs",
    subtitle: "High-value targets for fully funded studies.",
    tips: "These are real paths for Ethiopian students.",
    icon: Globe2,
    items: [
      { id: 'r11', title: 'Mastercard Foundation', description: 'Scholars Program', url: 'https://mastercardfdn.org/all/scholars/' },
      { id: 'r12', title: 'Stipendium Hungaricum', description: 'Hungarian Government Scholarships', url: 'https://stipendiumhungaricum.hu/' },
      { id: 'r13', title: 'Türkiye Scholarships', description: 'Fully-funded Turkish scholarships', url: 'https://www.turkiyeburslari.gov.tr/' },
      { id: 'r14', title: 'DAAD', description: 'Study in Germany', url: 'https://www.daad.de/en/' },
    ]
  },
  {
    title: "Test Preparation (FREE)",
    subtitle: "Essential prep for standardized tests.",
    icon: BookOpen,
    items: [
      { id: 'r15', title: 'Khan Academy', description: 'FREE official SAT prep (highly recommended)', url: 'https://www.khanacademy.org/sat' },
      { id: 'r16', title: 'Duolingo English Test', description: 'English proficiency + test prep', url: 'https://englishtest.duolingo.com/' },
    ]
  },
  {
    title: "University Research",
    subtitle: "Deep data and institutional rankings.",
    tips: "Use carefully (not everything is about rankings).",
    icon: BarChart3,
    items: [
      { id: 'r17', title: 'U.S. News Ranking', description: 'Popular university rankings', url: 'https://www.usnews.com/best-colleges' },
      { id: 'r18', title: 'Times Higher Education', description: 'Global university rankings', url: 'https://www.timeshighereducation.com/' },
    ]
  },
  {
    title: "Essay & Writing Help",
    subtitle: "Perfect your personal statements.",
    icon: PenTool,
    items: [
      { id: 'r19', title: 'Grammarly', description: 'Free grammar and writing assistant', url: 'https://www.grammarly.com/' },
      { id: 'r20', title: 'Hemingway Editor', description: 'Make your writing bold and clear', url: 'https://hemingwayapp.com/' },
    ]
  },
  {
    title: "Profile & Networking",
    subtitle: "Connect with admissions and alumni.",
    tips: "Very underrated tool for students.",
    icon: Users,
    items: [
      { id: 'r21', title: 'LinkedIn', description: 'Build your professional digital profile', url: 'https://www.linkedin.com/' },
    ]
  },
  {
    title: "Organization Tools",
    subtitle: "Keep your application materials in one place.",
    icon: Folder,
    items: [
      { id: 'r22', title: 'Google Docs', description: 'Write essays and resumes securely', url: 'https://docs.google.com/' },
      { id: 'r23', title: 'Notion', description: 'Track deadlines and application status', url: 'https://www.notion.so/' },
    ]
  }
];

interface Props {
  onBack: () => void;
}

export const UsefulResourcesScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Useful Links</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>Official portals and databases</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.resourceGrid}>
          {RESOURCE_CATEGORIES.map((category, i) => (
            <ResourceCategoryBlock key={`cat-${i}`} category={category} />
          ))}
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: -8,
  },
  headerTextContainer: {
    marginTop: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    marginTop: 6,
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  resourceGrid: {
    gap: 20,
  },
  // Resource Blocks
  categoryBlock: {
    borderRadius: 24,
    borderWidth: 1.5,
    overflow: 'hidden',
    ...baseTheme.shadows.light,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: baseTheme.colors.border + '50',
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  categoryHeaderText: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  categorySubtitle: {
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
  resList: {
    paddingHorizontal: 20,
  },
  resItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  resItemContent: {
    flex: 1,
    paddingRight: 16,
  },
  resItemTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  resItemDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  tipBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  tipText: {
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 8,
  },
});

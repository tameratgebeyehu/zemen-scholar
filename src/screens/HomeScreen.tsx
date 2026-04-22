import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Compass,
  ClipboardCheck,
  School,
  IdCard,
  Star,
  Book,
  Sun,
  Moon,
  ArrowRight,
  Zap,
  TrendingUp,
  Sparkles,
} from 'lucide-react-native';
import { useAppContext, useAppTheme } from '../context/AppContext';
import { useResponsive } from '../hooks/useResponsive';
import {
  ROADMAP_DATA,
  DOCUMENTS_GUIDE_DATA,
  UNIVERSITY_APP_STEPS,
  VISA_PROCESS_STEPS,
  MOTIVATIONS,
} from '../constants/appData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Props {
  onNavigate?: (tab: any) => void;
}

// ── Quick access items ──────────────────────────────────────────────────
const QUICK_ITEMS = [
  { route: 'roadmap',       label: 'Roadmap',     Icon: Compass,        color: '#3b82f6' },
  { route: 'documents',     label: 'Documents',   Icon: ClipboardCheck, color: '#f59e0b' },
  { route: 'universities',  label: 'Universities',Icon: School,         color: '#10b981' },
  { route: 'visa',          label: 'Visa Guide',  Icon: IdCard,         color: '#8b5cf6' },
  { route: 'extracurricular', label: 'Activities',Icon: Star,           color: '#06b6d4' },
  { route: 'words_to_know', label: 'Glossary',    Icon: Book,           color: '#ec4899' },
];

export const HomeScreen = ({ onNavigate }: Props) => {
  const { state, updateUser } = useAppContext();
  const theme = useAppTheme();
  const { isTablet } = useResponsive();
  const [motivation] = useState(MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)]);

  // Fade-in for the hero card
  const heroAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(heroAnim, { toValue: 1, duration: 700, useNativeDriver: true }).start();
  }, []);

  const { user } = state;
  const isDark = user.app_theme === 'dark';
  const toggleTheme = async () => updateUser({ app_theme: isDark ? 'light' : 'dark' });

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return { text: 'Good Morning', emoji: '☀️' };
    if (h < 18) return { text: 'Good Afternoon', emoji: '🌤️' };
    return { text: 'Good Evening', emoji: '🌙' };
  };
  const greeting = getGreeting();

  // ── Progress ─────────────────────────────────────────────────────────
  const { roadmap_progress, documents_progress, application_progress, visa_progress } = state;

  const allRoadmapSteps = Object.values(ROADMAP_DATA).flat();
  const completedRoadmap = allRoadmapSteps.filter(s =>
    Object.values(roadmap_progress).some(g => g[s.id] === 'completed')
  ).length;
  const roadmapScore = allRoadmapSteps.length > 0 ? completedRoadmap / allRoadmapSteps.length : 0;

  const completedDocs = Object.values(documents_progress).filter(s => s === 'verified').length;
  const docScore = DOCUMENTS_GUIDE_DATA.length > 0 ? completedDocs / DOCUMENTS_GUIDE_DATA.length : 0;

  const allVisaSteps = [...UNIVERSITY_APP_STEPS, ...VISA_PROCESS_STEPS];
  const completedVisa = allVisaSteps.filter(
    s => application_progress[s.id] === 'completed' || visa_progress[s.id] === 'completed'
  ).length;
  const visaScore = allVisaSteps.length > 0 ? completedVisa / allVisaSteps.length : 0;

  const progressPercent = Math.min(100, Math.round(((roadmapScore + docScore + visaScore) / 3) * 100));

  // ── Next action ───────────────────────────────────────────────────────
  const getNextAction = () => {
    const currentGrade = user.grade_level || 'Grade 11';
    const gradeProgress = roadmap_progress[currentGrade] || {};
    for (const step of (ROADMAP_DATA[currentGrade] || [])) {
      if (gradeProgress[step.id] !== 'completed')
        return { title: step.title, actionText: 'Continue Roadmap', route: 'roadmap' };
    }
    for (const doc of DOCUMENTS_GUIDE_DATA) {
      if (documents_progress[doc.id] !== 'verified')
        return { title: `Prepare: ${doc.title}`, actionText: 'View Documents', route: 'documents' };
    }
    for (const v of VISA_PROCESS_STEPS) {
      if (visa_progress[v.id] !== 'completed')
        return { title: v.title, actionText: 'View Visa Process', route: 'visa_process' };
    }
    return null;
  };
  const nextAction = getNextAction();

  // Circular progress arc dimensions
  const circleSize = isTablet ? 110 : 88;
  const strokeWidth = isTablet ? 9 : 7;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progressPercent / 100) * circumference;

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.colors.background }]} edges={['top']}>
      {/* ── Header ──────────────────────────────────────────────── */}
      <View style={[styles.header, isTablet && { paddingHorizontal: 40, paddingVertical: 20 }]}>
        <View>
          <Text style={[styles.greetingSmall, { color: theme.colors.textSecondary }]}>
            {greeting.text}
          </Text>
          <Text style={[styles.greetingBig, { color: theme.colors.text }, isTablet && { fontSize: 38 }]}>
            Scholar
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.themeBtn, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
          onPress={toggleTheme}
          activeOpacity={0.7}
        >
          {isDark
            ? <Sun color={theme.colors.warning} size={isTablet ? 26 : 20} />
            : <Moon color={theme.colors.text} size={isTablet ? 26 : 20} />
          }
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, isTablet && { paddingHorizontal: 40 }]}
      >
        {/* ── HERO — Progress Banner ───────────────────────────── */}
        <Animated.View
          style={[
            styles.heroBanner,
            {
              backgroundColor: theme.colors.primary,
              opacity: heroAnim,
              transform: [{ translateY: heroAnim.interpolate({ inputRange: [0,1], outputRange: [16, 0] }) }],
            },
          ]}
        >
          {/* Left: text + bar */}
          <View style={styles.heroLeft}>
            <View style={[styles.heroPill, { backgroundColor: 'rgba(255,255,255,0.18)' }]}>
              <TrendingUp color="#fff" size={12} />
              <Text style={styles.heroPillText}>OVERALL READINESS</Text>
            </View>
            <Text style={[styles.heroPercent, isTablet && { fontSize: 52 }]}>{progressPercent}%</Text>
            <Text style={styles.heroSub}>Your university journey</Text>

            {/* Track bar */}
            <View style={styles.heroTrack}>
              <View style={[styles.heroFill, { width: `${progressPercent}%` }]} />
            </View>
          </View>

          {/* Right: mini stats */}
          <View style={styles.heroStats}>
            <View style={[styles.statBox, { backgroundColor: 'rgba(255,255,255,0.14)' }]}>
              <Text style={styles.statNum}>{completedDocs}</Text>
              <Text style={styles.statLabel}>Docs{'\n'}Ready</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: 'rgba(255,255,255,0.14)' }]}>
              <Text style={styles.statNum}>{completedRoadmap}</Text>
              <Text style={styles.statLabel}>Steps{'\n'}Done</Text>
            </View>
          </View>
        </Animated.View>

        {/* ── Next Step ─────────────────────────────────────────── */}
        {nextAction && (
          <TouchableOpacity
            style={[styles.nextCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
            onPress={() => onNavigate?.(nextAction.route)}
            activeOpacity={0.85}
          >
            <View style={[styles.nextIconBox, { backgroundColor: theme.colors.warning + '18' }]}>
              <Zap color={theme.colors.warning} size={20} fill={theme.colors.warning + '30'} />
            </View>
            <View style={styles.nextText}>
              <Text style={[styles.nextLabel, { color: theme.colors.warning }]}>NEXT STEP</Text>
              <Text style={[styles.nextTitle, { color: theme.colors.text }]} numberOfLines={1}>
                {nextAction.title}
              </Text>
            </View>
            <View style={[styles.nextArrow, { backgroundColor: theme.colors.primary }]}>
              <ArrowRight color="#fff" size={16} />
            </View>
          </TouchableOpacity>
        )}

        {/* ── Quick Access ──────────────────────────────────────── */}
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Access</Text>
        <View style={styles.grid}>
          {QUICK_ITEMS.map(({ route, label, Icon, color }) => (
            <TouchableOpacity
              key={route}
              style={[
                styles.gridItem,
                {
                  width: '48%',
                  backgroundColor: theme.colors.card,
                  borderColor: theme.colors.border,
                },
              ]}
              onPress={() => onNavigate?.(route === 'universities' ? 'visa' : route)}
              activeOpacity={0.8}
            >
              <View style={[styles.gridIconBox, { backgroundColor: color + '14' }]}>
                <Icon color={color} size={isTablet ? 26 : 22} />
              </View>
              <Text style={[styles.gridLabel, { color: theme.colors.text }]} numberOfLines={1}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Daily Advisor ────────────────────────────────────── */}
        <View style={[styles.advisorCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.advisorLeft}>
            <View style={[styles.advisorAccent, { backgroundColor: theme.colors.warning }]} />
          </View>
          <View style={styles.advisorBody}>
            <View style={styles.advisorHeader}>
              <Sparkles color={theme.colors.warning} size={15} />
              <Text style={[styles.advisorLabel, { color: theme.colors.warning }]}>DAILY ADVISOR</Text>
            </View>
            <Text style={[styles.advisorText, { color: theme.colors.text }]}>{motivation}</Text>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },

  // ── Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 12,
  },
  greetingSmall: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
    letterSpacing: 0.1,
  },
  greetingBig: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: -0.8,
  },
  themeBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },

  // ── Scroll
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 4,
  },

  // ── Hero Banner
  heroBanner: {
    borderRadius: 24,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 18,
    elevation: 8,
  },
  heroLeft: { flex: 1 },
  heroPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  heroPillText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.8,
  },
  heroPercent: {
    fontSize: 44,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -1,
    lineHeight: 50,
  },
  heroSub: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
    marginBottom: 16,
  },
  heroTrack: {
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 16,
  },
  heroFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  heroStats: {
    gap: 10,
    marginLeft: 12,
  },
  statBox: {
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    minWidth: 60,
  },
  statNum: {
    fontSize: 22,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.65)',
    textAlign: 'center',
    lineHeight: 13,
    marginTop: 2,
  },

  // ── Next Step Card
  nextCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    gap: 12,
  },
  nextIconBox: {
    width: 44,
    height: 44,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: { flex: 1 },
  nextLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  nextTitle: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  nextArrow: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ── Section Title
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.4,
    marginBottom: 14,
  },

  // ── Quick Access Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  gridItem: {
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 12,
  },
  gridIconBox: {
    width: 42,
    height: 42,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: -0.2,
  },

  // ── Daily Advisor
  advisorCard: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  advisorLeft: {
    width: 5,
  },
  advisorAccent: {
    flex: 1,
    width: 5,
  },
  advisorBody: {
    flex: 1,
    padding: 18,
  },
  advisorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 8,
  },
  advisorLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  advisorText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },
});

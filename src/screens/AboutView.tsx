import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Target, Eye, Shield, Award, HelpCircle, ChevronRight, Zap, Globe, CornerUpRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { useResponsive } from '../hooks/useResponsive';

interface Props {
  onBack: () => void;
  onNavigate: (route: string) => void;
}

export const AboutView = ({ onBack, onNavigate }: Props) => {
  const theme = useAppTheme();
  const { currentContentWidth, isTablet } = useResponsive();
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const pillarWidth = isTablet ? (currentContentWidth - 40 - 16) / 2 : '100%';

  const PillarCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <View style={[styles.pillarCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: pillarWidth }]}>
      <LinearGradient
        colors={[theme.colors.primary + '20', theme.colors.primary + '05']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.iconBox}
      >
        <Icon color={theme.colors.primary} size={28} strokeWidth={2.5} />
      </LinearGradient>
      <View style={styles.pillarContent}>
        <Text style={[styles.pillarTitle, { color: theme.colors.text }]}>{title}</Text>
        <Text style={[styles.pillarDesc, { color: theme.colors.textSecondary }]}>{desc}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      {/* Premium Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
          <ArrowLeft color={theme.colors.text} size={26} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          
          {/* Main Hero Intro */}
          <LinearGradient
            colors={[theme.colors.primary + '15', 'transparent']}
            style={styles.heroGradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
          <View style={styles.introSection}>
            <View style={[styles.badge, { backgroundColor: theme.colors.primary + '20' }]}>
              <Text style={[styles.badgeText, { color: theme.colors.primary }]}>THE ACADEMIC REVOLUTION</Text>
            </View>
            <Text style={[styles.heroTitle, { color: theme.colors.text }]}>
              About Zemen <Text style={{ color: theme.colors.primary }}>Scholar</Text>
            </Text>
            <Text style={[styles.introText, { color: theme.colors.textSecondary }]}>
              Zemen Scholar is a premium academic guidance platform developed by Tamerat Gebeyehu. We are dismantling the gatekeeping of international education.
            </Text>
          </View>

          {/* Pillars */}
          <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>THE MANIFESTO</Text>
          <View style={isTablet ? styles.pillarGrid : null}>
            <PillarCard 
              icon={Target}
              title="Our Mission"
              desc="To empower Ethiopian students to secure fully-funded international scholarships entirely by themselves—ignoring paid consultants, agencies, or money-takers. We provide the roadmap; you drive the journey."
              delay={100}
            />
            <PillarCard 
              icon={Eye}
              title="Our Vision"
              desc="An Ethiopia where every student is self-reliant and fully equipped to compete globally, breaking financial barriers through their own merit and absolute determination."
              delay={200}
            />
          </View>

          <View style={styles.spacer} />

          {/* Core Values */}
          <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>CORE VALUES</Text>
          <View style={styles.valuesGrid}>
            <View style={[styles.valueCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
              <Zap color={theme.colors.primary} size={28} strokeWidth={2.5} style={styles.valueIcon} />
              <Text style={[styles.valueTitle, { color: theme.colors.text }]}>Self-Reliance</Text>
              <Text style={[styles.valueDesc, { color: theme.colors.textSecondary }]}>You apply by yourself. No middle-men.</Text>
            </View>
            <View style={[styles.valueCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
              <Award color={theme.colors.primary} size={28} strokeWidth={2.5} style={styles.valueIcon} />
              <Text style={[styles.valueTitle, { color: theme.colors.text }]}>Excellence</Text>
              <Text style={[styles.valueDesc, { color: theme.colors.textSecondary }]}>Competing at the highest global standards.</Text>
            </View>
            <View style={[styles.valueCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
              <Shield color={theme.colors.primary} size={28} strokeWidth={2.5} style={styles.valueIcon} />
              <Text style={[styles.valueTitle, { color: theme.colors.text }]}>Integrity</Text>
              <Text style={[styles.valueDesc, { color: theme.colors.textSecondary }]}>Honest, transparent, and direct guidance.</Text>
            </View>
            <View style={[styles.valueCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
              <Globe color={theme.colors.primary} size={28} strokeWidth={2.5} style={styles.valueIcon} />
              <Text style={[styles.valueTitle, { color: theme.colors.text }]}>Access</Text>
              <Text style={[styles.valueDesc, { color: theme.colors.textSecondary }]}>Premium tools democratized for everyone.</Text>
            </View>
          </View>

          <View style={styles.spacer} />
          
          {/* Support Section */}
          <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>NEED ASSISTANCE?</Text>
          <TouchableOpacity 
            style={[styles.supportCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
            activeOpacity={0.8}
            onPress={() => onNavigate('support')}
          >
            <View style={styles.rowLeft}>
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.primary + '90']}
                style={styles.supportIconBox}
              >
                <HelpCircle color="#FFF" size={24} />
              </LinearGradient>
              <View>
                <Text style={[styles.supportTitle, { color: theme.colors.text }]}>Get Direct Support</Text>
                <Text style={[styles.supportSubtitle, { color: theme.colors.textSecondary }]}>Have questions about your journey?</Text>
              </View>
            </View>
            <CornerUpRight color={theme.colors.primary} size={22} strokeWidth={2.5} />
          </TouchableOpacity>

          <View style={{ height: 60 }} />
        </Animated.View>
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
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  heroGradient: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    height: 250,
    opacity: 0.8,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  introSection: {
    marginBottom: 40,
    paddingHorizontal: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: -1,
    lineHeight: 42,
    marginBottom: 16,
  },
  introText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '500',
    letterSpacing: -0.2,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 20,
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  pillarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  pillarCard: {
    flexDirection: 'row',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1.5,
    marginBottom: 16,
    gap: 18,
    ...baseTheme.shadows.medium,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillarContent: {
    flex: 1,
  },
  pillarTitle: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  pillarDesc: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '500',
    opacity: 0.85,
  },
  spacer: {
    height: 24,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
    marginBottom: 32,
  },
  valueCard: {
    width: '48%',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1.5,
    ...baseTheme.shadows.light,
  },
  valueIcon: {
    marginBottom: 16,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  valueDesc: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
  },
  supportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1.5,
    marginBottom: 24,
    ...baseTheme.shadows.medium,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  supportIconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  supportSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
});

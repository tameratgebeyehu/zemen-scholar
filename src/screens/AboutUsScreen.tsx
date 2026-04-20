import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Target, Eye, Users, Award, Shield, HelpCircle, ChevronRight } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';

interface Props {
  onBack: () => void;
  onNavigate: (route: string) => void;
}

export const AboutUsScreen = ({ onBack, onNavigate }: Props) => {
  const theme = useAppTheme();

  const PillarCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <View style={[styles.pillarCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
      <View style={[styles.iconBox, { backgroundColor: theme.colors.primary + '15' }]}>
        <Icon color={theme.colors.primary} size={24} />
      </View>
      <View style={styles.pillarContent}>
        <Text style={[styles.pillarTitle, { color: theme.colors.text }]}>{title}</Text>
        <Text style={[styles.pillarDesc, { color: theme.colors.textSecondary }]}>{desc}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ArrowLeft color={theme.colors.text} size={24} />
        </TouchableOpacity>
        <View>
          <Text style={[styles.title, { color: theme.colors.text }]}>About Zemen Scholar</Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>Empowering Ethiopian Scholars</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Intro */}
        <View style={styles.introSection}>
          <Text style={[styles.introText, { color: theme.colors.text }]}>
            Zemen Scholar is a premium academic guidance platform developed by Tamerat Gebeyehu. We bridge the gap between Ethiopian talent and global opportunities.
          </Text>
        </View>

        {/* Pillars */}
        <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>OUR MISSION & VISION</Text>
        <PillarCard 
          icon={Target}
          title="The Mission"
          desc="To provide every Ethiopian student with the tactical roadmap and resources needed to win international scholarships."
        />
        <PillarCard 
          icon={Eye}
          title="The Vision"
          desc="An Ethiopia where financial background never limits a student's potential to study at the world's best universities."
        />

        <View style={styles.spacer} />

        <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>CORE VALUES</Text>
        <View style={styles.valuesGrid}>
          <View style={[styles.valueItem, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Award color={theme.colors.primary} size={20} />
            <Text style={[styles.valueText, { color: theme.colors.text }]}>Excellence</Text>
          </View>
          <View style={[styles.valueItem, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Users color={theme.colors.primary} size={20} />
            <Text style={[styles.valueText, { color: theme.colors.text }]}>Community</Text>
          </View>
          <View style={[styles.valueItem, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Shield color={theme.colors.primary} size={20} />
            <Text style={[styles.valueText, { color: theme.colors.text }]}>Integrity</Text>
          </View>
        </View>

        {/* Closing */}
        <View style={[styles.footerCard, { backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.primary + '30' }]}>
          <Text style={[styles.footerTitle, { color: theme.colors.primary }]}>Join the Zemen Family</Text>
          <Text style={[styles.footerDesc, { color: theme.colors.textSecondary }]}>
            We are more than an app. We are a mentor in your pocket, guiding you through the complex world of international admissions.
          </Text>
        </View>

        <View style={styles.spacer} />
        
        <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>NEED ASSISTANCE?</Text>
        <TouchableOpacity 
          style={[styles.supportCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
          activeOpacity={0.7}
          onPress={() => onNavigate('support')}
        >
          <View style={styles.rowLeft}>
            <View style={[styles.supportIconBox, { backgroundColor: theme.colors.primary + '15' }]}>
              <HelpCircle color={theme.colors.primary} size={22} />
            </View>
            <View>
              <Text style={[styles.supportTitle, { color: theme.colors.text }]}>Support</Text>
              <Text style={[styles.supportSubtitle, { color: theme.colors.textSecondary }]}>Get help with the app or guidance</Text>
            </View>
          </View>
          <ChevronRight color={theme.colors.textSecondary} size={20} />
        </TouchableOpacity>

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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 16,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  introSection: {
    marginBottom: 32,
  },
  introText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    opacity: 0.9,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 16,
    marginLeft: 4,
  },
  pillarCard: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    gap: 16,
    ...baseTheme.shadows.light,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillarContent: {
    flex: 1,
  },
  pillarTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 4,
  },
  pillarDesc: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  spacer: {
    height: 16,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 32,
  },
  valueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    gap: 10,
  },
  valueText: {
    fontSize: 14,
    fontWeight: '700',
  },
  footerCard: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  footerDesc: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: '500',
  },
  supportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 24,
    ...baseTheme.shadows.light,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  supportIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  supportSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
});

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../theme/theme';
import { GradeSelector, GradeLevel } from '../components/features/roadmap/GradeSelector';
import { OfflineStepCard } from '../components/features/roadmap/OfflineStepCard';


import { useAppContext } from '../context/AppContext';
import { StepStatus } from '../services/storageService';



import { ROADMAP_DATA } from '../constants/appData';
import { RoadmapStep } from '../types';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { ChevronLeft, Target, Award } from 'lucide-react-native';


interface Props {
  onNavigate?: (route: string) => void;
}

export const RoadmapScreen = ({ onNavigate }: Props) => {
  const { state, updateRoadmap, updateUser } = useAppContext();
  const theme = useAppTheme();
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('Grade 11');
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);

  // Grade order for advancement
  const GRADE_ORDER: GradeLevel[] = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const getNextGrade = (current: GradeLevel): GradeLevel | null => {
    const idx = GRADE_ORDER.indexOf(current);
    return idx >= 0 && idx < GRADE_ORDER.length - 1 ? GRADE_ORDER[idx + 1] : null;
  };

  const handleAdvanceGrade = async () => {
    const next = getNextGrade(selectedGrade);
    if (next) {
      await updateUser({ grade_level: next });
      setSelectedGrade(next);
      setExpandedStepId(null);
    }
  };

  // ── State & computed values (must be before animation useEffect) ──
  const { user, roadmap_progress } = state;
  const currentSteps   = ROADMAP_DATA[selectedGrade] || [];
  const gradeProgress  = roadmap_progress[selectedGrade] || {};
  const completedCount = currentSteps.filter(s => gradeProgress[s.id] === 'completed').length;
  const progressPercent = currentSteps.length > 0
    ? Math.round((completedCount / currentSteps.length) * 100)
    : 0;

  // ── Animation values ─────────────────────────────────────────────
  const cardAnim    = useRef(new Animated.Value(0)).current;
  const trophyScale = useRef(new Animated.Value(1)).current;
  const trophyPulse = useRef<Animated.CompositeAnimation | null>(null);
  const confetti = useRef(
    Array.from({ length: 8 }, () => ({
      x:       new Animated.Value(0),
      y:       new Animated.Value(0),
      opacity: new Animated.Value(0),
      scale:   new Animated.Value(0),
    }))
  ).current;

  const CONFETTI_DIRS = [
    { dx:  0,   dy: -90 },
    { dx:  64,  dy: -64 },
    { dx:  90,  dy:  0  },
    { dx:  64,  dy:  64 },
    { dx:  0,   dy:  90 },
    { dx: -64,  dy:  64 },
    { dx: -90,  dy:  0  },
    { dx: -64,  dy: -64 },
  ];
  const CONFETTI_COLORS = ['#fff', '#fde68a', '#a5f3fc', '#fbcfe8', '#c4b5fd', '#6ee7b7', '#fca5a5', '#93c5fd'];

  useEffect(() => {
    if (progressPercent === 100) {
      const seenKey = `celebration_seen_${selectedGrade.replace(' ', '_')}`;

      AsyncStorage.getItem(seenKey).then(seen => {
        if (seen) {
          // Already celebrated before — show card instantly, skip confetti
          cardAnim.setValue(1);
          // Still run the gentle trophy pulse on revisit
          trophyPulse.current = Animated.loop(
            Animated.sequence([
              Animated.spring(trophyScale, { toValue: 1.12, tension: 180, friction: 4, useNativeDriver: true }),
              Animated.spring(trophyScale, { toValue: 1,    tension: 180, friction: 4, useNativeDriver: true }),
              Animated.delay(2000),
            ])
          );
          trophyPulse.current.start();
        } else {
          // First time! Play the full celebration
          AsyncStorage.setItem(seenKey, 'true'); // mark as seen immediately

          // Reset confetti start positions
          confetti.forEach(p => { p.x.setValue(0); p.y.setValue(0); p.opacity.setValue(0); p.scale.setValue(0); });

          // 1. Card spring entrance
          Animated.spring(cardAnim, {
            toValue: 1, tension: 55, friction: 9, useNativeDriver: true,
          }).start();

          // 2. Trophy heartbeat loop
          trophyPulse.current = Animated.loop(
            Animated.sequence([
              Animated.spring(trophyScale, { toValue: 1.18, tension: 180, friction: 4, useNativeDriver: true }),
              Animated.spring(trophyScale, { toValue: 1,    tension: 180, friction: 4, useNativeDriver: true }),
              Animated.delay(1200),
            ])
          );
          trophyPulse.current.start();

          // 3. Confetti burst after 350ms
          setTimeout(() => {
            Animated.parallel(
              confetti.map((p, i) => {
                const { dx, dy } = CONFETTI_DIRS[i];
                return Animated.parallel([
                  Animated.timing(p.scale,   { toValue: 1,  duration: 200, useNativeDriver: true }),
                  Animated.timing(p.opacity, { toValue: 1,  duration: 150, useNativeDriver: true }),
                  Animated.timing(p.x,       { toValue: dx, duration: 900, useNativeDriver: true }),
                  Animated.timing(p.y,       { toValue: dy, duration: 900, useNativeDriver: true }),
                  Animated.sequence([
                    Animated.delay(450),
                    Animated.timing(p.opacity, { toValue: 0, duration: 450, useNativeDriver: true }),
                  ]),
                ]);
              })
            ).start();
          }, 350);
        }
      });

    } else {
      // Grade changed or not complete — reset everything
      trophyPulse.current?.stop();
      cardAnim.setValue(0);
      trophyScale.setValue(1);
      confetti.forEach(p => { p.x.setValue(0); p.y.setValue(0); p.opacity.setValue(0); p.scale.setValue(0); });
    }
  }, [progressPercent, selectedGrade]);

  useEffect(() => {
    if (user.grade_level) {
      setSelectedGrade(user.grade_level as GradeLevel);
    }
  }, [user.grade_level]);

  const handleUpdateStatus = async (stepId: string, newStatus: StepStatus) => {
    await updateRoadmap(selectedGrade, stepId, newStatus);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Premium Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <View>
          <Text style={[styles.title, { color: theme.colors.text }]}>Roadmap</Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>Your step-by-step path to USA</Text>
        </View>
        <View style={[styles.countryBadge, { backgroundColor: theme.colors.primary + '10', borderColor: theme.colors.primary }]}>
          <Text style={[styles.countryText, { color: theme.colors.primary }]}>{user.target_country || 'USA'} 🇺🇸</Text>
        </View>
      </View>

      <GradeSelector 
        selectedGrade={selectedGrade} 
        onSelectGrade={setSelectedGrade} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Progress Summary Card */}
        <View style={[styles.summaryCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.summaryInfo}>
            <View style={[styles.iconCircle, { backgroundColor: theme.colors.primary + '15' }]}>
              <Award color={theme.colors.primary} size={24} />
            </View>
            <View>
              <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>{selectedGrade} PROGRESS</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
                {completedCount} of {currentSteps.length} Steps Done
              </Text>
            </View>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBarBase, { backgroundColor: theme.colors.border }]}>
              <View style={[styles.progressBarFill, { width: `${progressPercent}%`, backgroundColor: theme.colors.primary }]} />
            </View>
            <Text style={[styles.progressPercent, { color: theme.colors.primary }]}>{progressPercent}%</Text>
          </View>
        </View>

        <View style={styles.timelineWrapper}>
          {currentSteps.map((step, index) => (
            <OfflineStepCard 
              key={step.id}
              step={step}
              status={gradeProgress[step.id] || 'not_started'}
              onToggleStatus={handleUpdateStatus}
              isFirst={index === 0}
              isLast={index === currentSteps.length - 1}
              isExpanded={expandedStepId === step.id}
              onExpand={() => setExpandedStepId(expandedStepId === step.id ? null : step.id)}
            />
          ))}
        </View>

        {progressPercent === 100 && (() => {
          const nextGrade = getNextGrade(selectedGrade);
          return (
            <Animated.View
              style={[
                styles.celebrationCard,
                {
                  opacity: cardAnim,
                  transform: [{
                    translateY: cardAnim.interpolate({
                      inputRange: [0, 1], outputRange: [48, 0],
                    }),
                  }],
                },
              ]}
            >
              {/* ── Blue Hero Banner ── */}
              <View style={[styles.celebrationHero, { backgroundColor: theme.colors.primary }]}>

                {/* Confetti particles */}
                <View style={styles.confettiContainer} pointerEvents="none">
                  {confetti.map((p, i) => (
                    <Animated.View
                      key={i}
                      style={[
                        styles.confettiDot,
                        { backgroundColor: CONFETTI_COLORS[i] },
                        {
                          opacity: p.opacity,
                          transform: [
                            { translateX: p.x },
                            { translateY: p.y },
                            { scale: p.scale },
                          ],
                        },
                      ]}
                    />
                  ))}
                </View>

                {/* Pulsing trophy */}
                <Animated.Text
                  style={[styles.celebrationEmoji, { transform: [{ scale: trophyScale }] }]}
                >
                  🏆
                </Animated.Text>
                <Text style={styles.celebrationHeroTitle}>Mission Accomplished!</Text>
                <Text style={styles.celebrationHeroSub}>{selectedGrade} Complete</Text>
              </View>

              {/* Body */}
              <View style={[styles.celebrationBody, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.celebrationDesc, { color: theme.colors.textSecondary }]}>
                  {nextGrade
                    ? `You've mastered every step in ${selectedGrade}. You're ready to level up to ${nextGrade}!`
                    : `Incredible! You've completed your full academic roadmap. Head to the Application & Visa section to begin your university journey!`}
                </Text>

                {nextGrade ? (
                  <TouchableOpacity
                    style={[styles.celebrationBtn, { backgroundColor: theme.colors.primary }]}
                    onPress={handleAdvanceGrade}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.celebrationBtnText}>Advance to {nextGrade}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.celebrationBtn, { backgroundColor: theme.colors.success }]}
                    onPress={() => onNavigate?.('video_guides')}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.celebrationBtnText}>Watch Video Guides</Text>
                  </TouchableOpacity>
                )}
              </View>
            </Animated.View>
          );
        })()}

        {currentSteps.length === 0 && (
          <View style={styles.emptyContainer}>
            <Target color={theme.colors.textSecondary} size={48} />
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>No steps defined for this grade yet.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '500',
  },
  countryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1.5,
  },
  countryText: {
    fontSize: 12,
    fontWeight: '800',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  summaryCard: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 32,
    marginTop: 12,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 3,
  },
  summaryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 2,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBarBase: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: '800',
    width: 40,
    textAlign: 'right',
  },
  timelineWrapper: {
    paddingLeft: 4, // Align with nodes
  },
  celebrationCard: {
    marginTop: 24,
    marginBottom: 40,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 16,
    elevation: 6,
  },
  celebrationHero: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    overflow: 'visible',
  },
  confettiContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  confettiDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  celebrationEmoji: {
    fontSize: 52,
    marginBottom: 12,
  },
  celebrationHeroTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  celebrationHeroSub: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  celebrationBody: {
    padding: 24,
  },
  celebrationDesc: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 23,
    fontWeight: '500',
    marginBottom: 24,
  },
  celebrationBtn: {
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  celebrationBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  resetHint: {
    fontSize: 11,
    color: '#999',
    marginTop: 12,
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 16,
    textAlign: 'center',
  },
});

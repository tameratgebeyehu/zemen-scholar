import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, ViewToken } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronRight, BookOpen, Map, GraduationCap } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { OnboardingOption } from '../components/onboarding/OnboardingOption';
import { useAppContext } from '../context/AppContext';

import { useResponsive } from '../hooks/useResponsive';

interface Props {
  onComplete: () => void;
}

const INTRO_SLIDES = [
  {
    type: 'intro',
    title: 'Welcome to Zemen Scholar',
    subtitle: 'Your comprehensive guide to studying abroad.',
    bullets: [
      'Master the admission process step-by-step',
      'Track your progress from Grade 9 onwards',
      'Expert guidance tailored for international students'
    ],
    icon: <BookOpen color={theme.colors.primary} size={48} />
  },
  {
    type: 'intro',
    title: 'Follow a Clear Path',
    subtitle: 'Eliminate confusion with structured yearly goals.',
    bullets: [
      'Know exactly what documents to prepare and when',
      'Stay ahead of important application deadlines',
      'Build a competitive profile seamlessly over time'
    ],
    icon: <Map color={theme.colors.primary} size={48} />
  },
  {
    type: 'intro',
    title: 'Start Your Journey',
    subtitle: 'You are just a few steps away from your dream.',
    bullets: [
      'Discover the roadmap that matches your profile',
      'Prepare for required standardized tests',
      'Apply to leading universities with absolute confidence'
    ],
    icon: <GraduationCap color={theme.colors.primary} size={48} />
  },
  {
    type: 'question',
    title: 'What is your current education level?',
    subtitle: 'Select the option that best describes you so we can customize your roadmap.',
    options: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
  }
];

export const OnboardingScreen = ({ onComplete }: Props) => {
  const { updateUser } = useAppContext();
  const { currentContentWidth, isTablet } = useResponsive();
  
  const flatListRef = useRef<FlatList>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0] && viewableItems[0].index !== null) {
      setCurrentStep(viewableItems[0].index);
    }
  }, []);

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const activeSlide = INTRO_SLIDES[currentStep];
  const isQuestion = activeSlide.type === 'question';
  const hasAnsweredCurrent = isQuestion ? selectedGrade !== null : true;

  const handleNext = async () => {
    if (currentStep < INTRO_SLIDES.length - 1) {
      // Smoothly scroll to next slide
      flatListRef.current?.scrollToIndex({ index: currentStep + 1, animated: true });
    } else {
      // Finalize and bypass future onboarding
      await updateUser({
        grade_level: selectedGrade,
        onboarding_completed: true
      });
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      flatListRef.current?.scrollToIndex({ index: currentStep - 1, animated: true });
    }
  };

  const handleSkip = () => {
    // Fast-forward directly to the Grade query slide
    flatListRef.current?.scrollToIndex({ index: INTRO_SLIDES.length - 1, animated: true });
  };

  const renderSlide = ({ item }: { item: typeof INTRO_SLIDES[0] }) => {
    if (item.type === 'intro') {
      return (
        <View style={[styles.slideContainer, { width: currentContentWidth }]}>
          <View style={[styles.iconWrapper, isTablet && { marginTop: 40 }]}>
            {item.icon}
          </View>
          <Text style={[styles.introTitle, isTablet && { fontSize: 36 }]}>{item.title}</Text>
          <Text style={[styles.introSubtitle, isTablet && { fontSize: 18, marginBottom: 40 }]}>{item.subtitle}</Text>
          
          <View style={[styles.bulletList, isTablet && { padding: 32 }]}>
            {item.bullets?.map((bullet, idx) => (
              <View key={idx} style={styles.bulletItem}>
                <View style={styles.bulletDot} />
                <Text style={[styles.bulletText, isTablet && { fontSize: 17 }]}>{bullet}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }

    return (
      <View style={[styles.slideContainer, { width: currentContentWidth }]}>
        <View style={styles.questionContainer}>
          <Text style={[styles.questionTitle, isTablet && { fontSize: 36 }]}>{item.title}</Text>
          <Text style={[styles.questionSubtitle, isTablet && { fontSize: 17 }]}>{item.subtitle}</Text>
          
          <ScrollView 
            style={styles.optionsScrollContainer} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {item.options?.map((opt) => (
              <OnboardingOption 
                key={opt}
                label={opt}
                isSelected={selectedGrade === opt}
                onPress={() => setSelectedGrade(opt)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {currentStep > 0 ? (
          <TouchableOpacity onPress={handleBack} style={styles.headerBtn} activeOpacity={0.7}>
            <ChevronLeft stroke={theme.colors.textSecondary} size={28} />
          </TouchableOpacity>
        ) : (
          <View style={styles.headerBtn} />
        )}
        
        {currentStep < INTRO_SLIDES.length - 1 ? (
          <TouchableOpacity onPress={handleSkip} style={styles.skipBtn} activeOpacity={0.7}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.headerBtn} />
        )}
      </View>

      <FlatList
        ref={flatListRef}
        style={{ flex: 1 }}
        data={INTRO_SLIDES}
        renderItem={renderSlide}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        bounces={false}
        scrollEventThrottle={16}
      />

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {INTRO_SLIDES.map((_, idx) => (
            <View 
              key={idx} 
              style={[
                styles.dot, 
                currentStep === idx && styles.activeDot
              ]} 
            />
          ))}
        </View>

        <TouchableOpacity 
          style={[styles.nextButton, !hasAnsweredCurrent && styles.nextButtonDisabled]}
          activeOpacity={0.7}
          disabled={!hasAnsweredCurrent}
          onPress={handleNext}
        >
          <Text style={styles.nextText}>
            {currentStep === INTRO_SLIDES.length - 1 ? 'Get Started' : 'Continue'}
          </Text>
          {currentStep < INTRO_SLIDES.length - 1 && (
            <ChevronRight stroke="#fff" size={20} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  headerBtn: {
    width: 60,
    height: 44,
    justifyContent: 'center',
  },
  skipBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  // Slide Container
  slideContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: 10,
  },
  // Intro styling
  iconWrapper: {
    width: 100,
    height: 100,
    backgroundColor: `${theme.colors.primary}10`,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    alignSelf: 'center',
    marginTop: 20,
  },
  introTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 12,
  },
  introSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  bulletList: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    marginRight: 12,
    marginTop: 6, // Align dot with multiline text
  },
  bulletText: {
    fontSize: 15,
    lineHeight: 20,
    color: theme.colors.text,
    fontWeight: '500',
    flex: 1, // Let text wrap automatically preventing cutoff
  },
  // Question styling
  questionContainer: {
    flex: 1,
    paddingTop: theme.spacing.md,
  },
  questionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.text,
    lineHeight: 34,
    marginBottom: theme.spacing.sm,
  },
  questionSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xl,
  },
  optionsScrollContainer: {
    marginTop: theme.spacing.sm,
  },
  // Footer
  footer: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 2,
    paddingTop: theme.spacing.md,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    backgroundColor: theme.colors.primary,
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: theme.borderRadius.lg, // Match app aesthetic
  },
  nextButtonDisabled: {
    backgroundColor: theme.colors.border,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    marginRight: 8,
  },
});

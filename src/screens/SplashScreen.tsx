import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useAppTheme } from '../context/AppContext';
import { useResponsive } from '../hooks/useResponsive';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CIRCLE_SIZE = Math.max(SCREEN_WIDTH, SCREEN_HEIGHT) * 3;

interface Props {
  onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: Props) => {
  const appTheme = useAppTheme();
  const { isTablet } = useResponsive();

  const quoteFontSize  = isTablet ? 30 : 22;
  const accentFontSize = isTablet ? 36 : 27;

  const anim1  = useRef(new Animated.Value(0)).current;
  const anim2  = useRef(new Animated.Value(0)).current;
  const anim3  = useRef(new Animated.Value(0)).current;
  const animBrand = useRef(new Animated.Value(0)).current;
  const animRipple = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const seq = Animated.sequence([
      Animated.delay(400),
      Animated.timing(anim1,     { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.delay(500),
      Animated.timing(anim2,     { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.delay(500),
      Animated.timing(anim3,     { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.delay(150),
      Animated.timing(animBrand, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.delay(2200),
      Animated.timing(animRipple, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0.22, 1, 0.36, 1),
        useNativeDriver: true,
      }),
    ]);

    seq.start();
    const timer = setTimeout(() => onFinish(), 8500);
    return () => { seq.stop(); clearTimeout(timer); };
  }, []);

  const rippleScale = animRipple.interpolate({
    inputRange: [0, 1],
    outputRange: [0.01, 1],
  });

  const primaryColor = appTheme.colors.primary;

  return (
    <View style={[styles.container, { backgroundColor: primaryColor }]}>
      <StatusBar barStyle="light-content" backgroundColor={primaryColor} />

      {/* Decorative quote glyph */}
      <Animated.View style={{ opacity: anim1, alignSelf: 'flex-start', marginLeft: SCREEN_WIDTH * 0.1, marginBottom: 8 }}>
        <Text style={styles.quoteDecor}>❝</Text>
      </Animated.View>

      {/* ── Each phrase: Animated.VIEW (opacity only) wrapping plain Text ──
          This is the critical fix: Text lays itself out freely, animation
          never constrains height, so wrapped lines are ALWAYS visible.       */}
      <View style={[styles.quoteBlock, { width: SCREEN_WIDTH - 60 }]}>

        {/* "Every great journey" */}
        <Animated.View style={[styles.lineWrap, { opacity: anim1 }]}>
          <Text style={[styles.lineLight, { fontSize: quoteFontSize }]}>
            Every great journey
          </Text>
        </Animated.View>

        {/* "begins with" */}
        <Animated.View style={[styles.lineWrap, { opacity: anim2 }]}>
          <Text style={[styles.lineLight, { fontSize: quoteFontSize }]}>
            begins with
          </Text>
        </Animated.View>

        {/* "a single step." */}
        <Animated.View style={[styles.lineWrap, { opacity: anim3, marginTop: 6 }]}>
          <Text style={[styles.lineBold, { fontSize: accentFontSize }]}>
            a single step.
          </Text>
        </Animated.View>

      </View>

      {/* Brand label */}
      <Animated.View style={{ opacity: animBrand }}>
        <Text style={styles.brandLabel}>— ZEMEN SCHOLAR</Text>
      </Animated.View>

      {/* ── Ripple: white circle expands from center ── */}
      <Animated.View
        pointerEvents="none"
        style={{
          position:     'absolute',
          width:        CIRCLE_SIZE,
          height:       CIRCLE_SIZE,
          borderRadius: CIRCLE_SIZE / 2,
          backgroundColor: appTheme.colors.background,
          transform: [{ scale: rippleScale }],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:     'center',
  },
  quoteDecor: {
    fontSize:  48,
    color:     'rgba(255,255,255,0.18)',
    lineHeight: 52,
  },
  quoteBlock: {
    alignItems: 'center',
    // NO overflow, NO height, NO lineHeight — Text controls its own bounds
  },
  lineWrap: {
    // overflow: 'visible' is RN default — explicitly stated for clarity
    overflow:  'visible',
    marginBottom: 4,
    alignSelf: 'stretch',
  },
  lineLight: {
    fontWeight: '300',
    fontStyle:  'italic',
    color:      'rgba(255,255,255,0.90)',
    textAlign:  'center',
    textShadowColor:  'rgba(255,255,255,0.2)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  lineBold: {
    fontWeight: '800',
    fontStyle:  'italic',
    color:      '#ffffff',
    textAlign:  'center',
    textShadowColor:  'rgba(255,255,255,0.25)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  brandLabel: {
    fontSize:   11,
    fontWeight: '600',
    color:      'rgba(255,255,255,0.38)',
    marginTop:   36,
    letterSpacing: 3,
  },
});

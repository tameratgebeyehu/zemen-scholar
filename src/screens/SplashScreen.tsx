import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image, Easing } from 'react-native';

import { GraduationCap } from 'lucide-react-native';
import { theme } from '../theme/theme';

interface Props {
  onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: Props) => {
  const logoScale = new Animated.Value(1.5); // Starts zoomed in
  const logoOpacity = new Animated.Value(0);
  const textOpacity = new Animated.Value(0);
  const textTranslateY = new Animated.Value(20);

  useEffect(() => {
    // Premium animation sequence
    Animated.sequence([
      // 1. Logo zooms out from center
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1500,
          easing: Easing.out(Easing.back(1.5)),
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      // 2. Text fades in slightly after
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ]).start();

    // Transition to main app
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.logoCard, 
        { 
          opacity: logoOpacity,
          transform: [{ scale: logoScale }]
        }
      ]}>
        <Image 
          source={require('../assets/white icon.png')} 
          style={styles.logo}
        />
      </Animated.View>

      <Animated.View style={{ 
        opacity: textOpacity, 
        transform: [{ translateY: textTranslateY }],
        alignItems: 'center' 
      }}>
        <Text style={styles.title}>Zemen Scholar</Text>
        <Text style={styles.subtitle}>Your path to studying abroad starts here</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Clean white background as in the latest user image
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCard: {
    width: 220,
    height: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    // Premium shadow for the card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    overflow: 'hidden',
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
    marginBottom: 8,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    letterSpacing: -0.2,
  },
});

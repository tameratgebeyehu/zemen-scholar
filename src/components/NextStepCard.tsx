import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ArrowRight, Sparkles } from 'lucide-react-native';
import { PremiumTouchable } from './common/PremiumTouchable';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { useResponsive } from '../hooks/useResponsive';

interface Props {
  title: string;
  actionText: string;
  onPress: () => void;
}

export const NextStepCard = ({ title, actionText, onPress }: Props) => {
  const theme = useAppTheme();
  const { isTablet } = useResponsive();

  return (
    <View style={[
      styles.container, 
      { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
      isTablet && { padding: 20, borderRadius: 20 }
    ]}>
      <View style={styles.header}>
        <Sparkles stroke={theme.colors.warning} size={16} fill={theme.colors.warning + '20'} />
        <Text style={[styles.headerText, { color: theme.colors.warning }]}>RECOMMENDED NEXT STEP</Text>
      </View>
      
      <Text style={[styles.title, { color: theme.colors.text }, isTablet && { fontSize: 18 }]}>{title}</Text>
      
      <PremiumTouchable 
        style={[styles.button, { backgroundColor: theme.colors.primary }]} 
        onPress={onPress}
        elevation={2}
      >
        <Text style={styles.buttonText}>{actionText}</Text>
        <ArrowRight color="#fff" size={16} />
      </PremiumTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  headerText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
    lineHeight: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start', // Don't span full width if not needed
    borderRadius: 100, 
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});

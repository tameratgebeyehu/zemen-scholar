import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ArrowRight, Sparkles } from 'lucide-react-native';
import { PremiumTouchable } from './common/PremiumTouchable';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';

interface Props {
  title: string;
  actionText: string;
  onPress: () => void;
}

export const NextStepCard = ({ title, actionText, onPress }: Props) => {
  const theme = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
      <View style={styles.header}>
        <Sparkles stroke={theme.colors.warning} size={18} fill={theme.colors.warning + '20'} />
        <Text style={[styles.headerText, { color: theme.colors.warning }]}>RECOMMENDED NEXT STEP</Text>
      </View>
      
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      
      <PremiumTouchable 
        style={[styles.button, { backgroundColor: theme.colors.primary }]} 
        onPress={onPress}
        elevation={4}
      >
        <Text style={styles.buttonText}>{actionText}</Text>
        <ArrowRight color="#fff" size={18} />
      </PremiumTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  headerText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    lineHeight: 28,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 100, // Pill shape
    gap: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

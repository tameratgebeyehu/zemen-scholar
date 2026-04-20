import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';
import { theme } from '../../theme/theme';

interface Props {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export const OnboardingOption = ({ label, isSelected, onPress }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isSelected && styles.containerSelected]} 
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={[styles.label, isSelected && styles.labelSelected]}>
        {label}
      </Text>
      {isSelected && (
        <CheckCircle2 stroke={theme.colors.primary} size={24} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.light,
  },
  containerSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: '#eff6ff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  labelSelected: {
    color: theme.colors.primary,
  },
});

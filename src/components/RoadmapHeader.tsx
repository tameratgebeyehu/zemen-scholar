import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { theme } from '../theme/theme';

export const RoadmapHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.title}>Your Roadmap</Text>
        <Text style={styles.subtitle}>Step-by-step guide to study abroad</Text>
      </View>
      
      <TouchableOpacity style={styles.dropdownPicker}>
        <Text style={styles.countryLabel}>USA 🇺🇸</Text>
        <ChevronDown stroke={theme.colors.text} size={16} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: theme.spacing.md,
    paddingTop: 60,
    paddingBottom: theme.spacing.md,
  },
  textSection: {
    flex: 1,
    paddingRight: theme.spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  dropdownPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  countryLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginRight: 6,
  },
});

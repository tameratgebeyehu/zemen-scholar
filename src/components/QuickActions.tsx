import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FileText, GraduationCap, Map, ClipboardList } from 'lucide-react-native';
import { theme } from '../theme/theme';

const actions = [
  { id: 1, title: 'Documents', icon: FileText, color: '#3B82F6' },
  { id: 2, title: 'Tests', icon: ClipboardList, color: '#F59E0B' },
  { id: 3, title: 'Universities', icon: GraduationCap, color: '#10B981' },
  { id: 4, title: 'Visa Guide', icon: Map, color: '#8B5CF6' },
];

export const QuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.grid}>
        {actions.map((action) => (
          <TouchableOpacity key={action.id} style={styles.actionCard} activeOpacity={0.7}>
            <View style={[styles.iconWrapper, { backgroundColor: `${action.color}15` }]}>
              <action.icon stroke={action.color} size={24} />
            </View>
            <Text style={styles.actionLabel}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    ...theme.shadows.light,
  },
  iconWrapper: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
  },
});

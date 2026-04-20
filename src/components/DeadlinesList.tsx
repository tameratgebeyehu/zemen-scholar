import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { theme } from '../theme/theme';

const deadlines = [
  { id: 1, title: 'IELTS Registration', date: 'Oct 24, 2024', urgent: true },
  { id: 2, title: 'Stanford Early Action', date: 'Nov 01, 2024', urgent: false },
];

export const DeadlinesList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
      <Card>
        {deadlines.map((item, index) => (
          <View key={item.id} style={[styles.deadlineRow, index > 0 && { marginTop: 16 }]}>
            <View>
              <Text style={styles.deadlineTitle}>{item.title}</Text>
              <Text style={styles.deadlineDate}>{item.date}</Text>
            </View>
            {item.urgent && (
              <View style={[styles.badge, styles.urgentBadge]}>
                <Text style={styles.badgeText}>Urgent</Text>
              </View>
            )}
          </View>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  deadlineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deadlineTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  deadlineDate: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  urgentBadge: {
    backgroundColor: '#FEE2E2',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.error,
  },
});

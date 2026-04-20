import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight, FileText } from 'lucide-react-native';
import { theme } from '../../theme/theme';
import { StepStatus } from '../../storage/storageService';
import { Card } from '../Card';

interface Props {
  title: string;
  description: string;
  status: StepStatus;
  onPress: () => void;
}

export const DocumentGuideCard = ({ title, description, status, onPress }: Props) => {
  const isCompleted = status === 'verified'; // We'll map 'prepared' to 'verified' label logic or 'completed' status logic

  const getStatusColor = () => {
    if (status === 'verified') return theme.colors.success;
    if (status === 'uploaded') return theme.colors.warning;
    return theme.colors.textSecondary;
  };

  const getStatusLabel = () => {
    if (status === 'verified') return 'Prepared';
    if (status === 'uploaded') return 'In Progress';
    return 'Not Started';
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Card style={[styles.card, status === 'verified' && styles.cardCompleted]}>
        <View style={styles.iconContainer}>
          <FileText stroke={theme.colors.primary} size={24} />
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.badge, { backgroundColor: `${getStatusColor()}15` }]}>
              <Text style={[styles.badgeText, { color: getStatusColor() }]}>{getStatusLabel()}</Text>
            </View>
          </View>
          <Text style={styles.description} numberOfLines={1}>{description}</Text>
        </View>

        <ChevronRight stroke={theme.colors.textSecondary} size={20} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  cardCompleted: {
    borderColor: theme.colors.success,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: theme.borderRadius.md,
    backgroundColor: `${theme.colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    paddingRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.sm,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
});

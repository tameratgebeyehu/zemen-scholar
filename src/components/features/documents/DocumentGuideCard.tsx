import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight, FileText, CheckCircle2 } from 'lucide-react-native';
import { useAppTheme } from '../../../context/AppContext';
import { theme as baseTheme } from '../../../theme/theme';
import { StepStatus } from '../../../services/storageService';
import { Card } from '../../common/Card';

interface Props {
  title: string;
  description: string;
  status: StepStatus;
  onPress: () => void;
}

export const DocumentGuideCard = ({ title, description, status, onPress }: Props) => {
  const theme = useAppTheme();
  const isVerified = status === 'verified';

  const getStatusColor = () => {
    if (isVerified) return theme.colors.success;
    return theme.colors.textSecondary;
  };

  const getStatusLabel = () => {
    if (isVerified) return 'Prepared';
    return 'Missing';
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Card style={[
        styles.card, 
        { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
        isVerified && { borderColor: theme.colors.success }
      ]}>
        <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary + '10' }]}>
          <FileText color={theme.colors.primary} size={22} />
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{title}</Text>
            <View style={[styles.badge, { backgroundColor: getStatusColor() + '15' }]}>
              {isVerified && <CheckCircle2 color={theme.colors.success} size={10} style={{ marginRight: 4 }} />}
              <Text style={[styles.badgeText, { color: getStatusColor() }]}>{getStatusLabel()}</Text>
            </View>
          </View>
          <Text style={[styles.description, { color: theme.colors.textSecondary }]} numberOfLines={1}>
            {description}
          </Text>
        </View>

        <ChevronRight color={theme.colors.border} size={20} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    ...baseTheme.shadows.light,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 13,
    fontWeight: '500',
  },
});

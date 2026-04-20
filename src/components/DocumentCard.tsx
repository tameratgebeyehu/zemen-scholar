import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FileText, CheckCircle2, Circle, AlertCircle, ChevronRight } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { AppDocument, DocumentStatus } from '../types/documents';
import { Card } from './Card';

interface Props {
  document: AppDocument;
  onPress: () => void;
}

export const DocumentCard = ({ document, onPress }: Props) => {
  const getStatusColor = (status: DocumentStatus) => {
    switch (status) {
      case 'verified':
        return theme.colors.success;
      case 'uploaded':
        return theme.colors.warning;
      case 'missing':
      default:
        return theme.colors.textSecondary;
    }
  };

  const getStatusIcon = (status: DocumentStatus, color: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle2 stroke={color} size={16} />;
      case 'uploaded':
        return <AlertCircle stroke={color} size={16} />;
      case 'missing':
      default:
        return <Circle stroke={color} size={16} />;
    }
  };

  const getStatusLabel = (status: DocumentStatus) => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'uploaded':
        return 'Uploaded (Pending)';
      case 'missing':
      default:
        return 'Missing';
    }
  };

  const statusColor = getStatusColor(document.status);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Card style={styles.card}>
        <View style={styles.iconContainer}>
          <FileText stroke={theme.colors.primary} size={28} />
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{document.title}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {document.description}
          </Text>
          
          <View style={[styles.statusBadge, { backgroundColor: `${statusColor}15` }]}>
            {getStatusIcon(document.status, statusColor)}
            <Text style={[styles.statusText, { color: statusColor }]}>
              {getStatusLabel(document.status)}
            </Text>
          </View>
        </View>

        <View style={styles.actionContainer}>
          <ChevronRight stroke={theme.colors.textSecondary} size={20} />
        </View>
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
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.md,
    backgroundColor: `${theme.colors.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.sm,
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  actionContainer: {
    marginLeft: theme.spacing.sm,
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Square, CheckCircle, Upload, ChevronRight } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { SubTaskItem as SubTaskItemType } from '../types/roadmap';

interface Props {
  subTask: SubTaskItemType;
  onPress?: () => void;
}

export const SubTaskItem = ({ subTask, onPress }: Props) => {
  const isCompleted = subTask.status === 'completed';

  const renderIcon = () => {
    if (isCompleted) {
      return <CheckCircle stroke={theme.colors.success} size={20} /> ;
    }
    return <View style={styles.emptyCircle} />;
  };

  const renderAction = () => {
    if (subTask.type === 'action') {
      return (
        <TouchableOpacity style={styles.actionButton} onPress={onPress}>
          <Text style={styles.actionButtonText}>{subTask.actionLabel || 'Start'}</Text>
          <ChevronRight size={16} stroke={theme.colors.primary} />
        </TouchableOpacity>
      );
    }
    if (subTask.type === 'checklist' && !isCompleted) {
      return (
        <TouchableOpacity style={styles.uploadButton} onPress={onPress}>
          <Upload size={16} stroke={theme.colors.textSecondary} />
          <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {renderIcon()}
        <Text style={[styles.title, isCompleted && styles.completedTitle]}>
          {subTask.title}
        </Text>
      </View>
      {renderAction()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  emptyCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.border,
  },
  title: {
    fontSize: 15,
    color: theme.colors.text,
    marginLeft: 12,
    fontWeight: '500',
  },
  completedTitle: {
    color: theme.colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: `${theme.colors.primary}15`,
    borderRadius: theme.borderRadius.full,
  },
  actionButtonText: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '600',
    marginRight: 4,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.full,
  },
  uploadText: {
    color: theme.colors.textSecondary,
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 6,
  },
});

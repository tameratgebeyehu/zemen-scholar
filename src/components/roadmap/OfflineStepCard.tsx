import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle2, CircleDot, CircleDashed } from 'lucide-react-native';
import { theme } from '../../theme/theme';
import { StepStatus } from '../../storage/storageService';

interface RoadmapStepDef {
  id: string;
  title: string;
  description: string;
  checklists: string[];
}

interface Props {
  step: RoadmapStepDef;
  status: StepStatus;
  onToggleStatus: (id: string, newStatus: StepStatus) => void;
}

export const OfflineStepCard = ({ step, status, onToggleStatus }: Props) => {
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in_progress';
  const isNotStarted = status === 'not_started';

  const getStatusColor = () => {
    if (isCompleted) return theme.colors.success;
    if (isInProgress) return theme.colors.warning;
    return theme.colors.textSecondary;
  };

  const getStatusIcon = () => {
    if (isCompleted) return <CheckCircle2 stroke={theme.colors.success} size={24} />;
    if (isInProgress) return <CircleDot stroke={theme.colors.warning} size={24} />;
    return <CircleDashed stroke={theme.colors.textSecondary} size={24} />;
  };

  const cycleStatus = () => {
    if (isNotStarted) onToggleStatus(step.id, 'in_progress');
    else if (isInProgress) onToggleStatus(step.id, 'completed');
    else if (isCompleted) onToggleStatus(step.id, 'not_started'); // Loop back to reset
  };

  // Explicit Mark as Done button logic
  const handleMarkAsDone = () => {
    onToggleStatus(step.id, 'completed');
  };

  return (
    <View style={[styles.container, isCompleted && styles.containerCompleted]}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          {getStatusIcon()}
          <Text style={[styles.title, isCompleted && styles.textCompleted]}>{step.title}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor()}15` }]}>
          <Text style={[styles.statusText, { color: getStatusColor() }]}>
            {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Not Started'}
          </Text>
        </View>
      </View>

      <Text style={styles.description}>{step.description}</Text>

      {step.checklists && step.checklists.length > 0 && (
        <View style={styles.checklistContainer}>
          {step.checklists.map((item, idx) => (
            <View key={idx} style={styles.checklistItem}>
              <View style={styles.bullet} />
              <Text style={styles.checklistText}>{item}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Action Button */}
      {!isCompleted && (
        <View style={styles.actions}>
          {isNotStarted && (
            <TouchableOpacity 
              style={[styles.actionButton, styles.startBtn]} 
              activeOpacity={0.7}
              onPress={() => onToggleStatus(step.id, 'in_progress')}
            >
              <Text style={styles.startBtnText}>Start Step</Text>
            </TouchableOpacity>
          )}

          {isInProgress && (
            <TouchableOpacity 
              style={[styles.actionButton, styles.doneBtn]} 
              activeOpacity={0.7}
              onPress={handleMarkAsDone}
            >
              <View style={{ marginRight: 6 }}>
                <CheckCircle2 color="#fff" size={18} />
              </View>
              <Text style={styles.doneBtnText}>Mark as Done</Text>
            </TouchableOpacity>

          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadows.light,
  },
  containerCompleted: {
    borderColor: theme.colors.success,
    backgroundColor: '#ecfdf5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginLeft: 8,
    flexShrink: 1,
  },
  textCompleted: {
    color: theme.colors.success,
    textDecorationLine: 'line-through',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.sm,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
    lineHeight: 20,
    paddingLeft: 32, // align with title text
  },
  checklistContainer: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    marginLeft: 32,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    marginTop: 6,
    marginRight: 8,
  },
  checklistText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 32,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  startBtn: {
    backgroundColor: `${theme.colors.primary}15`,
  },
  startBtnText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  doneBtn: {
    backgroundColor: theme.colors.success,
  },
  doneBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

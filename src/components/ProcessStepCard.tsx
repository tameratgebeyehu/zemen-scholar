import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ChevronDown, ChevronUp, CheckCircle2, CircleDot, CircleDashed, Lightbulb, AlertTriangle } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { StepStatus } from '../storage/storageService';
import { Card } from './Card';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface OfflineStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  checklist: string[];
  tips?: string[];
  mistakes?: string[];
}

interface Props {
  step: OfflineStep;
  status: StepStatus;
  isLast?: boolean;
  onUpdateStatus: (id: string, newStatus: StepStatus) => void;
}

export const ProcessStepCard = ({ step, status, isLast = false, onUpdateStatus }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const isCompleted = status === 'completed';
  const isInProgress = status === 'in_progress';

  const getStatusColor = () => {
    if (isCompleted) return theme.colors.success;
    if (isInProgress) return theme.colors.warning;
    return theme.colors.textSecondary;
  };

  const renderStatusIcon = () => {
    if (isCompleted) return <CheckCircle2 stroke={theme.colors.success} size={24} />;
    if (isInProgress) return <CircleDot stroke={theme.colors.warning} size={24} />;
    return <CircleDashed stroke={theme.colors.textSecondary} size={24} />;
  };

  return (
    <View style={styles.container}>
      {/* Timeline Line */}
      {!isLast && (
        <View style={styles.timelineLineWrapper}>
          <View style={[styles.timelineLine, isCompleted && { backgroundColor: theme.colors.success }]} />
        </View>
      )}

      <View style={styles.nodeIconWrapper}>
        {renderStatusIcon()}
      </View>

      <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={toggleExpand}
        style={styles.cardWrapper}
      >
        <Card style={[styles.card, isCompleted && styles.cardCompleted, isInProgress && styles.cardInProgress]}>
          <View style={styles.cardHeader}>
            <View style={styles.headerText}>
              <Text style={[styles.title, isCompleted && styles.textCompleted]}>
                Step {step.stepNumber}: {step.title}
              </Text>
              {!isExpanded && (
                <Text style={styles.shortDesc} numberOfLines={1}>{step.description}</Text>
              )}
            </View>
            {isExpanded ? (
              <ChevronUp stroke={theme.colors.textSecondary} size={20} />
            ) : (
              <ChevronDown stroke={theme.colors.textSecondary} size={20} />
            )}
          </View>

          {isExpanded && (
            <View style={styles.expandedContent}>
              <Text style={styles.fullDesc}>{step.description}</Text>

              {/* Checklist */}
              <View style={styles.checklistContainer}>
                {step.checklist.map((item, idx) => (
                  <View key={idx} style={styles.checkItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.checkText}>{item}</Text>
                  </View>
                ))}
              </View>

              {/* Tips & Mistakes Row */}
              {step.tips && step.tips.length > 0 && (
                <View style={[styles.infoBlock, styles.tipsBlock]}>
                  <View style={styles.infoTitleRow}>
                    <Lightbulb stroke={theme.colors.primary} size={16} />
                    <Text style={styles.tipsTitle}>Tips</Text>
                  </View>
                  {step.tips.map((tip, idx) => (
                    <Text key={idx} style={styles.infoText}>• {tip}</Text>
                  ))}
                </View>
              )}

              {step.mistakes && step.mistakes.length > 0 && (
                <View style={[styles.infoBlock, styles.mistakesBlock]}>
                  <View style={styles.infoTitleRow}>
                    <AlertTriangle stroke={theme.colors.error} size={16} />
                    <Text style={styles.mistakesTitle}>Common Mistakes</Text>
                  </View>
                  {step.mistakes.map((mistake, idx) => (
                    <Text key={idx} style={styles.infoText}>• {mistake}</Text>
                  ))}
                </View>
              )}

              {/* Action Button */}
              <TouchableOpacity 
                style={[styles.actionBtn, isCompleted && styles.actionBtnReset]}
                activeOpacity={0.8}
                onPress={() => {
                  if (status === 'completed') onUpdateStatus(step.id, 'not_started');
                  else if (status === 'in_progress') onUpdateStatus(step.id, 'completed');
                  else onUpdateStatus(step.id, 'in_progress');
                }}
              >
                <Text style={[styles.actionBtnText, isCompleted && styles.actionBtnTextReset]}>
                  {isCompleted ? 'Reset Step' : isInProgress ? 'Mark as Done' : 'Start Step'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    position: 'relative',
  },
  timelineLineWrapper: {
    position: 'absolute',
    left: 23,
    top: 40,
    bottom: -theme.spacing.md - 10,
    width: 2,
    zIndex: 0,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: theme.colors.border,
  },
  nodeIconWrapper: {
    width: 48,
    height: 48,
    alignItems: 'center',
    paddingTop: 10,
    zIndex: 1,
  },
  cardWrapper: {
    flex: 1,
    marginLeft: 4,
  },
  card: {
    padding: theme.spacing.md,
  },
  cardCompleted: {
    borderColor: theme.colors.success,
    backgroundColor: '#ecfdf5',
  },
  cardInProgress: {
    borderColor: theme.colors.warning,
    backgroundColor: '#fffbeb',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  textCompleted: {
    color: theme.colors.success,
    textDecorationLine: 'line-through',
  },
  shortDesc: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  expandedContent: {
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  fullDesc: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  checklistContainer: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    marginTop: 6,
    marginRight: 10,
  },
  checkText: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.text,
  },
  infoBlock: {
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  tipsBlock: {
    backgroundColor: `${theme.colors.primary}10`,
  },
  mistakesBlock: {
    backgroundColor: `${theme.colors.error}10`,
  },
  infoTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  mistakesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.error,
  },
  infoText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  actionBtn: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  actionBtnReset: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  actionBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  actionBtnTextReset: {
    color: theme.colors.textSecondary,
  },
});

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import { ChevronDown, ChevronUp, Lock, CheckCircle2, CircleDot } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { RoadmapStep } from '../types/roadmap';
import { SubTaskItem } from './SubTaskItem';
import { Card } from './Card';

// Enable layout animation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {
  step: RoadmapStep;
  isLast?: boolean;
}

export const RoadmapStepCard = ({ step, isLast = false }: Props) => {
  // Default to expanded if 'active'
  const [isExpanded, setIsExpanded] = useState(step.status === 'active');

  const toggleExpand = () => {
    if (step.status === 'locked') return;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const isLocked = step.status === 'locked';
  const isCompleted = step.status === 'completed';
  const isActive = step.status === 'active';

  const renderStatusIcon = () => {
    if (isLocked) return <Lock stroke={theme.colors.textSecondary} size={24} />;
    if (isCompleted) return <CheckCircle2 stroke={theme.colors.success} size={24} />;
    return <CircleDot stroke={theme.colors.primary} size={24} />;
  };

  return (
    <View style={styles.container}>
      {/* Vertical Timeline Line */}
      {!isLast && (
        <View style={styles.timelineLineWrapper}>
          <View style={[styles.timelineLine, isCompleted && { backgroundColor: theme.colors.success }]} />
        </View>
      )}

      {/* Node Content */}
      <View style={styles.contentWrapper}>
        <View style={styles.nodeIconWrapper}>
          {renderStatusIcon()}
        </View>

        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={toggleExpand}
          style={styles.cardContainer}
          disabled={isLocked}
        >
          <Card style={[styles.card, isLocked ? styles.cardLocked : undefined, isActive ? styles.cardActive : undefined]}>
            <View style={styles.cardHeader}>
              <View style={styles.headerText}>
                <Text style={[styles.title, isLocked && styles.textLocked]}>
                  {step.title}
                </Text>
                {(!isExpanded || !step.subTasks?.length) && (
                  <Text style={styles.description} numberOfLines={1}>
                    {step.description}
                  </Text>
                )}
              </View>
              
              {!isLocked && (
                <View style={styles.expandIcon}>
                  {isExpanded ? (
                    <ChevronUp stroke={theme.colors.textSecondary} size={20} />
                  ) : (
                    <ChevronDown stroke={theme.colors.textSecondary} size={20} />
                  )}
                </View>
              )}
            </View>

            {/* Expanded Content */}
            {isExpanded && !isLocked && (
              <View style={styles.expandedContent}>
                <Text style={styles.fullDescription}>{step.description}</Text>
                
                {step.subTasks && step.subTasks.length > 0 && (
                  <View style={styles.subtasksContainer}>
                    {step.subTasks.map((subTask) => (
                      <SubTaskItem key={subTask.id} subTask={subTask} />
                    ))}
                  </View>
                )}

                {step.actionLabel && (
                  <TouchableOpacity style={styles.mainActionButton}>
                    <Text style={styles.mainActionText}>{step.actionLabel}</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </Card>
        </TouchableOpacity>
      </View>
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
    left: 24,
    top: 36,
    bottom: -theme.spacing.md - 12,
    width: 2,
    alignItems: 'center',
    zIndex: 0,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: theme.colors.border,
  },
  contentWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  nodeIconWrapper: {
    width: 48,
    height: 48,
    alignItems: 'center',
    paddingTop: theme.spacing.md, // Align with card title vertically
    zIndex: 1,
  },
  cardContainer: {
    flex: 1,
    marginLeft: 4,
  },
  card: {
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  cardLocked: {
    backgroundColor: theme.colors.background,
    opacity: 0.7,
    elevation: 0,
    shadowOpacity: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardActive: {
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    paddingRight: theme.spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  textLocked: {
    color: theme.colors.textSecondary,
  },
  description: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  expandIcon: {
    padding: 4,
  },
  expandedContent: {
    marginTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.md,
  },
  fullDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
    lineHeight: 20,
  },
  subtasksContainer: {
    marginBottom: theme.spacing.md,
  },
  mainActionButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  mainActionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

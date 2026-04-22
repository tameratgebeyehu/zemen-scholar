import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { PremiumTouchable } from '../../common/PremiumTouchable';
import { CheckCircle2, CircleDot, CircleDashed, ChevronDown, ChevronUp } from 'lucide-react-native';
import { useAppTheme } from '../../../context/AppContext';
import { theme as baseTheme } from '../../../theme/theme';
import { StepStatus } from '../../../services/storageService';
import { RoadmapStep } from '../../../types';
import { useState } from 'react';

interface Props {
  step: RoadmapStep;
  status: StepStatus;
  onToggleStatus: (id: string, newStatus: StepStatus) => void;
  isFirst: boolean;
  isLast: boolean;
  isExpanded: boolean;
  onExpand: () => void;
}

export const OfflineStepCard = ({ step, status, onToggleStatus, isFirst, isLast, isExpanded, onExpand }: Props) => {
  const theme = useAppTheme();
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in_progress';
  const isNotStarted = status === 'not_started';

  const getStatusColor = () => {
    if (isCompleted) return theme.colors.success;
    if (isInProgress) return theme.colors.primary;
    return theme.colors.border;
  };

  return (
    <View style={styles.outerContainer}>
      {/* Left Timeline Path */}
      <View style={styles.timelineColumn}>
        <View style={[
          styles.line, 
          { backgroundColor: isCompleted ? theme.colors.success : theme.colors.border },
          isFirst && { opacity: 0 } 
        ]} />
        <View style={[
          styles.node, 
          { borderColor: getStatusColor(), backgroundColor: theme.colors.background },
          isCompleted && { backgroundColor: theme.colors.success }
        ]}>
          {isCompleted ? <CheckCircle2 color="#FFF" size={14} /> : 
           isInProgress ? <View style={[styles.activeDot, { backgroundColor: theme.colors.primary }]} /> : 
           null}
        </View>
        <View style={[
          styles.line, 
          { backgroundColor: isCompleted ? theme.colors.success : theme.colors.border },
          isLast && { opacity: 0 }
        ]} />
      </View>

      {/* Right Content Card */}
      <View style={[
        styles.card, 
        { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
        isInProgress && { borderColor: theme.colors.primary, borderWidth: 2 }
      ]}>
        <TouchableOpacity 
          style={[styles.cardHeader, isExpanded && { marginBottom: 12 }]}
          onPress={onExpand}
          activeOpacity={0.7}
        >
          <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{step.title}</Text>
          <View style={styles.headerRight}>
            <View style={[styles.statusTag, { backgroundColor: getStatusColor() + '15' }]}>
              <Text style={[styles.statusTagText, { color: getStatusColor() }]}>
                {status.replace('_', ' ')}
              </Text>
            </View>
            <ChevronDown 
              color={theme.colors.textSecondary} 
              size={18} 
              style={{ transform: [{ rotate: isExpanded ? '180deg' : '0deg' }] }}
            />
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <>
            <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
              {step.description}
            </Text>

            {step.checklists && step.checklists.length > 0 && (
              <View style={styles.checklistContainer}>
                {step.checklists.map((item, idx) => (
                  <View key={idx} style={styles.checklistItem}>
                    <CircleDot color={theme.colors.primary} size={14} style={{ marginTop: 3 }} />
                    <Text style={[styles.checklistText, { color: theme.colors.textSecondary }]}>{item}</Text>
                  </View>
                ))}
              </View>
            )}

            {(isInProgress || isNotStarted) && (
              <PremiumTouchable 
                style={[
                  styles.actionButton, 
                  { backgroundColor: isInProgress ? theme.colors.success : theme.colors.primary }
                ]}
                onPress={() => onToggleStatus(step.id, isInProgress ? 'completed' : 'in_progress')}
              >
                <Text style={styles.actionButtonText}>
                  {isNotStarted ? 'Start Step' : 'Mark as Done'}
                </Text>
              </PremiumTouchable>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  timelineColumn: {
    width: 40,
    alignItems: 'center',
  },
  line: {
    width: 3,
    flex: 1,
  },
  node: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    flex: 1,
    marginRight: 8,
  },
  statusTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusTagText: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    marginBottom: 16,
  },
  actionButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  checklistContainer: {
    marginTop: 4,
    marginBottom: 20,
    gap: 10,
  },
  checklistItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  checklistText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
  },
});

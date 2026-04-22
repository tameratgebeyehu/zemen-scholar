import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform } from 'react-native';
import { ChevronDown, ChevronUp, CheckCircle2, CircleDot, CircleDashed, Lightbulb, AlertTriangle, Check } from 'lucide-react-native';
import { useAppTheme } from '../../context/AppContext';
import { theme as baseTheme } from '../../theme/theme';
import { StepStatus } from '../../services/storageService';
import { OfflineStep } from '../../types';
import { Card } from '../common/Card';
import { PremiumTouchable } from '../common/PremiumTouchable';

// ProcessStepCard component logic follows...

interface Props {
  step: OfflineStep;
  status: StepStatus;
  isLast?: boolean;
  isExpanded: boolean;
  onExpand: () => void;
  onUpdateStatus: (id: string, newStatus: StepStatus) => void;
}

export const ProcessStepCard = ({ step, status, isLast = false, isExpanded, onExpand, onUpdateStatus }: Props) => {
  const theme = useAppTheme();

  const isCompleted = status === 'completed';
  const isInProgress = status === 'in_progress';

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
          step.stepNumber === 1 && { opacity: 0 } 
        ]} />
        <View style={[
          styles.node, 
          { borderColor: getStatusColor(), backgroundColor: theme.colors.background },
          isCompleted && { backgroundColor: theme.colors.success }
        ]}>
          {isCompleted ? <Check color="#FFF" size={14} /> : 
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
      <View style={{ flex: 1 }}>
        <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={onExpand}
          style={[
            styles.card, 
            { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
            isInProgress && { borderColor: theme.colors.primary, borderWidth: 2 }
          ]}
        >
          <View style={styles.cardHeader}>
            <View style={styles.headerText}>
              <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
                {step.stepNumber}. {step.title}
              </Text>
              {!isExpanded && (
                <Text style={[styles.shortDesc, { color: theme.colors.textSecondary }]} numberOfLines={1}>
                  {step.description}
                </Text>
              )}
            </View>
            {isExpanded ? (
              <ChevronUp color={theme.colors.textSecondary} size={20} />
            ) : (
              <ChevronDown color={theme.colors.textSecondary} size={20} />
            )}
          </View>

          {isExpanded && (
            <View style={[styles.expandedContent, { borderTopColor: theme.colors.border }]}>
              <Text style={[styles.fullDesc, { color: theme.colors.textSecondary }]}>{step.description}</Text>

              <View style={[styles.checklistContainer, { backgroundColor: theme.colors.background }]}>
                {step.checklist.map((item, idx) => (
                  <View key={idx} style={styles.checkItem}>
                    <View style={[styles.bullet, { backgroundColor: theme.colors.primary }]} />
                    <Text style={[styles.checkText, { color: theme.colors.text }]}>{item}</Text>
                  </View>
                ))}
              </View>

              {step.tips && step.tips.length > 0 && (
                <View style={[styles.infoBlock, { backgroundColor: theme.colors.primary + '05', borderColor: theme.colors.primary + '20' }]}>
                  <View style={styles.infoTitleRow}>
                    <Lightbulb color={theme.colors.primary} size={16} />
                    <Text style={[styles.tipsTitle, { color: theme.colors.primary }]}>Pro Tips</Text>
                  </View>
                  {step.tips.map((tip, idx) => (
                    <Text key={idx} style={[styles.infoText, { color: theme.colors.textSecondary }]}>• {tip}</Text>
                  ))}
                </View>
              )}

              {step.mistakes && step.mistakes.length > 0 && (
                <View style={[styles.infoBlock, { backgroundColor: theme.colors.error + '05', borderColor: theme.colors.error + '20' }]}>
                  <View style={styles.infoTitleRow}>
                    <AlertTriangle color={theme.colors.error} size={16} />
                    <Text style={[styles.mistakesTitle, { color: theme.colors.error }]}>Avoid These</Text>
                  </View>
                  {step.mistakes.map((mistake, idx) => (
                    <Text key={idx} style={[styles.infoText, { color: theme.colors.textSecondary }]}>• {mistake}</Text>
                  ))}
                </View>
              )}

              <PremiumTouchable 
                style={[
                  styles.actionBtn, 
                  { backgroundColor: isCompleted ? 'transparent' : theme.colors.primary },
                  isCompleted && { borderWidth: 1, borderColor: theme.colors.border }
                ]}
                onPress={() => {
                  if (status === 'completed') onUpdateStatus(step.id, 'not_started');
                  else if (status === 'in_progress') onUpdateStatus(step.id, 'completed');
                  else onUpdateStatus(step.id, 'in_progress');
                }}
                elevation={isCompleted ? 0 : 3}
              >
                <Text style={[
                  styles.actionBtnText, 
                  { color: isCompleted ? theme.colors.textSecondary : '#FFF' }
                ]}>
                  {isCompleted ? 'Reset Step' : isInProgress ? 'Mark as Done' : 'Start Step'}
                </Text>
              </PremiumTouchable>
            </View>
          )}
        </TouchableOpacity>
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
  headerText: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  shortDesc: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: '500',
  },
  expandedContent: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
  },
  fullDesc: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    marginBottom: 16,
  },
  checklistContainer: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  checkText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  infoBlock: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  infoTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  tipsTitle: {
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  mistakesTitle: {
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    marginBottom: 4,
  },
  actionBtn: {
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: '800',
  },
});

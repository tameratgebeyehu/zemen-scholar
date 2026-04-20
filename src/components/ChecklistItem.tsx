import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckCircle2, Square } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { ProcessChecklistItem } from '../types/visa';

interface Props {
  item: ProcessChecklistItem;
  onToggle: (id: string, newStatus: boolean) => void;
  disabled?: boolean;
}

export const ChecklistItem = ({ item, onToggle, disabled = false }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.container, disabled && styles.disabled]} 
      activeOpacity={0.7}
      disabled={disabled}
      onPress={() => onToggle(item.id, !item.isCompleted)}
    >
      <View style={styles.iconContainer}>
        {item.isCompleted ? (
          <CheckCircle2 stroke={theme.colors.success} size={22} />
        ) : (
          <Square stroke={theme.colors.border} size={22} />
        )}
      </View>
      <Text style={[styles.text, item.isCompleted && styles.textCompleted]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: theme.colors.text,
    lineHeight: 20,
  },
  textCompleted: {
    color: theme.colors.textSecondary,
    textDecorationLine: 'line-through',
  },
});

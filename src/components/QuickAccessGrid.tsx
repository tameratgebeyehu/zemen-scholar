import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Compass, ClipboardCheck, School, IdCard, Star, Book } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';

interface Props {
  onPressItem: (route: string) => void;
}

export const QuickAccessGrid = ({ onPressItem }: Props) => {
  const theme = useAppTheme();

  return (
    <View style={styles.gridContainer}>
      <TouchableOpacity style={[styles.gridItem, { backgroundColor: theme.colors.card }]} activeOpacity={0.7} onPress={() => onPressItem('roadmap')}>
        <View style={[styles.iconWrapper, { backgroundColor: `${theme.colors.primary}10` }]}>
          <Compass color={theme.colors.primary} size={28} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }]}>Roadmap</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.gridItem, { backgroundColor: theme.colors.card }]} activeOpacity={0.7} onPress={() => onPressItem('documents')}>
        <View style={[styles.iconWrapper, { backgroundColor: `${theme.colors.warning}10` }]}>
          <ClipboardCheck color={theme.colors.warning} size={28} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }]}>Documents</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.gridItem, { backgroundColor: theme.colors.card }]} activeOpacity={0.7} onPress={() => onPressItem('universities')}>
        <View style={[styles.iconWrapper, { backgroundColor: `${theme.colors.success}10` }]}>
          <School color={theme.colors.success} size={28} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }]}>Universities</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.gridItem, { backgroundColor: theme.colors.card }]} activeOpacity={0.7} onPress={() => onPressItem('visa')}>
        <View style={[styles.iconWrapper, { backgroundColor: `#8b5cf610` }]}>
          <IdCard color="#8b5cf6" size={28} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }]}>Visa Guide</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.gridItem, { backgroundColor: theme.colors.card }]} activeOpacity={0.7} onPress={() => onPressItem('extracurricular')}>
        <View style={[styles.iconWrapper, { backgroundColor: `${theme.colors.info}10` }]}>
          <Star color={theme.colors.info} size={28} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }]}>Activities</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.gridItem, { backgroundColor: theme.colors.card }]} activeOpacity={0.7} onPress={() => onPressItem('words_to_know')}>
        <View style={[styles.iconWrapper, { backgroundColor: `#ec489910` }]}>
          <Book color="#ec4899" size={28} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }]}>Glossary</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  gridItem: {
    width: '48%',
    aspectRatio: 1,
    padding: 20,
    borderRadius: 24,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridText: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginTop: 12,
  },
});

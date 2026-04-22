import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Compass, ClipboardCheck, School, IdCard, Star, Book } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { useResponsive } from '../hooks/useResponsive';

interface Props {
  onPressItem: (route: string) => void;
}

export const QuickAccessGrid = ({ onPressItem }: Props) => {
  const theme = useAppTheme();
  const { isTablet } = useResponsive();

  const itemWidth = isTablet ? '31.5%' : '48.5%';
  const iconSize = isTablet ? 26 : 22;
  const padding = isTablet ? 18 : 12;

  return (
    <View style={styles.gridContainer}>
      <TouchableOpacity 
        style={[
          styles.gridItem, 
          { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: itemWidth, padding }
        ]} 
        activeOpacity={0.7} 
        onPress={() => onPressItem('roadmap')}
      >
        <View style={[styles.iconWrapper, isTablet && styles.iconWrapperTablet, { backgroundColor: `${theme.colors.primary}10` }]}>
          <Compass color={theme.colors.primary} size={iconSize} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }, isTablet && { fontSize: 15 }]} numberOfLines={1}>Roadmap</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.gridItem, 
          { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: itemWidth, padding }
        ]} 
        activeOpacity={0.7} 
        onPress={() => onPressItem('documents')}
      >
        <View style={[styles.iconWrapper, isTablet && styles.iconWrapperTablet, { backgroundColor: `${theme.colors.warning}10` }]}>
          <ClipboardCheck color={theme.colors.warning} size={iconSize} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }, isTablet && { fontSize: 15 }]} numberOfLines={1}>Documents</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.gridItem, 
          { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: itemWidth, padding }
        ]} 
        activeOpacity={0.7} 
        onPress={() => onPressItem('universities')}
      >
        <View style={[styles.iconWrapper, isTablet && styles.iconWrapperTablet, { backgroundColor: `${theme.colors.success}10` }]}>
          <School color={theme.colors.success} size={iconSize} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }, isTablet && { fontSize: 15 }]} numberOfLines={1}>Universities</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.gridItem, 
          { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: itemWidth, padding }
        ]} 
        activeOpacity={0.7} 
        onPress={() => onPressItem('visa')}
      >
        <View style={[styles.iconWrapper, isTablet && styles.iconWrapperTablet, { backgroundColor: `#8b5cf610` }]}>
          <IdCard color="#8b5cf6" size={iconSize} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }, isTablet && { fontSize: 15 }]} numberOfLines={1}>Visa Guide</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.gridItem, 
          { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: itemWidth, padding }
        ]} 
        activeOpacity={0.7} 
        onPress={() => onPressItem('extracurricular')}
      >
        <View style={[styles.iconWrapper, isTablet && styles.iconWrapperTablet, { backgroundColor: `${theme.colors.info}10` }]}>
          <Star color={theme.colors.info} size={iconSize} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }, isTablet && { fontSize: 15 }]} numberOfLines={1}>Activities</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          styles.gridItem, 
          { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width: itemWidth, padding }
        ]} 
        activeOpacity={0.7} 
        onPress={() => onPressItem('words_to_know')}
      >
        <View style={[styles.iconWrapper, isTablet && styles.iconWrapperTablet, { backgroundColor: `#ec489910` }]}>
          <Book color="#ec4899" size={iconSize} />
        </View>
        <Text style={[styles.gridText, { color: theme.colors.text }, isTablet && { fontSize: 15 }]} numberOfLines={1}>Glossary</Text>
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
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  iconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconWrapperTablet: {
    width: 48,
    height: 48,
    borderRadius: 14,
    marginRight: 14,
  },
  gridText: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: -0.2,
    flex: 1,
  },
});

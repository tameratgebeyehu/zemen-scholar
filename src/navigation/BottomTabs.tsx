import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home, Map, FileText, Globe, Menu } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';

export type TabType = 'home' | 'roadmap' | 'documents' | 'visa' | 'more';

interface Props {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

export const BottomTabs = ({ activeTab, onTabPress }: Props) => {
  const theme = useAppTheme();
  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'roadmap', label: 'Roadmap', icon: Map },
    { id: 'documents', label: 'Docs', icon: FileText },
    { id: 'visa', label: 'Visa', icon: Globe },
    { id: 'more', label: 'More', icon: Menu },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card, borderTopColor: theme.colors.border }]}>
      <SafeAreaView edges={['bottom']} style={{ backgroundColor: theme.colors.card }}>
        <View style={styles.tabBar}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <TouchableOpacity
                key={tab.id}
                style={styles.tabItem}
                activeOpacity={0.7}
                onPress={() => onTabPress(tab.id)}
              >
                <View style={[
                  styles.iconContainer, 
                  isActive && { backgroundColor: `${theme.colors.primary}10` }
                ]}>
                  <View>
                    <Icon 
                      color={isActive ? theme.colors.primary : theme.colors.textSecondary} 
                      size={22} 
                    />
                  </View>
                </View>
                <Text style={[
                  styles.label, 
                  { color: isActive ? theme.colors.primary : theme.colors.textSecondary }
                ]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    paddingTop: 8,
    // Add shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: baseTheme.spacing.md,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    padding: 6,
    borderRadius: 16,
    marginBottom: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
  },
});

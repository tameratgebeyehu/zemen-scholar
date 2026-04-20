import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home, Map, FileText, Globe } from 'lucide-react-native';
import { theme } from '../theme/theme';

export type TabType = 'home' | 'roadmap' | 'documents' | 'visa';

interface Props {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

export const BottomTabs = ({ activeTab, onTabPress }: Props) => {
  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'roadmap', label: 'Roadmap', icon: Map },
    { id: 'documents', label: 'Docs', icon: FileText },
    { id: 'visa', label: 'Visa', icon: Globe },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['bottom']} style={styles.safeArea}>
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
                <View style={[styles.iconContainer, isActive && styles.iconContainerActive]}>
                  <Icon 
                    color={isActive ? theme.colors.primary : theme.colors.textSecondary} 
                    size={22} 
                  />
                </View>
                <Text style={[styles.label, isActive && styles.labelActive]}>
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
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.xs,
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
  safeArea: {
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: theme.spacing.md,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    padding: 6,
    borderRadius: theme.borderRadius.md,
    marginBottom: 2,
  },
  iconContainerActive: {
    backgroundColor: `${theme.colors.primary}10`,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  labelActive: {
    color: theme.colors.primary,
  },
});

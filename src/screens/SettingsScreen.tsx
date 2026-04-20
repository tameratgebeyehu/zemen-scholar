import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Moon, Trash2 } from 'lucide-react-native';
import { useAppContext, useAppTheme } from '../context/AppContext';

interface Props {
  onBack: () => void;
}

export const SettingsScreen = ({ onBack }: Props) => {
  const { state, updateUser, resetApp } = useAppContext();
  const theme = useAppTheme();

  const isDarkMode = state.user.app_theme === 'dark';

  const toggleTheme = async () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    await updateUser({ app_theme: newTheme });
  };

  const handleReset = () => {
    Alert.alert(
      "Clear All Data?", 
      "This will permanently delete all your progress, GPA scores, and roadmap checklists. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Reset Everything", 
          style: "destructive",
          onPress: async () => {
            await resetApp();
            onBack(); // Go back to main, App.tsx will handle the shift to Splash/Onboarding
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Settings</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={[styles.section, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Moon color={theme.colors.primary} size={22} strokeWidth={2.5} />
              <Text style={[styles.rowTitle, { color: theme.colors.text }]}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
              thumbColor={'#FFFFFF'}
            />
          </View>
        </View>

        <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary, marginTop: 24 }]}>DATA MANAGEMENT</Text>
        <TouchableOpacity 
          style={[styles.section, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
          activeOpacity={0.7}
          onPress={handleReset}
        >
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Trash2 color={theme.colors.error} size={22} strokeWidth={2.5} />
              <Text style={[styles.rowTitle, { color: theme.colors.text }]}>Clear All App Data</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: -8,
  },
  headerTextContainer: {
    marginTop: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  content: {
    paddingHorizontal: 16,
  },
  section: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 14,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 8,
    marginLeft: 4,
  },
});

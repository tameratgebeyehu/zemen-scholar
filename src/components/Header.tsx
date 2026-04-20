import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Bell } from 'lucide-react-native';
import { theme } from '../theme/theme';


export const Header = ({ userName = 'Dawit' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image 
          source={require('../assets/black icon.png')} 
          style={styles.logo}
        />

        <View>
          <Text style={styles.greeting}>Hi, {userName} 👋</Text>
          <Text style={styles.subtext}>Let’s get you ready to study abroad</Text>
        </View>
      </View>

      <View style={styles.rightActions}>

        <TouchableOpacity style={styles.notification} activeOpacity={0.7}>
          <Bell color={theme.colors.text} size={24} />

          <View style={styles.badge} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 20,
    paddingBottom: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: theme.spacing.md,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text,
  },


  subtext: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },

  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  notification: {
    position: 'relative',
    padding: 4,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.error,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

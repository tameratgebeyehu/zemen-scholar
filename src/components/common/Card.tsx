import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { theme } from '../../theme/theme';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}


export const Card = ({ children, style }: Props) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)', // Hairstroke border for extra definition
    ...theme.shadows.light,
  },


});

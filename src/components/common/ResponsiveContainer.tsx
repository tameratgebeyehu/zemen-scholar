import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { useResponsive } from '../../hooks/useResponsive';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const ResponsiveContainer = ({ children, style }: Props) => {
  const { isTablet, maxContentWidth } = useResponsive();

  return (
    <View style={styles.outerContainer}>
      <View style={[
        styles.innerContainer, 
        isTablet && { maxWidth: maxContentWidth, alignSelf: 'center', width: '100%' },
        style
      ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: '100%',
  },
  innerContainer: {
    flex: 1,
  }
});

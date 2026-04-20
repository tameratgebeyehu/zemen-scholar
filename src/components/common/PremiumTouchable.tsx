import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle, Animated } from 'react-native';

interface Props extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);
  scaleTo?: number;
  activeOpacity?: number;
  elevation?: number;
}

export const PremiumTouchable = ({ 
  children, 
  style, 
  scaleTo = 0.97, 
  activeOpacity = 0.9, 
  elevation = 0,
  ...props 
}: Props) => {
  return (
    <Pressable
      {...props}
      android_ripple={null} // Explicitly disable native ripple
      style={({ pressed }) => {
        // Resolve provided style depending on whether it's a function
        const resolvedStyle = typeof style === 'function' ? style({ pressed }) : style;
        
        return [
          resolvedStyle,
          {
            opacity: pressed ? activeOpacity : 1,
            transform: [{ scale: pressed ? scaleTo : 1 }],
            // Visual "push" effect for shadows (only if elevation is provided)
            shadowOpacity: elevation > 0 ? (pressed ? 0.3 : 0.1) : 0,
            elevation: pressed ? elevation * 2 : elevation,
          }
        ];
      }}
    >
      {children}
    </Pressable>
  );
};

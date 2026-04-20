export const lightColors = {
  primary: '#2563EB',
  background: '#F5F5F5',
  card: '#FFFFFF',
  text: '#1F2937',
  textSecondary: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  border: '#E5E7EB',
};

export const darkColors = {
  primary: '#3B82F6', 
  background: '#121212',
  card: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#9CA3AF',
  success: '#10B981',
  warning: '#FBBF24',
  error: '#F87171',
  border: '#374151',
};

export const theme = {
  colors: lightColors,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 16,
    lg: 20,
    xl: 24,
    full: 9999,
  },
  shadows: {
    light: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 4,
    },
  },
};

import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const isTablet = width >= 768;
  const isDesktop = width >= 1024;
  const isSmallPhone = width < 375;

  // Max width for content on large screens
  const maxContentWidth = 850;
  const currentContentWidth = isTablet ? Math.min(width, maxContentWidth) : width;

  // Grid column logic
  const getColumnCount = (baseColumns: number = 2) => {
    if (width >= 1024) return baseColumns + 2;
    if (width >= 768) return baseColumns + 1;
    return baseColumns;
  };

  return {
    width,
    height,
    isTablet,
    isDesktop,
    isSmallPhone,
    currentContentWidth,
    maxContentWidth,
    getColumnCount,
  };
};

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Youtube } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { useResponsive } from '../hooks/useResponsive';
import { theme as baseTheme } from '../theme/theme';

// ── Dynamic YouTube Component ──
const YouTubeCard = ({ id, width }: { id: string, width: any }) => {
  const theme = useAppTheme();
  const [title, setTitle] = useState("Helpful Video Guide");
  
  useEffect(() => {
    // Silently fetch official YouTube title
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.title) setTitle(data.title);
      })
      .catch(() => {}); // Fails silently, uses default title
  }, [id]);

  const handleWatch = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${id}`).catch(err => console.error("Couldn't open URL", err));
  };

  return (
    <TouchableOpacity 
      style={[styles.ytCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border, width }]} 
      activeOpacity={0.8}
      onPress={handleWatch}
    >
      <View style={styles.ytThumbnailContainer}>
        <Image 
          source={{ uri: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }} 
          style={styles.ytImage}
          resizeMode="cover"
        />
        <View style={styles.ytPlayOverlay}>
          <Youtube color="#FF0000" size={48} fill="#FFF" />
        </View>
      </View>
      <View style={styles.ytContent}>
        <Text style={[styles.ytTitle, { color: theme.colors.text }]} numberOfLines={2}>
          {title}
        </Text>
        <Text style={[styles.ytSubtitle, { color: theme.colors.textSecondary }]}>Zemen Scholar Guide</Text>
      </View>
    </TouchableOpacity>
  );
};

// ── Database ──
const YOUTUBE_IDS = [
  'eQ5lPmoNysw', 'nqngGKAx3dM', 'k6zsxSmEcyA', '8cWnePbat8Q', 
  'ryiiSE-0W70', 'Z2thKjG-50w', 'colKxbroT6Q', '4uQeTPj6CXI', 
  'h4D66KbSAB0', '4qPhTEYMq2g', 'IqNoPBgA2aM', 'm5UheLSNX3I', 
  'csKNtfoMokQ', 'l0o5QADecjg', 'UuBcsFen4AU', 'vNh2HOOaj_M'
];

interface Props {
  onBack: () => void;
}

export const VideoGuidesScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();
  const { isTablet } = useResponsive();

  // Responsive logic: 1 col on mobile, 2 cols on tablet
  const ytCardWidth = isTablet ? '48%' : '100%';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Video Guides</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>Expert tutorials and walkthroughs</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.videoGrid}>
          {YOUTUBE_IDS.map(videoID => (
            <YouTubeCard key={videoID} id={videoID} width={ytCardWidth} />
          ))}
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>
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
  headerSubtitle: {
    fontSize: 15,
    marginTop: 6,
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  // YouTube Card Design
  ytCard: {
    borderRadius: 20,
    borderWidth: 1.5,
    overflow: 'hidden',
    ...baseTheme.shadows.medium,
  },
  ytThumbnailContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ytImage: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  ytPlayOverlay: {
    position: 'absolute',
    ...baseTheme.shadows.medium,
  },
  ytContent: {
    padding: 16,
  },
  ytTitle: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    letterSpacing: -0.2,
  },
  ytSubtitle: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
});

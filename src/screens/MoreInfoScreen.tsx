import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Play, ExternalLink } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  const theme = useAppTheme();
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{title}</Text>
    </View>
  );
};

interface VideoCardProps {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

const VideoCard = ({ title, description, url, thumbnail }: VideoCardProps) => {
  const theme = useAppTheme();
  
  const handleWatch = () => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]} 
      activeOpacity={0.8}
      onPress={handleWatch}
    >
      <View style={styles.videoThumbnailContainer}>
        {/* Using a colored placeholder as thumbnail */}
        <View style={[styles.thumbnailPlaceholder, { backgroundColor: theme.colors.primary + '20' }]}>
          <Play color={theme.colors.primary} size={32} fill={theme.colors.primary + '40'} />
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]} numberOfLines={2}>{title}</Text>
        <Text style={[styles.cardDescription, { color: theme.colors.textSecondary }]} numberOfLines={1}>{description}</Text>
        <View style={[styles.watchButton, { backgroundColor: theme.colors.primary + '10' }]}>
          <Text style={[styles.watchButtonText, { color: theme.colors.primary }]}>Watch Now</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface ResourceLinkProps {
  title: string;
  description: string;
  url: string;
}

const ResourceLink = ({ title, description, url }: ResourceLinkProps) => {
  const theme = useAppTheme();

  const handleOpen = () => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <TouchableOpacity 
      style={[styles.resourceItem, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]} 
      activeOpacity={0.7}
      onPress={handleOpen}
    >
      <View style={styles.resourceContent}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{title}</Text>
        <Text style={[styles.cardDescription, { color: theme.colors.textSecondary }]}>{description}</Text>
      </View>
      <View style={[styles.openButton, { backgroundColor: theme.colors.primary }]}>
        <ExternalLink color="#FFF" size={16} />
      </View>
    </TouchableOpacity>
  );
};

const VIDEOS = [
  {
    id: '1',
    title: 'How to Study in the USA Step by Step',
    description: 'A complete overview for international students.',
    url: 'https://www.youtube.com/results?search_query=study+in+usa+step+by+step',
    thumbnail: ''
  },
  {
    id: '2',
    title: 'How to Apply to US Universities',
    description: 'Mastering the Common App and direct applications.',
    url: 'https://www.youtube.com/results?search_query=apply+to+us+universities',
    thumbnail: ''
  },
  {
    id: '3',
    title: 'Student Visa Process Explained',
    description: 'Everything you need to know about F-1 visa interviews.',
    url: 'https://www.youtube.com/results?search_query=f1+student+visa+process',
    thumbnail: ''
  },
  {
    id: '4',
    title: 'Scholarship Tips for International Students',
    description: 'How to get full funding for your studies.',
    url: 'https://www.youtube.com/results?search_query=scholarships+for+international+students+usa',
    thumbnail: ''
  }
];

const RESOURCES = [
  {
    id: '1',
    title: 'EducationUSA',
    description: 'Official US government source on international study.',
    url: 'https://educationusa.state.gov/'
  },
  {
    id: '2',
    title: 'Common App',
    description: 'Apply to over 1,000 US colleges through one portal.',
    url: 'https://www.commonapp.org/'
  },
  {
    id: '3',
    title: 'College Board',
    description: 'Register for SAT and explore college profiles.',
    url: 'https://www.collegeboard.org/'
  }
];

interface Props {
  onBack: () => void;
}

export const MoreInfoScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>More Info</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>Learn more about studying in the USA</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <SectionHeader title="Helpful Videos" />
        {VIDEOS.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}

        <View style={styles.sectionSpacer} />

        <SectionHeader title="Useful Resources" />
        {RESOURCES.map(resource => (
          <ResourceLink key={resource.id} {...resource} />
        ))}
        
        <View style={{ height: 40 }} />
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
    paddingHorizontal: 16,
  },
  sectionHeader: {
    marginBottom: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  sectionSpacer: {
    height: 16,
  },
  // Video Card
  card: {
    flexDirection: 'row',
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  videoThumbnailContainer: {
    width: 110,
    height: 110,
  },
  thumbnailPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  cardDescription: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: '500',
  },
  watchButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  watchButtonText: {
    fontSize: 12,
    fontWeight: '700',
  },
  // Resource Link
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  resourceContent: {
    flex: 1,
    marginRight: 12,
  },
  openButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

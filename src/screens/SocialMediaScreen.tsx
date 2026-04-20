import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Youtube, Send, Instagram, ExternalLink } from 'lucide-react-native';
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

interface SocialCardProps {
  platform: 'youtube' | 'telegram' | 'instagram';
  name: string;
  description: string;
  url: string;
}

const SocialCard = ({ platform, name, description, url }: SocialCardProps) => {
  const theme = useAppTheme();
  
  const getIcon = () => {
    switch (platform) {
      case 'youtube': return <Youtube color="#FF0000" size={24} fill="#FF000020" />;
      case 'telegram': return <Send color="#0088cc" size={24} fill="#0088cc20" />;
      case 'instagram': return <Instagram color="#E4405F" size={24} />;
      default: return null;
    }
  };

  const handleOpen = () => {
    Linking.openURL(url).catch(err => console.error("Couldn't open social link", err));
  };

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]} 
      activeOpacity={0.7}
      onPress={handleOpen}
    >
      <View style={styles.iconContainer}>
        {getIcon()}
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.accountName, { color: theme.colors.text }]}>{name}</Text>
        <Text style={[styles.description, { color: theme.colors.textSecondary }]}>{description}</Text>
      </View>
      <View style={[styles.followButton, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.followButtonText}>Find</Text>
      </View>
    </TouchableOpacity>
  );
};

const SOCIAL_GROUPS = [
  {
    platform: 'youtube',
    label: 'YouTube Channels',
    accounts: [
      { name: 'Study Abroad Tips', description: 'Everything about University life in USA.', url: 'https://youtube.com' },
      { name: 'Student Visa Guide', description: 'Expert advice on F1 interviews.', url: 'https://youtube.com' }
    ]
  },
  {
    platform: 'telegram',
    label: 'Telegram Communities',
    accounts: [
      { name: 'Scholarship Updates Ethiopia', description: 'Daily news on fully funded spots.', url: 'https://t.me' },
      { name: 'Study Abroad Community', description: 'Chat with other students.', url: 'https://t.me' }
    ]
  },
  {
    platform: 'instagram',
    label: 'Instagram Pages',
    accounts: [
      { name: 'Daily Study Tips', description: 'Inspiration and quick learning hacks.', url: 'https://instagram.com' },
      { name: 'University Life Abroad', description: 'Real stories from overseas students.', url: 'https://instagram.com' }
    ]
  }
];

interface Props {
  onBack: () => void;
}

export const SocialMediaScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Social Media</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>Follow for tips and updates</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {SOCIAL_GROUPS.map((group, gIdx) => (
          <View key={gIdx} style={styles.groupContainer}>
            <SectionHeader title={group.label} />
            {group.accounts.map((acc, aIdx) => (
              <SocialCard 
                key={aIdx} 
                platform={group.platform as any} 
                name={acc.name} 
                description={acc.description} 
                url={acc.url} 
              />
            ))}
          </View>
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
  groupContainer: {
    marginBottom: 16,
  },
  sectionHeader: {
    marginBottom: 12,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F9FAFB', // Light neutral for icon backing
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
    marginRight: 10,
  },
  accountName: {
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    marginTop: 2,
    fontWeight: '500',
  },
  followButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  followButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
});

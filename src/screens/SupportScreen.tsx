import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Pressable } from 'react-native';
import { PremiumTouchable } from '../components/common/PremiumTouchable';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';
import { ChevronLeft, Copy, CreditCard } from 'lucide-react-native';
import { theme as baseTheme } from '../theme/theme';
import { useAppContext, useAppTheme } from '../context/AppContext';

interface DonationCardProps {
  bankName: string;
  accountName: string;
  accountNumber: string;
  iconColor: string;
}

const DonationCard = ({ bankName, accountName, accountNumber, iconColor }: DonationCardProps) => {
  const theme = useAppTheme();

  const handleCopy = async () => {
    await Clipboard.setStringAsync(accountNumber);
    // Silent copy as requested by the user ("it has to be just copy")
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
      <View style={styles.cardHeader}>
        <View style={[styles.bankIconBox, { backgroundColor: `${iconColor}15` }]}>
          <CreditCard color={iconColor} size={22} />
        </View>
        <Text style={[styles.bankName, { color: theme.colors.text }]}>{bankName}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={[styles.labelText, { color: theme.colors.textSecondary }]}>ACCOUNT NAME</Text>
        <Text style={[styles.valueText, { color: theme.colors.text }]}>{accountName}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoSection}>
        <Text style={[styles.labelText, { color: theme.colors.textSecondary }]}>ACCOUNT NUMBER</Text>
        <Text style={[styles.valueText, styles.accountNumberText, { color: theme.colors.text }]}>{accountNumber}</Text>
      </View>

      <PremiumTouchable 
        style={[styles.copyButton, { backgroundColor: theme.colors.primary }]} 
        onPress={handleCopy}
        elevation={2}
      >
        <Copy color="#FFF" size={18} />
        <Text style={styles.copyButtonText}>Copy Account Number</Text>
      </PremiumTouchable>
    </View>
  );
};

interface Props {
  onBack: () => void;
}

export const SupportScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
          <ChevronLeft color={theme.colors.text} size={28} />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Support Zemen Scholar</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>
            Your support helps us keep Zemen Scholar free and high-quality for everyone.
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <DonationCard 
          bankName="Commercial Bank of Ethiopia"
          accountName="Tamerat Gebeyehu"
          accountNumber="1000667199305"
          iconColor="#9C27B0" // Purple tint as in image
        />

        <DonationCard 
          bankName="Awash Bank"
          accountName="Tamerat Gebeyehu"
          accountNumber="013351111628800"
          iconColor="#03A9F4" // Blue tint as in image
        />

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
    paddingTop: 8,
    paddingBottom: 24,
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: -8,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bankIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  bankName: {
    fontSize: 17,
    fontWeight: '700',
    flex: 1,
  },
  infoSection: {
    marginBottom: 0,
  },
  labelText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  valueText: {
    fontSize: 16,
    fontWeight: '700',
  },
  accountNumberText: {
    fontSize: 18,
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginVertical: 16,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
  },
  copyButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },
});

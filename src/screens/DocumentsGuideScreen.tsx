import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ChevronLeft, Info, HelpCircle, CheckCircle2, AlertTriangle, BookOpen, FileText, Check } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { ProgressBar } from '../components/common/ProgressBar';
import { DocumentGuideCard } from '../components/features/documents/DocumentGuideCard';
import { PremiumTouchable } from '../components/common/PremiumTouchable';
import { useAppContext } from '../context/AppContext';
import { StepStatus } from '../services/storageService';


import { DOCUMENTS_GUIDE_DATA } from '../constants/appData';
import { DocumentGuide } from '../types';


export const DocumentsGuideScreen = () => {
  const { state, updateDocuments } = useAppContext();
  const theme = useAppTheme();
  const [selectedDoc, setSelectedDoc] = useState<DocumentGuide | null>(null);

  const progress = state.documents_progress || {};

  const handleToggleStatus = async (id: string) => {
    const currentStatus = progress[id] || 'missing';
    const newStatus: StepStatus = currentStatus === 'verified' ? 'missing' : 'verified';
    await updateDocuments(id, newStatus);
  };

  const completedCount = Object.values(progress).filter(s => s === 'verified').length;
  const totalCount = DOCUMENTS_GUIDE_DATA.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // --- DETAIL VIEW (Editorial Profile) ---
  if (selectedDoc) {
    const isCompleted = progress[selectedDoc.id] === 'verified';

    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={[styles.detailHeader, { backgroundColor: theme.colors.background, borderBottomColor: theme.colors.border }]}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedDoc(null)}>
            <ChevronLeft color={theme.colors.text} size={28} />
          </TouchableOpacity>
          <Text style={[styles.detailTitle, { color: theme.colors.text }]}>{selectedDoc.title}</Text>
          <View style={{ width: 44 }} />
        </View>

        <ScrollView contentContainerStyle={styles.detailScroll} showsVerticalScrollIndicator={false}>
          {/* Status Header */}
          <View style={styles.profileHero}>
             <View style={[styles.heroIconBox, { backgroundColor: theme.colors.primary + '10' }]}>
               <FileText color={theme.colors.primary} size={40} />
             </View>
             <View style={[styles.heroBadge, { backgroundColor: isCompleted ? theme.colors.success + '15' : theme.colors.border }]}>
               <Text style={[styles.heroBadgeText, { color: isCompleted ? theme.colors.success : theme.colors.textSecondary }]}>
                 {isCompleted ? 'READY FOR APPLICATION' : 'REQUIREMENT PENDING'}
               </Text>
             </View>
          </View>

          {/* Why it matters */}
          <View style={[styles.editorialCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <View style={styles.cardHeaderRow}>
              <Info color={theme.colors.primary} size={20} />
              <Text style={[styles.cardHeaderTitle, { color: theme.colors.text }]}>Why it Matters</Text>
            </View>
            <Text style={[styles.cardText, { color: theme.colors.textSecondary }]}>{selectedDoc.whyItMatters}</Text>
          </View>

          {/* How to prepare */}
          <View style={[styles.editorialCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <View style={styles.cardHeaderRow}>
              <HelpCircle color={theme.colors.success} size={20} />
              <Text style={[styles.cardHeaderTitle, { color: theme.colors.text }]}>How to Prepare</Text>
            </View>
            {selectedDoc.prepSteps.map((step, i) => (
              <View key={i} style={styles.stepItem}>
                <View style={[styles.stepDot, { backgroundColor: theme.colors.success }]} />
                <Text style={[styles.cardText, { color: theme.colors.textSecondary }]}>{step}</Text>
              </View>
            ))}
          </View>

          <View style={styles.twoColumnRow}>
             {/* Tips */}
            <View style={[styles.sideCard, { backgroundColor: theme.colors.primary + '05', borderColor: theme.colors.primary + '20' }]}>
              <Text style={[styles.sideCardTitle, { color: theme.colors.primary }]}>PRO TIPS</Text>
              {selectedDoc.tips.map((tip, i) => (
                <Text key={i} style={[styles.smallText, { color: theme.colors.textSecondary }]}>• {tip}</Text>
              ))}
            </View>

            {/* Mistakes */}
            <View style={[styles.sideCard, { backgroundColor: theme.colors.error + '05', borderColor: theme.colors.error + '20' }]}>
              <Text style={[styles.sideCardTitle, { color: theme.colors.error }]}>AVOID THIS</Text>
              {selectedDoc.mistakes.map((mistake, i) => (
                <Text key={i} style={[styles.smallText, { color: theme.colors.textSecondary }]}>• {mistake}</Text>
              ))}
            </View>
          </View>

          <View style={{ height: 40 }} />
        </ScrollView>

        <View style={[styles.bottomAction, { borderTopColor: theme.colors.border }]}>
          <PremiumTouchable 
            style={[styles.pillButton, { backgroundColor: isCompleted ? theme.colors.success : theme.colors.primary }]}
            onPress={() => handleToggleStatus(selectedDoc.id)}
            elevation={isCompleted ? 0 : 4}
          >
            {isCompleted && <Check color="#fff" size={20} style={{ marginRight: 8 }} />}
            <Text style={styles.pillButtonText}>
              {isCompleted ? 'Verified & Ready' : 'Mark as Ready'}
            </Text>
          </PremiumTouchable>
        </View>
      </View>
    );
  }

  // --- LIST VIEW ---
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Documents</Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>Build your application folder</Text>
      </View>

      <ScrollView contentContainerStyle={styles.listScroll} showsVerticalScrollIndicator={false}>
        {/* Readiness Summary Card */}
        <View style={[styles.readinessCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.summaryRow}>
            <View>
              <Text style={[styles.summaryLabel, { color: theme.colors.textSecondary }]}>DOCUMENT READINESS</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.text }]}>
                {completedCount} of {totalCount} Files Ready
              </Text>
            </View>
            <View style={[styles.percentageCircle, { borderColor: theme.colors.primary }]}>
               <Text style={[styles.percentageText, { color: theme.colors.primary }]}>{progressPercent}%</Text>
            </View>
          </View>
          <View style={[styles.barBase, { backgroundColor: theme.colors.border }]}>
             <View style={[styles.barFill, { width: `${progressPercent}%`, backgroundColor: theme.colors.primary }]} />
          </View>
        </View>

        {DOCUMENTS_GUIDE_DATA.map((doc) => (
          <DocumentGuideCard 
            key={doc.id}
            title={doc.title}
            description={doc.shortDescription}
            status={progress[doc.id] || 'missing'}
            onPress={() => setSelectedDoc(doc)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '500',
  },
  listScroll: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 12,
  },
  readinessCard: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 4,
  },
  percentageCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 13,
    fontWeight: '900',
  },
  barBase: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },

  // Detail View (Editorial)
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  detailScroll: {
    padding: 20,
  },
  profileHero: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 12,
  },
  heroIconBox: {
    width: 80,
    height: 80,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 100,
  },
  heroBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  editorialCard: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    marginBottom: 16,
    ...baseTheme.shadows.light,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  cardHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  stepDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  twoColumnRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  sideCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  sideCardTitle: {
    fontSize: 11,
    fontWeight: '900',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  smallText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  bottomAction: {
    padding: 20,
    paddingBottom: 32,
    borderTopWidth: 1,
  },
  pillButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 100,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  pillButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
});

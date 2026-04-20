import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { ChevronLeft, Upload, FileCheck, CheckCircle2 } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { AppDocument } from '../types/documents';
import { DocumentCard } from '../components/DocumentCard';
import { ProgressBar } from '../components/ProgressBar';
import { getDocumentsProgress, saveDocumentsProgress, DocumentStatus } from '../utils/storage';

const INITIAL_DOCUMENTS: AppDocument[] = [
  {
    id: 'doc1',
    title: 'Passport',
    status: 'uploaded',
    description: 'Required for all international applications',
    requirements: [
      'Must be valid for at least 6 months beyond intended stay',
      'Clear, color scan of the photo page',
      'Include signature page if applicable'
    ],
    sampleText: 'Sample Passport Page.pdf'
  },
  {
    id: 'doc2',
    title: 'Academic Transcript',
    status: 'missing',
    description: 'Official record of your high school / university grades',
    requirements: [
      'Must possess official school stamp or seal',
      'Translated to English by a certified translator (if originally in Amharic)',
      'Include grading scale'
    ]
  },
  {
    id: 'doc3',
    title: 'Recommendation Letter',
    status: 'verified',
    description: 'Letter from a teacher or employer supporting your application',
    requirements: [
      'Must be on official letterhead',
      'Include contact information of the recommender',
      'Signed and dated within the last 12 months'
    ]
  },
  {
    id: 'doc4',
    title: 'Personal Statement',
    status: 'missing',
    description: 'Essay explaining your goals and reasons for applying',
    requirements: [
      '500 - 800 words',
      'Format: PDF or Word document',
      'Focus on academic goals and why this specific country/university'
    ]
  },
  {
    id: 'doc5',
    title: 'Bank Statement',
    status: 'missing',
    description: 'Proof of funds to cover tuition and living expenses',
    requirements: [
      'Issued within the last 30 days',
      'Must show equivalent value in USD (highly recommended)',
      'Bank official stamp required'
    ]
  },
  {
    id: 'doc6',
    title: 'National ID',
    status: 'missing',
    description: 'Government issued Ethiopian ID for identity verification',
    requirements: [
      'Both front and back sides required',
      'Clear color scan',
      'Translated if requested'
    ]
  }
];

export const DocumentsScreen = () => {
  const [documents, setDocuments] = useState<AppDocument[]>(INITIAL_DOCUMENTS);
  const [selectedDoc, setSelectedDoc] = useState<AppDocument | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      const storedProgress = await getDocumentsProgress();
      
      const mergedDocs = INITIAL_DOCUMENTS.map(doc => ({
        ...doc,
        status: (storedProgress[doc.id] as DocumentStatus) || doc.status
      }));
      
      setDocuments(mergedDocs);
      setIsLoading(false);
    };
    loadProgress();
  }, []);

  const completedCount = documents.filter(doc => doc.status !== 'missing').length;
  const totalCount = documents.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleUploadClick = () => {
    if (!selectedDoc) return;
    setIsUploading(true);

    setTimeout(async () => {
      const newStatus = 'uploaded';
      const fileUrl = 'mock_uploaded_file.pdf';

      const updatedDocs = documents.map(doc => 
        doc.id === selectedDoc.id 
          ? { ...doc, status: newStatus as DocumentStatus, fileUrl } 
          : doc
      );
      
      setDocuments(updatedDocs);
      
      // Persist to storage
      const progressToSave = updatedDocs.reduce((acc, doc) => {
        acc[doc.id] = doc.status as DocumentStatus;
        return acc;
      }, {} as Record<string, DocumentStatus>);
      
      await saveDocumentsProgress(progressToSave);
      
      // Update local detailed state as well
      setSelectedDoc(prev => prev ? { ...prev, status: newStatus as DocumentStatus, fileUrl } : null);
      
      setIsUploading(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  // --- RENDER DETAIL VIEW ---
  if (selectedDoc) {
    const isUploaded = selectedDoc.status === 'uploaded' || selectedDoc.status === 'verified';

    return (
      <View style={styles.container}>
        <View style={styles.detailHeader}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedDoc(null)} activeOpacity={0.7}>
            <ChevronLeft stroke={theme.colors.text} size={24} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.detailTitle} numberOfLines={1}>{selectedDoc.title}</Text>
          <View style={{ width: 60 }} /> {/* Spacer to center title */}
        </View>

        <ScrollView style={styles.detailContent} contentContainerStyle={styles.detailScrollPadding}>
          {/* Status Banner */}
          <View style={[
            styles.banner, 
            { backgroundColor: isUploaded ? `${theme.colors.success}10` : `${theme.colors.warning}10` }
          ]}>
            {selectedDoc.status === 'verified' ? (
              <CheckCircle2 stroke={theme.colors.success} size={24} />
            ) : selectedDoc.status === 'uploaded' ? (
              <FileCheck stroke={theme.colors.warning} size={24} />
            ) : (
              <Upload stroke={theme.colors.textSecondary} size={24} />
            )}
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>
                {selectedDoc.status === 'verified' ? 'Document Verified' 
                 : selectedDoc.status === 'uploaded' ? 'Pending Verification' 
                 : 'Action Required'}
              </Text>
              <Text style={styles.bannerSubtitle}>
                {selectedDoc.status === 'verified' ? 'Your document has been approved.' 
                 : selectedDoc.status === 'uploaded' ? 'We are reviewing your uploaded document.' 
                 : 'Please upload the required file to continue.'}
              </Text>
            </View>
          </View>

          {/* Description Section */}
          <Text style={styles.sectionTitle}>About this Document</Text>
          <Text style={styles.detailText}>{selectedDoc.description}</Text>

          {/* Requirements List */}
          <Text style={styles.sectionTitle}>Formatting Requirements</Text>
          <View style={styles.requirementsList}>
            {selectedDoc.requirements.map((req, index) => (
              <View key={index} style={styles.requirementItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.detailText}>{req}</Text>
              </View>
            ))}
          </View>

          {/* Upload Section */}
          <Text style={styles.sectionTitle}>Upload Section</Text>
          <View style={styles.uploadArea}>
            {isUploaded ? (
              <View style={styles.filePreview}>
                <FileCheck stroke={theme.colors.primary} size={32} />
                <Text style={styles.fileText}>{selectedDoc.fileUrl || 'uploaded_document.pdf'}</Text>
                
                {selectedDoc.status !== 'verified' && (
                  <TouchableOpacity style={styles.replaceButton} onPress={handleUploadClick} activeOpacity={0.7}>
                    {isUploading ? (
                      <ActivityIndicator color={theme.colors.primary} size="small" />
                    ) : (
                      <Text style={styles.replaceText}>Replace File</Text>
                    )}
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <TouchableOpacity 
                style={styles.uploadBox} 
                activeOpacity={0.7} 
                onPress={handleUploadClick}
                disabled={isUploading}
              >
                {isUploading ? (
                  <ActivityIndicator color={theme.colors.primary} size="large" />
                ) : (
                  <>
                    <Upload stroke={theme.colors.primary} size={40} />
                    <Text style={styles.uploadMainText}>Tap to Select File</Text>
                    <Text style={styles.uploadSubText}>Supports PDF, JPG, PNG (Max 5MB)</Text>
                  </>
                )}
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }

  // --- RENDER MAIN LIST ---
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Documents</Text>
        <Text style={styles.subtitle}>Prepare and track your study abroad documents</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Progress Overview Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>You are {progressPercent}% ready</Text>
            <Text style={styles.progressCount}>{completedCount}/{totalCount} Completed</Text>
          </View>
          <ProgressBar progress={progressPercent} showLabel={false} />
          <Text style={styles.progressMessage}>
            Complete your documents to unlock university applications
          </Text>
        </View>

        {/* Documents List */}
        <Text style={styles.sectionHeader}>Required Checklist</Text>
        <View style={styles.listContainer}>
          {documents.map((doc) => (
            <DocumentCard 
              key={doc.id} 
              document={doc} 
              onPress={() => setSelectedDoc(doc)} 
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  progressCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.light,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: theme.spacing.sm,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  progressCount: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  progressMessage: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  listContainer: {
    gap: theme.spacing.sm,
  },
  
  // --- Detail View Styles ---
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  backText: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 4,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    flex: 1,
    textAlign: 'center',
  },
  detailContent: {
    flex: 1,
  },
  detailScrollPadding: {
    padding: theme.spacing.lg,
    paddingBottom: 100,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.lg,
  },
  bannerTextContainer: {
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  detailText: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  requirementsList: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.light,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    marginTop: 8,
    marginRight: 10,
  },
  uploadArea: {
    marginTop: theme.spacing.xs,
  },
  uploadBox: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${theme.colors.primary}05`,
  },
  uploadMainText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: theme.spacing.md,
    marginBottom: 4,
  },
  uploadSubText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  filePreview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.light,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  fileText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.text,
    marginLeft: theme.spacing.md,
  },
  replaceButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: `${theme.colors.primary}15`,
  },
  replaceText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 13,
  },
});

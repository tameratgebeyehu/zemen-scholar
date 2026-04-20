import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  Modal, 
  Pressable,
  Dimensions,
  Platform,
  Animated,
  PanResponder,
  Share
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ChevronLeft, 
  Search, 
  X, 
  BookOpen, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  Copy,
  Share2,
  Sparkles
} from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { GLOSSARY_DATA, GlossaryItem } from '../constants/appData';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface Props {
  onBack: () => void;
}

const CATEGORIES = ["All", "Basics", "Application", "Academics", "Financial", "Visa", "Strategy", "Writing", "Career", "Metrics", "Risks", "Safety"];

// --- Optimized List Item ---
const TermItem = React.memo(({ item, onPress }: { item: GlossaryItem, onPress: (item: GlossaryItem) => void }) => {
  const theme = useAppTheme();
  
  return (
    <TouchableOpacity 
      style={[styles.termItem, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}
      onPress={() => onPress(item)}
      activeOpacity={0.6}
    >
      <View style={styles.termItemLeft}>
        <Text style={[styles.termItemTitle, { color: theme.colors.text }]}>{item.term}</Text>
      </View>
      <View style={styles.termItemRight}>
        <ChevronRight size={20} color={theme.colors.textSecondary + '60'} />
      </View>
    </TouchableOpacity>
  );
});

export const WordsToKnowScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryItem | null>(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Animation values
  const panY = useRef(new Animated.Value(0)).current;
  const detailScale = useRef(new Animated.Value(0.95)).current;

  // Handle Swipe Down Gesture
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 5,
      onPanResponderMove: Animated.event([null, { dy: panY }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 150 || gestureState.vy > 0.5) {
          closeSheets();
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const closeSheets = () => {
    Animated.timing(panY, {
      toValue: SCREEN_HEIGHT,
      duration: 200, // Slightly faster for responsiveness
      useNativeDriver: false,
    }).start(() => {
      setIsDetailVisible(false);
      setIsFilterVisible(false);
    });
  };

  useEffect(() => {
    if (isDetailVisible || isFilterVisible) {
      panY.setValue(0);
      detailScale.setValue(0.95);
      Animated.parallel([
        Animated.spring(panY, { 
          toValue: 0, 
          useNativeDriver: false,
          tension: 60,
          friction: 10
        }),
        Animated.spring(detailScale, { 
          toValue: 1, 
          useNativeDriver: false,
          tension: 60,
          friction: 10
        })
      ]).start();
    }
  }, [isDetailVisible, isFilterVisible]);

  const filteredData = useMemo(() => {
    return GLOSSARY_DATA.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (item.amharic && item.amharic.includes(searchQuery));
      
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const relatedTerms = useMemo(() => {
    if (!selectedTerm) return [];
    return GLOSSARY_DATA
      .filter(item => item.category === selectedTerm.category && item.term !== selectedTerm.term)
      .slice(0, 4);
  }, [selectedTerm]);

  const handleShowDetail = useCallback((item: GlossaryItem) => {
    setSelectedTerm(item);
    setIsDetailVisible(true);
  }, []);

  const handleCopy = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  const handleShare = async (item: GlossaryItem) => {
    try {
      await Share.share({
        message: `Zemen Scholar Dictionary: ${item.term}\n\nDefinition: ${item.definition}${item.amharic ? `\n\nAmharic: ${item.amharic}` : ''}`,
        title: item.term,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
            <ChevronLeft color={theme.colors.text} size={28} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Dictionary</Text>
            <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>Tap terms to see details</Text>
          </View>
        </View>

        {/* Search & Filter Row */}
        <View style={styles.searchRow}>
          <View style={[styles.searchBox, { backgroundColor: theme.colors.border + '50' }]}>
            <Search color={theme.colors.textSecondary} size={18} />
            <TextInput
              style={[styles.searchInput, { color: theme.colors.text }]}
              placeholder="Search concepts..."
              placeholderTextColor={theme.colors.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <X color={theme.colors.textSecondary} size={18} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity 
            style={[
              styles.filterBtn, 
              { backgroundColor: theme.colors.primary },
              activeCategory !== 'All' && styles.filterBtnActive
            ]}
            onPress={() => setIsFilterVisible(true)}
          >
            <SlidersHorizontal color="#FFF" size={20} />
            {activeCategory !== 'All' && <View style={styles.filterDot} />}
          </TouchableOpacity>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => `${item.term}-${item.category}`}
        renderItem={({ item }) => <TermItem item={item} onPress={handleShowDetail} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={15}
        maxToRenderPerBatch={20}
        windowSize={10}
        removeClippedSubviews={true}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <BookOpen size={48} color="#CCC" />
            <Text style={styles.emptyText}>Nothing found</Text>
          </View>
        }
      />

      {/* --- Detail Bottom Sheet (Modal) --- */}
      <Modal
        visible={isDetailVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsDetailVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable style={styles.dismissOverlay} onPress={() => setIsDetailVisible(false)} />
          <Animated.View 
            style={[
              styles.detailSheet, 
              { 
                backgroundColor: theme.colors.card,
                transform: [{ translateY: panY }, { scale: detailScale }]
              }
            ]}
            {...panResponder.panHandlers}
          >
            <View style={styles.sheetHandle} />
            {selectedTerm && (
              <View style={styles.sheetContent}>
                <View style={styles.sheetHeader}>
                  <View style={{ flex: 1, paddingRight: 16 }}>
                    <Text style={[styles.sheetTerm, { color: theme.colors.text }]}>
                      {selectedTerm.term}
                    </Text>
                  </View>
                  <View style={styles.actionRow}>
                    <TouchableOpacity 
                      style={styles.actionBtnIcon}
                      onPress={() => handleShare(selectedTerm)}
                    >
                      <Share2 size={20} color={theme.colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.actionBtnIcon}
                      onPress={() => handleCopy(selectedTerm.definition)}
                    >
                      <Copy size={20} color={theme.colors.textSecondary} />
                    </TouchableOpacity>
                  </View>
                </View>

                {selectedTerm.amharic && (
                  <View style={[styles.amharicCard, { backgroundColor: theme.colors.primary + '08', borderColor: theme.colors.primary + '20' }]}>
                    <Text style={[styles.amharicCardLabel, { color: theme.colors.primary }]}>አማርኛ / Amharic</Text>
                    <Text style={[styles.amharicCardText, { color: theme.colors.text }]}>
                      {selectedTerm.amharic}
                    </Text>
                  </View>
                )}

                <View style={styles.definitionBox}>
                  {(() => {
                    const parts = selectedTerm.definition.split(/Tip[ :]+/);
                    const defText = parts[0].trim();
                    const tipText = parts[1] ? parts[1].trim() : null;
                    
                    return (
                      <>
                        <Text style={[styles.sheetDefinition, { color: theme.colors.text }]}>
                          {defText}
                        </Text>

                        {tipText && (
                          <View style={styles.proTipCard}>
                            <View style={styles.proTipHeader}>
                              <Sparkles size={16} color="#E89F00" />
                              <Text style={styles.proTipTitle}>MENTOR TIP</Text>
                            </View>
                            <Text style={styles.proTipText}>{tipText}</Text>
                          </View>
                        )}
                      </>
                    );
                  })()}
                </View>

                {/* Related Terms */}
                {relatedTerms.length > 0 && (
                  <View style={styles.relatedSection}>
                    <View style={styles.sectionHeader}>
                      <Sparkles size={16} color={theme.colors.primary} />
                      <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>RELATED PHRASES</Text>
                    </View>
                    <View style={styles.relatedGrid}>
                      {relatedTerms.map(rt => (
                        <TouchableOpacity 
                          key={rt.term} 
                          style={[styles.relatedChip, { backgroundColor: theme.colors.border + '20' }]}
                          onPress={() => setSelectedTerm(rt)}
                        >
                          <Text style={[styles.relatedChipText, { color: theme.colors.text }]}>{rt.term}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                )}

                <View style={styles.sheetFooter}>
                  <View style={[styles.categoryTag, { backgroundColor: theme.colors.border + '40' }]}>
                    <Layers size={14} color={theme.colors.textSecondary} />
                    <Text style={[styles.categoryTagText, { color: theme.colors.textSecondary }]}>
                      {selectedTerm.category}
                    </Text>
                  </View>
                  
                  <TouchableOpacity 
                    style={[styles.closeActionBtn, { backgroundColor: theme.colors.primary }]}
                    onPress={() => setIsDetailVisible(false)}
                  >
                    <Text style={styles.closeActionText}>Got it</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Animated.View>
        </View>
      </Modal>

      {/* --- Filter Bottom Sheet (Modal) --- */}
      <Modal
        visible={isFilterVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable style={styles.dismissOverlay} onPress={() => setIsFilterVisible(false)} />
          <Animated.View 
            style={[
              styles.filterSheet, 
              { 
                backgroundColor: theme.colors.card,
                transform: [{ translateY: panY }]
              }
            ]}
            {...panResponder.panHandlers}
          >
            <View style={styles.sheetHandle} />
            <Text style={[styles.filterTitle, { color: theme.colors.text }]}>Filter by Category</Text>
            
            <View style={styles.filterGrid}>
              {CATEGORIES.map(cat => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.filterChip,
                    { backgroundColor: activeCategory === cat ? theme.colors.primary : theme.colors.border + '30' }
                  ]}
                  onPress={() => {
                    setActiveCategory(cat);
                    setIsFilterVisible(false);
                  }}
                >
                  <Text style={[
                    styles.filterChipText,
                    { color: activeCategory === cat ? '#FFF' : theme.colors.textSecondary }
                  ]}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <TouchableOpacity 
              style={[styles.filterCloseBtn, { backgroundColor: theme.colors.border + '40' }]}
              onPress={() => setIsFilterVisible(false)}
            >
              <Text style={{ fontWeight: '700', color: theme.colors.textSecondary }}>Cancel</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
    borderBottomWidth: 1,
    ...baseTheme.shadows.light,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backBtn: {
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -1,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: -2,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 16,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  filterBtn: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  filterBtnActive: {
    transform: [{ scale: 1.05 }],
  },
  filterDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF3B30',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  listContent: {
    paddingVertical: 10,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: 1,
  },
  termItemLeft: {
    flex: 1,
  },
  termItemTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  termItemAmharic: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
    opacity: 0.8,
  },
  termItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemCategoryTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  itemCategoryText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  dismissOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  detailSheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 40 : 30,
    minHeight: SCREEN_HEIGHT * 0.5,
  },
  filterSheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 40 : 30,
    paddingHorizontal: 24,
  },
  sheetHandle: {
    width: 40,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#CCC',
    alignSelf: 'center',
    marginBottom: 24,
  },
  sheetContent: {
    paddingHorizontal: 28,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  sheetTerm: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtnIcon: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  definitionBox: {
    marginBottom: 24,
  },
  sheetDefinition: {
    fontSize: 17,
    lineHeight: 26,
    fontWeight: '500',
    marginBottom: 16,
  },
  amharicCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  amharicCardLabel: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  amharicCardText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '700',
  },
  proTipCard: {
    backgroundColor: '#FFF8E6',
    borderWidth: 1,
    borderColor: '#FFE082',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  proTipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  proTipTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#D48800',
    letterSpacing: 0.5,
  },
  proTipText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#8A5800',
    fontWeight: '600',
  },
  relatedSection: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  relatedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  relatedChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  relatedChipText: {
    fontSize: 13,
    fontWeight: '700',
  },
  sheetFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeActionBtn: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
  },
  closeActionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
  filterTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '700',
  },
  filterCloseBtn: {
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
  },
  categoryTagText: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 80,
    gap: 16,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#AAA',
  },
});

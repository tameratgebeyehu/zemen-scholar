import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions,
  Platform,
  Animated,
  PanResponder,
  Share,
  SectionList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  Search,
  X,
  BookOpen,
  Layers,
  SlidersHorizontal,
  Copy,
  Share2,
  Sparkles,
} from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useAppTheme } from '../context/AppContext';
import { useResponsive } from '../hooks/useResponsive';
import { theme as baseTheme } from '../theme/theme';
import { GLOSSARY_DATA, GlossaryItem } from '../constants/appData';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const ITEM_HEIGHT = 64;
const SECTION_HEADER_HEIGHT = 44;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const CATEGORIES = ['All', 'Basics', 'Application', 'Academics', 'Financial', 'Visa', 'Strategy', 'Writing', 'Career', 'Metrics', 'Risks', 'Safety'];

interface Props {
  onBack: () => void;
}

// ─── Section Header ───────────────────────────────────────────────────────────
const SectionHeader = React.memo(({ letter }: { letter: string }) => {
  const theme = useAppTheme();
  return (
    <View style={[shStyles.row, { backgroundColor: theme.colors.background }]}>
      <View style={[shStyles.badge, { backgroundColor: theme.colors.primary }]}>
        <Text style={shStyles.letter}>{letter}</Text>
      </View>
      <View style={[shStyles.line, { backgroundColor: theme.colors.border }]} />
    </View>
  );
});

const shStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: SECTION_HEADER_HEIGHT,
    paddingHorizontal: 20,
    gap: 12,
  },
  badge: { width: 28, height: 28, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  letter: { fontSize: 13, fontWeight: '900', color: '#FFF' },
  line: { flex: 1, height: 1 },
});

// ─── Term Item ────────────────────────────────────────────────────────────────
const TermItem = React.memo(
  ({ item, onPress }: { item: GlossaryItem; onPress: (i: GlossaryItem) => void }) => {
    const theme = useAppTheme();
    return (
      <TouchableOpacity
        style={[styles.termItem, { borderBottomColor: theme.colors.border + '50' }]}
        onPress={() => onPress(item)}
        activeOpacity={0.45}
      >
        <View style={styles.termRow}>
          <View style={styles.termLeft}>
            <Text style={[styles.termTitle, { color: theme.colors.text }]} numberOfLines={1}>
              {item.term}
            </Text>
            <Text style={[styles.termSub, { color: theme.colors.textSecondary }]} numberOfLines={1}>
              {item.amharic ? item.amharic : item.definition.substring(0, 48) + '…'}
            </Text>
          </View>
          <View style={[styles.catPill, { backgroundColor: theme.colors.primary + '14' }]}>
            <Text style={[styles.catPillText, { color: theme.colors.primary }]}>{item.category}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  (prev, next) => prev.item.term === next.item.term && prev.item.category === next.item.category
);

// ─── Main Component ───────────────────────────────────────────────────────────
export const WordsToKnowScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();
  const { isTablet } = useResponsive();

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryItem | null>(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [floatingLetter, setFloatingLetter] = useState<string | null>(null);

  // Refs
  const sectionListRef = useRef<SectionList>(null);
  const sidebarRef = useRef<View>(null);
  const sidebarTop = useRef(0);
  const sidebarHeight = useRef(0);
  const lastScrolledLetter = useRef('');
  const searchInputRef = useRef<TextInput>(null);

  // Animations
  const sheetPanY = useRef(new Animated.Value(0)).current;
  const sheetScale = useRef(new Animated.Value(0.95)).current;
  const searchBarWidth = useRef(new Animated.Value(0)).current;
  const searchBarOpacity = useRef(new Animated.Value(0)).current;
  const headerTitleOpacity = useRef(new Animated.Value(1)).current;

  // Open search bar with animation
  const openSearch = useCallback(() => {
    setIsSearchVisible(true);
    Animated.parallel([
      Animated.timing(searchBarWidth, { toValue: 1, duration: 280, useNativeDriver: false }),
      Animated.timing(searchBarOpacity, { toValue: 1, duration: 300, useNativeDriver: false }),
      Animated.timing(headerTitleOpacity, { toValue: 0, duration: 200, useNativeDriver: false }),
    ]).start(() => {
      searchInputRef.current?.focus();
    });
  }, []);

  const closeSearch = useCallback(() => {
    searchInputRef.current?.blur();
    Animated.parallel([
      Animated.timing(searchBarWidth, { toValue: 0, duration: 240, useNativeDriver: false }),
      Animated.timing(searchBarOpacity, { toValue: 0, duration: 200, useNativeDriver: false }),
      Animated.timing(headerTitleOpacity, { toValue: 1, duration: 280, useNativeDriver: false }),
    ]).start(() => {
      setIsSearchVisible(false);
      setSearchQuery('');
    });
  }, []);

  // Sheet animations
  const closeSheets = useCallback(() => {
    Animated.timing(sheetPanY, { toValue: SCREEN_HEIGHT, duration: 240, useNativeDriver: false }).start(() => {
      setIsDetailVisible(false);
      setIsFilterVisible(false);
    });
  }, []);

  const sheetPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gs) => gs.dy > 8,
      onPanResponderMove: Animated.event([null, { dy: sheetPanY }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 100 || gs.vy > 0.5) closeSheets();
        else Animated.spring(sheetPanY, { toValue: 0, useNativeDriver: false }).start();
      },
    })
  ).current;

  useEffect(() => {
    if (isDetailVisible || isFilterVisible) {
      sheetPanY.setValue(0);
      sheetScale.setValue(0.95);
      Animated.parallel([
        Animated.spring(sheetPanY, { toValue: 0, useNativeDriver: false, tension: 70, friction: 12 }),
        Animated.spring(sheetScale, { toValue: 1, useNativeDriver: false, tension: 70, friction: 12 }),
      ]).start();
    }
  }, [isDetailVisible, isFilterVisible]);

  // Debounce search so filtering/sorting only fires 300ms after typing stops
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery.trim().toLowerCase()), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // ── Data ──────────────────────────────────────────────────────────────────
  const filteredData = useMemo(() => {
    return GLOSSARY_DATA.filter(item => {
      const matchSearch = !debouncedQuery ||
        item.term.toLowerCase().includes(debouncedQuery) ||
        item.definition.toLowerCase().includes(debouncedQuery) ||
        (item.amharic && item.amharic.toLowerCase().includes(debouncedQuery));
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [debouncedQuery, activeCategory]);

  const sections = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => a.term.localeCompare(b.term));
    const grouped: Record<string, GlossaryItem[]> = {};
    for (const item of sorted) {
      const letter = item.term[0].toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(item);
    }
    return Object.keys(grouped).sort().map(letter => ({ title: letter, data: grouped[letter] }));
  }, [filteredData]);

  // Active letters set
  const activeLetters = useMemo(() => new Set(sections.map(s => s.title)), [sections]);

  const relatedTerms = useMemo(() => {
    if (!selectedTerm) return [];
    return GLOSSARY_DATA.filter(i => i.category === selectedTerm.category && i.term !== selectedTerm.term).slice(0, 4);
  }, [selectedTerm]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleShowDetail = useCallback((item: GlossaryItem) => {
    setSelectedTerm(item);
    setIsDetailVisible(true);
  }, []);

  // ── Stable render callbacks (prevent new refs causing full re-renders) ────
  
  // Mathematical GPS mapping for instant jumping (0ms lag)
  const getItemLayout = useCallback((data: any, flatIndex: number) => {
    let offset = 0;
    let currentIndex = 0;

    for (let sIdx = 0; sIdx < sections.length; sIdx++) {
      const section = sections[sIdx];
      // Section header
      if (currentIndex === flatIndex) {
        return { length: SECTION_HEADER_HEIGHT, offset, index: flatIndex };
      }
      offset += SECTION_HEADER_HEIGHT;
      currentIndex++;

      // Items in this section
      const itemsLength = section.data.length;
      if (flatIndex < currentIndex + itemsLength) {
        const itemIdx = flatIndex - currentIndex;
        return {
          length: ITEM_HEIGHT,
          offset: offset + itemIdx * ITEM_HEIGHT,
          index: flatIndex,
        };
      }
      offset += itemsLength * ITEM_HEIGHT;
      currentIndex += itemsLength;

      // Section footer (none used)
    }
    return { length: 0, offset, index: flatIndex };
  }, [sections]);

  const renderItem = useCallback(
    ({ item }: { item: GlossaryItem }) => <TermItem item={item} onPress={handleShowDetail} />,
    [handleShowDetail]
  );

  const renderSectionHeader = useCallback(
    ({ section: { title } }: any) => <SectionHeader letter={title} />,
    []
  );

  const handleCopy = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  const handleShare = async (item: GlossaryItem) => {
    try {
      await Share.share({
        message: `📚 Zemen Scholar Dictionary\n\n${item.term}${item.amharic ? ` (${item.amharic})` : ''}\n\n${item.definition}`,
        title: item.term,
      });
    } catch { }
  };

  // ── A-Z Sidebar ─────────────────────────────────────────────────────────
  const getLetterFromY = useCallback((pageY: number) => {
    // Safety check if measurement hasn't happened
    if (sidebarHeight.current <= 0) return ALPHABET[0];
    
    const rel = pageY - sidebarTop.current;
    const letterH = sidebarHeight.current / ALPHABET.length;
    const idx = Math.max(0, Math.min(ALPHABET.length - 1, Math.floor(rel / letterH)));
    return ALPHABET[idx];
  }, []);

  const scrollToLetter = useCallback((targetLetter: string) => {
    // 1. Find the closest available section (Smart Snapping)
    let letterToJump: string | null = null;
    
    if (activeLetters.has(targetLetter)) {
      letterToJump = targetLetter;
    } else {
      const targetIdx = ALPHABET.indexOf(targetLetter);
      const nextBest = ALPHABET.slice(targetIdx).find(char => activeLetters.has(char));
      if (nextBest) {
        letterToJump = nextBest;
      } else {
        const prevBest = ALPHABET.slice(0, targetIdx).reverse().find(char => activeLetters.has(char));
        if (prevBest) letterToJump = prevBest;
      }
    }

    if (!letterToJump || lastScrolledLetter.current === letterToJump) return;
    lastScrolledLetter.current = letterToJump;

    // Trigger haptic feedback for premium feel
    try {
      Haptics.selectionAsync();
    } catch (e) { /* Fallback for missing package */ }

    const sIdx = sections.findIndex(s => s.title === letterToJump);
    if (sIdx < 0 || !sectionListRef.current) return;

    // Direct scroll for maximum speed on drag
    sectionListRef.current?.scrollToLocation({
      sectionIndex: sIdx,
      itemIndex: 0,
      viewOffset: 0,
      animated: false,
    });
  }, [sections, activeLetters]);

  const sidebarPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        // Bulletproof Calibration: Re-measure on every start to handle UI shifts
        sidebarRef.current?.measureInWindow((_x, py, _w, h) => {
          sidebarTop.current = py;
          sidebarHeight.current = h;
          
          lastScrolledLetter.current = '';
          const letter = getLetterFromY(e.nativeEvent.pageY);
          setFloatingLetter(letter);
          scrollToLetter(letter);
        });
      },
      onPanResponderMove: (e) => {
        const letter = getLetterFromY(e.nativeEvent.pageY);
        setFloatingLetter(letter);
        scrollToLetter(letter);
      },
      onPanResponderRelease: () => {
        lastScrolledLetter.current = '';
        setTimeout(() => setFloatingLetter(null), 300);
      },
      onPanResponderTerminate: () => {
        setFloatingLetter(null);
      }
    })
  ).current;

  const onSidebarLayout = useCallback(() => {
    sidebarRef.current?.measureInWindow((_x, py, _w, h) => {
      sidebarTop.current = py;
      sidebarHeight.current = h;
    });
  }, []);

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>

      {/* ── Header ── */}
      <View style={[styles.header, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}>

        {/* Normal header row */}
        <Animated.View style={[styles.headerNormal, { opacity: headerTitleOpacity }]}>
          <TouchableOpacity onPress={onBack} style={styles.backBtn} activeOpacity={0.7}>
            <ChevronLeft color={theme.colors.text} size={26} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Dictionary</Text>
            <Text style={[styles.headerCount, { color: theme.colors.textSecondary }]}>
              {filteredData.length} terms · A–Z
            </Text>
          </View>
          <TouchableOpacity onPress={openSearch} style={[styles.iconBtn, { backgroundColor: theme.colors.border + '40' }]} activeOpacity={0.7}>
            <Search color={theme.colors.text} size={18} strokeWidth={2.5} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFilterVisible(true)}
            style={[styles.iconBtn, { backgroundColor: activeCategory !== 'All' ? theme.colors.primary : theme.colors.border + '40' }]}
            activeOpacity={0.7}
          >
            <SlidersHorizontal color={activeCategory !== 'All' ? '#FFF' : theme.colors.text} size={18} />
            {activeCategory !== 'All' && <View style={styles.filterDot} />}
          </TouchableOpacity>
        </Animated.View>

        {/* Expanded search row */}
        {isSearchVisible && (
          <Animated.View style={[styles.searchRow, { opacity: searchBarOpacity }]}>
            <TouchableOpacity onPress={closeSearch} style={styles.backBtn} activeOpacity={0.7}>
              <ChevronLeft color={theme.colors.text} size={26} />
            </TouchableOpacity>
            <View style={[styles.searchBox, { backgroundColor: theme.colors.border + '40', borderColor: theme.colors.border }]}>
              <Search color={theme.colors.textSecondary} size={16} strokeWidth={2.5} />
              <TextInput
                ref={searchInputRef}
                style={[styles.searchInput, { color: theme.colors.text }]}
                placeholder="Search words, definitions..."
                placeholderTextColor={theme.colors.textSecondary}
                value={searchQuery}
                onChangeText={setSearchQuery}
                returnKeyType="search"
                autoCorrect={false}
                autoCapitalize="none"
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity
                  onPress={() => setSearchQuery('')}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                >
                  <View style={[styles.clearBtn, { backgroundColor: theme.colors.textSecondary + '25' }]}>
                    <X color={theme.colors.textSecondary} size={12} strokeWidth={3} />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </Animated.View>
        )}

        {/* Active filter chip */}
        {activeCategory !== 'All' && (
          <View style={[styles.activeCatChip, { backgroundColor: theme.colors.primary + '15' }]}>
            <Text style={[styles.activeCatText, { color: theme.colors.primary }]}>
              {activeCategory}
            </Text>
            <TouchableOpacity onPress={() => setActiveCategory('All')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <X color={theme.colors.primary} size={12} strokeWidth={3} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* ── Body (list + sidebar row) ── */}
      <View style={styles.body}>
        <SectionList
          ref={sectionListRef}
          style={{ flex: 1 }}
          sections={sections}
          keyExtractor={(item, index) => `${item.term}_${index}`}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          removeClippedSubviews={false}
          getItemLayout={getItemLayout}
          // Responsive virtualization: Lighter on mobile to prevent glitches, heavy on tablet for speed
          initialNumToRender={isTablet ? 50 : 20}
          maxToRenderPerBatch={isTablet ? 20 : 10}
          updateCellsBatchingPeriod={isTablet ? 50 : 100}
          windowSize={isTablet ? 10 : 5}
          onScrollToIndexFailed={(info) => {
            try {
              sectionListRef.current?.scrollToLocation({
                sectionIndex: info.index,
                itemIndex: 0,
                viewOffset: 0,
                animated: false,
              });
            } catch (err) {}
          }}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <BookOpen size={52} color={theme.colors.border} />
              <Text style={[styles.emptyTitle, { color: theme.colors.text }]}>Nothing found</Text>
              <Text style={[styles.emptySubtitle, { color: theme.colors.textSecondary }]}>
                Try a different word or category
              </Text>
            </View>
          }
        />

        {/* A-Z Sidebar — vertical column beside the list */}
        {!isSearchVisible && (
          <View
            ref={sidebarRef}
            style={[styles.sidebar, { backgroundColor: theme.colors.card + 'E8' }]}
            onLayout={onSidebarLayout}
            {...sidebarPanResponder.panHandlers}
            // More generous hitSlop on mobile so it's easier to grab
            hitSlop={{ left: isTablet ? 10 : 25, right: 10, top: 0, bottom: 0 }}
          >
            {ALPHABET.map(letter => (
              <View key={letter} style={styles.sidebarRow}>
                <Text style={[
                  styles.sidebarLetter,
                  { color: activeLetters.has(letter) ? theme.colors.primary : theme.colors.border },
                  activeLetters.has(letter) && styles.sidebarLetterActive,
                ]}>
                  {letter}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Floating letter bubble — absolute inside body */}
        {floatingLetter && (
          <View
            style={[styles.bubble, { backgroundColor: theme.colors.primary }]}
            pointerEvents="none"
          >
            <Text style={styles.bubbleLetter}>{floatingLetter}</Text>
          </View>
        )}
      </View>

      {/* ── Detail Sheet ── */}
      <Modal visible={isDetailVisible} transparent animationType="fade" onRequestClose={() => setIsDetailVisible(false)}>
        <View style={styles.overlay}>
          <Pressable style={StyleSheet.absoluteFillObject} onPress={() => setIsDetailVisible(false)} />
          <Animated.View
            style={[styles.detailSheet, { backgroundColor: theme.colors.card, transform: [{ translateY: sheetPanY }, { scale: sheetScale }] }]}
            {...sheetPanResponder.panHandlers}
          >
            <View style={styles.handle} />
            {selectedTerm && (
              <View style={styles.sheetBody}>
                <View style={styles.sheetTopRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.sheetTerm, { color: theme.colors.text }]}>{selectedTerm.term}</Text>
                    <View style={[styles.sheetCatBadge, { backgroundColor: theme.colors.primary + '15' }]}>
                      <Text style={[styles.sheetCatText, { color: theme.colors.primary }]}>{selectedTerm.category}</Text>
                    </View>
                  </View>
                  <View style={styles.sheetActions}>
                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.colors.border + '40' }]} onPress={() => handleShare(selectedTerm)}>
                      <Share2 size={17} color={theme.colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.colors.border + '40' }]} onPress={() => handleCopy(selectedTerm.definition)}>
                      <Copy size={17} color={theme.colors.textSecondary} />
                    </TouchableOpacity>
                  </View>
                </View>

                {selectedTerm.amharic && (
                  <View style={[styles.amharicCard, { backgroundColor: theme.colors.primary + '08', borderColor: theme.colors.primary + '20' }]}>
                    <Text style={[styles.amharicLabel, { color: theme.colors.primary }]}>አማርኛ</Text>
                    <Text style={[styles.amharicText, { color: theme.colors.text }]}>{selectedTerm.amharic}</Text>
                  </View>
                )}

                {(() => {
                  const parts = selectedTerm.definition.split(/Tip[ :]+/);
                  const def = parts[0].trim();
                  const tip = parts[1]?.trim();
                  return (
                    <>
                      <Text style={[styles.defText, { color: theme.colors.text }]}>{def}</Text>
                      {tip && (
                        <View style={styles.tipCard}>
                          <View style={styles.tipRow}>
                            <Sparkles size={14} color="#D48800" />
                            <Text style={styles.tipTitle}>MENTOR TIP</Text>
                          </View>
                          <Text style={styles.tipText}>{tip}</Text>
                        </View>
                      )}
                    </>
                  );
                })()}

                {relatedTerms.length > 0 && (
                  <View style={styles.relatedSection}>
                    <Text style={[styles.relatedLabel, { color: theme.colors.textSecondary }]}>RELATED TERMS</Text>
                    <View style={styles.relatedWrap}>
                      {relatedTerms.map(rt => (
                        <TouchableOpacity
                          key={rt.term}
                          style={[styles.relatedChip, { backgroundColor: theme.colors.border + '30', borderColor: theme.colors.border }]}
                          onPress={() => setSelectedTerm(rt)}
                        >
                          <Text style={[styles.relatedText, { color: theme.colors.text }]}>{rt.term}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                )}

                <TouchableOpacity style={[styles.gotItBtn, { backgroundColor: theme.colors.primary }]} onPress={() => setIsDetailVisible(false)}>
                  <Text style={styles.gotItText}>Got it ✓</Text>
                </TouchableOpacity>
              </View>
            )}
          </Animated.View>
        </View>
      </Modal>

      {/* ── Filter Sheet ── */}
      <Modal visible={isFilterVisible} transparent animationType="fade" onRequestClose={() => setIsFilterVisible(false)}>
        <View style={styles.overlay}>
          <Pressable style={StyleSheet.absoluteFillObject} onPress={() => setIsFilterVisible(false)} />
          <Animated.View
            style={[styles.filterSheet, { backgroundColor: theme.colors.card, transform: [{ translateY: sheetPanY }] }]}
            {...sheetPanResponder.panHandlers}
          >
            <View style={styles.handle} />
            <Text style={[styles.filterTitle, { color: theme.colors.text }]}>Filter by Category</Text>
            <View style={styles.filterGrid}>
              {CATEGORIES.map(cat => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.filterChip,
                    {
                      backgroundColor: activeCategory === cat ? theme.colors.primary : theme.colors.border + '30',
                      borderColor: activeCategory === cat ? theme.colors.primary : 'transparent',
                    },
                  ]}
                  onPress={() => { setActiveCategory(cat); setIsFilterVisible(false); }}
                >
                  <Text style={[styles.filterChipText, { color: activeCategory === cat ? '#FFF' : theme.colors.textSecondary }]}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={[styles.cancelBtn, { backgroundColor: theme.colors.border + '40' }]}
              onPress={() => setIsFilterVisible(false)}
            >
              <Text style={{ fontWeight: '700', fontSize: 15, color: theme.colors.textSecondary }}>Cancel</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 14,
    borderBottomWidth: 1,
    ...baseTheme.shadows.light,
  },
  headerNormal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backBtn: {
    padding: 4,
    marginLeft: -4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: -0.7,
  },
  headerCount: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 1,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  filterDot: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    borderWidth: 1.5,
    borderColor: '#FFF',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    top: 8,
    left: 20,
    right: 20,
    bottom: 14,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderRadius: 13,
    borderWidth: 1,
    paddingHorizontal: 13,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  clearBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCatChip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  activeCatText: {
    fontSize: 12,
    fontWeight: '700',
  },

  // Body — row layout: list takes flex:1, sidebar is fixed column
  body: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  listContent: { paddingVertical: 4 },

  // Term item
  termItem: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  termRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
  },
  termLeft: { flex: 1 },
  termTitle: { fontSize: 16, fontWeight: '700', letterSpacing: -0.2 },
  termSub: { fontSize: 12, fontWeight: '500', marginTop: 2 },
  catPill: { paddingHorizontal: 9, paddingVertical: 4, borderRadius: 8 },
  catPillText: { fontSize: 9, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.4 },

  // Sidebar — fixed-width column, naturally vertical beside SectionList
  sidebar: {
    width: 28,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  sidebarRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    minHeight: 8,
  },
  sidebarLetter: { fontSize: 9.5, fontWeight: '700', textAlign: 'center' },
  sidebarLetterActive: { fontSize: 11, fontWeight: '900' },

  // Floating bubble — centred over the list
  bubble: {
    position: 'absolute',
    left: '35%',
    top: '38%',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
  },
  bubbleLetter: { fontSize: 32, fontWeight: '900', color: '#FFF' },

  // Empty
  emptyContainer: { alignItems: 'center', marginTop: 100, gap: 10 },
  emptyTitle: { fontSize: 20, fontWeight: '800' },
  emptySubtitle: { fontSize: 14, fontWeight: '500' },

  // Sheets
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.42)',
    justifyContent: 'flex-end',
  },
  handle: {
    width: 40, height: 4, borderRadius: 2, backgroundColor: '#CCC',
    alignSelf: 'center', marginBottom: 20,
  },
  detailSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 44 : 32,
    minHeight: SCREEN_HEIGHT * 0.5,
  },
  sheetBody: { paddingHorizontal: 24 },
  sheetTopRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 14, gap: 10 },
  sheetTerm: { fontSize: 28, fontWeight: '900', letterSpacing: -0.8, marginBottom: 8 },
  sheetCatBadge: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  sheetCatText: { fontSize: 10, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5 },
  sheetActions: { flexDirection: 'row', gap: 8, marginTop: 4 },
  actionBtn: { width: 38, height: 38, borderRadius: 11, justifyContent: 'center', alignItems: 'center' },
  amharicCard: { borderWidth: 1, borderRadius: 14, padding: 14, marginBottom: 16 },
  amharicLabel: { fontSize: 11, fontWeight: '800', letterSpacing: 0.4, marginBottom: 4 },
  amharicText: { fontSize: 17, fontWeight: '700', lineHeight: 24 },
  defText: { fontSize: 16, lineHeight: 26, fontWeight: '500', marginBottom: 16 },
  tipCard: { backgroundColor: '#FFF8E6', borderWidth: 1, borderColor: '#FFE082', borderRadius: 14, padding: 14, marginBottom: 20 },
  tipRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  tipTitle: { fontSize: 10, fontWeight: '900', color: '#D48800', letterSpacing: 0.5 },
  tipText: { fontSize: 14, lineHeight: 21, color: '#8A5800', fontWeight: '600' },
  relatedSection: { marginBottom: 22 },
  relatedLabel: { fontSize: 10, fontWeight: '900', letterSpacing: 1, marginBottom: 10 },
  relatedWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  relatedChip: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 10, borderWidth: 1 },
  relatedText: { fontSize: 13, fontWeight: '700' },
  gotItBtn: { height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  gotItText: { color: '#FFF', fontSize: 16, fontWeight: '800' },

  // Filter
  filterSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 44 : 32,
    paddingHorizontal: 24,
  },
  filterTitle: { fontSize: 20, fontWeight: '900', marginBottom: 20, textAlign: 'center', letterSpacing: -0.5 },
  filterGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 24 },
  filterChip: { paddingHorizontal: 14, paddingVertical: 10, borderRadius: 12, borderWidth: 1.5 },
  filterChipText: { fontSize: 13, fontWeight: '700' },
  cancelBtn: { height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
});

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface EquipmentItem {
  id: number;
  name: string;
  category: 'tent' | 'backpack' | 'sleep' | 'kitchen' | 'lighting' | 'safety';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  seasons: Array<'spring' | 'summer' | 'autumn' | 'winter'>;
  weightKg: number;
  price: number;
  popularity: number;
  imageUrl: string;
  description: string;
  tags: string[];
}

const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 1,
    name: '松嶺三人帳',
    category: 'tent',
    difficulty: 'beginner',
    seasons: ['spring', 'summer', 'autumn'],
    weightKg: 4.6,
    price: 10800,
    popularity: 96,
    imageUrl:
      'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1d?auto=format&fit=crop&w=1200&q=80',
    description: '雙門雙窗設計，搭配全景天窗與抗風支架，新手也能快速搭設。',
    tags: ['3人同行', '快速搭建', '抗風雪'],
  },
  {
    id: 2,
    name: '凌峰 55L 輕量背包',
    category: 'backpack',
    difficulty: 'intermediate',
    seasons: ['spring', 'summer', 'autumn'],
    weightKg: 1.4,
    price: 6200,
    popularity: 88,
    imageUrl:
      'https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=1200&q=80',
    description: '背負系統加強通風與支撐，長天數縱走也能保持舒適。',
    tags: ['55L 容量', '水袋相容', '人體工學'],
  },
  {
    id: 3,
    name: '極光 15 度睡袋',
    category: 'sleep',
    difficulty: 'beginner',
    seasons: ['autumn', 'winter'],
    weightKg: 1.9,
    price: 5400,
    popularity: 91,
    imageUrl:
      'https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=1200&q=80',
    description: '中空纖維與防濕表布結合，寒流夜晚也能保暖到位。',
    tags: ['舒適 15°C', '防潮內裡', '雙向拉鍊'],
  },
  {
    id: 4,
    name: '探路者全能炊具組',
    category: 'kitchen',
    difficulty: 'beginner',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    weightKg: 1.2,
    price: 3980,
    popularity: 82,
    imageUrl:
      'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=80',
    description: '堆疊式鍋具、酒精爐座與防風板一次備齊，煮食效率高。',
    tags: ['兩人份', '易清洗', '收納緊湊'],
  },
  {
    id: 5,
    name: '星火 800 流明營燈',
    category: 'lighting',
    difficulty: 'beginner',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    weightKg: 0.6,
    price: 2480,
    popularity: 85,
    imageUrl:
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
    description: 'USB-C 充電，擁有 360 度暖白光與急難閃爍模式。',
    tags: ['800 流明', 'USB-C 充電', '調光'],
  },
  {
    id: 6,
    name: '峰馭碳纖維登山杖',
    category: 'safety',
    difficulty: 'intermediate',
    seasons: ['spring', 'summer', 'autumn'],
    weightKg: 0.42,
    price: 3980,
    popularity: 79,
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    description: '超輕碳纖維桿身搭配快扣調節，長途健行穩定省力。',
    tags: ['碳纖維', '快扣鎖', '軟木握把'],
  },
  {
    id: 7,
    name: '暖息自充氣睡墊',
    category: 'sleep',
    difficulty: 'beginner',
    seasons: ['spring', 'summer', 'autumn'],
    weightKg: 0.72,
    price: 3280,
    popularity: 77,
    imageUrl:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    description: '高 R 值結構隔絕地面濕冷，附著力處理不易滑動。',
    tags: ['R 值 4.5', '自動充氣', '靜音'],
  },
  {
    id: 8,
    name: '鈦火雙人鍋組',
    category: 'kitchen',
    difficulty: 'advanced',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    weightKg: 0.38,
    price: 4680,
    popularity: 84,
    imageUrl:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80',
    description: '鈦合金導熱快速又耐用，適合想減重又講究料理的你。',
    tags: ['鈦合金', '快速煮沸', '超輕量'],
  },
  {
    id: 9,
    name: '雪嶺四季高山帳',
    category: 'tent',
    difficulty: 'advanced',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    weightKg: 5.8,
    price: 15800,
    popularity: 93,
    imageUrl:
      'https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=1200&q=80',
    description: '雙層防風布與雪裙設計，面對嚴峻山岳依舊穩如磐石。',
    tags: ['四季適用', '雙層布料', '雪裙'],
  },
  {
    id: 10,
    name: '晨光 20 度羽絨被式睡袋',
    category: 'sleep',
    difficulty: 'intermediate',
    seasons: ['spring', 'summer', 'autumn'],
    weightKg: 0.89,
    price: 7980,
    popularity: 87,
    imageUrl:
      'https://images.unsplash.com/photo-1531870979163-2c1dfd4ba810?auto=format&fit=crop&w=1200&q=80',
    description: '850FP 防潑水羽絨，附睡墊固定帶，翻身也不漏風。',
    tags: ['850FP', '防潑水', '可開闔'],
  },
  {
    id: 11,
    name: '遠征衛星定位器',
    category: 'safety',
    difficulty: 'advanced',
    seasons: ['spring', 'summer', 'autumn', 'winter'],
    weightKg: 0.21,
    price: 9200,
    popularity: 90,
    imageUrl:
      'https://images.unsplash.com/photo-1516571979642-611b54f68947?auto=format&fit=crop&w=1200&q=80',
    description: '全球雙向訊息與 SOS 緊急鍵，支援行程軌跡分享。',
    tags: ['衛星通訊', 'SOS', '氣象提醒'],
  },
  {
    id: 12,
    name: '晨行 28L 日用包',
    category: 'backpack',
    difficulty: 'beginner',
    seasons: ['spring', 'summer', 'autumn'],
    weightKg: 0.78,
    price: 2980,
    popularity: 83,
    imageUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    description: '透氣背板與快速取物側袋，輕裝郊山或都會通勤皆適用。',
    tags: ['28L', '含雨罩', '快取口袋'],
  },
];

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80';

const categoryLabels: Record<EquipmentItem['category'], string> = {
  tent: '帳篷',
  backpack: '背包',
  sleep: '睡眠',
  kitchen: '炊具',
  lighting: '照明',
  safety: '安全',
};

const difficultyLabels: Record<EquipmentItem['difficulty'], string> = {
  beginner: '入門',
  intermediate: '進階',
  advanced: '專業',
};

const seasonLabels: Record<EquipmentItem['seasons'][number], string> = {
  spring: '春',
  summer: '夏',
  autumn: '秋',
  winter: '冬',
};

const sortLabelMap: Record<string, string> = {
  recommended: '推薦排序',
  priceLow: '價格：低到高',
  priceHigh: '價格：高到低',
  weightLight: '重量：輕到重',
  weightHeavy: '重量：重到輕',
};

const SPRING_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const baseTransition = { duration: 0.35, ease: SPRING_EASE };

const priceFormatter = new Intl.NumberFormat('zh-TW', {
  style: 'currency',
  currency: 'TWD',
  maximumFractionDigits: 0,
});

export const EquipmentPage: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState<'all' | EquipmentItem['category']>('all');
  const [difficulty, setDifficulty] = React.useState<'all' | EquipmentItem['difficulty']>('all');
  const [seasons, setSeasons] = React.useState<Array<EquipmentItem['seasons'][number]>>([]);
  const [sortBy, setSortBy] = React.useState<keyof typeof sortLabelMap>('recommended');
  const shouldReduceMotion = useReducedMotion();

  const handleSeasonToggle = (_: React.MouseEvent<HTMLElement>, newSeasons: typeof seasons) => {
    setSeasons(newSeasons ?? []);
  };

  const handleDifficulty = (_: React.MouseEvent<HTMLElement>, value: typeof difficulty) => {
    setDifficulty(value ?? 'all');
  };

  const handleSortChange = (event: SelectChangeEvent<typeof sortBy>) => {
    setSortBy(event.target.value as typeof sortBy);
  };

  const handleCategoryChange = (event: SelectChangeEvent<typeof category>) => {
    setCategory(event.target.value as typeof category);
  };

  const handleImageError = React.useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = FALLBACK_IMAGE;
  }, []);

  const filteredItems = React.useMemo(() => {
    return EQUIPMENT_DATA.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' ? true : item.category === category;
      const matchesDifficulty = difficulty === 'all' ? true : item.difficulty === difficulty;
      const matchesSeasons =
        seasons.length === 0 ? true : seasons.every((season) => item.seasons.includes(season));

      return matchesSearch && matchesCategory && matchesDifficulty && matchesSeasons;
    });
  }, [search, category, difficulty, seasons]);

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      switch (sortBy) {
        case 'priceLow':
          return a.price - b.price;
        case 'priceHigh':
          return b.price - a.price;
        case 'weightLight':
          return a.weightKg - b.weightKg;
        case 'weightHeavy':
          return b.weightKg - a.weightKg;
        default:
          return b.popularity - a.popularity;
      }
    });
  }, [filteredItems, sortBy]);

  const pageInitial = React.useMemo(
    () => (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }),
    [shouldReduceMotion],
  );
  const filterInitial = React.useMemo(
    () => (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }),
    [shouldReduceMotion],
  );
  const cardVariants = React.useMemo(
    () =>
      shouldReduceMotion
        ? {
            initial: { opacity: 1, y: 0 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 1, y: 0 },
          }
        : {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -16 },
          },
    [shouldReduceMotion],
  );

  return (
    <motion.div
      initial={pageInitial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: SPRING_EASE }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Stack spacing={{ xs: 4, md: 5 }}>
          <motion.div
            layout
            initial={filterInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={baseTransition}
          >
            <Box textAlign="center">
              <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }} gutterBottom>
                露營裝備列表
              </Typography>
              <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
                運用搜尋與多重篩選，快速找到符合行程與氣候的露營裝備，打造專屬於你的完美營地體驗。
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            layout
            initial={filterInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={baseTransition}
          >
            <Card sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack spacing={{ xs: 2.5, md: 3.5 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                      fullWidth
                      label="搜尋裝備"
                      placeholder="輸入裝備名稱"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <FormControl fullWidth>
                      <InputLabel id="equipment-category">裝備分類</InputLabel>
                      <Select
                        labelId="equipment-category"
                        label="裝備分類"
                        value={category}
                        onChange={handleCategoryChange}
                      >
                        <MenuItem value="all">全部分類</MenuItem>
                        {Object.entries(categoryLabels).map(([value, label]) => (
                          <MenuItem key={value} value={value}>
                            {label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <FormControl fullWidth>
                      <InputLabel id="sort-by">排序方式</InputLabel>
                      <Select
                        labelId="sort-by"
                        label="排序方式"
                        value={sortBy}
                        onChange={handleSortChange}
                      >
                        {Object.entries(sortLabelMap).map(([value, label]) => (
                          <MenuItem key={value} value={value}>
                            {label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    體驗程度
                  </Typography>
                  <ToggleButtonGroup
                    value={difficulty}
                    exclusive
                    onChange={handleDifficulty}
                    color="primary"
                    size="small"
                  >
                    <ToggleButton value="all">不限</ToggleButton>
                    {Object.entries(difficultyLabels).map(([value, label]) => (
                      <ToggleButton key={value} value={value}>
                        {label}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    適用季節
                  </Typography>
                  <ToggleButtonGroup
                    value={seasons}
                    onChange={handleSeasonToggle}
                    color="primary"
                    size="small"
                    aria-label="季節篩選"
                  >
                    {Object.entries(seasonLabels).map(([value, label]) => (
                      <ToggleButton key={value} value={value}>
                        {label}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>
              </Stack>
            </Card>
          </motion.div>

          <Box>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              共找到{' '}
              <motion.span
                key={sortedItems.length}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={baseTransition}
                style={{ display: 'inline-block' }}
              >
                {sortedItems.length}
              </motion.span>{' '}
              件裝備
            </Typography>
            <Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="stretch">
              <AnimatePresence mode="popLayout">
                {sortedItems.map((item) => (
                  <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <motion.div
                      layout
                      initial={cardVariants.initial}
                      animate={cardVariants.animate}
                      exit={cardVariants.exit}
                      transition={baseTransition}
                      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                      style={{ height: '100%' }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          onError={handleImageError}
                          sx={{
                            width: '100%',
                            aspectRatio: '4 / 3',
                            objectFit: 'cover',
                            flexShrink: 0,
                          }}
                        />
                        <CardContent
                          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}
                        >
                          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                            <Chip
                              size="small"
                              label={categoryLabels[item.category]}
                              color="primary"
                            />
                            <Chip
                              size="small"
                              label={difficultyLabels[item.difficulty]}
                              variant="outlined"
                            />
                            <Chip
                              size="small"
                              label={`人氣 ${item.popularity}`}
                              variant="outlined"
                            />
                          </Stack>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            flexWrap="wrap"
                            sx={{ mt: 'auto' }}
                          >
                            <Chip
                              size="small"
                              variant="outlined"
                              label={priceFormatter.format(item.price)}
                            />
                            <Chip size="small" variant="outlined" label={`${item.weightKg} 公斤`} />
                            <Stack direction="row" spacing={0.5} flexWrap="wrap">
                              {item.seasons.map((season) => (
                                <Chip
                                  key={season}
                                  size="small"
                                  label={seasonLabels[season]}
                                  variant="outlined"
                                />
                              ))}
                            </Stack>
                          </Stack>
                          <Stack direction="row" spacing={0.5} flexWrap="wrap">
                            {item.tags.map((tag) => (
                              <Chip key={tag} size="small" label={tag} variant="outlined" />
                            ))}
                          </Stack>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </AnimatePresence>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </motion.div>
  );
};

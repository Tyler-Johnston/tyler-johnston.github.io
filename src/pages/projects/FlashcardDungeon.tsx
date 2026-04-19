import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Card,
  Group,
  Button,
  Box,
  ThemeIcon,
  Grid,
  ActionIcon,
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconArrowLeft,
  IconExternalLink,
  IconLanguage,
  IconMap,
  IconDatabase,
  IconDeviceMobile,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  fdEmberBattle,
  fdCryptBattle,
  fdShop1,
  fdShop2,
  fdJournal,
  fdMonsterManualEmber,
  fdMonsterManualCrypt,
  fdStats1,
  fdStats2,
  fdEmberRoadmap,
  fdCryptRoadmap,
  fdEmberAchievements,
  fdCryptAchievements,
} from '../../data/imageAssets';
import { TechBadge } from '../../components/ui/TechBadge';

type BeatImageItem = { src: string; label?: string };

type NarrativeBeat = {
  label: string;
  heading: string;
  body: string;
  color: string;
  images: BeatImageItem[];
};

const narrativeBeats: NarrativeBeat[] = [
  {
    label: 'The Dungeon',
    heading: 'Every card is a weapon',
    body: 'Answer correctly and you deal damage. Answer wrong and the monster strikes back. Ember Fantasy is unlocked from the start — Moonlit Crypt is a shop purchase.',
    color: 'orange',
    images: [
      { src: fdEmberBattle, label: 'Ember Fantasy' },
      { src: fdCryptBattle, label: 'Moonlit Crypt' },
    ],
  },
  {
    label: 'Between Runs',
    heading: 'Gold carries over',
    body: 'Every run earns gold. Spend it in the shop on permanent upgrades: health boosts, weapons, armor, and new dungeons. The shop turns isolated runs into a real meta-progression loop.',
    color: 'yellow',
    images: [
      { src: fdShop1, label: 'Shop' },
      { src: fdShop2, label: 'Shop — Upgrades' },
    ],
  },
  {
    label: 'Your Decks',
    heading: 'Study your way',
    body: 'Create and manage your own cards in the Journal — search, filter by status (Learning / Review / New), and import full decks. Or skip custom decks entirely and follow the prebuilt CEFR roadmap.',
    color: 'violet',
    images: [{ src: fdJournal }],
  },
  {
    label: 'Monster Manual',
    heading: 'Fill the bestiary',
    body: 'Every enemy you encounter gets logged: Tier, HP, ATK, unique ability, and your personal kill/death record per dungeon. A completionist layer that rewards exploring every dungeon.',
    color: 'red',
    images: [
      { src: fdMonsterManualEmber, label: 'Ember Fantasy' },
      { src: fdMonsterManualCrypt, label: 'Moonlit Crypt' },
    ],
  },
  {
    label: 'Your Progress',
    heading: 'Everything tracked',
    body: 'Win rate, total runs, combat damage, best runs, and full per-deck learning history across every session — all persisted locally so nothing disappears between sessions.',
    color: 'teal',
    images: [
      { src: fdStats1, label: 'Overview' },
      { src: fdStats2, label: 'History' },
    ],
  },
  {
    label: 'The World',
    heading: 'Structured from A1 to B2',
    body: 'Prebuilt language decks organized by CEFR proficiency level across 7 languages. Complete nodes to unlock adjacent ones and progress through a structured path — or use your own decks entirely.',
    color: 'indigo',
    images: [
      { src: fdEmberRoadmap, label: 'Ember Fantasy' },
      { src: fdCryptRoadmap, label: 'Moonlit Crypt' },
    ],
  },
  {
    label: 'Achievements',
    heading: 'Every run counts',
    body: 'Achievements track milestones across combat, learning streaks, and dungeon completion.',
    color: 'teal',
    images: [
      { src: fdEmberAchievements, label: 'Ember Fantasy' },
      { src: fdCryptAchievements, label: 'Moonlit Crypt' },
    ],
  },
];

const techStack = [
  { tech: 'Angular 17+' },
  { tech: 'TypeScript' },
  { tech: 'Angular Signals' },
  { tech: 'IndexedDB' },
  { tech: 'Supabase' },
  { tech: 'CEFR Standard' },
];

const architecturePoints = [
  {
    icon: IconMap,
    title: 'CEFR Node Graph',
    detail: 'A directed node graph maps language topics to A1–B2 proficiency levels. Users unlock adjacent nodes as they complete decks, building a structured progression path across 7 languages.',
    stat: '7 languages · A1–B2',
    color: 'indigo',
  },
  {
    icon: IconLanguage,
    title: 'Prebuilt Deck System',
    detail: 'Static TypeScript arrays per language and CEFR level live under prebuilt/<language>/. Decks are fetched by languageCode + nodeId at runtime — adding new content requires no changes to app logic.',
    stat: 'Lookup by languageCode + nodeId',
    color: 'cyan',
  },
  {
    icon: IconDatabase,
    title: 'Offline-First + Cloud Sync',
    detail: 'All progress lives in IndexedDB — full functionality with no account required. Supabase (PostgreSQL) handles optional cloud sync: authenticated users push and pull deck data across devices.',
    stat: 'IndexedDB local · Supabase optional',
    color: 'violet',
  },
  {
    icon: IconDeviceMobile,
    title: 'Standalone Components & Signals',
    detail: "Built with Angular's standalone component model and signals for fine-grained reactive state. Signals drive deck selection, progress tracking, and UI state throughout the app.",
    stat: 'Standalone components · Signals',
    color: 'teal',
  },
];

function BeatImage({ images, isDark }: { images: BeatImageItem[]; isDark: boolean }) {
  const [index, setIndex] = useState(0);
  const isMulti = images.length > 1;
  const current = images[index];
  const border = isDark ? '#2e3347' : 'var(--mantine-color-gray-3)';
  const shadow = isDark ? '0 8px 40px rgba(0,0,0,0.6)' : '0 8px 40px rgba(0,0,0,0.12)';
  const go = (next: number) => setIndex((next + images.length) % images.length);

  return (
    <Box style={{
      background: isDark ? '#0f1117' : '#f1f5f9',
      borderRadius: 16,
      position: 'relative',
      overflow: 'hidden',
      minHeight: 380,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: 32 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={current.src}
            alt={current.label || ''}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              maxHeight: 420, maxWidth: '100%',
              objectFit: 'contain', borderRadius: 8, boxShadow: shadow,
              display: 'block',
            }}
          />
        </AnimatePresence>

        {isMulti && current.label && (
          <Box style={{
            position: 'absolute', top: 12, right: 12,
            background: isDark ? 'rgba(20,22,34,0.9)' : 'rgba(255,255,255,0.9)',
            border: `1px solid ${border}`, borderRadius: 6,
            padding: '3px 10px', backdropFilter: 'blur(4px)',
          }}>
            <Text size="xs" fw={600}>{current.label}</Text>
          </Box>
        )}

        {isMulti && (
          <>
            <ActionIcon
              size="sm" radius="xl" variant="filled" onClick={() => go(index - 1)}
              style={{
                position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                background: isDark ? 'rgba(30,33,48,0.85)' : 'rgba(255,255,255,0.85)',
                border: `1px solid ${border}`, backdropFilter: 'blur(4px)',
              }}
            >
              <IconChevronLeft size={12} color={isDark ? '#f1f5f9' : '#1e2130'} />
            </ActionIcon>
            <ActionIcon
              size="sm" radius="xl" variant="filled" onClick={() => go(index + 1)}
              style={{
                position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                background: isDark ? 'rgba(30,33,48,0.85)' : 'rgba(255,255,255,0.85)',
                border: `1px solid ${border}`, backdropFilter: 'blur(4px)',
              }}
            >
              <IconChevronRight size={12} color={isDark ? '#f1f5f9' : '#1e2130'} />
            </ActionIcon>
          </>
        )}
      </Box>

      {isMulti && (
        <Group justify="center" pb={12} gap={6} style={{ flexShrink: 0 }}>
          {images.map((_, i) => (
            <Box
              key={i} onClick={() => setIndex(i)}
              style={{
                width: i === index ? 20 : 6, height: 6, borderRadius: 3,
                background: i === index
                  ? 'var(--mantine-color-cyan-5)'
                  : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                cursor: 'pointer', transition: 'width 0.2s ease, background 0.2s ease',
              }}
            />
          ))}
        </Group>
      )}
    </Box>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

export function FlashcardDungeon() {
  const isDark = true;


  const surface = isDark ? '#1a1d27' : '#ffffff';
  const border = isDark ? '#2e3347' : 'var(--mantine-color-gray-3)';

  return (
    <Container size="lg" py={60}>

      <motion.div {...fadeUp(0)}>
        <Button
          component={Link} to="/projects"
          variant="subtle" color="gray"
          leftSection={<IconArrowLeft size={16} />}
          mb="xl" size="sm"
        >
          All Projects
        </Button>
      </motion.div>

      <motion.div {...fadeUp(0.05)}>
        <Stack gap="xs" mb={72}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>
            Angular · Full-Stack Web App
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
            Flashcard Dungeon
          </Title>
          <Text size="lg" c="dimmed" maw={660} lh={1.7}>
            Answer right, deal damage. Answer wrong, take a hit. A dungeon-crawling flashcard app where studying a language sends you into battle.
          </Text>
          <Group gap="sm" mt={12} wrap="wrap">
            <Button
              component="a" href="#" target="_blank"
              color="cyan" leftSection={<IconExternalLink size={16} />}
            >
              Try Web App
            </Button>
          </Group>
        </Stack>
      </motion.div>

      {narrativeBeats.map((beat, i) => {
        const imageFirst = i % 2 === 0;

        const imageNode = <BeatImage images={beat.images} isDark={isDark} />;

        const textNode = (
          <Stack gap="sm" justify="center" style={{ height: '100%', paddingTop: 8, paddingBottom: 8 }}>
            <Text size="xs" tt="uppercase" fw={700} c={beat.color} style={{ letterSpacing: '0.12em' }}>
              {beat.label}
            </Text>
            <Title order={2} style={{ fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.2 }}>
              {beat.heading}
            </Title>
            <Text size="md" c="dimmed" lh={1.8}>
              {beat.body}
            </Text>
          </Stack>
        );

        return (
          <motion.div key={beat.label} {...fadeUp(0.08)}>
            <Grid gutter={48} align="center" mb={80}>
              {imageFirst ? (
                <>
                  <Grid.Col span={{ base: 12, sm: 6 }}>{imageNode}</Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>{textNode}</Grid.Col>
                </>
              ) : (
                <>
                  <Grid.Col span={{ base: 12, sm: 6 }} visibleFrom="sm">{textNode}</Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>{imageNode}</Grid.Col>
                  <Grid.Col span={12} hiddenFrom="sm">{textNode}</Grid.Col>
                </>
              )}
            </Grid>
          </motion.div>
        );
      })}

      <motion.div {...fadeUp(0.08)}>
        <Text size="xs" tt="uppercase" fw={700} c="cyan" mb={24} style={{ letterSpacing: '0.12em' }}>
          Under the Hood
        </Text>
      </motion.div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb={80}>
        {architecturePoints.map((point, i) => (
          <motion.div key={point.title} {...fadeUp(i * 0.07)}>
            <Card style={{ border: `1px solid ${border}`, background: surface, height: '100%' }}>
              <Group gap="sm" mb="sm" align="center" wrap="nowrap">
                <ThemeIcon color={point.color} variant="light" size="lg" radius="md" style={{ flexShrink: 0 }}>
                  <point.icon size={20} />
                </ThemeIcon>
                <Box>
                  <Text fw={700} size="sm">{point.title}</Text>
                  <Text size="xs" c={`${point.color}.4`} fw={500}>{point.stat}</Text>
                </Box>
              </Group>
              <Text size="sm" c="dimmed" lh={1.7}>{point.detail}</Text>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>

      <motion.div {...fadeUp(0.08)}>
        <Text size="xs" tt="uppercase" fw={700} c="cyan" mb={12} style={{ letterSpacing: '0.12em' }}>Stack</Text>
        <Group gap="sm" wrap="wrap">
          {techStack.map((row) => (
            <TechBadge key={row.tech} label={row.tech} />
          ))}
        </Group>
      </motion.div>

    </Container>
  );
}

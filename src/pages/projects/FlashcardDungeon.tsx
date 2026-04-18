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
  List,
  Table,
  ActionIcon,
  useMantineColorScheme,
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
  IconCircleCheck,
  IconLanguage,
  IconMap,
  IconDatabase,
  IconDeviceMobile,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  fdLanding,
  fdEmberBattle,
  fdCryptBattle,
  fdMonsterManualEmber,
  fdMonsterManualCrypt,
  fdRoadmap,
  fdShop,
  fdJournal,
  fdStats,
  fdStats2,
  fdAchievements,
  fdSettings,
} from '../../data/imageAssets';
import { TechBadge } from '../../components/ui/TechBadge';

type SingleSlide = { src: string; label: string; caption: string };
type PairSlide = {
  pair: [{ src: string; label: string }, { src: string; label: string }];
  label: string;
  caption: string;
};
type Slide = SingleSlide | PairSlide;

const slides: Slide[] = [
  {
    src: fdLanding,
    label: 'Home Screen',
    caption: 'Dashboard showing day streak, active decks with progress bars, and navigation to Shop, Stats, and Roadmap.',
  },
  {
    pair: [
      { src: fdEmberBattle, label: 'Ember Fantasy' },
      { src: fdCryptBattle, label: 'Moonlit Crypt' },
    ],
    label: 'Dungeons',
    caption: 'Ember Fantasy (default) and Moonlit Crypt (shop unlock).',
  },
  {
    src: fdShop,
    label: 'Shop',
    caption: 'Permanent upgrades purchased with in-game gold. Dungeons, health upgrades, and meta items all persist across runs.',
  },
  {
    src: fdJournal,
    label: 'Journal',
    caption: 'Full deck editor with search, card status breakdown (Learning / Review / New), import from .txt or paste, and per-card scheduling info.',
  },
  {
    pair: [
      { src: fdStats, label: 'Stats' },
      { src: fdStats2, label: 'Stats — History' },
    ],
    label: 'Stats',
    caption: 'Tracks runs, win rate, combat damage, best run, and full per-deck learning history across all sessions.',
  },
  {
    pair: [
      { src: fdMonsterManualEmber, label: 'Ember Fantasy' },
      { src: fdMonsterManualCrypt, label: 'Moonlit Crypt' },
    ],
    label: 'Monster Manual',
    caption: 'Bestiary tracking every enemy — Tier, HP, ATK, unique ability, and your personal kill/death record per dungeon.',
  },
  {
    src: fdRoadmap,
    label: 'CEFR Roadmap',
    caption: 'Node graph for European Portuguese. Gold = mastered, teal ring = in-progress. Each node maps to a prebuilt deck of vocabulary or grammar cards.',
  },
  {
    pair: [
      { src: fdAchievements, label: 'Achievements' },
      { src: fdSettings, label: 'Settings' },
    ],
    label: 'Achievements & Settings',
    caption: 'Achievement system tracking milestones across runs, plus app settings for audio, sync, and display preferences.',
  },
];

const techStack = [
  { tech: 'Angular 17+', role: 'Frontend framework. Standalone components, lazy-loaded feature modules' },
  { tech: 'TypeScript', role: 'Static typing throughout. Interfaces, generics, strict mode' },
  { tech: 'Angular Signals', role: 'Reactive state without NgRx' },
  { tech: 'IndexedDB', role: 'Offline-first client-side persistence for decks, progress, and user data' },
  { tech: 'Supabase', role: 'Cloud sync backend. PostgreSQL database with auth and real-time APIs' },
  { tech: 'CEFR Standard', role: 'A1–B2 proficiency mapping for node graph and deck organization' },
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
    detail: "Built with Angular's standalone component model and signals for fine-grained reactive state. No NgRx boilerplate — signals drive deck selection, progress tracking, and UI state.",
    stat: 'Zero NgRx — signals only',
    color: 'teal',
  },
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

function ScreenshotCarousel({ slides, isDark, border, surface }: {
  slides: Slide[]; isDark: boolean; border: string; surface: string;
}) {
  const [[index, direction], setSlide] = useState([0, 0]);

  const go = (next: number) => {
    const dir = next > index ? 1 : -1;
    setSlide([(next + slides.length) % slides.length, dir]);
  };

  const current = slides[index];
  const isPair = 'pair' in current;

  return (
    <Box style={{ border: `1px solid ${border}`, borderRadius: 16, background: surface, overflow: 'hidden' }}>
      <Box style={{
        position: 'relative', background: isDark ? '#0f1117' : '#f1f5f9',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: 420, overflow: 'hidden',
      }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
              width: '100%', padding: '24px 48px', gap: 12,
            }}
          >
            {isPair ? (
              (current as PairSlide).pair.map(({ src, label }) => (
                <Box key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Text size="xs" fw={600} c="dimmed">{label}</Text>
                  <img
                    src={src} alt={label}
                    style={{
                      width: '100%', maxHeight: 400, objectFit: 'contain', borderRadius: 8,
                      boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.6)' : '0 8px 40px rgba(0,0,0,0.12)',
                    }}
                  />
                </Box>
              ))
            ) : (
              <img
                src={(current as SingleSlide).src} alt={(current as SingleSlide).label}
                style={{
                  maxHeight: 480, maxWidth: '100%', objectFit: 'contain', borderRadius: 8,
                  boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.6)' : '0 8px 40px rgba(0,0,0,0.12)',
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <ActionIcon
          variant="filled" color="dark" radius="xl" size="lg" onClick={() => go(index - 1)}
          style={{
            position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
            background: isDark ? 'rgba(30,33,48,0.85)' : 'rgba(255,255,255,0.85)',
            border: `1px solid ${border}`, backdropFilter: 'blur(4px)',
          }}
        >
          <IconChevronLeft size={18} color={isDark ? '#f1f5f9' : '#1e2130'} />
        </ActionIcon>
        <ActionIcon
          variant="filled" color="dark" radius="xl" size="lg" onClick={() => go(index + 1)}
          style={{
            position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
            background: isDark ? 'rgba(30,33,48,0.85)' : 'rgba(255,255,255,0.85)',
            border: `1px solid ${border}`, backdropFilter: 'blur(4px)',
          }}
        >
          <IconChevronRight size={18} color={isDark ? '#f1f5f9' : '#1e2130'} />
        </ActionIcon>
      </Box>

      <Box px="xl" py="md" style={{ borderTop: `1px solid ${border}` }}>
        <Group justify="space-between" wrap="wrap" gap="md">
          <Box style={{ flex: 1 }}>
            <Text fw={600} size="sm" mb={4}>{current.label}</Text>
            <Text size="sm" c="dimmed" lh={1.6}>{current.caption}</Text>
          </Box>
          <Text size="xs" c="dimmed" style={{ whiteSpace: 'nowrap' }}>
            {index + 1} / {slides.length}
          </Text>
        </Group>
      </Box>

      <Group justify="center" pb="md" gap={6}>
        {slides.map((_, i) => (
          <Box
            key={i} onClick={() => go(i)}
            style={{
              width: i === index ? 20 : 6, height: 6, borderRadius: 3,
              background: i === index
                ? 'var(--mantine-color-cyan-5)'
                : isDark ? '#2e3347' : 'var(--mantine-color-gray-3)',
              cursor: 'pointer', transition: 'width 0.2s ease, background 0.2s ease',
            }}
          />
        ))}
      </Group>
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
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

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
        <Stack gap="sm" mb={48}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>
            Angular · Full-Stack Web App
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
            Flashcard Dungeon
          </Title>
          <Text size="lg" c="dimmed" maw={680} lh={1.7}>
            A language learning web app built around a dungeon-crawl metaphor. Users battle monsters
            by answering flashcards, progress through a CEFR-mapped node graph across 7 languages, and
            unlock new dungeons — all offline-first with IndexedDB and optional cloud sync via Supabase.
          </Text>
          <Group gap="sm" mt={4} wrap="wrap">
            <Button
              component="a" href="#" target="_blank"
              color="cyan" leftSection={<IconExternalLink size={16} />}
            >
              Try Web App
            </Button>
            <Button
              component="a" href="https://github.com/tyler-johnston" target="_blank" rel="noopener noreferrer"
              variant="outline" color="gray" leftSection={<IconBrandGithub size={16} />}
            >
              View Source
            </Button>
          </Group>
        </Stack>
      </motion.div>

      <motion.div {...fadeUp(0.08)}>
        <Stack gap={4} mb={24}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>Screenshots</Text>
          <Title order={2} style={{ fontWeight: 800 }}>See It In Action</Title>
        </Stack>
      </motion.div>

      <motion.div {...fadeUp(0.12)}>
        <ScreenshotCarousel slides={slides} isDark={isDark} border={border} surface={surface} />
      </motion.div>

      <Box mb={60} />

      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>Architecture</Text>
          <Title order={2} style={{ fontWeight: 800 }}>Technical Design</Title>
        </Stack>
      </motion.div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb={60}>
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

      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>Stack</Text>
          <Title order={2} style={{ fontWeight: 800 }}>Technologies Used</Title>
        </Stack>
      </motion.div>

      <motion.div {...fadeUp(0.15)}>
        <Card mb={60} style={{ border: `1px solid ${border}`, background: surface, padding: 0 }}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Technology</Table.Th>
                <Table.Th>Role in Project</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {techStack.map((row) => (
                <Table.Tr key={row.tech}>
                  <Table.Td><TechBadge label={row.tech} /></Table.Td>
                  <Table.Td><Text size="sm" c="dimmed">{row.role}</Text></Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>
      </motion.div>

      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>Highlights</Text>
          <Title order={2} style={{ fontWeight: 800 }}>Technical Achievements</Title>
        </Stack>
      </motion.div>

      <motion.div {...fadeUp(0.15)}>
        <Card style={{ border: `1px solid ${border}`, background: surface }}>
          <List
            spacing="sm"
            icon={
              <ThemeIcon color="cyan" variant="light" size="sm" radius="xl">
                <IconCircleCheck size={12} />
              </ThemeIcon>
            }
          >
            {[
              'CEFR-level node graph roadmap (A1–B2) with lazy-loaded Angular feature modules per language topic',
              'Prebuilt deck system: typed TypeScript arrays per language/level across 7 supported languages',
              'Dungeon shop system with unlockable dungeons, health upgrades, and meta items persisting across runs',
              'Monster combat mechanics tied to flashcard performance — enemy abilities punish slow answers',
              'Monster Manual bestiary tracking all enemies with personal kill/death records per dungeon',
              'Standalone Angular components with signals — reactive state without NgRx boilerplate',
              'IndexedDB offline-first persistence — full functionality without an account',
              'Supabase (PostgreSQL) cloud sync: authenticated users push/pull deck data across devices',
              'Journal component for creating, renaming, and editing cards with DeckImportService',
            ].map((achievement) => (
              <List.Item key={achievement}>
                <Text size="sm" c="dimmed" lh={1.6}>{achievement}</Text>
              </List.Item>
            ))}
          </List>
        </Card>
      </motion.div>
    </Container>
  );
}

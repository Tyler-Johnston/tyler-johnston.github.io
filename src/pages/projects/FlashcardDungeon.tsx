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
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
  IconLanguage,
  IconMap,
  IconDatabase,
  IconDeviceMobile,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  fdEmberBattle,
  fdCryptBattle,
  fdMonsterManualEmber,
  fdRoadmap,
  fdShop,
  fdJournal,
  fdStats,
} from '../../data/imageAssets';
import { TechBadge } from '../../components/ui/TechBadge';

type NarrativeBeat = {
  label: string;
  heading: string;
  body: string;
  color: string;
  image: string | [string, string];
};

const narrativeBeats: NarrativeBeat[] = [
  {
    label: 'The Dungeon',
    heading: 'Every card is a weapon',
    body: 'Answer correctly and you deal damage. Answer wrong and the monster strikes back. Two dungeons ship with the app — Ember Fantasy is unlocked from the start, Moonlit Crypt is a shop purchase.',
    color: 'orange',
    image: [fdEmberBattle, fdCryptBattle],
  },
  {
    label: 'Between Runs',
    heading: 'Gold carries over',
    body: "Every run earns gold. Spend it in the shop on permanent upgrades — health boosts, weapons, armor, and new dungeons to unlock. The shop turns isolated runs into a real meta-progression loop.",
    color: 'yellow',
    image: fdShop,
  },
  {
    label: 'Your Decks',
    heading: 'Study your way',
    body: 'Create and manage your own cards in the Journal — search, filter by status (Learning / Review / New), and import full decks. Or skip custom decks entirely and follow the prebuilt CEFR roadmap.',
    color: 'violet',
    image: fdJournal,
  },
  {
    label: 'Monster Manual',
    heading: 'Fill the bestiary',
    body: 'Every enemy you encounter gets logged — Tier, HP, ATK, unique ability, and your personal kill/death record per dungeon. A completionist layer that rewards exploring every dungeon.',
    color: 'red',
    image: fdMonsterManualEmber,
  },
  {
    label: 'Your Progress',
    heading: 'Everything tracked',
    body: 'Win rate, total runs, combat damage, best runs, and full per-deck learning history across every session — all persisted locally so nothing disappears between sessions.',
    color: 'teal',
    image: fdStats,
  },
  {
    label: 'The World',
    heading: 'Structured from A1 to B2',
    body: 'The app ships with prebuilt language decks organized by CEFR proficiency level across 7 languages. Complete nodes to unlock adjacent ones — or ignore the roadmap entirely and use your own decks.',
    color: 'indigo',
    image: fdRoadmap,
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
    detail: "Built with Angular's standalone component model and signals for fine-grained reactive state. No NgRx boilerplate — signals drive deck selection, progress tracking, and UI state.",
    stat: 'Zero NgRx — signals only',
    color: 'teal',
  },
];

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
  const imgBg = isDark ? '#0f1117' : '#f1f5f9';
  const shadow = isDark ? '0 8px 40px rgba(0,0,0,0.6)' : '0 8px 40px rgba(0,0,0,0.12)';

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
            <Button
              component="a" href="https://github.com/tyler-johnston" target="_blank" rel="noopener noreferrer"
              variant="outline" color="gray" leftSection={<IconBrandGithub size={16} />}
            >
              View Source
            </Button>
          </Group>
        </Stack>
      </motion.div>

      {narrativeBeats.map((beat, i) => {
        const imageFirst = i % 2 === 0;
        const isPair = Array.isArray(beat.image);

        const imageNode = (
          <Box style={{
            background: imgBg,
            borderRadius: 16,
            padding: isPair ? '32px 20px' : 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: 12,
            minHeight: 380,
          }}>
            {isPair ? (
              (beat.image as [string, string]).map((src, j) => (
                <img
                  key={j} src={src} alt=""
                  style={{
                    flex: 1, maxHeight: 360, maxWidth: '50%',
                    objectFit: 'contain', borderRadius: 8, boxShadow: shadow,
                  }}
                />
              ))
            ) : (
              <img
                src={beat.image as string} alt=""
                style={{
                  maxHeight: 420, maxWidth: '100%',
                  objectFit: 'contain', borderRadius: 8, boxShadow: shadow,
                }}
              />
            )}
          </Box>
        );

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
              <Grid.Col
                span={{ base: 12, sm: 6 }}
                order={{ base: 1, sm: imageFirst ? 1 : 2 }}
              >
                {imageFirst ? imageNode : textNode}
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, sm: 6 }}
                order={{ base: 2, sm: imageFirst ? 2 : 1 }}
              >
                {imageFirst ? textNode : imageNode}
              </Grid.Col>
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

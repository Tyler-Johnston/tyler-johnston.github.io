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
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
  IconCircleCheck,
  IconLanguage,
  IconMap,
  IconDatabase,
  IconDeviceMobile,
  IconBook,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { TechBadge } from '../../components/ui/TechBadge';

const techStack = [
  { tech: 'Angular 17+', role: 'Frontend framework — standalone components, lazy-loaded modules' },
  { tech: 'TypeScript', role: 'Static typing throughout — interfaces, generics, strict mode' },
  { tech: 'Angular Signals', role: 'Reactive state without NgRx — fine-grained reactivity' },
  { tech: 'IndexedDB', role: 'Client-side persistence for decks, progress, and user data' },
  { tech: 'CEFR Standard', role: 'A1–C2 proficiency mapping for node graph and deck organization' },
];

const languages = [
  'European Portuguese',
  'Brazilian Portuguese',
  'French',
  'German',
  'Spanish',
  'Japanese',
  'Korean',
];

const architecturePoints = [
  {
    icon: IconMap,
    title: 'CEFR Node Graph Roadmap',
    detail:
      'A directed node graph (roadmap.config.ts) maps language topics to CEFR levels (A1–C2). Each node represents a discrete skill (e.g. b1-conditional, a2-time). Users unlock adjacent nodes as they complete decks, creating a structured progression path.',
    color: 'indigo',
  },
  {
    icon: IconBook,
    title: 'Prebuilt Deck System',
    detail:
      'Each language has static TypeScript arrays (PrebuiltDeckDef[]) stored under prebuilt/<language>/ with per-CEFR-level files. Decks are looked up by languageCode + nodeId at runtime, making it trivial to add new content without touching app logic.',
    color: 'cyan',
  },
  {
    icon: IconDatabase,
    title: 'Offline-First with IndexedDB',
    detail:
      'All user progress, custom decks, and card edits are persisted in IndexedDB — no account required for full functionality. A cloud sync modal allows users to export/import deck data across sessions and devices.',
    color: 'violet',
  },
  {
    icon: IconDeviceMobile,
    title: 'Standalone Components & Signals',
    detail:
      'Built with Angular\'s standalone component model and signals for reactive state. No NgRx boilerplate — signals handle deck selection, progress tracking, and UI state with minimal ceremony and excellent performance.',
    color: 'teal',
  },
  {
    icon: IconLanguage,
    title: 'Journal & Deck Import Workflow',
    detail:
      'The JournalComponent (/journal) provides a full deck editing interface: create, rename, reorder, and edit cards. DeckImportService handles importing decks from JSON files or pasted text, with validation and conflict resolution.',
    color: 'orange',
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

  return (
    <Container size="lg" py={60}>
      {/* Back nav */}
      <motion.div {...fadeUp(0)}>
        <Button
          component={Link}
          to="/projects"
          variant="subtle"
          color="gray"
          leftSection={<IconArrowLeft size={16} />}
          mb="xl"
          size="sm"
        >
          All Projects
        </Button>
      </motion.div>

      {/* Hero */}
      <motion.div {...fadeUp(0.05)}>
        <Stack gap="sm" mb={48}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>
            Angular · Full-Stack Web App
          </Text>
          <Title
            order={1}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1 }}
          >
            Flashcard Dungeon
          </Title>
          <Text size="lg" c="dimmed" maw={680} lh={1.7}>
            A language learning web application built around a dungeon metaphor. Users progress
            through a CEFR-mapped node graph, unlocking and practicing flashcard decks across 7
            languages — with full offline support and cloud sync.
          </Text>
          <Group gap="sm" mt={4} wrap="wrap">
            <Button
              component="a"
              href="#"
              target="_blank"
              color="cyan"
              leftSection={<IconExternalLink size={16} />}
            >
              Try Web App
            </Button>
            <Button
              component="a"
              href="https://github.com/tyler-johnston"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="gray"
              leftSection={<IconBrandGithub size={16} />}
            >
              View Source
            </Button>
          </Group>
        </Stack>
      </motion.div>

      {/* Placeholder image area */}
      <motion.div {...fadeUp(0.1)}>
        <Box
          mb={60}
          style={{
            borderRadius: 16,
            border: `1px solid ${border}`,
            background: isDark
              ? 'linear-gradient(135deg, #1a1d27 0%, #0f1117 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            height: 360,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Stack align="center" gap="sm">
            <IconLanguage size={48} style={{ opacity: 0.2 }} />
            <Text size="sm" c="dimmed">
              Screenshot coming soon
            </Text>
          </Stack>
        </Box>
      </motion.div>

      {/* Supported languages */}
      <motion.div {...fadeUp(0.1)}>
        <Card mb={60} style={{ border: `1px solid ${border}`, background: surface }}>
          <Text fw={600} mb="md">
            Supported Languages
          </Text>
          <Group gap="sm" wrap="wrap">
            {languages.map((lang) => (
              <Box
                key={lang}
                px="md"
                py={6}
                style={{
                  borderRadius: 8,
                  border: `1px solid ${border}`,
                  background: isDark ? '#22263a' : 'var(--mantine-color-gray-0)',
                }}
              >
                <Text size="sm" fw={500}>
                  {lang}
                </Text>
              </Box>
            ))}
          </Group>
        </Card>
      </motion.div>

      {/* Architecture deep-dive */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>
            Architecture
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Technical Design
          </Title>
        </Stack>
      </motion.div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb={60}>
        {architecturePoints.map((point, i) => (
          <motion.div key={point.title} {...fadeUp(i * 0.07)}>
            <Card
              style={{
                border: `1px solid ${border}`,
                background: surface,
                height: '100%',
              }}
            >
              <ThemeIcon color={point.color} variant="light" size="lg" radius="md" mb="sm">
                <point.icon size={20} />
              </ThemeIcon>
              <Text fw={600} mb={6}>
                {point.title}
              </Text>
              <Text size="sm" c="dimmed" lh={1.7}>
                {point.detail}
              </Text>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>

      {/* Tech stack table */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>
            Stack
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Technologies Used
          </Title>
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
                  <Table.Td>
                    <TechBadge label={row.tech} />
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" c="dimmed">
                      {row.role}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>
      </motion.div>

      {/* Key achievements */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="cyan" style={{ letterSpacing: '0.12em' }}>
            Highlights
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Technical Achievements
          </Title>
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
              'CEFR-level node graph roadmap (A1–C2) with lazy-loaded Angular feature modules per language topic',
              'Prebuilt deck system: typed TypeScript arrays per language/level across 7 supported languages',
              'Standalone Angular components with signals — reactive state without NgRx boilerplate',
              'IndexedDB offline-first persistence with cloud sync modal for cross-session deck data',
              'Journal component for creating, renaming, and editing cards with DeckImportService',
              'Lazy-loaded feature modules reduce initial bundle size — roadmap, journal, and review as separate chunks',
            ].map((achievement) => (
              <List.Item key={achievement}>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {achievement}
                </Text>
              </List.Item>
            ))}
          </List>
        </Card>
      </motion.div>
    </Container>
  );
}

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
  List,
  ThemeIcon,
  Image,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconArrowLeft,
  IconDatabase,
  IconDeviceMobile,
  IconMap,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  fdLanding,
  fdEmberBattle,
  fdShop1,
  fdJournal,
  fdStats1,
  fdEmberRoadmap,
} from '../../data/imageAssets';
import { TechBadge } from '../../components/ui/TechBadge';

const highlights = [
  {
    icon: IconMap,
    title: 'Curriculum design',
    text: 'CEFR-mapped progression from A1 to B2 for European Portuguese, with a curriculum built around one language path.',
  },
  {
    icon: IconDatabase,
    title: 'Offline-first data',
    text: 'IndexedDB stores progress locally, while Supabase handles optional cloud sync across devices.',
  },
  {
    icon: IconDeviceMobile,
    title: 'Study loop',
    text: 'Flashcards, dungeon combat, shop upgrades, and achievement tracking are woven into one progression system.',
  },
];

const gallery = [
  { src: fdLanding, label: 'Landing page' },
  { src: fdEmberBattle, label: 'Battle screen' },
  { src: fdShop1, label: 'Shop' },
  { src: fdJournal, label: 'Journal' },
  { src: fdStats1, label: 'Progress view' },
  { src: fdEmberRoadmap, label: 'Roadmap' },
];

const techStack = ['Angular', 'TypeScript', 'Angular Signals', 'IndexedDB', 'Supabase', 'PostgreSQL'];

export function FlashcardDungeon() {
  return (
    <Container size="lg" py={60}>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Button component={Link} to="/projects" variant="subtle" color="gray" leftSection={<IconArrowLeft size={16} />} mb="xl" size="sm">
          Back to projects
        </Button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
        <Stack gap="md" mb={52}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Angular / TypeScript / Supabase
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.08 }}>
            Flashcard Dungeon
          </Title>
          <Text size="lg" c="dimmed" maw={720} lh={1.75}>
            A full-stack language-learning app that turns spaced repetition into a dungeon crawler.
            It was built for European Portuguese and includes a full A1 to B2 curriculum.
          </Text>
        </Stack>
      </motion.div>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={32} mb={56}>
        <Card
          style={{
            border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
            background: 'light-dark(var(--mantine-color-white), #141a1e)',
          }}
        >
          <Text fw={700} mb="sm">
            What I built
          </Text>
          <List
            spacing={8}
            icon={
              <ThemeIcon color="orange" variant="light" size="xs" radius="xl">
                <IconCircleCheck size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Text size="sm" c="dimmed" lh={1.6}>
                CEFR-mapped A1-B2 progression for European Portuguese, with a directed node graph and prebuilt deck content.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm" c="dimmed" lh={1.6}>
                Offline-first persistence through IndexedDB, with optional Supabase/PostgreSQL sync.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm" c="dimmed" lh={1.6}>
                RPG mechanics layered onto flashcards so study sessions feel like progression instead of repetition.
              </Text>
            </List.Item>
          </List>
        </Card>

        <Card
          style={{
            border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
            background: 'light-dark(var(--mantine-color-white), #141a1e)',
          }}
        >
          <Text fw={700} mb="sm">
            Tech stack
          </Text>
          <Group gap={6} wrap="wrap">
            {techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </Group>
          <Text size="sm" c="dimmed" lh={1.7} mt="md">
            Angular Signals and local-first storage kept the experience responsive while the data
            model stayed simple.
          </Text>
        </Card>
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mb={56}>
        {highlights.map((item) => (
          <Card
            key={item.title}
            style={{
              border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
              background: 'light-dark(var(--mantine-color-white), #141a1e)',
              height: '100%',
            }}
          >
            <ThemeIcon color="orange" variant="light" size="lg" radius="xl" mb="md">
              <item.icon size={18} />
            </ThemeIcon>
            <Text fw={700} mb="sm">
              {item.title}
            </Text>
            <Text size="sm" c="dimmed" lh={1.7}>
              {item.text}
            </Text>
          </Card>
        ))}
      </SimpleGrid>

      <Box mb={24}>
        <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }} mb={4}>
          Selected shots
        </Text>
        <Title order={2} style={{ fontWeight: 800 }}>
          Interface and progression
        </Title>
      </Box>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {gallery.map((shot) => (
          <Card
            key={shot.label}
            p={0}
            style={{
              overflow: 'hidden',
              border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
              background: 'light-dark(var(--mantine-color-white), #141a1e)',
            }}
          >
            <Image src={shot.src} alt={shot.label} fallbackSrc="https://placehold.co/600x400/141a1e/f5a623?text=Project" />
            <Text size="sm" fw={600} p="md">
              {shot.label}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

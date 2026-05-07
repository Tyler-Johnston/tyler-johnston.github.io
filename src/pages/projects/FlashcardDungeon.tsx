import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Group,
  Button,
  Box,
  Image,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconArrowLeft,
  IconDatabase,
  IconDeviceMobile,
  IconMap,
  IconExternalLink,
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

const proofPoints = [
  { value: 'A1-B2', label: 'curriculum span' },
  { value: 'Offline', label: 'local-first progress' },
  { value: 'Cloud', label: 'optional sync' },
];

const highlights = [
  {
    icon: IconMap,
    title: 'Curriculum design',
    text: 'The learning path is CEFR-mapped from A1 to B2 and stays focused on European Portuguese instead of spreading across many languages.',
  },
  {
    icon: IconDatabase,
    title: 'Offline-first data',
    text: 'IndexedDB keeps the app usable offline, while Supabase handles optional sync when the user wants it.',
  },
  {
    icon: IconDeviceMobile,
    title: 'Study loop',
    text: 'Flashcards, combat, shop upgrades, and progression tracking all feed into one loop, so studying feels like movement rather than repetition.',
  },
];

const identityBlocks = [
  {
    eyebrow: 'Curriculum design',
    title: 'A1 to B2 path',
    text: 'The app stays focused on European Portuguese and maps each unit to CEFR levels so the progression is deliberate instead of generic.',
  },
  {
    eyebrow: 'Offline-first progress',
    title: 'Study keeps working',
    text: 'IndexedDB stores progress locally so the app remains usable when the network drops or the user is away from sync.',
  },
  {
    eyebrow: 'Optional cloud sync',
    title: 'Sync when wanted',
    text: 'Supabase sync is opt-in, which keeps the local study loop lightweight while still supporting cross-device continuity.',
  },
  {
    eyebrow: 'Loop design',
    title: 'Review feels like movement',
    text: 'Flashcards, battle, shop upgrades, and notes all feed one loop so repetition still feels like advancement.',
  },
];

const gallery = [
  { src: fdLanding, label: 'Landing page', note: 'The first screen sets up the study loop and signals the game layer immediately.' },
  { src: fdEmberBattle, label: 'Battle screen', note: 'Combat is tied to review outcomes instead of sitting on top of them.' },
  { src: fdShop1, label: 'Shop', note: 'Upgrades create a sense of progression between study sessions.' },
  { src: fdJournal, label: 'Journal', note: 'Notes and context live close to the learning flow.' },
  { src: fdStats1, label: 'Progress view', note: 'The data view keeps motivation visible instead of hidden.' },
  { src: fdEmberRoadmap, label: 'Roadmap', note: 'The roadmap shows that the product was built with expansion in mind.' },
];

const techStack = ['Angular', 'TypeScript', 'IndexedDB', 'Supabase', 'PostgreSQL'];

export function FlashcardDungeon() {
  return (
    <Container size="lg" py={60}>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Button component={Link} to="/projects" variant="subtle" color="gray" leftSection={<IconArrowLeft size={16} />} mb="xl" size="sm">
          Back to projects
        </Button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={36} mb={40} style={{ alignItems: 'start' }}>
          <Stack gap="md">
            <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
              Angular / TypeScript / Supabase
            </Text>
            <Title order={1} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.06 }}>
              Flashcard Dungeon
            </Title>
            <Text size="lg" c="dimmed" maw={720} lh={1.75}>
              A full-stack language-learning app that turns spaced repetition into a dungeon crawler.
              It was built for European Portuguese and includes a full A1 to B2 curriculum.
            </Text>

            <Group gap="sm" wrap="wrap">
              {techStack.map((tech) => (
                <TechBadge key={tech} label={tech} size="lg" />
              ))}
            </Group>

            <Group gap="sm" wrap="wrap" mt={4}>
              <Button
                component="a"
                href="https://flashcarddungeon.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="filled"
                color="orange"
                leftSection={<IconExternalLink size={16} />}
              >
                Visit Live Site
              </Button>
            </Group>
          </Stack>

          <Box
            style={{
              overflow: 'hidden',
              borderRadius: 16,
              border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
              background: 'light-dark(var(--mantine-color-white), #141a1e)',
            }}
          >
            <Image
              src={fdLanding}
              alt="Flashcard Dungeon landing page"
              fallbackSrc="https://placehold.co/1200x780/141a1e/f5a623?text=Flashcard+Dungeon"
            />
          </Box>
        </SimpleGrid>
      </motion.div>

      <Box
        className="case-proof-strip"
        mb={56}
        py={18}
        style={{
          borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
          borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
        }}
      >
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={0}>
          {proofPoints.map((point, index) => (
            <Box
              className="case-proof-item"
              key={point.label}
              pr={{ base: 0, sm: 20 }}
              pl={{ base: 0, sm: index === 0 ? 0 : 20 }}
              pb={{ base: 14, sm: 0 }}
            >
              <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.14em' }} mb={6}>
                {point.label}
              </Text>
              <Title order={3} style={{ fontWeight: 900, lineHeight: 1.05 }}>
                {point.value}
              </Title>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4 }}>
        <Stack gap={4} mb={20}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Why it stands out
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Built to keep the loop meaningful
          </Title>
          <Text size="sm" c="dimmed" maw={760} lh={1.7}>
            The value is not just that it gamifies study. The product works because the progression,
            storage, and reward loop were designed together.
          </Text>
        </Stack>
      </motion.div>

      <Box
        mb={56}
        style={{
          borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
          borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
        }}
      >
        {highlights.map((item, index) => (
          <Box
            key={item.title}
            py={22}
            style={{
              borderBottom:
                index < highlights.length - 1
                  ? '1px solid light-dark(var(--mantine-color-gray-2), #273138)'
                  : 'none',
            }}
          >
            <Group align="flex-start" gap={18} wrap="nowrap">
              <Box
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'light-dark(rgba(255, 122, 0, 0.12), rgba(255, 122, 0, 0.16))',
                  color: 'light-dark(var(--mantine-color-orange-7), var(--mantine-color-orange-4))',
                  flex: '0 0 auto',
                }}
              >
                <item.icon size={18} />
              </Box>
              <Box>
                <Text fw={800} mb={4}>
                  {item.title}
                </Text>
                <Text size="sm" c="dimmed" lh={1.7}>
                  {item.text}
                </Text>
              </Box>
            </Group>
          </Box>
        ))}
      </Box>

      <Box
        mb={56}
        style={{
          borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
          borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
        }}
      >
        <Box py={22}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }} mb={18}>
            Product identity
          </Text>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={20}>
            {identityBlocks.map((block, index) => (
              <Box
                key={block.eyebrow}
                className="parallax-identity-item"
                style={{
                  padding: '0 12px 20px 0',
                  borderRight: index % 2 === 0 ? '1px solid light-dark(var(--mantine-color-gray-2), #273138)' : 'none',
                  borderBottom: index < 2 ? '1px solid light-dark(var(--mantine-color-gray-2), #273138)' : 'none',
                }}
              >
                <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.14em' }} mb={6}>
                  {block.eyebrow}
                </Text>
                <Title order={3} style={{ fontWeight: 800, marginBottom: 8 }}>
                  {block.title}
                </Title>
                <Text size="sm" c="dimmed" lh={1.7}>
                  {block.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Box mb={24}>
        <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }} mb={4}>
          Interface evidence
        </Text>
        <Title order={2} style={{ fontWeight: 800 }}>
          Screens that show the system
        </Title>
        <Text size="sm" c="dimmed" maw={760} lh={1.7}>
          These screens exist to show the progression loop, not just to decorate the page.
        </Text>
      </Box>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {gallery.map((shot, index) => (
          <Box
            key={shot.label}
            style={{
              overflow: 'hidden',
              border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
              background: 'light-dark(var(--mantine-color-white), #141a1e)',
              borderRadius: 16,
            }}
          >
            <Image src={shot.src} alt={shot.label} fallbackSrc="https://placehold.co/600x400/141a1e/f5a623?text=Project" />
            <Stack gap={6} p="md">
              <Group justify="space-between" align="flex-start" gap="md">
                <Text fw={700}>{shot.label}</Text>
                <Text size="xs" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em' }}>
                  0{index + 1}
                </Text>
              </Group>
              <Text size="sm" c="dimmed" lh={1.6}>
                {shot.note}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

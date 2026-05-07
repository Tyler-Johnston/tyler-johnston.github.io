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
import { IconArrowLeft, IconBrain, IconChartBar, IconCpu, IconCircleCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { ppKing, ppSteve, ppMalandro, ppCowboy, ppOldWizard } from '../../data/imageAssets';
import { TechBadge } from '../../components/ui/TechBadge';

const highlights = [
  {
    icon: IconCpu,
    title: 'Rules-correct engine',
    text: 'Texas Hold\'em logic covers all-ins, raise reopening, and uncalled chip refunds, so the game behaves like a real table instead of a toy prototype.',
  },
  {
    icon: IconBrain,
    title: 'Opponent AI',
    text: 'The AI combines hand strength, draw detection, board texture, and a tilt system to create distinct betting personalities.',
  },
  {
    icon: IconChartBar,
    title: 'Balance pipeline',
    text: 'A headless Godot simulation pipeline and Python analysis pass were used to test matchups across 288,000 hands.',
  },
];

const gallery = [
  { src: ppKing, label: 'Boss opponent' },
  { src: ppSteve, label: 'Readable opener' },
  { src: ppMalandro, label: 'High-volatility rival' },
  { src: ppCowboy, label: 'Aggressive pressure' },
  { src: ppOldWizard, label: 'Pattern reader' },
];

const techStack = ['C#', 'Godot 4', 'Python', 'Pandas', 'Monte Carlo'];

export function ParallaxPoker() {
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
            C# / Godot 4
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.08 }}>
            Parallax Poker
          </Title>
          <Text size="lg" c="dimmed" maw={720} lh={1.75}>
            A character-driven poker roguelite inspired by Balatro and Poker Night at the Inventory.
            The goal was to make the game readable, fair, and replayable without hiding the math.
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
                A rules-correct Texas Hold&apos;em engine with all-in and reopening edge cases handled explicitly.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm" c="dimmed" lh={1.6}>
                AI opponents with tunable personalities, tilt states, and equity-based betting decisions.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm" c="dimmed" lh={1.6}>
                A Monte Carlo balancing workflow used to validate opponent behavior before release.
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
            The stack was chosen for iteration speed and simulation support, not for novelty.
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
          Roster and atmosphere
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

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
import { IconArrowLeft, IconBrain, IconChartBar, IconCpu } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  ppKing,
  ppSteve,
  ppAryll,
  ppBoyWizard,
  ppPrincess,
  ppCowboy,
  ppMalandro,
  ppOldWizard,
  ppAkalite,
} from '../../data/imageAssets';
import { TechBadge } from '../../components/ui/TechBadge';

const proofPoints = [
  { value: '288k', label: 'hands simulated' },
  { value: '15+', label: 'AI tuning parameters' },
  { value: '9', label: 'unique opponents' },
];

const highlights = [
  {
  icon: IconCpu,
    title: 'Rules before flair',
    text: 'The engine handles all-ins, raise reopening, and uncalled chip refunds explicitly, so the game state stays trustworthy even in messy hands.',
  },
  {
    icon: IconBrain,
    title: 'Opponents with intent',
    text: 'Betting behavior is shaped by hand strength, draw potential, board texture, tilt, and tells, which gives each character a readable personality.',
  },
  {
    icon: IconChartBar,
    title: 'Simulation-backed balance',
    text: 'A headless Godot pipeline plus Python analysis were used to compare opponent matchups across 288,000 hands.',
  },
];

const identityBlocks = [
  {
    eyebrow: 'Opponent tells',
    title: 'Tells you can read',
    text: 'Each opponent has its own tells, so the player is not only reading the board and the bet sizes. The game gives away personality through animation, timing, and behavior shifts that make reads feel earned instead of random.',
  },
  {
    eyebrow: 'Unique dialogue',
    title: 'Distinct table voices',
    text: 'Opponents also have their own dialogue, which reinforces the personality behind the AI. That makes the table feel like a set of specific rivals rather than a generic betting model.',
  },
  {
    eyebrow: 'Hand-authored presentation',
    title: 'All built in-house',
    text: 'All of the opponent art, accessories, dialogue, and tells were created by me, which kept the characters coherent from the first portrait to the last line of table banter.',
  },
  {
    eyebrow: 'Procedural variety',
    title: 'Run-to-run variety',
    text: 'Names, backgrounds, accessories, and personality ranges are randomized at spawn, so the same opponent family can still feel fresh from run to run.',
  },
];

const gallery = [
  {
    src: ppSteve,
    label: 'Steve',
    archetype: 'Australian Schoolkid',
    behavior: 'Honest. Plays face-up. If he bets, he usually has it.',
  },
  {
    src: ppAryll,
    label: 'Aryll',
    archetype: 'Canadian College Student',
    behavior: 'The sticky caller. Emotional, but keeps clicking call to see the next card.',
  },
  {
    src: ppBoyWizard,
    label: 'Boy Wizard',
    archetype: 'English Boy Wizard',
    behavior: 'The showman. Big bluffs, huge overbets, and pressure that looks scarier than it is.',
  },
  {
    src: ppPrincess,
    label: 'Princess',
    archetype: 'South Korean Star',
    behavior: 'Balanced baseline poker. Mixes some bluffs, but mostly plays solid math.',
  },
  {
    src: ppCowboy,
    label: 'Cowboy',
    archetype: 'American Cowboy',
    behavior: 'The sheriff. Relentless pressure, wide range, and constant raises to bully the table.',
  },
  {
    src: ppMalandro,
    label: 'Malandro',
    archetype: 'Brazilian Malandro',
    behavior: 'The maniac. Hyper-volatile, unpredictable, and happy to bluff at extreme rates.',
  },
  {
    src: ppKing,
    label: 'King',
    archetype: 'Moroccan King',
    behavior: 'The GTO boss. Balanced bluffs and value bets make him a pure skill test.',
  },
  {
    src: ppOldWizard,
    label: 'Old Wizard',
    archetype: 'Tibetan Wizard',
    behavior: 'The soul reader. He studies betting patterns, timing, and table behavior to read you.',
  },
  {
    src: ppAkalite,
    label: 'Akalite',
    archetype: 'Icelandic Aristocrat',
    behavior: 'The wall. Calls everything, reveals nothing, and gives zero psychological tells.',
  },
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
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={36} mb={40} style={{ alignItems: 'start' }}>
          <Stack gap="md">
            <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
              C# / Godot 4
            </Text>
            <Title order={1} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.06 }}>
              Parallax Poker
            </Title>
            <Text size="lg" c="dimmed" maw={720} lh={1.75}>
              A character-driven poker roguelite inspired by Balatro and Poker Night at the Inventory.
              I built it to be readable, fair, and replayable without hiding the math.
            </Text>

            <Group gap="sm" wrap="wrap">
              {techStack.map((tech) => (
                <TechBadge key={tech} label={tech} size="lg" />
              ))}
            </Group>
          </Stack>

          <Box
            p={0}
            style={{
              overflow: 'hidden',
              border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
              background: 'light-dark(var(--mantine-color-white), #141a1e)',
            }}
          >
            <Image
              src={ppKing}
              alt="Parallax Poker boss opponent"
              fallbackSrc="https://placehold.co/1200x780/141a1e/f5a623?text=Parallax+Poker"
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
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={0} style={{ alignItems: 'stretch' }}>
          {proofPoints.map((point, index) => (
            <Box
              className="case-proof-item"
              key={point.label}
              pr={{ base: 0, sm: 20 }}
              pl={{ base: 0, sm: index === 0 ? 0 : 20 }}
              py={{ base: index === 0 ? 0 : 14, sm: 0 }}
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
            Depth you can verify
          </Title>
          <Text size="sm" c="dimmed" maw={920} lh={1.7}>
            The interesting part here is not just that the game has AI. It is that each layer was built
            to be testable, tunable, and fair before it was made flashy.
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
            Opponent identity
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
          Opponent roster
        </Text>
        <Title order={2} style={{ fontWeight: 800 }}>
          Distinct personalities
        </Title>
        <Text size="sm" c="dimmed" maw={720} lh={1.7}>
          The cast is ordered as a difficulty curve, from easier Green Circuit opponents to harder Red
          and Blue tiers, so the roster doubles as progression.
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
                  <Box>
                    <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.12em' }} mb={2}>
                      {shot.archetype}
                    </Text>
                    <Text fw={800}>{shot.label}</Text>
                  </Box>
                  <Text size="xs" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em' }}>
                    0{index + 1}
                  </Text>
                </Group>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {shot.behavior}
                </Text>
              </Stack>
            </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Card,
  Grid,
  Group,
  Badge,
  Box,
  Divider,
  Button,
  Stack,
  List,
  ThemeIcon,
  Table,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaBrain,
  FaChartBar,
  FaPaintBrush,
  FaCogs,
  FaChessKnight,
  FaDice,
  FaGlobeAmericas,
  FaClock,
  FaEye,
  FaCommentDots,
  FaVolumeUp,
  FaLayerGroup,
  FaBook,
  FaDesktop,
  FaChevronLeft,
  FaChevronRight,
  FaRandom,
} from 'react-icons/fa';

import boyWizardExpressions from '../images/boy_wizard_expressions.png';
import boyWizardAccessory1 from '../images/boywizard_accessories1.png';
import boyWizardAccessory2 from '../images/boywizard_accessories2.png';

const TOTAL_FRAMES = 16;

// Must match the Expression enum order in the game
const expressionLabels: Record<number, string> = {
  0: 'Neutral',
  1: 'Neutral (tilted)',
  2: 'Glance',
  3: 'Glance (tilted)',
  4: 'Bored',
  5: 'Bored (tilted)',
  6: 'Happy',
  7: 'Smirk',
  8: 'Surprised',
  9: 'Worried',
  10: 'Annoyed',
  11: 'Angry',
  12: 'Sad',
  13: 'Sob',
  14: 'FakeStrong',
  15: 'FakeWeak',
};

const boyWizardNames = [
  'Boy Wizard', 'Wiz Kid', 'Abracadaniel', 'Apprentice', 'Dijkstra',
  'Larry', 'Fibonacci', 'Cipher', 'Enigma', 'Mark II',
  'David', 'Doctor', 'Beans', 'Tom', 'Scott',
];

const timeSlots = [
  { label: 'Morning', hours: '06:00–11:59', color: 'cyan' },
  { label: 'Afternoon', hours: '12:00–17:59', color: 'yellow' },
  { label: 'Evening', hours: '18:00–21:59', color: 'orange' },
  { label: 'Night', hours: '22:00–05:59', color: 'indigo' },
];

type SpriteLayerProps = {
  src: string;
  frame: number;
  label: string;
  zIndex: number;
};

const SpriteLayer = ({ src, frame, zIndex }: SpriteLayerProps) => {
  if (!src) return null;
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex,
      }}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        style={{
          display: 'block',
          width: `${TOTAL_FRAMES * 100}%`,
          height: '100%',
          marginLeft: `${-frame * 100}%`,
          imageRendering: 'pixelated',
          objectFit: 'contain',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

type LayerControlProps = {
  label: string;
  sublabel?: string;
  frame: number;
  setFrame: (f: number) => void;
  color: string;
};

const LayerControl = ({
  label,
  sublabel,
  frame,
  setFrame,
  color,
}: LayerControlProps) => {
  const prev = () => setFrame((frame - 1 + TOTAL_FRAMES) % TOTAL_FRAMES);
  const next = () => setFrame((frame + 1) % TOTAL_FRAMES);

  return (
    <Group justify="space-between" py={6}>
      <Box style={{ flex: 1, minWidth: 0 }}>
        <Text size="xs" fw={600}>
          {label}
        </Text>
        {sublabel && (
          <Text size="xs" c="dimmed" truncate>
            {sublabel}
          </Text>
        )}
      </Box>
      <Group gap={6}>
        <ActionIcon
          variant="light"
          color={color}
          size="sm"
          onClick={prev}
          radius="xl"
          aria-label={`Previous ${label}`}
        >
          <FaChevronLeft size={10} />
        </ActionIcon>
        <Text
          size="xs"
          fw={500}
          c="dimmed"
          style={{ minWidth: 38, textAlign: 'center' }}
        >
          {frame + 1}/{TOTAL_FRAMES}
        </Text>
        <ActionIcon
          variant="light"
          color={color}
          size="sm"
          onClick={next}
          radius="xl"
          aria-label={`Next ${label}`}
        >
          <FaChevronRight size={10} />
        </ActionIcon>
      </Group>
    </Group>
  );
};

const SpriteLayerDemo = () => {
  const [faceFrame, setFaceFrame] = useState(0);
  const [acc1Frame, setAcc1Frame] = useState(0);
  const [acc2Frame, setAcc2Frame] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [bgSlot, setBgSlot] = useState(0);
  const [bgVariant, setBgVariant] = useState(0);

  const randomize = () => {
    setFaceFrame(Math.floor(Math.random() * TOTAL_FRAMES));
    setAcc1Frame(Math.floor(Math.random() * TOTAL_FRAMES));
    setAcc2Frame(Math.floor(Math.random() * TOTAL_FRAMES));
    setNameIndex(Math.floor(Math.random() * boyWizardNames.length));
    setBgSlot(Math.floor(Math.random() * 4));
    setBgVariant(Math.floor(Math.random() * 2));
  };

  const visualCombo =
    acc1Frame * TOTAL_FRAMES + acc2Frame + 1;
  const totalCombinations =
    TOTAL_FRAMES *
    TOTAL_FRAMES *
    boyWizardNames.length *
    timeSlots.length *
    2;

  const hasImages =
    boyWizardExpressions && boyWizardAccessory1 && boyWizardAccessory2;

  const currentSlot = timeSlots[bgSlot];

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="md">
        <Box>
          <Title order={4} c="blue.6">
            Character compositor
          </Title>
          <Text size="xs" c="dimmed">
            Build a unique opponent from layered sprite sheets
          </Text>
        </Box>
        <Tooltip label="Randomize everything">
          <ActionIcon
            variant="light"
            color="blue"
            size="md"
            onClick={randomize}
            radius="xl"
          >
            <FaRandom size={12} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Grid gutter="lg">
        {/* Left: sprite preview */}
        <Grid.Col span={{ base: 12, sm: 5 }}>
          {/* Name badge */}
          <Text size="sm" fw={600} ta="center" mb={6}>
            &ldquo;{boyWizardNames[nameIndex]}&rdquo;
          </Text>

          {/* Composite preview */}
          <Box
            mx="auto"
            style={{
              position: 'relative',
              width: 160,
              height: 160,
              borderRadius: 'var(--mantine-radius-md)',
              overflow: 'hidden',
              backgroundColor: 'var(--mantine-color-dark-7)',
            }}
          >
            {hasImages ? (
              <>
                <SpriteLayer
                  src={boyWizardAccessory1}
                  frame={acc1Frame}
                  label="Accessory 1"
                  zIndex={1}
                />
                <SpriteLayer
                  src={boyWizardAccessory2}
                  frame={acc2Frame}
                  label="Accessory 2"
                  zIndex={2}
                />
                <SpriteLayer
                  src={boyWizardExpressions}
                  frame={faceFrame}
                  label="Face"
                  zIndex={3}
                />
              </>
            ) : (
              <Stack align="center" justify="center" h="100%" gap={4}>
                <FaLayerGroup
                  size={28}
                  color="var(--mantine-color-blue-4)"
                />
                <Text size="xs" c="dimmed" ta="center" px="xs">
                  Import sprite sheets to enable live preview
                </Text>
              </Stack>
            )}
          </Box>

          {/* Background / time slot display */}
          <Group justify="center" mt={8} gap={6}>
            <Badge size="xs" color={currentSlot.color} variant="light">
              {currentSlot.label}
            </Badge>
            <Text size="xs" c="dimmed">
              Variant {bgVariant === 0 ? 'A' : 'B'}
            </Text>
          </Group>
        </Grid.Col>

        {/* Right: controls */}
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap={0}>
            <LayerControl
              label="Expression"
              sublabel={expressionLabels[faceFrame] ?? `Frame ${faceFrame}`}
              frame={faceFrame}
              setFrame={setFaceFrame}
              color="blue"
            />
            <Divider />
            <LayerControl
              label="Accessory 1"
              sublabel={`Color variant ${acc1Frame + 1}`}
              frame={acc1Frame}
              setFrame={setAcc1Frame}
              color="teal"
            />
            <Divider />
            <LayerControl
              label="Accessory 2"
              sublabel={`Color variant ${acc2Frame + 1}`}
              frame={acc2Frame}
              setFrame={setAcc2Frame}
              color="grape"
            />
            <Divider />

            {/* Name carousel */}
            <Group justify="space-between" py={6}>
              <Box style={{ flex: 1, minWidth: 0 }}>
                <Text size="xs" fw={600}>
                  Display name
                </Text>
                <Text size="xs" c="dimmed" truncate>
                  {boyWizardNames[nameIndex]}
                </Text>
              </Box>
              <Group gap={6}>
                <ActionIcon
                  variant="light"
                  color="orange"
                  size="sm"
                  onClick={() =>
                    setNameIndex(
                      (nameIndex - 1 + boyWizardNames.length) %
                        boyWizardNames.length,
                    )
                  }
                  radius="xl"
                >
                  <FaChevronLeft size={10} />
                </ActionIcon>
                <Text
                  size="xs"
                  fw={500}
                  c="dimmed"
                  style={{ minWidth: 38, textAlign: 'center' }}
                >
                  {nameIndex + 1}/{boyWizardNames.length}
                </Text>
                <ActionIcon
                  variant="light"
                  color="orange"
                  size="sm"
                  onClick={() =>
                    setNameIndex(
                      (nameIndex + 1) % boyWizardNames.length,
                    )
                  }
                  radius="xl"
                >
                  <FaChevronRight size={10} />
                </ActionIcon>
              </Group>
            </Group>
            <Divider />

            {/* Background time slot + variant */}
            <Group justify="space-between" py={6}>
              <Box style={{ flex: 1, minWidth: 0 }}>
                <Text size="xs" fw={600}>
                  Background
                </Text>
                <Text size="xs" c="dimmed" truncate>
                  {currentSlot.label} ({currentSlot.hours}) · Variant{' '}
                  {bgVariant === 0 ? 'A' : 'B'}
                </Text>
              </Box>
              <Group gap={6}>
                <ActionIcon
                  variant="light"
                  color={currentSlot.color}
                  size="sm"
                  onClick={() => {
                    if (bgVariant === 0) {
                      setBgSlot((bgSlot - 1 + 4) % 4);
                      setBgVariant(1);
                    } else {
                      setBgVariant(0);
                    }
                  }}
                  radius="xl"
                >
                  <FaChevronLeft size={10} />
                </ActionIcon>
                <Text
                  size="xs"
                  fw={500}
                  c="dimmed"
                  style={{ minWidth: 38, textAlign: 'center' }}
                >
                  {bgSlot * 2 + bgVariant + 1}/8
                </Text>
                <ActionIcon
                  variant="light"
                  color={currentSlot.color}
                  size="sm"
                  onClick={() => {
                    if (bgVariant === 1) {
                      setBgSlot((bgSlot + 1) % 4);
                      setBgVariant(0);
                    } else {
                      setBgVariant(1);
                    }
                  }}
                  radius="xl"
                >
                  <FaChevronRight size={10} />
                </ActionIcon>
              </Group>
            </Group>
          </Stack>

          {/* Combination counter */}
          <Box
            mt="sm"
            p="xs"
            style={{
              borderRadius: 'var(--mantine-radius-sm)',
              backgroundColor: 'var(--mantine-color-dark-6)',
              textAlign: 'center',
            }}
          >
            <Text size="xs" c="dimmed">
              Accessory combo{' '}
              <Text span fw={600} c="blue.4">
                #{visualCombo.toLocaleString()}
              </Text>{' '}
              of {(TOTAL_FRAMES * TOTAL_FRAMES).toLocaleString()}
            </Text>
            <Text size="xs" c="dimmed" fs="italic">
              × {boyWizardNames.length} names × {timeSlots.length * 2}{' '}
              backgrounds ={' '}
              <Text span fw={600} c="blue.4">
                {totalCombinations.toLocaleString()}
              </Text>{' '}
              per character
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

const characters = [
  {
    name: 'Steve',
    circuit: 'Green',
    country: 'Australia',
    flag: '🇦🇺',
    age: 16,
    archetype: 'Honest player — folds to pressure',
    color: 'green',
    flavor: 'Laid-back skater kid who wears his heart on his sleeve',
  },
  {
    name: 'Aryll',
    circuit: 'Green',
    country: 'Canada',
    flag: '🇨🇦',
    age: 19,
    archetype: 'Sticky calling station — never folds',
    color: 'green',
    flavor: 'Passive and stubborn, will call anything out of spite',
  },
  {
    name: 'Boy Wizard',
    circuit: 'Green',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    age: 14,
    archetype: 'Fake aggro — bets big but crumbles when re-raised',
    color: 'green',
    flavor: 'Chaotic student who bluffs constantly but panics under pressure',
  },
  {
    name: 'Princess',
    circuit: 'Red',
    country: 'South Korea',
    flag: '🇰🇷',
    age: 12,
    archetype: 'Balanced — solid value and bluff mix',
    color: 'red',
    flavor: 'Whimsical and unpredictable, hard to get a read on',
  },
  {
    name: 'Cowboy',
    circuit: 'Red',
    country: 'United States',
    flag: '🇺🇸',
    age: 29,
    archetype: 'LAG — wide ranges, constant pressure',
    color: 'red',
    flavor: 'Traditional rancher who bets like he\'s got nothing to lose',
  },
  {
    name: 'Malandro',
    circuit: 'Red',
    country: 'Brazil',
    flag: '🇧🇷',
    age: 34,
    archetype: 'Maniac — hyper-aggressive, almost never folds',
    color: 'red',
    flavor: 'Street-smart grinder who treats every hand like a street fight',
  },
  {
    name: 'King',
    circuit: 'Blue',
    country: 'Morocco',
    flag: '🇲🇦',
    age: 41,
    archetype: 'GTO Boss — balanced frequencies across all streets',
    color: 'blue',
    flavor: 'Elegant and calculated, plays like he\'s solved the game',
  },
  {
    name: 'Old Wizard',
    circuit: 'Blue',
    country: 'Fictitious land',
    flag: '🏔️',
    age: 56,
    archetype: 'TAG — only plays premium hands, punishes mistakes',
    color: 'blue',
    flavor: 'Ancient and patient, loves mac and cheese (juxtaposition humor)',
  },
  {
    name: 'Akalite',
    circuit: 'Blue',
    country: 'Iceland',
    flag: '🇮🇸',
    age: '??',
    archetype: 'Unreadable Wall — refuses to fold, impossible to bluff',
    color: 'blue',
    flavor: 'Cool Nordic presence, never gives anything away',
  },
];

const techStack = [
  { label: 'Language', value: 'C#' },
  { label: 'Engine', value: 'Godot 4' },
  { label: 'Analysis', value: 'Python / Pandas / Plotly' },
  { label: 'Hand Evaluator', value: 'Open-source Pheval port' },
  { label: 'Art', value: 'Original pixel art' },
  { label: 'Target', value: 'Desktop (Win / Mac / Linux)' },
];

const ParallaxPoker = () => {
  return (
    <Container size="lg" my={40}>
      {/* ── Back link ── */}
      <Button
        component={Link}
        to="/portfolio"
        variant="subtle"
        color="blue"
        leftSection={<FaArrowLeft size={12} />}
        mb="lg"
        size="sm"
      >
        Back to Portfolio
      </Button>

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group gap="md" mb={4}>
          <Title order={1} c="blue.6">
            Parallax Poker
          </Title>
          <Badge size="lg" variant="light" color="blue">
            In Development
          </Badge>
        </Group>
        <Text size="lg" c="dimmed" mb="lg">
          A character-driven poker roguelite where every opponent has a
          personality, a country, a mood, and 32,000+ visual identities — built
          solo in C# with the Godot engine.
        </Text>

        {/* Hero image placeholder */}
        <Card
          shadow="sm"
          radius="md"
          withBorder
          p={0}
          mb="xl"
          style={{ overflow: 'hidden' }}
        >
          <Box
            style={{
              // TODO: replace with actual hero image
              // backgroundImage: `url(${heroImg})`,
              // backgroundSize: 'cover',
              // backgroundPosition: 'center',
              backgroundColor: 'var(--mantine-color-dark-7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 360,
            }}
          >
            <Stack align="center" gap={8}>
              <FaChessKnight size={56} color="var(--mantine-color-blue-4)" />
              <Text size="sm" c="dimmed">
                Hero screenshot / trailer coming soon
              </Text>
            </Stack>
          </Box>
        </Card>
      </Box>

      {/* ══════════════════════════════════════════════════════════════
          THE PITCH
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Title order={2} c="blue.6" mb="md">
          What is Parallax Poker?
        </Title>
        <Text size="md" mb="md">
          Parallax Poker is a heads-up Texas Hold'em roguelite where the
          challenge isn't the cards — it's the person sitting across from you.
          Every opponent is a fully realized character from somewhere in the
          world, with their own play style, visual identity, dialogue voice,
          emotional triggers, and tells that leak through their face and words
          when the pressure gets high enough.
        </Text>
        <Text size="md" mb="md">
          The game is structured as a circuit-based run across three difficulty
          tiers — Green, Red, and Blue. Green opponents are readable and
          exploitable. Red opponents fight back. Blue opponents require you to
          understand poker at a deeper level — or find the cracks in their
          composure.
        </Text>
        <Text size="md">
          This is a solo commercial project. I'm responsible for all game
          design, programming, AI architecture, original character art, sound
          design, dialogue writing, and the full data analysis pipeline used for
          balancing.
        </Text>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          CHARACTER ROSTER
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaGlobeAmericas size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            A Roster from Around the World
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          9 opponents implemented across three circuits. Each character is from a
          different country, plays in their local timezone, and has a personality
          shaped by 15+ tunable stats. Their behavior, dialogue, background art,
          and mood all shift based on what time it is where they live.
        </Text>

        <Stack gap="md">
          {(['Green', 'Red', 'Blue'] as const).map((circuit) => (
            <Box key={circuit}>
              <Badge
                size="sm"
                variant="filled"
                color={
                  circuit === 'Green'
                    ? 'green'
                    : circuit === 'Red'
                    ? 'red'
                    : 'blue'
                }
                mb="sm"
              >
                {circuit} Circuit
              </Badge>
              <Grid gutter="md">
                {characters
                  .filter((c) => c.circuit === circuit)
                  .map((c) => (
                    <Grid.Col
                      key={c.name}
                      span={{ base: 12, sm: 6, lg: 4 }}
                    >
                      <Card
                        shadow="sm"
                        padding="md"
                        radius="md"
                        withBorder
                        h="100%"
                      >
                        <Group justify="space-between" mb={6}>
                          <Group gap="xs">
                            <Text size="lg">{c.flag}</Text>
                            <Text fw={600} size="sm">
                              {c.name}
                            </Text>
                          </Group>
                          <Text size="xs" c="dimmed">
                            Age {c.age} · {c.country}
                          </Text>
                        </Group>
                        <Text size="xs" c="blue.6" fw={500} mb={4}>
                          {c.archetype}
                        </Text>
                        <Text size="xs" c="dimmed" fs="italic">
                          {c.flavor}
                        </Text>
                      </Card>
                    </Grid.Col>
                  ))}
              </Grid>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          VISUAL IDENTITY SYSTEM
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaLayerGroup size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            32,768 Visual Identities per Character
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          Each opponent's appearance is assembled from layered sprite sheets,
          selected deterministically by the run seed. No two runs look the same.
        </Text>

        <Grid gutter="lg" mb="lg">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Text size="sm" mb="md">
              Every character has a base sprite with 16 expression frames driven
              live by the tell system. On top of the base, two accessory layers
              are composited — each drawn from a sprite sheet of 16 color/style
              variations. At run start, the seeded RNG picks one frame from each
              accessory sheet and one of 16 name variations.
            </Text>
            <Text size="sm" mb="md">
              That's <b>16 × 16 × 16 = 4,096</b> name + accessory combinations
              per character. Each character also has backgrounds for all four
              time slots — Morning, Afternoon, Evening, and Night — with A/B
              variants each, giving <b>4 × 2 = 8</b> possible backgrounds.
              Multiply them together: <b>4,096 × 8 = 32,768</b> distinct
              visual presentations per character, before personality variance
              (stat randomization within the circuit tier) is even applied.
            </Text>
            <Text size="sm">
              The seed is deterministic — replaying the same run always produces
              the same opponent appearance, name, and stat spread. This makes
              the planned Journal system possible: players can track which
              visual variants they've encountered across runs and work toward
              completion.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={5} c="blue.6" mb="sm">
                Per-character layers
              </Title>
              <Table
                highlightOnHover
                withTableBorder={false}
                withColumnBorders={false}
              >
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        Expression frames
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        16 (driven live by tell system)
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        Accessory slot 1
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        16 variations (color/style)
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        Accessory slot 2
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        16 variations (color/style)
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        Name variations
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        16 per character
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        Time slots
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        4 (morning / afternoon / evening / night)
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        Background variants per slot
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        2 (a/b)
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" fw={600}>
                        Total per character
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={600} c="blue.6">
                        32,768 unique presentations
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Interactive sprite compositor */}
        <SpriteLayerDemo />
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          TELL SYSTEM
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaEye size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            The Tell System — Reading Your Opponent
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          Every AI decision produces two independent signals that can leak
          information to the player. Learning to read these is the core skill
          gap between Green and Blue circuit play.
        </Text>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Group mb="sm">
                <ThemeIcon variant="light" color="blue" size="lg" radius="md">
                  <FaEye size={16} />
                </ThemeIcon>
                <Title order={4} c="blue.6">
                  Face channel
                </Title>
              </Group>
              <Text size="sm" c="dimmed" mb="sm">
                Gated by <b>Composure</b>. After each decision, the game rolls
                against the character's composure stat. If the roll fails, the
                bluff leaks through a facial expression — FakeStrong when
                bluff-raising, FakeWeak when trapping. High-composure characters
                like King and Akalite almost never leak. Low-composure characters
                like Boy Wizard telegraph everything.
              </Text>
              <Text size="xs" c="dimmed" fs="italic">
                16 expression frames per character: neutral, glance, sad,
                worried, happy, smirk, angry, fake-strong, fake-weak, bored —
                each with a tilted variant.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Group mb="sm">
                <ThemeIcon variant="light" color="blue" size="lg" radius="md">
                  <FaCommentDots size={16} />
                </ThemeIcon>
                <Title order={4} c="blue.6">
                  Words channel
                </Title>
              </Group>
              <Text size="sm" c="dimmed" mb="sm">
                Gated by <b>BluffFrequency</b>. Characters comfortable with
                deception (high BluffFreq) confidently sell their bluffs through
                dialogue — swapping weak-hand lines for strong-hand lines.
                Characters who rarely bluff betray nervousness through their word
                choice even when they try to deceive.
              </Text>
              <Text size="xs" c="dimmed" fs="italic">
                14 dialogue contexts per character (OnFold, OnRaise, Bluffing,
                WhileWaiting, etc.), all written in character voice. Cowboy
                drawls; Boy Wizard panics; King speaks in riddles.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          TIME OF DAY + INTERNATIONAL
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaClock size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            Time of Day Across the World
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="md">
          Every run locks a UTC start hour via the run seed. Each character's
          timezone offset converts that into their local time — so the same run
          can mean morning in Seoul and night in Texas. This isn't just cosmetic.
        </Text>

        <Grid gutter="lg" mb="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Title order={5} c="blue.6" mb="sm">
                What changes by time slot
              </Title>
              <List spacing="xs" size="sm">
                <List.Item>
                  <b>Personality stats</b> — Morning play is tighter and more
                  composed. Night play is loose, aggressive, and emotionally
                  volatile. Afternoon is the most risk-seeking.
                </List.Item>
                <List.Item>
                  <b>Background art</b> — Each character has hand-drawn
                  backgrounds for each time slot (morning café, afternoon park,
                  evening apartment, night bar), with A/B variants for variety.
                </List.Item>
                <List.Item>
                  <b>Character lighting</b> — Night backgrounds apply a cyan
                  monitor-glow outline to the sprite. Evening gets a faint sunset
                  warmth. Daytime turns the environmental lighting off.
                </List.Item>
                <List.Item>
                  <b>Tilt sensitivity</b> — Characters tilt faster at night and
                  recover slower, reflecting fatigue and emotional volatility.
                </List.Item>
              </List>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Title order={5} c="blue.6" mb="sm">
                Example: same run, different worlds
              </Title>
              <Text size="sm" c="dimmed" mb="sm">
                Run starts at 14:00 UTC:
              </Text>
              <Table
                highlightOnHover
                withTableBorder={false}
                withColumnBorders={false}
              >
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm">🏴󠁧󠁢󠁥󠁮󠁧󠁿 Boy Wizard</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        UTC+0 → 14:00
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Badge size="xs" color="yellow" variant="light">
                        Afternoon
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm">🇺🇸 Cowboy</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        UTC-7 → 07:00
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Badge size="xs" color="cyan" variant="light">
                        Morning
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm">🇰🇷 Princess</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        UTC+9 → 23:00
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Badge size="xs" color="indigo" variant="light">
                        Night
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm">🇲🇦 King</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        UTC+1 → 15:00
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Badge size="xs" color="yellow" variant="light">
                        Afternoon
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
              <Text size="xs" c="dimmed" mt="sm" fs="italic">
                Boy Wizard is risk-seeking and loose (afternoon). Cowboy is
                tight and composed (morning). Princess is volatile and aggressive
                (night). Same seed, different opponents, different strategies
                needed.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          TILT & AUDIOVISUAL SYSTEM
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaVolumeUp size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            Tilt & Audiovisual Degradation
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          When opponents lose badly, their emotional state degrades — and the
          entire presentation degrades with them.
        </Text>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <Card shadow="sm" padding="md" radius="md" withBorder h="100%">
              <Badge size="xs" color="green" variant="light" mb="xs">
                Zen
              </Badge>
              <Text size="xs" c="dimmed">
                Clean speech blips, normal pitch, no visual distortion, neutral
                expression by default. Environmental lighting normal.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <Card shadow="sm" padding="md" radius="md" withBorder h="100%">
              <Badge size="xs" color="yellow" variant="light" mb="xs">
                Annoyed
              </Badge>
              <Text size="xs" c="dimmed">
                Slightly lower voice pitch. Tilt-influenced stat boosts kick in
                — aggression, bluff frequency, and risk tolerance all scale
                upward by per-character tilt weights. Play becomes noticeably
                more reckless.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <Card shadow="sm" padding="md" radius="md" withBorder h="100%">
              <Badge size="xs" color="orange" variant="light" mb="xs">
                Steaming
              </Badge>
              <Text size="xs" c="dimmed">
                Speech blips gain a second overlapping interrupt 60ms later.
                A glowing orange shader outline appears around the character
                sprite, overriding all environmental lighting. Expression
                shifts to visibly upset.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <Card shadow="sm" padding="md" radius="md" withBorder h="100%">
              <Badge size="xs" color="red" variant="light" mb="xs">
                Monkey
              </Badge>
              <Text size="xs" c="dimmed">
                Three stacked low-pitch blip interrupts. An intense red shader
                outline burns around the sprite. Expression locked to Angry.
                All personality stats are maximally distorted by tilt weights.
                Rage quit threshold approaching.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
        <Text size="xs" c="dimmed" mt="md" fs="italic">
          Tilt scales by pot size in big blinds — losing a 2 BB pot barely
          registers, losing a 50 BB all-in at showdown is devastating. Bad beats
          (opponent was ahead) hit harder than normal losses. Wins reduce tilt
          proportionally, but small pots give no relief.
        </Text>
      </Box>

      {/* ══════════════════════════════════════════════════════════════
          SECTION DIVIDER — PITCH → TECHNICAL
      ══════════════════════════════════════════════════════════════ */}
      <Box my="xl" py="xl" style={{ textAlign: 'center' }}>
        <Divider
          mb="lg"
          label={
            <Badge size="lg" variant="light" color="gray" radius="sm">
              Under the hood
            </Badge>
          }
          labelPosition="center"
        />
        <Text size="sm" c="dimmed">
          The systems above describe the player experience. Everything below is
          how it's built — the technical architecture, tooling, and workflows
          that make the game possible.
        </Text>
      </Box>

      {/* ══════════════════════════════════════════════════════════════
          SHADER STACK
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaDesktop size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            Three-Layer Shader Stack
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          The game's visual identity comes from three custom GLSL shaders
          composited on top of each other, all running in real time.
        </Text>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Badge size="xs" color="blue" variant="light" mb="sm">
                Layer 1 — Sprite outline
              </Badge>
              <Text size="xs" c="dimmed">
                An 8-direction sample outline shader applied to the layered
                character sprite. Draws a colored glow only where the sprite is
                transparent, creating a clean border. At Zen, the outline color
                reflects environmental lighting — cyan for night (monitor glow),
                warm white for evening, off during daytime. When tilt overrides
                kick in, the outline snaps to orange (Steaming) or red (Monkey),
                plus a drop shadow for depth.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Badge size="xs" color="blue" variant="light" mb="sm">
                Layer 2 — Webcam simulation
              </Badge>
              <Text size="xs" c="dimmed">
                A full-screen shader on the opponent view that simulates a
                low-quality video call: barrel distortion, chromatic aberration,
                scanlines, film grain, and a slow rolling glitch band. A
                bottom-up monitor glow effect lights the character from below
                (like a laptop screen in a dark room), with vignette darkening
                at the edges to simulate room lighting.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Badge size="xs" color="blue" variant="light" mb="sm">
                Layer 3 — CRT/LCD overlay
              </Badge>
              <Text size="xs" c="dimmed">
                A screen-wide shader that applies an LCD pixel grid effect with
                visible RGB subpixel separation, anti-glare grain texture, and
                subtle darkening between pixel rows. This sits over the entire
                game — cards, table, chips, UI — giving everything a cohesive
                retro-digital aesthetic.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          AI DECISION ENGINE + TECH
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaBrain size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            AI Decision Engine
          </Title>
        </Group>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Text size="sm" mb="md">
              Every AI decision is computed from scratch — no scripted sequences.
              A ported Pheval hand evaluator ranks the current hand, which feeds
              into a strength evaluator that factors in draw potential (flush
              draws, straight draws, backdoors) and board texture analysis.
            </Text>
            <Text size="sm" mb="md">
              The decision maker takes this hand strength plus the full game
              state — pot size, bet ratios, position, stack depths — and runs it
              through personality-weighted thresholds. Each character has 15+
              personality stats (aggression, bluff frequency, fold-to-pressure,
              call tendency, raise resistance, risk tolerance, composure, tilt
              sensitivity, and per-street aggression multipliers) that combine to
              produce genuinely distinct play styles.
            </Text>
            <Text size="sm">
              The system also handles bluff/value tagging, semi-bluff zone
              detection, trap decisions (checking strong hands to induce bets),
              hero call logic for tilted states, and all-in commitment math for
              deep and short stacks.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group mb="sm">
                <ThemeIcon variant="light" color="blue" size="lg" radius="md">
                  <FaCogs size={16} />
                </ThemeIcon>
                <Title order={4} c="blue.6">
                  Tech Stack
                </Title>
              </Group>
              <Stack gap="xs">
                {techStack.map((item) => (
                  <Group key={item.label} justify="space-between">
                    <Text size="sm" c="dimmed">
                      {item.label}
                    </Text>
                    <Text size="sm" fw={500}>
                      {item.value}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          BALANCING PIPELINE
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaChartBar size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            Data-Driven Balancing Pipeline
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="md">
          One of the most technically interesting parts of this project is the
          feedback loop between gameplay and data analysis.
        </Text>

        <Grid gutter="lg" mb="lg">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Group mb="sm">
                <ThemeIcon variant="light" color="blue" size="lg" radius="md">
                  <FaDice size={16} />
                </ThemeIcon>
                <Title order={4} c="blue.6">
                  Monte Carlo gauntlet
                </Title>
              </Group>
              <Text size="sm" c="dimmed">
                A headless simulation mode runs thousands of AI-vs-AI matches.
                Each character pairing is tested across all four time slots and
                variance tiers, producing win-rate distributions and behavioral
                statistics at scale — no manual playtesting required.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Group mb="sm">
                <ThemeIcon variant="light" color="blue" size="lg" radius="md">
                  <FaChartBar size={16} />
                </ThemeIcon>
                <Title order={4} c="blue.6">
                  Analysis reports
                </Title>
              </Group>
              <Text size="sm" c="dimmed">
                A Python pipeline reads the CSV logs and generates HTML reports
                with archetype verification, stat-vs-observed alignment charts,
                engine health diagnostics, and clustering detection. The report
                flags when characters deviate from their target archetype.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>

        <Text size="sm" mb="sm" fw={500}>
          The feedback loop:
        </Text>
        <List spacing="xs" size="sm" mb="md">
          <List.Item>
            Every AI decision is logged to CSV with 30+ columns — hand strength,
            bet ratio, tilt state, personality stats, and the final action.
          </List.Item>
          <List.Item>
            The gauntlet collects thousands of rows per archetype across all time
            slots and variance tiers.
          </List.Item>
          <List.Item>
            The Python analyzer compares observed behavior against target
            archetypes and flags misalignments (e.g., "Boy Wizard should fold
            under pressure but his FTP% is 0%").
          </List.Item>
          <List.Item>
            Fixes are applied to the engine or personality resources, the
            gauntlet re-runs, and the cycle repeats.
          </List.Item>
        </List>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          JOURNAL (PLANNED)
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="gray" size="lg" radius="md">
            <FaBook size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            The Journal
          </Title>
          <Badge size="sm" variant="light" color="gray">
            Planned
          </Badge>
        </Group>
        <Text size="sm" c="dimmed">
          A persistent completion tracker where players catalog every opponent
          variant they've encountered — name variations, accessory combinations,
          background time slots, tells observed, and dialogue heard. With 32,768
          visual presentations per character and 16 names each, the Journal
          turns replayability into a collection metagame.
        </Text>
      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaPaintBrush size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            Gallery
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          Screenshots and gameplay footage will be added here as the project
          progresses.
        </Text>

        <Grid gutter="md">
          {[
            'Gameplay — active hand with tells',
            'Character select / circuit map',
            'Balance report output',
            'Tilt progression (Zen → Monkey)',
            'Time-of-day background comparison',
            'Accessory variation gallery',
          ].map((label) => (
            <Grid.Col key={label} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card
                shadow="sm"
                radius="md"
                withBorder
                p={0}
                style={{ overflow: 'hidden' }}
              >
                <Box
                  style={{
                    backgroundColor: 'var(--mantine-color-dark-7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 160,
                  }}
                >
                  <Text size="xs" c="dimmed" ta="center" px="sm">
                    {label}
                  </Text>
                </Box>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>

      {/* ── Footer nav ── */}
      <Group justify="center" mt="xl">
        <Button
          component={Link}
          to="/portfolio"
          size="md"
          leftSection={<FaArrowLeft size={12} />}
          variant="light"
          color="blue"
        >
          Back to Portfolio
        </Button>
      </Group>
    </Container>
  );
};

export default ParallaxPoker;

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
  Collapse,
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
  FaEye,
  FaCommentDots,
  FaVolumeUp,
  FaLayerGroup,
  FaBook,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaRandom,
} from 'react-icons/fa';

import parallaxPokerMain from '../images/parallax-poker-main.png';
import tellGameplayGif from '../images/reaction.gif'; 
import balanceReport from '../images/balance_report.png';

import steveExpressions from '../images/expressions/steve_expressions.png';
import steveAccessory1 from '../images/accessories/steve_accessories1.png';
import steveAccessory2 from '../images/accessories/steve_accessories2.png';

import aryllExpressions from '../images/expressions/aryll_expressions.png';
import aryllAccessory1 from '../images/accessories/aryll_accessories1.png';
import aryllAccessory2 from '../images/accessories/aryll_accessories2.png';

import boyWizardExpressions from '../images/expressions/boy_wizard_expressions.png';
import boyWizardAccessory1 from '../images/accessories/boywizard_accessories1.png';
import boyWizardAccessory2 from '../images/accessories/boywizard_accessories2.png';

import princessExpressions from '../images/expressions/princess_expressions.png';
import princessAccessory1 from '../images/accessories/princess_accessories1.png';
import princessAccessory2 from '../images/accessories/princess_accessories2.png';

import malandroExpressions from '../images/expressions/malandro_expressions.png';
import malandroAccessory1 from '../images/accessories/malandro_accessories1.png';
import malandroAccessory2 from '../images/accessories/malandro_accessories2.png';

import cowboyExpressions from '../images/expressions/cowboy_expressions.png';
import cowboyAccessory1 from '../images/accessories/cowboy_accessories1.png';
import cowboyccessory2 from '../images/accessories/cowboy_accessories2.png';

import kingExpressions from '../images/expressions/king_expressions.png';
import kingAccessory1 from '../images/accessories/king_accessories1.png';
import kingAcessory2 from '../images/accessories/king_accessories2.png';

import oldWizardExpressions from '../images/expressions/old_wizard_expressions.png';
import oldWizardAccessory1 from '../images/accessories/oldwizard_accessories1.png';
import oldWizardAccessory2 from '../images/accessories/oldwizard_accessories2.png';

import akaliteExpressions from '../images/expressions/akalite_expressions.png';
import akaliteAccessory1 from '../images/accessories/akalite_accessories1.png';
import akaliteAccessory2 from '../images/accessories/akalite_accessories2.png';

import morning_a from '../images/backgrounds/morning_a.png';
import morning_b from '../images/backgrounds/morning_b.png';
import afternoon_a from '../images/backgrounds/afternoon_a.png';
import afternoon_b from '../images/backgrounds/afternoon_b.png';
import evening_a from '../images/backgrounds/evening_a.png';
import evening_b from '../images/backgrounds/evening_b.png';
import night_a from '../images/backgrounds/night_a.png';
import night_b from '../images/backgrounds/night_b.png';

const boyWizardBackgrounds: string[] = [morning_a, morning_b, afternoon_a, afternoon_b, evening_a, evening_b, night_a, night_b]; ;

const TOTAL_FRAMES = 16;

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
  'David', 'Doctor', 'Beans', 'Tom', 'Scott', 'Turing',
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
            {/* Background layer */}
            {boyWizardBackgrounds[bgSlot * 2 + bgVariant] && (
              <img
                src={boyWizardBackgrounds[bgSlot * 2 + bgVariant]}
                alt={`${currentSlot.label} background`}
                draggable={false}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  imageRendering: 'pixelated',
                  zIndex: 0,
                }}
              />
            )}
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

const tiltStates = [
  {
    name: 'Zen',
    color: 'green',
    expressionFrame: 0,
    outlineColor: 'transparent',
    glowSize: 0,
    description:
      'Calm and collected. Clean speech blips at normal pitch. No visual distortion. Environmental lighting drives the sprite outline — cyan at night, warm at evening, off during day.',
    statEffect: 'Baseline personality stats — playing as designed.',
  },
  {
    name: 'Annoyed',
    color: 'yellow',
    expressionFrame: 10,
    outlineColor: 'transparent',
    glowSize: 0,
    description:
      'Starting to crack. Voice pitch drops slightly. Personality stats begin shifting — aggression, bluff frequency, and risk tolerance scale upward by per-character tilt weights.',
    statEffect: 'Play becomes noticeably more reckless and loose.',
  },
  {
    name: 'Steaming',
    color: 'orange',
    expressionFrame: 11,
    outlineColor: '#ff8c1a',
    glowSize: 6,
    description:
      'Visibly upset. Speech blips gain a second overlapping interrupt 60ms later. A glowing orange shader outline burns around the character sprite, overriding all environmental lighting.',
    statEffect: 'Hero calls activate. Bluff shove probability doubles.',
  },
  {
    name: 'Monkey',
    color: 'red',
    expressionFrame: 11,
    outlineColor: '#ff2a2a',
    glowSize: 10,
    description:
      'Full meltdown. Three stacked low-pitch blip interrupts. Intense red shader outline. Expression locked to Angry. All personality stats maximally distorted by tilt weights.',
    statEffect: 'Rage quit threshold approaching. One more bad beat could end the match.',
  },
];

const TiltDemo = () => {
  const [tiltIndex, setTiltIndex] = useState(0);
  const [randomAcc1] = useState(() => Math.floor(Math.random() * 16));
  const [randomAcc2] = useState(() => Math.floor(Math.random() * 16));
  const tilt = tiltStates[tiltIndex];

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      p={0}
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--mantine-color-dark-8)',
      }}
    >
      <Grid gutter={0}>
        {/* Left: character preview with tilt glow */}
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--mantine-spacing-xl)',
              minHeight: 280,
              backgroundColor: 'var(--mantine-color-dark-8)',
            }}
          >
            {/* Sprite with glow effect */}
            <Box
              style={{
                position: 'relative',
                width: 140,
                height: 140,
                borderRadius: 'var(--mantine-radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--mantine-color-dark-7)',
                boxShadow:
                  tilt.glowSize > 0
                    ? `0 0 ${tilt.glowSize * 2}px ${tilt.glowSize}px ${tilt.outlineColor}, inset 0 0 ${tilt.glowSize}px 0px ${tilt.outlineColor}40`
                    : 'none',
                transition: 'box-shadow 0.5s ease',
                border:
                  tilt.glowSize > 0
                    ? `2px solid ${tilt.outlineColor}`
                    : '2px solid transparent',
              }}
            >
              {boyWizardExpressions ? (
                <>
                <SpriteLayer
                  src={steveAccessory1}
                  frame={randomAcc1}
                  label="Accessory 1"
                  zIndex={1}
                />
                <SpriteLayer
                  src={steveAccessory2}
                  frame={randomAcc2}
                  label="Accessory 2"
                  zIndex={1}
                />
                <SpriteLayer
                  src={steveExpressions}
                  frame={tilt.expressionFrame}
                  label="Face"
                  zIndex={1}
                />
                </>
              ) : (
                <Stack align="center" justify="center" h="100%" gap={4}>
                  <FaVolumeUp
                    size={24}
                    color={
                      tilt.outlineColor !== 'transparent'
                        ? tilt.outlineColor
                        : 'var(--mantine-color-blue-4)'
                    }
                  />
                </Stack>
              )}
            </Box>

            {/* Tilt state selector */}
            <Group justify="center" mt="md" gap={6}>
              {tiltStates.map((t, i) => (
                <Tooltip key={t.name} label={t.name} position="bottom" withArrow>
                  <Badge
                    size="md"
                    variant={i === tiltIndex ? 'filled' : 'light'}
                    color={t.color}
                    style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                    onClick={() => setTiltIndex(i)}
                  >
                    {t.name}
                  </Badge>
                </Tooltip>
              ))}
            </Group>
          </Box>
        </Grid.Col>

        {/* Right: description */}
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Box
            p="xl"
            style={{
              backgroundColor: 'var(--mantine-color-dark-7)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Group gap="sm" mb="sm">
              <Badge size="lg" variant="filled" color={tilt.color}>
                {tilt.name}
              </Badge>
              <Text size="xs" c="dimmed">
                Tilt state {tiltIndex + 1} of 4
              </Text>
            </Group>

            <Text size="sm" c="gray.3" mb="md">
              {tilt.description}
            </Text>

            <Box
              p="sm"
              style={{
                borderLeft: `3px solid var(--mantine-color-${tilt.color}-6)`,
                backgroundColor: 'var(--mantine-color-dark-6)',
                borderRadius:
                  '0 var(--mantine-radius-sm) var(--mantine-radius-sm) 0',
              }}
            >
              <Text size="xs" c="dimmed" fs="italic">
                {tilt.statEffect}
              </Text>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>

      <Box
        py={6}
        style={{
          backgroundColor: 'var(--mantine-color-dark-7)',
          textAlign: 'center',
        }}
      >
        <Text size="xs" c="dimmed">
          Tilt scales by pot size — a 2 BB loss barely registers, a 50 BB
          all-in loss is devastating. Bad beats hit hardest.
        </Text>
      </Box>
    </Card>
  );
};

const characters = [
  {
    name: 'Steve',
    expressions: steveExpressions,
    acc1: steveAccessory1,
    acc2: steveAccessory2,
    circuit: 'Green',
    country: 'Australia',
    flag: '🇦🇺',
    age: 16,
    archetype: 'Honest player — folds to pressure',
    color: 'green',
    flavor: 'Laid-back skater kid who wears his heart on his sleeve',
    quote: "Yeah nah, I'm out mate.",
  },
  {
    name: 'Aryll',
    expressions: aryllExpressions,
    acc1: aryllAccessory1,
    acc2: aryllAccessory2,
    circuit: 'Green',
    country: 'Canada',
    flag: '🇨🇦',
    age: 19,
    archetype: 'Sticky calling station — never folds',
    color: 'green',
    flavor: 'Passive and stubborn, will call anything out of spite',
    quote: "I'll call. I always call.",
  },
  {
    name: 'Boy Wizard',
    expressions: boyWizardExpressions,
    acc1: boyWizardAccessory1,
    acc2: boyWizardAccessory2,
    circuit: 'Green',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    age: 14,
    archetype: 'Fake aggro — bets big but crumbles when re-raised',
    color: 'green',
    flavor: 'Chaotic student who bluffs constantly but panics under pressure',
    quote: 'I doubt you can afford to match this.',
  },
  {
    name: 'Princess',
    expressions: princessExpressions,
    acc1: princessAccessory1,
    acc2: princessAccessory2,
    circuit: 'Red',
    country: 'South Korea',
    flag: '🇰🇷',
    age: 12,
    archetype: 'Balanced — solid value and bluff mix',
    color: 'red',
    flavor: 'Whimsical and unpredictable, hard to get a read on',
    quote: "You think you know what I'm doing?",
  },
  {
    name: 'Cowboy',
    expressions: cowboyExpressions,
    acc1: cowboyAccessory1,
    acc2: cowboyccessory2,
    circuit: 'Red',
    country: 'United States',
    flag: '🇺🇸',
    age: 29,
    archetype: 'LAG — wide ranges, constant pressure',
    color: 'red',
    flavor: "Traditional rancher who bets like he's got nothing to lose",
    quote: "Let's kick it up a notch.",
  },
  {
    name: 'Malandro',
    expressions: malandroExpressions,
    acc1: malandroAccessory1,
    acc2: malandroAccessory2,
    circuit: 'Red',
    country: 'Brazil',
    flag: '🇧🇷',
    age: 34,
    archetype: 'Maniac — hyper-aggressive, almost never folds',
    color: 'red',
    flavor: 'Street-smart grinder who treats every hand like a street fight',
    quote: 'Fold? Never heard of it.',
  },
  {
    name: 'King',
    expressions: kingExpressions,
    acc1: kingAccessory1,
    acc2: kingAcessory2,
    circuit: 'Blue',
    country: 'Morocco',
    flag: '🇲🇦',
    age: 41,
    archetype: 'GTO Boss — balanced frequencies across all streets',
    color: 'blue',
    flavor: "Elegant and calculated, plays like he's solved the game",
    quote: 'Every decision has a correct answer.',
  },
  {
    name: 'Old Wizard',
    expressions: oldWizardExpressions,
    acc1: oldWizardAccessory1,
    acc2: oldWizardAccessory2,
    circuit: 'Blue',
    country: 'Nepal',
    flag: '🏔️',
    age: 70,
    archetype: 'TAG — only plays premium hands, punishes mistakes',
    color: 'blue',
    flavor: 'Ancient and patient, loves mac and cheese (juxtaposition humor)',
    quote: 'Patience, young one. The cards will come.',
  },
  {
    name: 'Akalite',
    expressions: akaliteExpressions,
    acc1: akaliteAccessory1,
    acc2: akaliteAccessory2,
    circuit: 'Blue',
    country: 'Iceland',
    flag: '🇮🇸',
    age: '??',
    archetype: 'Unreadable Wall — refuses to fold, impossible to bluff',
    color: 'blue',
    flavor: 'Cool Nordic presence, never gives anything away',
    quote: '...',
  },
];

const circuitColors: Record<string, string> = {
  Green: 'green',
  Red: 'red',
  Blue: 'blue',
};

const CharacterSelect = () => {
  const [index, setIndex] = useState(0);
  
  // Calculate a random frame (0 to 15) once on component load
  const [randomAcc1] = useState(() => Math.floor(Math.random() * 16));
  const [randomAcc2] = useState(() => Math.floor(Math.random() * 16));
  
  const c = characters[index];

  const prev = () =>
    setIndex((index - 1 + characters.length) % characters.length);
  const next = () => setIndex((index + 1) % characters.length);

  return (
    <Card
      shadow="md"
      radius="md"
      withBorder
      p={0}
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--mantine-color-dark-8)',
      }}
    >
      {/* Top bar: circuit indicators */}
      <Group justify="center" gap={6} py="sm" px="md"
        style={{ backgroundColor: 'var(--mantine-color-dark-7)' }}
      >
        {characters.map((ch, i) => (
          <Tooltip key={ch.name} label={ch.name} position="top" withArrow>
            <Box
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 14 : 10,
                height: i === index ? 14 : 10,
                borderRadius: '50%',
                backgroundColor: i === index
                  ? `var(--mantine-color-${circuitColors[ch.circuit]}-5)`
                  : `var(--mantine-color-${circuitColors[ch.circuit]}-9)`,
                border: i === index
                  ? `2px solid var(--mantine-color-${circuitColors[ch.circuit]}-3)`
                  : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            />
          </Tooltip>
        ))}
      </Group>

      {/* Main content */}
      <Grid gutter={0}>
        {/* Left: portrait area */}
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--mantine-spacing-xl)',
              minHeight: 300,
              position: 'relative',
            }}
          >
            {/* Nav arrows */}
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              onClick={prev}
              radius="xl"
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}
              aria-label="Previous character"
            >
              <FaChevronLeft size={14} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              onClick={next}
              radius="xl"
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }}
              aria-label="Next character"
            >
              <FaChevronRight size={14} />
            </ActionIcon>

            {/* Character display */}
            <Badge
              size="sm"
              variant="filled"
              color={circuitColors[c.circuit]}
              mb="xs"
            >
              {c.circuit} Circuit
            </Badge>

            {/* Portrait updated with Character Art */}
            <Box
              style={{
                position: 'relative',
                width: 140,
                height: 140,
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: `var(--mantine-color-${circuitColors[c.circuit]}-9)`,
                border: `3px solid var(--mantine-color-${circuitColors[c.circuit]}-6)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--mantine-spacing-sm)'
              }}
            >
              {c.expressions ? (
                <>
                  <SpriteLayer src={c.acc1} frame={randomAcc1} label="Accessory 1" zIndex={1} />
                  <SpriteLayer src={c.acc2} frame={randomAcc2} label="Accessory 2" zIndex={2} />
                  <SpriteLayer src={c.expressions} frame={0} label="Face" zIndex={3} />
                </>
              ) : (
                <Text size="3rem" style={{ lineHeight: 1 }}>{c.flag}</Text>
              )}
            </Box>

            <Title order={3} c="white" ta="center">
              {c.name}
            </Title>
            <Text size="xs" c="dimmed" ta="center">
              Age {c.age} · {c.country}
            </Text>
          </Box>
        </Grid.Col>

        {/* Right: details */}
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Box
            p="xl"
            style={{
              backgroundColor: 'var(--mantine-color-dark-7)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Badge
              size="xs"
              variant="light"
              color={circuitColors[c.circuit]}
              mb="sm"
            >
              {c.archetype}
            </Badge>

            <Text size="sm" c="gray.3" mb="md">
              {c.flavor}
            </Text>

            <Box
              p="sm"
              mb="md"
              style={{
                borderLeft: `3px solid var(--mantine-color-${circuitColors[c.circuit]}-6)`,
                backgroundColor: 'var(--mantine-color-dark-6)',
                borderRadius: '0 var(--mantine-radius-sm) var(--mantine-radius-sm) 0',
              }}
            >
              <Text size="xs" c="dimmed" fs="italic">
                &ldquo;{c.quote}&rdquo;
              </Text>
            </Box>

            <Group gap="lg">
              <Box>
                <Text size="xs" c="dimmed" tt="uppercase" fw={500} mb={2}>
                  Circuit
                </Text>
                <Badge
                  variant="dot"
                  color={circuitColors[c.circuit]}
                  size="sm"
                >
                  {c.circuit}
                </Badge>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" tt="uppercase" fw={500} mb={2}>
                  Origin
                </Text>
                <Text size="sm" c="gray.3">
                  {c.flag} {c.country}
                </Text>
              </Box>
              <Box>
                <Text size="xs" c="dimmed" tt="uppercase" fw={500} mb={2}>
                  Difficulty
                </Text>
                <Text size="sm" c="gray.3">
                  {c.circuit === 'Green'
                    ? 'Beginner'
                    : c.circuit === 'Red'
                    ? 'Intermediate'
                    : 'Advanced'}
                </Text>
              </Box>
            </Group>
          </Box>
        </Grid.Col>
      </Grid>

      {/* Keyboard hint */}
      <Group
        justify="center"
        py={6}
        style={{ backgroundColor: 'var(--mantine-color-dark-7)' }}
      >
        <Text size="xs" c="dimmed">
          {index + 1} / {characters.length} — Click the dots or use the arrows
          to browse
        </Text>
      </Group>
    </Card>
  );
};


const techStack = [
  { label: 'Language', value: 'C#' },
  { label: 'Engine', value: 'Godot 4' },
  { label: 'Analysis', value: 'Python / Pandas / Plotly' },
  { label: 'Hand Evaluator', value: 'Open-source Pheval port' },
  { label: 'Art', value: 'Original pixel art' },
  { label: 'Target', value: 'Desktop (Win / Mac / Linux)' },
];

const ParallaxPoker = () => {
  const [techOpen, setTechOpen] = useState(false);

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
          Inspired by Balatro and Poker Night at the Inventory, Parallax Poker is a character-driven poker roguelite where every opponent has a
          personality you can read. This is being built solo in C# and the Godot engine.
        </Text>

        {/* Hero Image */}
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
              backgroundColor: 'var(--mantine-color-dark-7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 360,
              width: '100%'
            }}
          >
            <img 
              src={parallaxPokerMain} 
              alt="Parallax Poker Main Title" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
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
          challenge isn't the cards: it's the person sitting across from you.
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
        <Text size="sm" c="dimmed" mb="sm">
          In this world, you're playing online poker against people from
          all over the world. The game clock runs on UTC (London time), and
          every opponent has a real timezone offset based on where they live.
          The same run might catch Cowboy in his quiet Texas morning while
          Princess is playing loose and aggressive in a late Seoul night.
        </Text>
        <Text size="sm" c="dimmed" mb="lg">
          Time of day also affects personality stats (morning
          play is tighter, night play is reckless), changes the background art
          to match their local environment, and adjusts the character lighting.
          A night player gets a cyan monitor-glow outline, evening gets sunset
          warmth. Every run rolls the same UTC hour from its seed, so the
          timezone offsets are consistent but the resulting moods are different
          per opponent. 9 characters across three circuits, each shaped by 15+
          tunable stats. Browse the roster below.
        </Text>

        <CharacterSelect />
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
            Every Run is a Parallel World
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          Each run generates a unique
          <i> version</i> of every opponent: a different name, different
          accessories, different background, different time of day.
        </Text>

        <Grid gutter="lg" mb="lg">
         <Grid.Col span={{ base: 12, md: 7 }}>
            <Text size="sm" mb="md">
              You are a dimension-hopping poker player. Each time you bust out,
              simply hop to a parallel world! Learn the nuanced playstyles of each world's inhabitants,
              and take all their chips!
            </Text>
            <Text size="sm" mb="md">
              Every universe shifts the environment, the local time of day, and the mood around the table. 
              An opponent who plays loosely during a late-night session in one timeline 
              might be a tight, disciplined fortress in another world's quiet morning. 
              You have to read the room, find their emotional cracks, and exploit them.
            </Text>
            <Text size="sm">
              A Journal system will allow players to catalog the specific parallel-world identities 
              they've encountered, mapping out variations of the tournament roster as they build their bankroll.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={5} c="blue.6" mb="sm">
                What makes each variant unique
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
                        Accessory slot 1
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        16 color/style palettes
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
                        16 color/style palettes
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" c="dimmed">
                        Display name
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
                        Time-of-day background
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={500}>
                        4 slots × 2 variants = 8
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Text size="sm" fw={600}>
                        Parallel-world versions
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={600} c="blue.6">
                        32,768 per character
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

        {/* Tell demo GIF */}
        <Card
          shadow="sm"
          radius="md"
          withBorder
          p={0}
          mt="lg"
          style={{ overflow: 'hidden' }}
        >
          <Box
            style={{
              backgroundColor: 'var(--mantine-color-dark-7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 240,
              width: '100%'
            }}
          >
            <img 
              src={tellGameplayGif} 
              alt="Gameplay showing tell reaction" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Box>
        </Card>

      </Box>

      <Divider my="xl" />

      {/* ══════════════════════════════════════════════════════════════
          BREAKING YOUR OPPONENT
      ══════════════════════════════════════════════════════════════ */}
      <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaChessKnight size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            Breaking Your Opponent
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          Every match is a battle of attrition, and there's more than one way to
          end it. Each character is vulnerable to different strategies.
        </Text>

        <Grid gutter="lg" mb="xl">
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Badge size="xs" color="green" variant="light" mb="sm">
                Chip knockout
              </Badge>
              <Text size="sm" fw={500} mb={4}>
                Take all their chips
              </Text>
              <Text size="xs" c="dimmed">
                The classic poker win. Grind them down hand by hand, trap them
                into big pots with strong hands, or exploit their bluffs until
                their stack hits zero.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Badge size="xs" color="red" variant="light" mb="sm">
                Rage quit
              </Badge>
              <Text size="sm" fw={500} mb={4}>
                Tilt them until they snap
              </Text>
              <Text size="xs" c="dimmed">
                Every character has a Rage Quit threshold on their tilt meter.
                Apply relentless pressure — overbets, re-raises, bad-beat
                setups — until the emotional damage overwhelms them and they
                storm off.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Badge size="xs" color="blue" variant="light" mb="sm">
                Surrender
              </Badge>
              <Text size="sm" fw={500} mb={4}>
                Bleed them slowly
              </Text>
              <Text size="xs" c="dimmed">
                Each character has a chip threshold below which they'll walk
                away — but only if they're calm. A zen opponent who's lost 60%
                of their stack may fold the match entirely, cutting their losses
                before it gets worse.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>

        <Text size="sm" c="dimmed" mb="lg">
          The tilt system is what makes rage quits possible — and what makes
          calm opponents dangerous. When an opponent loses badly, their emotional
          state degrades through four stages, and the entire audiovisual
          presentation degrades with them. Click through the states below.
        </Text>

        <TiltDemo />
      </Box>

      {/* <Divider my="xl" /> */}

      {/* ══════════════════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════════════════ */}
      {/* <Box mb="xl">
        <Group mb="sm">
          <ThemeIcon variant="light" color="blue" size="lg" radius="md">
            <FaPaintBrush size={16} />
          </ThemeIcon>
          <Title order={2} c="blue.6">
            Gallery
          </Title>
        </Group>
        <Text size="sm" c="dimmed" mb="lg">
          Screenshots and gameplay footage will be added as the project
          progresses.
        </Text>

        <Grid gutter="md">
          {[
            'Gameplay — active hand with tells',
            'Character select / circuit map',
            'Tilt progression (Zen → Monkey)',
            'Time-of-day background comparison',
          ].map((label) => (
            <Grid.Col key={label} span={{ base: 12, sm: 6 }}>
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
                    minHeight: 200,
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
      </Box> */}

      {/* ══════════════════════════════════════════════════════════════
          COLLAPSIBLE TECHNICAL DEEP DIVE
      ══════════════════════════════════════════════════════════════ */}
      <Box my="xl">
        <Divider mb="lg" />
        <Group justify="center">
          <Button
            variant={techOpen ? 'light' : 'filled'}
            color="gray"
            size="md"
            onClick={() => setTechOpen((o) => !o)}
            rightSection={
              <FaChevronDown
                size={12}
                style={{
                  transform: techOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            }
          >
            {techOpen ? 'Hide technical details' : 'Under the hood — Technical deep dive'}
          </Button>
        </Group>
        <Text size="sm" c="dimmed" ta="center" mt="sm">
          {techOpen
            ? 'The architecture, tooling, and workflows behind the game.'
            : 'AI engine, balancing pipeline, Monte Carlo simulations, and more.'}
        </Text>

        <Collapse in={techOpen}>
          <Box mt="xl">
            {/* AI DECISION ENGINE */}
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
                    Every AI decision is computed from scratch — no scripted
                    sequences. A ported Pheval hand evaluator ranks the current
                    hand, which feeds into a strength evaluator that factors in
                    draw potential (flush draws, straight draws, backdoors) and
                    board texture analysis.
                  </Text>
                  <Text size="sm" mb="md">
                    The decision maker takes this hand strength plus the full
                    game state — pot size, bet ratios, position, stack depths —
                    and runs it through personality-weighted thresholds. Each
                    character has 15+ personality stats (aggression, bluff
                    frequency, fold-to-pressure, call tendency, raise resistance,
                    risk tolerance, composure, tilt sensitivity, and per-street
                    aggression multipliers) that combine to produce genuinely
                    distinct play styles.
                  </Text>
                  <Text size="sm">
                    The system also handles bluff/value tagging, semi-bluff zone
                    detection, trap decisions (checking strong hands to induce
                    bets), hero call logic for tilted states, and all-in
                    commitment math for deep and short stacks.
                  </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group mb="sm">
                      <ThemeIcon
                        variant="light"
                        color="blue"
                        size="lg"
                        radius="md"
                      >
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

            {/* BALANCING PIPELINE */}
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
                One of the most technically interesting parts of this project is
                the feedback loop between gameplay and data analysis.
              </Text>

              <Grid gutter="lg" mb="lg">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    h="100%"
                  >
                    <Group mb="sm">
                      <ThemeIcon
                        variant="light"
                        color="blue"
                        size="lg"
                        radius="md"
                      >
                        <FaDice size={16} />
                      </ThemeIcon>
                      <Title order={4} c="blue.6">
                        Monte Carlo gauntlet
                      </Title>
                    </Group>
                    <Text size="sm" c="dimmed">
                      A headless simulation mode runs thousands of AI-vs-AI
                      matches. Each character pairing is tested across all four
                      time slots and variance tiers, producing win-rate
                      distributions and behavioral statistics at scale — no
                      manual playtesting required.
                    </Text>
                  </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    h="100%"
                  >
                    <Group mb="sm">
                      <ThemeIcon
                        variant="light"
                        color="blue"
                        size="lg"
                        radius="md"
                      >
                        <FaChartBar size={16} />
                      </ThemeIcon>
                      <Title order={4} c="blue.6">
                        Analysis reports
                      </Title>
                    </Group>
                    <Text size="sm" c="dimmed">
                      A Python pipeline reads the CSV logs and generates HTML
                      reports with archetype verification, stat-vs-observed
                      alignment charts, engine health diagnostics, and clustering
                      detection. The report flags when characters deviate from
                      their target archetype.
                    </Text>
                  </Card>
                </Grid.Col>
              </Grid>

              <Text size="sm" mb="sm" fw={500}>
                The feedback loop:
              </Text>
              <List spacing="xs" size="sm" mb="md">
                <List.Item>
                  Every AI decision is logged to CSV with 30+ columns — hand
                  strength, bet ratio, tilt state, personality stats, and the
                  final action.
                </List.Item>
                <List.Item>
                  The gauntlet collects thousands of rows per archetype across
                  all time slots and variance tiers.
                </List.Item>
                <List.Item>
                  The Python analyzer compares observed behavior against target
                  archetypes and flags misalignments (e.g., &ldquo;Boy Wizard
                  should fold under pressure but his FTP% is 0%&rdquo;).
                </List.Item>
                <List.Item>
                  Fixes are applied to the engine or personality resources, the
                  gauntlet re-runs, and the cycle repeats.
                </List.Item>
              </List>

              {/* Analysis report screenshot */}
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
                    minHeight: 240,
                  }}
                >
              <img 
                src={balanceReport} 
                alt="Linear Graph of Opponent Stats" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
                </Box>
              </Card>
            </Box>

            {/* <Divider my="xl" /> */}

            {/* JOURNAL (PLANNED) */}

          </Box>
        </Collapse>
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

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
  Badge,
  Grid,
  Divider,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconArrowLeft,
  IconBrandGithub,
  IconCircleCheck,
  IconBrain,
  IconChartBar,
  IconWorld,
  IconEye,
  IconCards,
  IconChevronLeft,
  IconChevronRight,
  IconRefresh,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  ppBalance,
  ppDialogue,
} from '../../data/imageAssets';
import { TechBadge } from '../../components/ui/TechBadge';

// Character sprite sheets
import steveExpressions from '../../../images/expressions/steve_expressions.png';
import steveAccessory1 from '../../../images/accessories/steve_accessories1.png';
import steveAccessory2 from '../../../images/accessories/steve_accessories2.png';
import boyWizardExpressions from '../../../images/expressions/boy_wizard_expressions.png';
import boyWizardAccessory1 from '../../../images/accessories/boywizard_accessories1.png';
import boyWizardAccessory2 from '../../../images/accessories/boywizard_accessories2.png';
import morning_a from '../../../images/backgrounds/morning_a.png';
import morning_b from '../../../images/backgrounds/morning_b.png';
import afternoon_a from '../../../images/backgrounds/afternoon_a.png';
import afternoon_b from '../../../images/backgrounds/afternoon_b.png';
import evening_a from '../../../images/backgrounds/evening_a.png';
import evening_b from '../../../images/backgrounds/evening_b.png';
import night_a from '../../../images/backgrounds/night_a.png';
import night_b from '../../../images/backgrounds/night_b.png';

const screenshots = [
  {
    src: ppDialogue,
    label: 'Dialogue System',
    caption:
      'Characters react to hands with personality-driven dialogue. Speech blip pitch and rhythm shift by tilt state.',
  },
  {
    src: ppBalance,
    label: 'Monte Carlo Balance Report',
    caption:
      'Python/Pandas/Plotly pipeline: 32,768+ simulation runs generate CSV logs, then produce per-character winrate charts to validate balance before each release.',
  },
];

const techStack = [
  { tech: 'C#', role: 'Core game logic — AI decision engine, personality stat system, tilt state machine' },
  { tech: 'Godot 4', role: 'Game engine — scene management, pixel art rendering, sprite compositor' },
  { tech: 'Python', role: 'Monte Carlo simulation gauntlet — 32k+ runs generating balance CSV logs' },
  { tech: 'Pandas', role: 'CSV log analysis — aggregating simulation results into statistical reports' },
  { tech: 'Plotly', role: 'Interactive balance report visualizations — winrate charts per character pairing' },
  { tech: 'Monte Carlo', role: 'Simulation methodology for validating AI balance across all opponent pairings' },
  { tech: 'Pixel Art', role: 'Custom layered sprite sheets — 32,768 unique character combinations per character' },
];

const architecturePoints = [
  {
    icon: IconBrain,
    title: 'AI Decision Engine',
    detail:
      'Each character runs the PHeval hand evaluator to estimate hand equity, then applies 15+ personality stats — aggression, bluff frequency, tilt weights, hero call threshold — to make decisions. Stats shift dynamically based on tilt state and pot size relative to stack.',
    color: 'indigo',
  },
  {
    icon: IconCards,
    title: 'Character Compositor',
    detail:
      'Characters are built from layered pixel art sprite sheets: expression layer (16 frames), two accessory layers (16 frames each), and a background that shifts by time-of-day slot. Each character gets a pool of display names, yielding 32,768+ unique visual combinations per character.',
    color: 'violet',
  },
  {
    icon: IconChartBar,
    title: 'Monte Carlo Balance Pipeline',
    detail:
      'A Python simulation gauntlet runs thousands of heads-up matches for every opponent pairing, logging outcomes to CSV. Pandas aggregates the results and Plotly renders interactive balance reports — making it easy to spot outlier winrates before shipping a character.',
    color: 'cyan',
  },
  {
    icon: IconEye,
    title: 'Tilt & Tell System',
    detail:
      'Two independent tell channels let players read opponents: face composure (expression frame updates) and bluff frequency (betting pattern drift). A 4-state tilt system (Zen → Annoyed → Steaming → Monkey) distorts personality stats and applies sprite glow shaders, voice pitch shifts, and dialogue tone changes.',
    color: 'orange',
  },
  {
    icon: IconWorld,
    title: 'Parallel Worlds System',
    detail:
      "The game detects the player's local timezone to assign an environment slot (Morning / Afternoon / Evening / Night) and a matching background variant. Each slot shifts character personalities slightly — a character who is calm in the morning may be aggressive at night — creating a sense of a living world.",
    color: 'teal',
  },
];

// ── Sprite compositor demo ─────────────────────────────────────────────────

const bgFrames = [morning_a, morning_b, afternoon_a, afternoon_b, evening_a, evening_b, night_a, night_b];
const TOTAL_FRAMES = 16;

const expressionLabels: Record<number, string> = {
  0: 'Neutral', 1: 'Neutral (tilted)', 2: 'Glance', 3: 'Glance (tilted)',
  4: 'Bored', 5: 'Bored (tilted)', 6: 'Happy', 7: 'Smirk',
  8: 'Surprised', 9: 'Worried', 10: 'Annoyed', 11: 'Angry',
  12: 'Sad', 13: 'Sob', 14: 'FakeStrong', 15: 'FakeWeak',
};

const wizardNames = [
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

function SpriteLayer({ src, frame, zIndex }: { src: string; frame: number; zIndex: number }) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex }}>
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
}

function FramePicker({
  label, sublabel, frame, setFrame, color,
}: { label: string; sublabel?: string; frame: number; setFrame: (f: number) => void; color: string }) {
  return (
    <Group justify="space-between" py={6}>
      <Box style={{ flex: 1, minWidth: 0 }}>
        <Text size="xs" fw={600}>{label}</Text>
        {sublabel && <Text size="xs" c="dimmed" truncate>{sublabel}</Text>}
      </Box>
      <Group gap={6}>
        <ActionIcon variant="light" color={color} size="sm" radius="xl"
          onClick={() => setFrame((frame - 1 + TOTAL_FRAMES) % TOTAL_FRAMES)}>
          <IconChevronLeft size={10} />
        </ActionIcon>
        <Text size="xs" fw={500} c="dimmed" style={{ minWidth: 38, textAlign: 'center' }}>
          {frame + 1}/{TOTAL_FRAMES}
        </Text>
        <ActionIcon variant="light" color={color} size="sm" radius="xl"
          onClick={() => setFrame((frame + 1) % TOTAL_FRAMES)}>
          <IconChevronRight size={10} />
        </ActionIcon>
      </Group>
    </Group>
  );
}

function SpriteCompositorDemo({ isDark, surface, border }: { isDark: boolean; surface: string; border: string }) {
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
    setNameIndex(Math.floor(Math.random() * wizardNames.length));
    setBgSlot(Math.floor(Math.random() * 4));
    setBgVariant(Math.floor(Math.random() * 2));
  };

  const currentSlot = timeSlots[bgSlot];
  const totalCombinations = TOTAL_FRAMES * TOTAL_FRAMES * wizardNames.length * timeSlots.length * 2;
  const visualCombo = acc1Frame * TOTAL_FRAMES + acc2Frame + 1;
  const bg = bgFrames[bgSlot * 2 + bgVariant];

  return (
    <Card style={{ border: `1px solid ${border}`, background: surface }}>
      <Group justify="space-between" mb="md">
        <Box>
          <Text fw={700} size="sm">Character Compositor — Live Demo</Text>
          <Text size="xs" c="dimmed">Build a unique opponent from layered sprite sheets</Text>
        </Box>
        <Tooltip label="Randomize">
          <ActionIcon variant="light" color="indigo" size="md" radius="xl" onClick={randomize}>
            <IconRefresh size={14} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Text size="sm" fw={600} ta="center" mb={6}>"{wizardNames[nameIndex]}"</Text>
          <Box mx="auto" style={{
            position: 'relative', width: 160, height: 160, borderRadius: 12, overflow: 'hidden',
            backgroundColor: isDark ? '#0f1117' : '#e2e8f0',
          }}>
            {bg && (
              <img src={bg} alt="" draggable={false} style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                objectFit: 'cover', imageRendering: 'pixelated', zIndex: 0,
              }} />
            )}
            <SpriteLayer src={boyWizardAccessory1} frame={acc1Frame} zIndex={1} />
            <SpriteLayer src={boyWizardAccessory2} frame={acc2Frame} zIndex={2} />
            <SpriteLayer src={boyWizardExpressions} frame={faceFrame} zIndex={3} />
          </Box>
          <Group justify="center" mt={8} gap={6}>
            <Badge size="xs" color={currentSlot.color} variant="light">{currentSlot.label}</Badge>
            <Text size="xs" c="dimmed">Variant {bgVariant === 0 ? 'A' : 'B'}</Text>
          </Group>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap={0}>
            <FramePicker label="Expression" sublabel={expressionLabels[faceFrame]} frame={faceFrame} setFrame={setFaceFrame} color="indigo" />
            <Divider color={border} />
            <FramePicker label="Accessory 1" sublabel={`Color variant ${acc1Frame + 1}`} frame={acc1Frame} setFrame={setAcc1Frame} color="violet" />
            <Divider color={border} />
            <FramePicker label="Accessory 2" sublabel={`Color variant ${acc2Frame + 1}`} frame={acc2Frame} setFrame={setAcc2Frame} color="grape" />
            <Divider color={border} />
            <Group justify="space-between" py={6}>
              <Box style={{ flex: 1 }}>
                <Text size="xs" fw={600}>Display name</Text>
                <Text size="xs" c="dimmed" truncate>{wizardNames[nameIndex]}</Text>
              </Box>
              <Group gap={6}>
                <ActionIcon variant="light" color="orange" size="sm" radius="xl"
                  onClick={() => setNameIndex((nameIndex - 1 + wizardNames.length) % wizardNames.length)}>
                  <IconChevronLeft size={10} />
                </ActionIcon>
                <Text size="xs" fw={500} c="dimmed" style={{ minWidth: 38, textAlign: 'center' }}>
                  {nameIndex + 1}/{wizardNames.length}
                </Text>
                <ActionIcon variant="light" color="orange" size="sm" radius="xl"
                  onClick={() => setNameIndex((nameIndex + 1) % wizardNames.length)}>
                  <IconChevronRight size={10} />
                </ActionIcon>
              </Group>
            </Group>
            <Divider color={border} />
            <Group justify="space-between" py={6}>
              <Box style={{ flex: 1 }}>
                <Text size="xs" fw={600}>Background</Text>
                <Text size="xs" c="dimmed">{currentSlot.label} ({currentSlot.hours}) · Variant {bgVariant === 0 ? 'A' : 'B'}</Text>
              </Box>
              <Group gap={6}>
                <ActionIcon variant="light" color={currentSlot.color} size="sm" radius="xl"
                  onClick={() => { if (bgVariant === 0) { setBgSlot((bgSlot - 1 + 4) % 4); setBgVariant(1); } else { setBgVariant(0); } }}>
                  <IconChevronLeft size={10} />
                </ActionIcon>
                <Text size="xs" fw={500} c="dimmed" style={{ minWidth: 38, textAlign: 'center' }}>
                  {bgSlot * 2 + bgVariant + 1}/8
                </Text>
                <ActionIcon variant="light" color={currentSlot.color} size="sm" radius="xl"
                  onClick={() => { if (bgVariant === 1) { setBgSlot((bgSlot + 1) % 4); setBgVariant(0); } else { setBgVariant(1); } }}>
                  <IconChevronRight size={10} />
                </ActionIcon>
              </Group>
            </Group>
          </Stack>

          <Box mt="sm" px="sm" py={8} style={{
            borderRadius: 8, background: isDark ? '#22263a' : 'var(--mantine-color-gray-0)',
            border: `1px solid ${border}`, textAlign: 'center',
          }}>
            <Text size="xs" c="dimmed">
              Combo{' '}
              <Text span fw={600} c="indigo.4">#{visualCombo.toLocaleString()}</Text>
              {' '}of {(TOTAL_FRAMES * TOTAL_FRAMES).toLocaleString()} × {wizardNames.length} names × {timeSlots.length * 2} backgrounds ={' '}
              <Text span fw={600} c="indigo.4">{totalCombinations.toLocaleString()}</Text> per character
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

// ── Tilt system demo ───────────────────────────────────────────────────────

const tiltStates = [
  {
    name: 'Zen', color: 'green', frame: 0, glow: 'transparent', glowSize: 0,
    description: 'Calm and collected. Clean speech blips at normal pitch. No visual distortion. Environmental lighting drives the sprite outline — cyan at night, warm at evening, off during day.',
    statEffect: 'Baseline personality stats — playing as designed.',
  },
  {
    name: 'Annoyed', color: 'yellow', frame: 10, glow: 'transparent', glowSize: 0,
    description: 'Starting to crack. Voice pitch drops slightly. Aggression, bluff frequency, and risk tolerance scale upward by per-character tilt weights.',
    statEffect: 'Play becomes noticeably more reckless and loose.',
  },
  {
    name: 'Steaming', color: 'orange', frame: 11, glow: '#ff8c1a', glowSize: 6,
    description: 'Visibly upset. Speech blips gain a second overlapping interrupt 60ms later. A glowing orange shader outline burns around the character sprite.',
    statEffect: 'Hero calls activate. Bluff shove probability doubles.',
  },
  {
    name: 'Monkey', color: 'red', frame: 11, glow: '#ff2a2a', glowSize: 10,
    description: 'Full meltdown. Three stacked low-pitch blip interrupts. Intense red shader outline. Expression locked to Angry. All personality stats maximally distorted.',
    statEffect: 'Rage quit threshold approaching. One more bad beat could end the match.',
  },
];

function TiltSystemDemo({ isDark, surface, border }: { isDark: boolean; surface: string; border: string }) {
  const [tiltIndex, setTiltIndex] = useState(0);
  const [randomAcc1] = useState(() => Math.floor(Math.random() * 16));
  const [randomAcc2] = useState(() => Math.floor(Math.random() * 16));
  const tilt = tiltStates[tiltIndex];

  return (
    <Card style={{ border: `1px solid ${border}`, background: surface, padding: 0, overflow: 'hidden' }}>
      <Grid gutter={0}>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Box style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: 24, minHeight: 280, background: isDark ? '#0f1117' : '#f1f5f9',
          }}>
            <Box style={{
              position: 'relative', width: 140, height: 140, borderRadius: 12, overflow: 'hidden',
              backgroundColor: isDark ? '#1a1d27' : '#e2e8f0',
              boxShadow: tilt.glowSize > 0
                ? `0 0 ${tilt.glowSize * 2}px ${tilt.glowSize}px ${tilt.glow}, inset 0 0 ${tilt.glowSize}px 0px ${tilt.glow}40`
                : 'none',
              border: tilt.glowSize > 0 ? `2px solid ${tilt.glow}` : `2px solid ${border}`,
              transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
            }}>
              <SpriteLayer src={steveAccessory1} frame={randomAcc1} zIndex={1} />
              <SpriteLayer src={steveAccessory2} frame={randomAcc2} zIndex={2} />
              <SpriteLayer src={steveExpressions} frame={tilt.frame} zIndex={3} />
            </Box>
            <Group justify="center" mt="md" gap={6} wrap="wrap">
              {tiltStates.map((t, i) => (
                <Tooltip key={t.name} label={t.name} position="bottom" withArrow>
                  <Badge
                    size="md" variant={i === tiltIndex ? 'filled' : 'light'} color={t.color}
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

        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Box p="xl" style={{
            background: surface, height: '100%',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <Group gap="sm" mb="sm">
              <Badge size="lg" variant="filled" color={tilt.color}>{tilt.name}</Badge>
              <Text size="xs" c="dimmed">Tilt state {tiltIndex + 1} of 4</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md" lh={1.7}>{tilt.description}</Text>
            <Box p="sm" style={{
              borderLeft: `3px solid var(--mantine-color-${tilt.color}-6)`,
              background: isDark ? '#22263a' : 'var(--mantine-color-gray-0)',
              borderRadius: '0 8px 8px 0',
            }}>
              <Text size="xs" c="dimmed" fs="italic">{tilt.statEffect}</Text>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>

      <Box py={8} px="xl" style={{ borderTop: `1px solid ${border}`, background: surface }}>
        <Text size="xs" c="dimmed" ta="center">
          Tilt scales by pot size — a 2 BB loss barely registers, a 50 BB all-in loss is devastating. Bad beats hit hardest.
        </Text>
      </Box>
    </Card>
  );
}

// ── Screenshot carousel ────────────────────────────────────────────────────

interface CarouselProps {
  screenshots: { src: string; label: string; caption: string }[];
  isDark: boolean;
  border: string;
  surface: string;
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

function ScreenshotCarousel({ screenshots, isDark, border, surface }: CarouselProps) {
  const [[index, direction], setSlide] = useState([0, 0]);

  const go = (next: number) => {
    const dir = next > index ? 1 : -1;
    setSlide([(next + screenshots.length) % screenshots.length, dir]);
  };

  const current = screenshots[index];

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
            style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '24px 48px' }}
          >
            <img
              src={current.src}
              alt={current.label}
              style={{
                maxHeight: 480, maxWidth: '100%', objectFit: 'contain', borderRadius: 8,
                boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.6)' : '0 8px 40px rgba(0,0,0,0.12)',
              }}
            />
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
            {index + 1} / {screenshots.length}
          </Text>
        </Group>
      </Box>

      <Group justify="center" pb="md" gap={6}>
        {screenshots.map((_, i) => (
          <Box
            key={i} onClick={() => go(i)}
            style={{
              width: i === index ? 20 : 6, height: 6, borderRadius: 3,
              background: i === index
                ? 'var(--mantine-color-indigo-5)'
                : isDark ? '#2e3347' : 'var(--mantine-color-gray-3)',
              cursor: 'pointer', transition: 'width 0.2s ease, background 0.2s ease',
            }}
          />
        ))}
      </Group>
    </Box>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

export function ParallaxPoker() {
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
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            C# · Godot 4 Roguelite Card Game
          </Text>
          <Title
            order={1}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1 }}
          >
            Parallax Poker
          </Title>
          <Text size="lg" c="dimmed" maw={680} lh={1.7}>
            A character-driven poker roguelite inspired by Balatro and Poker Night at the Inventory.
            Each opponent has a unique personality system with 15+ stats driving bluff frequency, tilt
            thresholds, and tell behaviors.
          </Text>
          <Group gap="sm" mt={4} wrap="wrap">
            <Button
              component="a"
              href="https://github.com/tyler-johnston"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="gray"
              leftSection={<IconBrandGithub size={16} />}
            >
              GitHub
            </Button>
          </Group>
        </Stack>
      </motion.div>

      {/* Screenshots */}
      <motion.div {...fadeUp(0.08)}>
        <Stack gap={4} mb={24}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            Screenshots
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            See It In Action
          </Title>
        </Stack>
      </motion.div>

      <motion.div {...fadeUp(0.12)}>
        <ScreenshotCarousel screenshots={screenshots} isDark={isDark} border={border} surface={surface} />
      </motion.div>

      <Box mb={60} />

      {/* Architecture */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            Architecture
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Technical Design
          </Title>
        </Stack>
      </motion.div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb={40}>
        {architecturePoints.map((point, i) => (
          <motion.div key={point.title} {...fadeUp(i * 0.07)}>
            <Card style={{ border: `1px solid ${border}`, background: surface, height: '100%' }}>
              <ThemeIcon color={point.color} variant="light" size="lg" radius="md" mb="sm">
                <point.icon size={20} />
              </ThemeIcon>
              <Text fw={600} mb={6}>{point.title}</Text>
              <Text size="sm" c="dimmed" lh={1.7}>{point.detail}</Text>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>

      {/* Interactive demos */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={24}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            Interactive
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Try the Systems
          </Title>
        </Stack>
      </motion.div>

      <motion.div {...fadeUp(0.12)}>
        <Stack gap="lg" mb={60}>
          <SpriteCompositorDemo isDark={isDark} surface={surface} border={border} />
          <TiltSystemDemo isDark={isDark} surface={surface} border={border} />
        </Stack>
      </motion.div>

      {/* Tech stack */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
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
                  <Table.Td><TechBadge label={row.tech} /></Table.Td>
                  <Table.Td>
                    <Text size="sm" c="dimmed">{row.role}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>
      </motion.div>

      {/* Achievements */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
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
            <ThemeIcon color="indigo" variant="light" size="sm" radius="xl">
              <IconCircleCheck size={12} />
            </ThemeIcon>
          }
        >
          {[
            'Custom poker AI decision engine — fold/bet/raise/all-in decisions driven by hand strength (PHeval), board texture, position, and bet sizing; value betting, semi-bluffs, traps, and bluff-raises tuned per-character via aggression, bluff frequency, and risk tolerance',
            'Tilt system (Zen → Annoyed → Steaming → Monkey) — escalates bluffing and aggression while degrading fold discipline, triggering costly all-ins and tell leakage',
            'Monte Carlo gauntlet: 32,768+ simulation runs per matchup generating CSV logs analyzed via Python/Pandas for balance reporting',
            'All character artwork — hand-created sprite layering (expressions, accessories, environments) across circuit themes',
            'MVC architecture — strict separation of engine logic (poker rules, AI decisions) from view layer, enabling rapid large-scale balance testing',
            'Tell system — dual-channel behavioral patterns (composure + bluff tendency) readable by player for hand strength deduction',
            'Dynamic personality shifts — timezone-based mood and strategy modifications alter AI behavior across sessions',
            'Dialogue system — personality-driven reactive speech with tone and pitch shifts based on tilt state',
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

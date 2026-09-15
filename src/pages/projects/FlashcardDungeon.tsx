import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Group,
  Button,
  Box,
} from '@mantine/core';
import { IconArrowLeft, IconExternalLink, IconShieldCheck, IconRefresh, IconFlask, IconDatabase } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  fdDecksHome,
  fdRoadmap,
  fdRoadmapPersonal,
  fdRoadmapCurated,
  fdAvatarSelect,
  fdShopHub,
  fdBattleFlip,
  fdBattleMultipleChoice,
  fdBattleActiveRecall,
  fdBattleMatching,
  fdBattleWordSort,
  fdBattleSpellSprint,
  fdBattleAudioChoice,
  fdBattleAudioRecall,
  fdBestiary,
  fdBestiaryDetail,
  fdBestiaryDetail2,
  fdIconPack,
  fdCardEditor,
  fdDeckNotes,
  fdCardAudioTts,
  fdProfile,
  fdQuests,
} from '../../data/imageAssets';
import { ZoomableProjectImage } from '../../components/ui/ZoomableProjectImage';
import { ScreenshotCarousel, CarouselItem } from '../../components/ui/ScreenshotCarousel';

const techStack = ['Angular', 'TypeScript', 'IndexedDB', 'Supabase', 'PostgreSQL'];

const highlights = [
  {
    icon: IconShieldCheck,
    title: "Every user's data, isolated by design",
    text: 'Decks, cards, and progress are scoped per user with row-level security, and sensitive writes like purchases run through server-side Edge Functions and Postgres RPCs instead of trusting the client.',
  },
  {
    icon: IconDatabase,
    title: 'Works offline, no exceptions',
    text: 'IndexedDB is the local source of truth on every device, so studying never depends on having a connection.',
  },
  {
    icon: IconRefresh,
    title: 'Realtime sync across every device',
    text: 'Supabase Postgres Changes push deck and progress updates to every open device within seconds, with a fallback sync path if the connection ever drops.',
  },
  {
    icon: IconFlask,
    title: 'Tested across the whole stack',
    text: 'Vitest covers the Angular client, and pgTAP covers server-side Postgres logic directly, so test coverage doesn\'t stop at the edge of the database.',
  },
];

interface Chapter {
  number: string;
  title: string;
  description: string;
  items: CarouselItem[];
}

const chapters: Chapter[] = [
  {
    number: '01',
    title: 'Create your own decks and cards',
    description: 'Create your own decks, populate them with cards using the card editor, generate Google TTS audio in multiple languages, add icon packs for visuals, and keep personal notes right in the app.',
    items: [
      { src: fdCardEditor, alt: 'Deck card editor', label: 'Card editor', note: 'Every card can be searched, tagged, and edited inline, front and back, without leaving the deck.' },
      { src: fdCardAudioTts, alt: 'TTS audio generation', label: 'Audio generation', note: 'Any deck can be sent through Google TTS to generate spoken audio in the language and voice you choose.' },
      { src: fdIconPack, alt: 'Icon pack picker', label: 'Icon packs', note: 'Cards can be given visuals from a built-in icon library instead of hunting down your own art.' },
      { src: fdDeckNotes, alt: 'Deck reference notes', label: 'Deck notes', note: 'Each deck can carry its own reference notes, like conjugation tables and grammar explanations.' },
    ],
  },
  {
    number: '02',
    title: 'Follow custom or curated roadmaps',
    description: 'Follow a curated roadmap or build your own from scratch, laid out as a skill tree, with a growing catalog of curated language and knowledge tracks to pull from.',
    items: [
      { src: fdRoadmap, alt: 'Skill-tree roadmap', label: 'Skill-tree layout', note: 'Curriculum content is mapped as a skill tree, with a boss "Section Review" at the end of every zone.' },
      { src: fdRoadmapPersonal, alt: 'Personal roadmap', label: 'Personal roadmaps', note: 'Custom roadmaps you build yourself sit alongside a one-tap option to create a new one from scratch.' },
      { src: fdRoadmapCurated, alt: 'Curated roadmap', label: 'Curated tracks', note: 'The built-in catalog spans general-knowledge and language starter packs, from Spanish to German.' },
    ],
  },
  {
    number: '03',
    title: 'Battle through different study modes',
    description: 'Study through a mix of modes that test recall differently, from a quick flip-and-grade review to typed recall, matching, word reconstruction, and audio-based challenges.',
    items: [
      { src: fdBattleFlip, alt: 'Standard flip battle mode', label: 'Standard', note: 'The baseline mechanic: reveal the card, then grade your own recall, the same way Anki does.' },
      { src: fdBattleMultipleChoice, alt: 'Multiple choice battle mode', label: 'Multiple Choice', note: 'Pick the right answer from four options. The distractors are chosen deliberately, not pulled at random.' },
      { src: fdBattleActiveRecall, alt: 'Active recall battle mode', label: 'Active Recall', note: 'No options to lean on: type the answer outright before it counts as correct.' },
      { src: fdBattleMatching, alt: 'Matching pairs battle mode', label: 'Matching Pairs', note: 'Match every prompt on the board to its answer before the round runs out.' },
      { src: fdBattleWordSort, alt: 'Word sort battle mode', label: 'Word Sort', note: 'Rebuild a sentence by tapping its words back into the right order.' },
      { src: fdBattleSpellSprint, alt: 'Spell sprint battle mode', label: 'Spell Sprint', note: 'Race the clock by rebuilding a word from scrambled letter tiles.' },
      { src: fdBattleAudioChoice, alt: 'Audio choice battle mode', label: 'Audio Choice', note: 'The prompt is spoken instead of printed. Listen, then pick the right answer from the options below.' },
      { src: fdBattleAudioRecall, alt: 'Audio recall battle mode', label: 'Audio Recall', note: 'Same spoken prompt, no options this time: type what you heard from memory.' },
    ],
  },
  {
    number: '04',
    title: 'Fill out your monster bestiary',
    description: 'Study cards and defeat enemies to fill out your bestiary across all 4 dungeons, with a full encounter history and codex entry for every monster.',
    items: [
      { src: fdBestiary, alt: 'Bestiary zone', label: 'Bestiary zones', note: 'The Undergrowth\'s tiered monster roster, from the common Spore up to the boss Rootwretch.' },
      { src: fdBestiaryDetail, alt: 'Monster record detail', label: 'Encounter history', note: 'Every monster keeps its own record: a line of lore, a battle profile, and a history of wins and losses.' },
      { src: fdBestiaryDetail2, alt: 'Monster codex detail', label: 'Monster codex', note: 'Records also log rare shiny encounters and a "Defeated By" roster of which characters have checked it off.' },
    ],
  },
  {
    number: '05',
    title: 'Level up as you study',
    description: 'Gain XP, earn gold to spend in the shop, unlock new characters, track your stats in your profile, and chase daily quests as you study.',
    items: [
      { src: fdProfile, alt: 'Player profile and streaks', label: 'Streaks & profile', note: 'Streaks, levels, recall rate, and a 30-day review history keep the study side of the loop visible.' },
      { src: fdAvatarSelect, alt: 'Unlockable character select', label: 'Unlockable characters', note: 'Every unlockable character carries a passive that changes the run, from bonus gold to bonus damage.' },
      { src: fdShopHub, alt: 'In-game shop', label: 'Shop', note: 'Gold earned in runs buys travel between dungeon regions and unlocks the wider roadmap catalog.' },
      { src: fdQuests, alt: 'Practice quests', label: 'Quests', note: 'Achievements span combat, study, practice, and roadmap progress.' },
    ],
  },
];

export function FlashcardDungeon() {
  return (
    <Container size="lg" py={60}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={36} mb={40} style={{ alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Stack gap="md">
              <Text
                size="sm"
                c="dimmed"
                className="project-tech-line-desktop"
                style={{ fontFamily: 'var(--mantine-font-family-monospace)', letterSpacing: '0.04em' }}
              >
                {techStack.join(' · ').toUpperCase()}
              </Text>

              <Title order={1} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.06 }}>
                Flashcard Dungeon
              </Title>

              <Text
                size="sm"
                c="dimmed"
                className="project-tech-line-mobile"
                style={{ fontFamily: 'var(--mantine-font-family-monospace)', letterSpacing: '0.04em' }}
              >
                {techStack.join(' · ').toUpperCase()}
              </Text>

              <Box
                className="fd-hero-image-mobile"
                style={{
                  overflow: 'hidden',
                  borderRadius: 6,
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                }}
              >
                <ZoomableProjectImage src={fdDecksHome} alt="Flashcard Dungeon deck list with today's quests" fallbackSrc="https://placehold.co/1200x780/1b1f25/3e7cb1?text=Flashcard+Dungeon" />
              </Box>

              <Text size="lg" c="dimmed" maw={720} lh={1.75}>
                A full-stack, general-purpose study app that pairs spaced repetition with unlockable
                characters, a monster bestiary, deck notes, and multiple study modes.
              </Text>

              <Group gap="sm" wrap="wrap">
                <Button
                  component="a"
                  href="https://flashcarddungeon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="filled"
                  color="accent"
                  leftSection={<IconExternalLink size={16} />}
                >
                  Visit Live Site
                </Button>
              </Group>
            </Stack>
          </div>
        </div>

        <Box
          className="fd-hero-image-desktop"
          style={{
            overflow: 'hidden',
            borderRadius: 6,
            border: '1px solid var(--line)',
            background: 'var(--surface)',
          }}
        >
          <ZoomableProjectImage src={fdDecksHome} alt="Flashcard Dungeon deck list with today's quests" fallbackSrc="https://placehold.co/1200x780/1b1f25/3e7cb1?text=Flashcard+Dungeon" />
        </Box>
      </SimpleGrid>

      <Box style={{ borderTop: '1px solid var(--line)' }} pt={56} mb={64}>
        <Stack gap={4} mb={24}>
          <Title order={2} style={{ fontWeight: 700 }}>
            Not just another flashcard app
          </Title>
          <Text size="sm" c="dimmed" maw={680} lh={1.7}>
            Each study session earns XP, unlocks new characters, advances your bestiary, and builds
            up gold to spend in the shop. What makes it worth trusting is everything underneath:
            private by default, works offline, stays in sync, and genuinely tested.
          </Text>
        </Stack>

        <SimpleGrid cols={2} spacing="lg">
          {highlights.map((item) => (
            <Box
              key={item.title}
              style={{
                background: 'var(--surface-raised)',
                border: '1px solid var(--line)',
                borderRadius: 6,
                padding: 22,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <Box
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  color: 'var(--accent)',
                  flex: '0 0 auto',
                }}
              >
                <item.icon size={18} />
              </Box>
              <Text fw={700} size="sm">
                {item.title}
              </Text>
              <Text size="sm" c="dimmed" lh={1.6}>
                {item.text}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {chapters.map((chapter, index) => (
        <Box
          key={chapter.number}
          style={{ borderTop: '1px solid var(--line)' }}
          pt={48}
          mb={index < chapters.length - 1 ? 48 : 0}
        >
          <div className="fd-chapter-grid">
            <div className="fd-chapter-media">
              <ScreenshotCarousel items={chapter.items} />
            </div>
            <Stack gap={16}>
              <Group align="baseline" gap={12} wrap="nowrap">
                <Text size="md" c="accent" style={{ fontFamily: 'var(--mantine-font-family-monospace)', flexShrink: 0 }}>
                  {chapter.number}
                </Text>
                <Title order={3} style={{ fontWeight: 700, fontSize: '1.6rem', flex: 1, minWidth: 0 }}>
                  {chapter.title}
                </Title>
              </Group>
              <Text size="md" c="dimmed" lh={1.65} maw={520}>
                {chapter.description}
              </Text>
            </Stack>
          </div>
        </Box>
      ))}

      <Group justify="center" mt={48}>
        <Button
          component={Link}
          to="/projects"
          variant="outline"
          color="accent"
          leftSection={<IconArrowLeft size={16} />}
        >
          Back to Projects
        </Button>
      </Group>
    </Container>
  );
}

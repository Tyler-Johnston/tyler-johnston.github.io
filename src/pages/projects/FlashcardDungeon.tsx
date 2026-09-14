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
import { IconArrowLeft, IconExternalLink } from '@tabler/icons-react';
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
import { TechBadge } from '../../components/ui/TechBadge';

const techStack = ['Angular', 'TypeScript', 'IndexedDB', 'Supabase', 'PostgreSQL'];

interface Shot {
  src: string;
  label: string;
  note: string;
}

interface ShowcaseSection {
  title: string;
  text: string;
  shots: Shot[];
}

const sections: ShowcaseSection[] = [
  {
    title: 'Creating your own decks and cards',
    text: 'Every deck starts as raw content: cards written and tagged by hand, with tools to speed up the parts that would otherwise be tedious.',
    shots: [
      {
        src: fdCardEditor,
        label: 'Cards',
        note: 'Every card can be searched, tagged, and edited inline, front and back, without leaving the deck.',
      },
      {
        src: fdCardAudioTts,
        label: 'Audio generation',
        note: 'Any deck can be sent through Google TTS to generate spoken audio for its cards, in the language and voice side you choose.',
      },
      {
        src: fdIconPack,
        label: 'Icon packs',
        note: 'Cards can be given visuals from a built-in icon library instead of hunting down or drawing your own art for every single one.',
      },
      {
        src: fdDeckNotes,
        label: 'Notes',
        note: 'Each deck can carry its own reference notes, like full conjugation tables and grammar explanations, alongside the cards themselves.',
      },
    ],
  },
  {
    title: 'Personal and curated roadmaps',
    text: 'Roadmaps are not fixed to what ships with the app. Build a personal one from scratch, or pull from a curated catalog spanning language starter packs and general-knowledge tracks.',
    shots: [
      {
        src: fdRoadmap,
        label: 'Roadmap',
        note: 'Curriculum content is mapped as a skill tree, with a boss "Section Review" at the end of every zone.',
      },
      {
        src: fdRoadmapPersonal,
        label: 'Personal',
        note: 'Custom roadmaps you build yourself sit alongside a one-tap option to create a new one from scratch.',
      },
      {
        src: fdRoadmapCurated,
        label: 'Curated',
        note: 'The built-in catalog spans general-knowledge tracks and language starter packs, from Mexican Spanish to German.',
      },
    ],
  },
  {
    title: 'Game modes and study methods',
    text: 'Encounters do not all play the same way. The engine rotates through eight review mechanics: Standard flip-and-grade, Multiple Choice, typed Active Recall, Matching Pairs, word-by-word Word Sort, letter-by-letter Spell Sprint, and text-to-speech Audio Choice and Audio Recall.',
    shots: [
      {
        src: fdBattleFlip,
        label: 'Standard',
        note: 'The baseline mechanic: reveal the card, then grade your own recall, the same way Anki does.',
      },
      {
        src: fdBattleMultipleChoice,
        label: 'Multiple Choice',
        note: 'Pick the right answer from four options. The distractors are chosen deliberately, not pulled at random.',
      },
      {
        src: fdBattleActiveRecall,
        label: 'Active Recall',
        note: 'No options to lean on: type the answer outright before it counts as correct.',
      },
      {
        src: fdBattleMatching,
        label: 'Matching Pairs',
        note: 'Match every prompt on the board to its answer before the round runs out. The same mechanic works whether the deck is testing verb conjugations or world flags.',
      },
      {
        src: fdBattleWordSort,
        label: 'Word Sort',
        note: 'Rebuild a sentence by tapping its words back into the right order.',
      },
      {
        src: fdBattleAudioChoice,
        label: 'Audio Choice',
        note: 'The prompt is spoken instead of printed. Listen, then pick the right answer from the options below.',
      },
      {
        src: fdBattleAudioRecall,
        label: 'Audio Recall',
        note: 'Same spoken prompt, no options this time: type what you heard from memory.',
      },
    ],
  },
  {
    title: 'Dungeons and the bestiary',
    text: 'Each zone is a real place with its own cast. The Undergrowth, the Labyrinth, the Bastion, and the Drain each carry a tiered set of monsters and a boss, tracked in a bestiary as you clear them.',
    shots: [
      {
        src: fdBestiary,
        label: 'Bestiary',
        note: "The Undergrowth's seven-monster roster, tiered from the common Spore up to the boss Rootwretch.",
      },
      {
        src: fdBestiaryDetail,
        label: 'Monster record: Sludge',
        note: 'Every monster keeps its own record: a line of lore, a battle profile with HP and attack, and a battle history of wins and losses against it.',
      },
      {
        src: fdBestiaryDetail2,
        label: 'Monster record: Royal Guard',
        note: "Records also log rare shiny encounters and a \"Defeated By\" roster of which characters have checked it off, turning the bestiary into a completionist tracker.",
      },
    ],
  },
  {
    title: 'Progress as you study',
    text: 'New characters unlock as you play, each carrying its own passive. The shop spends earned gold to unlock dungeon regions, curated roadmaps, and icon packs. A quest log works like an achievement list, and the profile page keeps a running record of personal stats.',
    shots: [
      {
        src: fdAvatarSelect,
        label: 'Unlock characters',
        note: 'Every unlockable character carries a passive that changes the run, from bonus gold to bonus damage.',
      },
      {
        src: fdShopHub,
        label: 'Shop',
        note: 'Gold earned in runs buys travel between dungeon regions and unlocks the wider roadmap catalog, languages and general knowledge alike.',
      },
      {
        src: fdQuests,
        label: 'Quests',
        note: 'Achievements span combat, study, practice, and roadmap progress.',
      },
      {
        src: fdProfile,
        label: 'Profile',
        note: 'Streaks, levels, recall rate, and a 30-day review history keep the study side of the loop visible.',
      },
    ],
  },
];

export function FlashcardDungeon() {
  return (
    <Container size="lg" py={60}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={36} mb={40} style={{ alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Button
            className="fd-back-button"
            component={Link}
            to="/projects"
            variant="subtle"
            color="gray"
            leftSection={<IconArrowLeft size={16} />}
            size="sm"
            style={{ alignSelf: 'flex-start' }}
          >
            Back to projects
          </Button>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Stack gap="md">
              <Stack gap="xs">
                <Text size="sm" c="dimmed" style={{ fontFamily: 'var(--mantine-font-family-monospace)' }}>
                  Angular / TypeScript / Supabase
                </Text>
                <Title order={1} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.06 }}>
                  Flashcard Dungeon
                </Title>
              </Stack>

              <Box
                className="fd-hero-image-mobile"
                style={{
                  overflow: 'hidden',
                  borderRadius: 6,
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                }}
              >
                <Image
                  src={fdDecksHome}
                  alt="Flashcard Dungeon deck list with today's quests"
                  fallbackSrc="https://placehold.co/1200x780/1b1f25/3e7cb1?text=Flashcard+Dungeon"
                />
              </Box>

              <Group gap="sm" wrap="wrap">
                {techStack.map((tech) => (
                  <TechBadge key={tech} label={tech} size="lg" />
                ))}
              </Group>

              <Text size="lg" c="dimmed" maw={720} lh={1.75}>
                A full-stack language-learning app that turns spaced repetition into a roguelite dungeon
                crawl. Each deck is a run: pick a build, fight through the cards as encounters, and let
                the game track what you actually know.
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
          <Image
            src={fdDecksHome}
            alt="Flashcard Dungeon deck list with today's quests"
            fallbackSrc="https://placehold.co/1200x780/1b1f25/3e7cb1?text=Flashcard+Dungeon"
          />
        </Box>
      </SimpleGrid>

      <Box mb={56} style={{ borderTop: '1px solid var(--line)' }} />

      {sections.map((section, index) => (
        <Box key={section.title} mb={index < sections.length - 1 ? 64 : 0}>
          <Stack gap={4} mb={24}>
            <Title order={2} style={{ fontWeight: 700 }}>
              {section.title}
            </Title>
            <Text size="sm" c="dimmed" maw={780} lh={1.7}>
              {section.text}
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 2, sm: 2, md: 3 }} spacing={{ base: 'sm', sm: 'lg' }}>
            {section.shots.map((shot) => (
              <Box
                key={shot.label}
                style={{
                  overflow: 'hidden',
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                  borderRadius: 6,
                }}
              >
                <Image src={shot.src} alt={shot.label} fallbackSrc="https://placehold.co/600x400/1b1f25/3e7cb1?text=Project" />
                <Stack gap={6} p="md">
                  <Text fw={700}>{shot.label}</Text>
                  <Text size="sm" c="dimmed" lh={1.6}>
                    {shot.note}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Container>
  );
}

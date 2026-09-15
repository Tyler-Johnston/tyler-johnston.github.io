import { useMemo, useState } from 'react';
import { Button, Card, Container, Group, SimpleGrid, Stack, Tabs, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { categoryLabels, projects, ProjectCategory } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';

type ProjectTab = 'all' | 'archive' | ProjectCategory;

const tabValues: Array<'all' | ProjectCategory> = ['all', 'webDev', 'gameDev', 'dataAnalytics', 'machineLearning'];
const archiveOrder = ['cartpole-rl', 'lunar-lander', 'customer-behavior', 'maze-game'];

// Manual strength ranking (proudest work first within each category); featured projects
// are pinned ahead of this via the featured sort key below.
const projectOrder = [
  'parallax-poker',
  'flashcard-dungeon',
  'vinyl-tracker',
  'aws-widget-requests',
  'multiplayer-snake',
  'absentee-analysis',
  'utah-job-market',
  'beehive-weight',
  'facial-expression',
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>('all');

  const orderedProjects = useMemo(
    () =>
      projects
        .filter((project) => !project.archived)
        .sort((a, b) => {
          const featuredDiff = Number(b.featured) - Number(a.featured);
          return featuredDiff !== 0 ? featuredDiff : projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id);
        }),
    [],
  );

  const archivedProjects = useMemo(
    () => projects
      .filter((project) => project.archived)
      .sort((a, b) => archiveOrder.indexOf(a.id) - archiveOrder.indexOf(b.id)),
    [],
  );

  const filtered = activeTab === 'archive'
    ? archivedProjects
    : activeTab === 'all'
      ? orderedProjects
      : orderedProjects.filter((project) => project.category === activeTab);

  return (
    <Container size="lg" py={60}>
      <Stack gap={4} mb={40}>
        <Title order={1} style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 700 }}>
          Selected projects
        </Title>
      </Stack>

      <Card
        mb="xl"
        style={{
          border: '1px solid var(--line)',
          background: 'var(--surface)',
        }}
      >
        <Tabs value={activeTab} onChange={(v) => setActiveTab((v as ProjectTab) ?? 'all')}>
          <div className="projects-tabs-shell">
            <div className="projects-tabs-row">
              <div className="projects-tabs-scroll">
                <Tabs.List className="projects-tabs-list">
                  {tabValues.map((tab) => (
                    <Tabs.Tab key={tab} value={tab} className="projects-tab">
                      {tab === 'all' ? 'All' : categoryLabels[tab]}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </div>
              <Tabs.List className="projects-archive-tab-list">
                <Tabs.Tab value="archive" className="projects-tab">
                  Archive
                </Tabs.Tab>
              </Tabs.List>
            </div>
          </div>
        </Tabs>
      </Card>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>

      <Group justify="center" mt={48}>
        <Button
          component={Link}
          to="/experience"
          variant="outline"
          color="accent"
          rightSection={<IconArrowRight size={16} />}
        >
          See Experience
        </Button>
      </Group>
    </Container>
  );
}

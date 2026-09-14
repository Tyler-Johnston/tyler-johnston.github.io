import { useMemo, useState } from 'react';
import { Button, Card, Container, Group, SimpleGrid, Stack, Tabs, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { categoryLabels, projects, ProjectCategory } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';

const tabValues: Array<'all' | ProjectCategory> = ['all', 'webDev', 'gameDev', 'dataAnalytics', 'machineLearning'];

export function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | ProjectCategory>('all');

  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)),
    [],
  );

  const filtered =
    activeTab === 'all'
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
        <Tabs value={activeTab} onChange={(v) => setActiveTab((v as 'all' | ProjectCategory) ?? 'all')}>
          <div className="projects-tabs-shell">
            <div className="projects-tabs-scroll">
              <Tabs.List className="projects-tabs-list">
                {tabValues.map((tab) => (
                  <Tabs.Tab key={tab} value={tab} className="projects-tab">
                    {tab === 'all' ? 'All' : categoryLabels[tab]}
                  </Tabs.Tab>
                ))}
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

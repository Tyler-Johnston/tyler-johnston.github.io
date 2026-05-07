import { useMemo, useState } from 'react';
import { Container, Title, Text, Stack, SimpleGrid, Tabs, Card } from '@mantine/core';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Stack gap={4} mb={40}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Projects
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 900 }}>
            Projects by category
          </Title>
          <Text c="dimmed" size="md" maw={700} lh={1.75} mt={4}>
            This page curates my portfolio by category and keeps my strongest work near the top.
          </Text>
        </Stack>
      </motion.div>

      <Card
        mb="xl"
        style={{
          border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
          background: 'light-dark(var(--mantine-color-white), #141a1e)',
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
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
}

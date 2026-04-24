import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Tabs,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { projects, ProjectCategory } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';

const tabs: { value: 'all' | ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'webDev', label: 'Web Dev' },
  { value: 'gameDev', label: 'Games' },
  { value: 'dataAnalytics', label: 'Data' },
  { value: 'machineLearning', label: 'ML' },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | ProjectCategory>('all');

  const filtered =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <Container size="lg" py={60}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Stack gap={4} mb={40}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            Portfolio
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900 }}>
            Projects
          </Title>
          <Text c="dimmed" size="md" maw={600} lh={1.7} mt={4}>
            A mix of enterprise work, creative games, data pipelines, and machine learning
            projects.
          </Text>
        </Stack>
      </motion.div>

      <Stack gap="xl">
        <Tabs
          value={activeTab}
          onChange={(v) => setActiveTab((v as 'all' | ProjectCategory) ?? 'all')}
        >
          <Tabs.List mb="xl">
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.value} value={tab.value}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

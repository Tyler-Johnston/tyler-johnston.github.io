import { Card, Image, Text, Group, Stack, Anchor, Badge } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconExternalLink } from '@tabler/icons-react';
import { Project } from '../../data/projects';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Card
        h="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: project.featured
            ? '1px solid var(--mantine-color-indigo-7)'
            : '1px solid light-dark(var(--mantine-color-gray-3), #2e3347)',
          transition: 'box-shadow 0.2s ease',
        }}
        className="project-card"
      >
        {project.imageUrl && (
          <Card.Section style={{ position: 'relative' }}>
            <Image
              src={project.imageUrl}
              height={160}
              alt={project.title}
              fallbackSrc="https://placehold.co/400x160/1a1d27/6366f1?text=Project"
            />
            {project.featured && (
              <Badge
                size="xs"
                variant="filled"
                color="indigo"
                style={{ position: 'absolute', top: 8, left: 8 }}
              >
                Featured
              </Badge>
            )}
          </Card.Section>
        )}

        <Stack gap="sm" mt="md" style={{ flex: 1 }}>
          <Text fw={600} size="md" lh={1.3}>
            {project.title}
          </Text>
          <Text size="sm" c="dimmed" style={{ flex: 1 }}>
            {project.description}
          </Text>
          <Group gap={6} wrap="wrap">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} size="xs" />
            ))}
          </Group>
          {project.projectUrl && (
            <Anchor
              href={project.projectUrl}
              target={project.projectUrl.startsWith('http') ? '_blank' : undefined}
              rel={project.projectUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              size="sm"
              c="indigo"
              style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            >
              View Project <IconExternalLink size={14} />
            </Anchor>
          )}
        </Stack>
      </Card>
    </motion.div>
  );
}

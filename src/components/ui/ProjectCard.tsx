import { Card, Image, Text, Group, Stack, Anchor, Badge } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBriefcase, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../data/projects';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const isExperienceLink = project.projectUrl?.startsWith('experience:');
  const isInternal = project.projectUrl?.startsWith('/');

  function handleExperienceClick(e: React.MouseEvent) {
    e.preventDefault();
    const scrollTo = project.projectUrl?.split(':')[1];
    navigate('/experience', { state: { scrollTo } });
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Card
        h="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
          background: 'light-dark(var(--mantine-color-white), #141a1e)',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        }}
        className="project-card"
      >
        {project.imageUrl && (
          <Card.Section style={{ position: 'relative' }}>
            <Image
              src={project.imageUrl}
              height={180}
              alt={project.title}
              fallbackSrc="https://placehold.co/400x180/141a1e/f5a623?text=Project"
            />
            {project.featured && (
              <Badge
                size="xs"
                variant="filled"
                color="orange"
                style={{ position: 'absolute', top: 12, left: 12 }}
              >
                Featured
              </Badge>
            )}
          </Card.Section>
        )}

        <Stack gap="sm" mt="md" style={{ flex: 1 }}>
          <Text fw={700} size="md" lh={1.3}>
            {project.title}
          </Text>
          <Text size="sm" c="dimmed" lh={1.65} style={{ flex: 1 }}>
            {project.description}
          </Text>
          <Group gap={6} wrap="wrap">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} size="xs" />
            ))}
          </Group>
          {project.projectUrl &&
            (isExperienceLink ? (
              <Anchor
                href={undefined}
                onClick={handleExperienceClick}
                size="sm"
                c="orange"
                style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
              >
                View in Experience <IconBriefcase size={14} />
              </Anchor>
            ) : isInternal ? (
              <Anchor
                component={Link}
                to={project.projectUrl}
                size="sm"
                c="orange"
                style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
              >
                View Project <IconExternalLink size={14} />
              </Anchor>
            ) : (
              <Anchor
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                c="orange"
                style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
              >
                View Project <IconExternalLink size={14} />
              </Anchor>
            ))}
        </Stack>
      </Card>
    </motion.div>
  );
}

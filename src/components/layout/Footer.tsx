import { Group, Text, ActionIcon, Box, Stack, Anchor } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload } from '@tabler/icons-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      py="xl"
      px="lg"
      mt={80}
      style={{
        borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <Group justify="space-between" wrap="wrap" gap="lg" align="flex-start">
          <Stack gap={4}>
            <Text size="sm" fw={700}>
              Tyler Johnston
            </Text>
            <Text size="sm" c="dimmed">
              Full-stack developer in Lisbon. {year}
            </Text>
            <Group gap="sm" wrap="wrap" mt={4}>
              <Anchor href="/cv.pdf" target="_blank" c="orange" size="sm">
                <Group gap={4}>
                  <IconDownload size={14} />
                  CV
                </Group>
              </Anchor>
              <Anchor href="mailto:johnstontyler@protonmail.com" c="dimmed" size="sm">
                Email
              </Anchor>
            </Group>
          </Stack>

          <Group gap="xs">
            <ActionIcon
              component="a"
              href="https://github.com/tyler-johnston"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="gray"
              aria-label="GitHub"
            >
              <IconBrandGithub size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://linkedin.com/in/tylerjohnstonn"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="gray"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="mailto:johnstontyler@protonmail.com"
              variant="subtle"
              color="gray"
              aria-label="Email"
            >
              <IconMail size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </div>
    </Box>
  );
}

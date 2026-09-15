import { useState } from 'react';
import { Box, Group, Stack, Text, UnstyledButton } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { ZoomableProjectImage } from './ZoomableProjectImage';

export interface CarouselItem {
  src: string;
  alt: string;
  label: string;
  note: string;
}

interface ScreenshotCarouselProps {
  items: CarouselItem[];
}

const arrowStyle = {
  position: 'absolute' as const,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: 'rgba(19, 22, 26, 0.72)',
  border: '1px solid var(--line-strong)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text)',
  zIndex: 2,
};

/** A single-image-at-a-time gallery with prev/next arrows and dot navigation, reusing ZoomableProjectImage for the active shot. */
export function ScreenshotCarousel({ items }: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const current = items[index];

  function goTo(next: number) {
    setIndex(((next % total) + total) % total);
  }

  return (
    <Stack gap={10}>
      <Box style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--line)', borderRadius: 6, background: 'var(--surface)' }}>
        <ZoomableProjectImage
          src={current.src}
          alt={current.alt}
          fallbackSrc="https://placehold.co/600x400/1b1f25/3e7cb1?text=Project"
          height={480}
          imagePosition="top"
        />
        {total > 1 && (
          <>
            <UnstyledButton onClick={() => goTo(index - 1)} aria-label="Previous screenshot" style={{ ...arrowStyle, left: 8 }}>
              <IconChevronLeft size={16} />
            </UnstyledButton>
            <UnstyledButton onClick={() => goTo(index + 1)} aria-label="Next screenshot" style={{ ...arrowStyle, right: 8 }}>
              <IconChevronRight size={16} />
            </UnstyledButton>
          </>
        )}
      </Box>

      <div>
        <Text fw={700} size="sm" mb={2}>
          {current.label}
        </Text>
        <Text size="sm" c="dimmed" lh={1.5}>
          {current.note}
        </Text>
      </div>

      {total > 1 && (
        <Group gap={6}>
          {items.map((item, i) => (
            <UnstyledButton
              key={item.label}
              onClick={() => goTo(i)}
              aria-label={`Show screenshot ${i + 1} of ${total}`}
              style={{
                height: 6,
                width: i === index ? 18 : 6,
                borderRadius: 3,
                background: i === index ? 'var(--accent)' : 'var(--line-strong)',
                transition: 'all 0.15s ease',
              }}
            />
          ))}
        </Group>
      )}
    </Stack>
  );
}

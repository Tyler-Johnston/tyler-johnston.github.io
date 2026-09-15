import { SimpleGrid, type SimpleGridProps } from '@mantine/core';
import type { ReactNode } from 'react';

interface ProjectScreenshotGridProps {
  itemCount: number;
  children: ReactNode;
  baseColumns?: number;
  smallColumns?: number;
  spacing?: SimpleGridProps['spacing'];
}

/**
 * A responsive gallery that avoids orphaned desktop rows without the page
 * knowing anything about its own sections. A divisible two-column fallback
 * avoids 3 + 1; otherwise, an incomplete three-column row is centered.
 */
export function ProjectScreenshotGrid({
  itemCount,
  children,
  baseColumns = 2,
  smallColumns = 2,
  spacing = { base: 'sm', sm: 'lg' },
}: ProjectScreenshotGridProps) {
  const usesBalancedDesktopGrid = itemCount > 3 && itemCount % 3 === 1 && itemCount % 2 === 0;
  const centersFinalPair = !usesBalancedDesktopGrid && itemCount > 3 && itemCount % 3 === 2;
  const centersFinalSingle = !usesBalancedDesktopGrid && itemCount > 3 && itemCount % 3 === 1;
  const className = [
    'project-screenshot-grid',
    usesBalancedDesktopGrid && 'project-screenshot-grid--balanced',
    centersFinalPair && 'project-screenshot-grid--center-last-pair',
    centersFinalSingle && 'project-screenshot-grid--center-last-single',
  ].filter(Boolean).join(' ');

  return (
    <SimpleGrid
      className={className}
      cols={{ base: baseColumns, sm: smallColumns, md: usesBalancedDesktopGrid ? 2 : 3 }}
      spacing={spacing}
    >
      {children}
    </SimpleGrid>
  );
}

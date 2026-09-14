import { Badge } from '@mantine/core';

interface TechBadgeProps {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function TechBadge({ label, size = 'sm' }: TechBadgeProps) {
  return (
    <Badge
      variant="outline"
      color="gray"
      size={size}
      radius="xs"
      styles={{
        root: {
          textTransform: 'none',
          letterSpacing: 0,
          fontFamily: 'var(--mantine-font-family-monospace)',
          fontWeight: 500,
          color: 'var(--text-dim)',
          borderColor: 'var(--line)',
        },
      }}
    >
      {label}
    </Badge>
  );
}

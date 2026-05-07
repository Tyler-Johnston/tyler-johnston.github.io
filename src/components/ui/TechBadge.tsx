import { Badge } from '@mantine/core';

interface TechBadgeProps {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function TechBadge({ label, size = 'sm' }: TechBadgeProps) {
  return (
    <Badge
      variant="light"
      color="gray"
      size={size}
      radius="xl"
      styles={{
        root: {
          textTransform: 'none',
          letterSpacing: '0.01em',
        },
      }}
    >
      {label}
    </Badge>
  );
}

import { Badge } from '@mantine/core';

const colorMap: Record<string, string> = {
  'C#': 'violet',
  '.NET': 'violet',
  'Godot 4': 'indigo',
  Python: 'cyan',
  Angular: 'red',
  TypeScript: 'blue',
  React: 'cyan',
  JavaScript: 'yellow',
  'Node.js': 'green',
  Docker: 'blue',
  PostgreSQL: 'blue',
  MongoDB: 'green',
  'Oracle SQL': 'orange',
  PyTorch: 'orange',
  TensorFlow: 'orange',
  YOLOv8: 'grape',
  'C++20': 'pink',
  IndexedDB: 'teal',
  Signals: 'teal',
  CEFR: 'indigo',
};

interface TechBadgeProps {
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function TechBadge({ label, size = 'sm' }: TechBadgeProps) {
  const color = colorMap[label] ?? 'gray';
  return (
    <Badge variant="light" color={color} size={size} radius="sm">
      {label}
    </Badge>
  );
}

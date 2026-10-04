import { View } from 'react-native';

interface Props {
  value: number;
  fillClassName?: string;
  trackClassName?: string;
  className?: string;
}

export default function ProgressBar({
  value,
  fillClassName = 'bg-accent',
  trackClassName = 'bg-default',
  className = 'h-2.5',
}: Props) {
  const v = Math.min(1, Math.max(0, value));

  return (
    <View
      className={`w-full flex-row overflow-hidden rounded-full ${trackClassName} ${className}`}
    >
      <View className={fillClassName} style={{ flex: v }} />
      <View style={{ flex: 1 - v }} />
    </View>
  );
}

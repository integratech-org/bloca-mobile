import { tv } from 'heroui-native';
import { BatchStatus } from '../types';
import { STATUS_CONFIG } from '../constants/status-config';
import { View } from 'react-native';
import { useCSSVariable } from 'uniwind';

const statusIcon = tv({
  slots: {
    tile: 'size-10 items-center justify-center rounded-lg',
  },
  variants: {
    status: {
      pass: { tile: 'bg-success/15' },
      suggestion: { tile: 'bg-info/15' },
      fail: { tile: 'bg-danger/15' },
    },
  },
});

const ICON_COLOR_VAR: Record<BatchStatus, string> = {
  pass: '--color-success',
  suggestion: '--color-info',
  fail: '--color-danger',
};

export function StatusIcon({ status }: { status: BatchStatus }) {
  const { icon: Icon } = STATUS_CONFIG[status];
  const { tile } = statusIcon({ status });
  const color = useCSSVariable(ICON_COLOR_VAR[status]) as string;

  return (
    <View className={tile()}>
      <Icon size={22} color={color} weight='bold' />
    </View>
  );
}

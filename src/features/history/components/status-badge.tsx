import { tv, Typography } from 'heroui-native';
import { BatchStatus } from '../types';
import { View } from 'react-native';
import { STATUS_CONFIG } from '../constants';

const badge = tv({
  slots: { root: 'rounded-full px-2 py-1', text: 'text-xs font-bold' },
  variants: {
    status: {
      pass: { root: 'bg-success/15', text: 'text-success' },
      suggestion: { root: 'bg-info/15', text: 'text-info' },
      fail: { root: 'bg-danger/15', text: 'text-danger' },
    },
  },
});

export default function StatusBadge({ status }: { status: BatchStatus }) {
  const { listLabel: label } = STATUS_CONFIG[status];
  const { root, text } = badge({ status });

  return (
    <View className={root()}>
      <Typography.Paragraph className={text()}>{label}</Typography.Paragraph>
    </View>
  );
}

import { tv } from 'heroui-native';
import { BatchLogStatus } from '../types';
import { STATUS_CONFIG } from '../constants';
import { useCSSVariable } from 'uniwind';
import { View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const tile = tv({
  base: 'size-8 items-center justify-center rounded-lg',
  variants: {
    status: {
      pass: 'bg-success/15',
      suggestion: 'bg-info/15',
      fail: 'bg-danger/15',
    },
  },
});

export default function StatusIcon({ status }: { status: BatchLogStatus }) {
  const { icon, cssVar } = STATUS_CONFIG[status];
  const color = useCSSVariable(cssVar) as string;

  return (
    <View className={tile({ status })}>
      <MaterialDesignIcons name={icon} size={24} color={color} />
    </View>
  );
}

import { tv } from 'heroui-native';
import { BatchStatus } from '../types';
import { STATUS_CONFIG } from '../constants/status-config';
import { View } from 'react-native';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';

const statusIcon = tv({
  slots: {
    tile: 'size-8 items-center justify-center rounded-lg',
    icon: '',
  },
  variants: {
    status: {
      pass: { tile: 'bg-success/15', icon: 'text-success' },
      suggestion: { tile: 'bg-info/15', icon: 'text-info' },
      fail: { tile: 'bg-danger/15', icon: 'text-danger' },
    },
  },
});

export default function StatusIcon({ status }: { status: BatchStatus }) {
  const { icon: name } = STATUS_CONFIG[status];
  const { tile, icon } = statusIcon({ status });
  return (
    <View className={tile()}>
      <StyledMaterialDesignIcons name={name} size={24} className={icon()} />
    </View>
  );
}

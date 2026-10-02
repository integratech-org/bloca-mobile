import { Card, tv, Typography } from 'heroui-native';
import { BatchStatus } from '../types';
import { View } from 'react-native';
import { format, parseISO } from 'date-fns';
import { STATUS_CONFIG } from '../constants/status-config';
import StatusIcon from './status-icon';

const header = tv({
  slots: {
    root: 'border gap-2 rounded-2xl',
    text: '',
  },
  variants: {
    status: {
      pass: {
        root: 'border-success/40 bg-success/10',
        text: 'text-success',
      },
      suggestion: {
        root: 'border-info/40 bg-info/10',
        text: 'text-info',
      },
      fail: {
        root: 'border-danger/40 bg-danger/10',
        text: 'text-danger',
      },
    },
  },
});

interface Props {
  id: string;
  status: BatchStatus;
  timestamp: string;
}

export default function StatusCard({ id, status, timestamp }: Props) {
  const { root, text } = header({ status });
  const { reportLabel: label } = STATUS_CONFIG[status];

  return (
    <Card className={root()}>
      <Card.Body>
        <View className='flex-row items-center gap-3'>
          <StatusIcon status={status} />
          <View className='flex-1'>
            <Typography.Paragraph className={`text-xl font-semibold`}>
              {id}
            </Typography.Paragraph>
            <Typography.Paragraph className={`text-sm ${text()}`}>
              {label}
            </Typography.Paragraph>
          </View>
          <View className='items-end'>
            <Typography.Paragraph className='text-sm'>
              {format(parseISO(timestamp), 'HH:mm')}
            </Typography.Paragraph>
            <Typography.Paragraph className='text-muted text-xs'>
              {format(parseISO(timestamp), 'EEE, MMM d, yyyy')}
            </Typography.Paragraph>
          </View>
        </View>
      </Card.Body>
    </Card>
  );
}

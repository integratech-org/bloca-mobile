import { Card, Typography } from 'heroui-native';
import { BatchLog } from '../types';
import { Link } from 'expo-router';
import { Pressable, View } from 'react-native';
import StatusBadge from './status-badge';
import StatusIcon from './status-icon';
import { format, parseISO } from 'date-fns';

interface Props {
  batch: BatchLog;
}

export default function BatchLogItemCard({ batch }: Props) {
  const time = format(parseISO(batch.timestamp), 'HH:mm');

  return (
    <Link
      href={{
        pathname: '/history/[id]',
        params: { id: batch.id },
      }}
      asChild
    >
      <Pressable>
        <Card className='rounded-2xl'>
          <Card.Body>
            <View className='flex-row items-center gap-3'>
              {/* left */}
              <StatusIcon status={batch.status} />

              {/* middle */}
              <View className='flex-1'>
                <View className='flex-row items-baseline gap-2'>
                  <Typography.Paragraph className='text-xl font-semibold'>
                    {batch.batchId}
                  </Typography.Paragraph>
                  <Typography.Paragraph className='text-muted text-xs'>
                    {time}
                  </Typography.Paragraph>
                </View>
                <Typography.Paragraph
                  className='text-muted text-sm'
                  numberOfLines={1}
                >
                  {batch.weight.toFixed(1)}kg LDPE
                </Typography.Paragraph>
              </View>

              {/* right */}
              <StatusBadge status={batch.status} />
            </View>
          </Card.Body>
        </Card>
      </Pressable>
    </Link>
  );
}

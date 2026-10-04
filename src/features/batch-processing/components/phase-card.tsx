import { Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import { RadialGauge } from './radial-gauge';
import StatusPill from './status-pill';

export default function PhaseCard() {
  return (
    <Surface className='rounded-2xl'>
      <View className='items-center justify-center gap-3'>
        <RadialGauge progress={0.43} size={200} strokeWidth={20}>
          <Typography.Heading type='h1' className='font-medium'>
            24°C
          </Typography.Heading>
          <Typography.Paragraph
            type='body-xs'
            className='text-muted tracking-wide'
          >
            COMPRESSION PHASE
          </Typography.Paragraph>
        </RadialGauge>
        <StatusPill />
      </View>
    </Surface>
  );
}

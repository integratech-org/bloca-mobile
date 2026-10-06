import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import ProgressBar from './progress-bar';

export default function SensorStatusCard() {
  return (
    <Surface className='flex-1 rounded-2xl'>
      <View className='gap-2'>
        <View className='items-center'>
          <StyledMaterialDesignIcons name='thermometer' size={28} />
        </View>

        <View>
          <Typography.Heading type='h3' className='text-center'>
            25.3°C
          </Typography.Heading>

          <Typography.Paragraph
            type='body-xs'
            className='text-muted text-center'
          >
            Target: 100°C-115°C
          </Typography.Paragraph>
        </View>

        <ProgressBar value={0.5} />
      </View>
    </Surface>
  );
}

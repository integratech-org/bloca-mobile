import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { PressableFeedback, Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import ProgressBar from './progress-bar';

export default function MachineStatusCard() {
  return (
    <PressableFeedback className='overflow-hidden rounded-2xl'>
      <Surface className='border-accent rounded-2xl border-2'>
        <View className='gap-2'>
          <View className='flex-row items-center justify-between'>
            <View className='flex-row items-center'>
              {/* icon */}
              <StyledMaterialDesignIcons
                name='fire'
                size={64}
                className='text-accent'
              />

              <View>
                <Typography.Paragraph type='body-sm' className='text-muted'>
                  Your machine is
                </Typography.Paragraph>
                <Typography.Heading type='h3'>HEATING</Typography.Heading>
              </View>
            </View>

            <View className='items-end'>
              <StyledMaterialDesignIcons
                name='chevron-right'
                size={24}
                className='text-accent'
              />
              <Typography.Paragraph type='body'>B-01</Typography.Paragraph>
            </View>
          </View>

          {/* progressbar */}
          <ProgressBar value={0.5} />
        </View>
      </Surface>
      <PressableFeedback.Highlight />
    </PressableFeedback>
  );
}

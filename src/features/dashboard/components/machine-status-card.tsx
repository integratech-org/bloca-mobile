import { PressableFeedback, Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import { ProgressBar } from './progress-bar';
import { useCSSVariable } from 'uniwind';
import { FireIcon } from 'phosphor-react-native/src/icons/Fire';
import { CaretRightIcon } from 'phosphor-react-native/src/icons/CaretRight';

export function MachineStatusCard() {
  const [accent] = useCSSVariable(['--color-accent']) as string[];

  return (
    <PressableFeedback className='overflow-hidden rounded-2xl'>
      <Surface className='border-accent rounded-2xl border-2'>
        <View className='gap-2'>
          <View className='flex-row items-center justify-between'>
            <View className='flex-row items-center'>
              {/* icon */}
              <FireIcon size={64} color={accent} weight='bold' />

              <View>
                <Typography.Paragraph type='body-sm' className='text-muted'>
                  Your machine is
                </Typography.Paragraph>
                <Typography.Heading type='h3'>HEATING</Typography.Heading>
              </View>
            </View>

            <View className='items-end'>
              <CaretRightIcon size={18} color={accent} weight='bold' />
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

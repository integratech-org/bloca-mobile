import { Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import { ProgressBar } from './progress-bar';
import { ThermometerIcon } from 'phosphor-react-native/src/icons/Thermometer';
import { useCSSVariable } from 'uniwind';

export function SensorStatusCard() {
  const [fg] = useCSSVariable(['--color-foreground']) as string[];

  return (
    <Surface className='flex-1 rounded-2xl'>
      <View className='gap-2'>
        <View className='items-center'>
          <ThermometerIcon size={28} color={fg} />
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

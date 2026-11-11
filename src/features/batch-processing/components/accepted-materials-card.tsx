import { Section } from '@/components/section';
import { Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import { MaterialExampleList } from './material-example-list';
import { CheckCircleIcon } from 'phosphor-react-native/src/icons/CheckCircle';

export function AcceptedMaterialsCard() {
  return (
    <Section
      variant='success'
      icon={CheckCircleIcon}
      title='Accepted Materials'
    >
      <Surface className='rounded-2xl'>
        <View className='gap-3'>
          <Typography.Paragraph type='body-sm' className='text-muted'>
            Please only use LDPE plastics to make the bricks. Take a look at the
            pictures below for examples!
          </Typography.Paragraph>

          <MaterialExampleList />
        </View>
      </Surface>
    </Section>
  );
}

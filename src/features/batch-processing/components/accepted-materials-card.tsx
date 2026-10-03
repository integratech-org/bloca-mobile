import { Section } from '@/components/section';
import { Surface, Typography } from 'heroui-native';
import { View } from 'react-native';
import MaterialExampleList from './material-example-list';

export default function AcceptedMaterialsCard() {
  return (
    <Section
      variant='success'
      icon='check-circle-outline'
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

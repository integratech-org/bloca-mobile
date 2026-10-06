import { View } from 'react-native';
import SettingsRow, { SettingsRowProps } from './settings-row';
import { Card, Separator, Surface, Typography } from 'heroui-native';
import { Fragment } from 'react';

interface Props {
  title: string;
  items: SettingsRowProps[];
}

export default function SettingsSection({ title, items }: Props) {
  return (
    <View className='gap-2'>
      <Typography.Paragraph
        type='body-xs'
        className='text-muted font-medium uppercase'
      >
        {title}
      </Typography.Paragraph>

      <Surface className='gap-0.5 rounded-2xl p-1'>
        {items.map((item, i) => (
          <Fragment key={i}>
            {i > 0 ? <Separator /> : null}
            <SettingsRow {...item} />
          </Fragment>
        ))}
      </Surface>
    </View>
  );
}

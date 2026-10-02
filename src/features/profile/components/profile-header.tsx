import { View } from 'react-native';
import ProfileAvatar from './profile-avatar';
import { Typography } from 'heroui-native';

interface Props {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function ProfileHeader({ name, role, avatarUrl }: Props) {
  return (
    <View className='items-center gap-2'>
      <ProfileAvatar source={avatarUrl} />

      <View>
        <Typography.Paragraph className='text-center text-lg font-semibold'>
          {name}
        </Typography.Paragraph>
        <Typography.Paragraph className='text-muted text-center text-sm'>
          {role}
        </Typography.Paragraph>
      </View>
    </View>
  );
}

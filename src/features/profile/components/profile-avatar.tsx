import { Avatar, Button } from 'heroui-native';
import { UserIcon } from 'phosphor-react-native';
import { CameraIcon } from 'phosphor-react-native/src/icons/Camera';
import { View } from 'react-native';
import { useCSSVariable } from 'uniwind';

interface Props {
  source: string;
  onPress?: () => void;
}

export default function ProfileAvatar({ source, onPress }: Props) {
  const [accent, accentFg] = useCSSVariable([
    '--color-accent',
    '--color-accent-foreground',
  ]) as string[];

  return (
    <View className='relative size-24'>
      <Avatar size='lg' className='size-24'>
        <Avatar.Image source={{ uri: source }} />
        <Avatar.Fallback>
          <UserIcon size='48' color={accent} weight='bold' />
        </Avatar.Fallback>
      </Avatar>

      <Button
        isIconOnly
        onPress={onPress}
        accessibilityLabel='Change Avatar'
        size='sm'
        variant='primary'
        className='border-background absolute right-0 bottom-0 size-8 border'
      >
        <CameraIcon size={16} color={accentFg} weight='bold' />
      </Button>
    </View>
  );
}

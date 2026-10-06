import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Avatar, Button } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  source: string;
  onPress?: () => void;
}

export default function ProfileAvatar({ source, onPress }: Props) {
  return (
    <View className='relative size-24'>
      <Avatar size='lg' className='size-24'>
        <Avatar.Image source={{ uri: source }} />
        <Avatar.Fallback>
          <StyledMaterialDesignIcons
            name='account-outline'
            size={48}
            className='text-accent'
          />
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
        <StyledMaterialDesignIcons
          name='camera'
          size={16}
          className='text-accent-foreground'
        />
      </Button>
    </View>
  );
}

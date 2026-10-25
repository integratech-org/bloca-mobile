import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Button, Dialog } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function KillPowerDialog({ isOpen, onOpenChange }: Props) {
  return (
    <Dialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className='gap-6 rounded-2xl'>
          {/* alert icon */}
          <View className='w-full items-center justify-center'>
            <View className='bg-danger/10 size-16 items-center justify-center rounded-full'>
              <StyledMaterialDesignIcons
                name='alert-outline'
                size={32}
                className='text-danger'
              />
            </View>
          </View>

          <Dialog.Description className='text-center'>
            This will immediately cut power to the heating elements and
            compactor. The batch will be ruined and require manual extraction.
          </Dialog.Description>

          <View className='w-full flex-row gap-3'>
            <Button
              variant='danger'
              size='sm'
              className='rounded-2xl'
              onPress={() => onOpenChange(false)}
            >
              <Button.Label className='uppercase'>Yes, kill power</Button.Label>
            </Button>
            <Button
              variant='secondary'
              size='sm'
              className='flex-1 rounded-2xl'
              onPress={() => onOpenChange(false)}
            >
              <Button.Label className='uppercase'>Cancel</Button.Label>
            </Button>
          </View>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

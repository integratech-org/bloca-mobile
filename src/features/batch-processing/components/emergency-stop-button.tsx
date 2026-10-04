import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Button, cn } from 'heroui-native';

type EmergencyStopButtonProps = {
  onPress: () => void;
  isDisabled?: boolean;
  className?: string;
};

export function EmergencyStopButton({
  onPress,
  isDisabled,
  className,
}: EmergencyStopButtonProps) {
  return (
    <Button
      variant='outline'
      size='lg'
      isDisabled={isDisabled}
      onPress={onPress}
      accessibilityLabel='Emergency stop'
      className={cn(
        'border-danger flex-row items-center justify-center gap-2 rounded-2xl border-2',
        className,
      )}
    >
      <StyledMaterialDesignIcons
        name='alert-outline'
        size={24}
        className='text-danger'
      />
      <Button.Label className='text-danger font-semibold tracking-wide uppercase'>
        Emergency stop
      </Button.Label>
    </Button>
  );
}

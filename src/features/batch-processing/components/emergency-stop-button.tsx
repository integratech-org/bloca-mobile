import { Button, cn } from 'heroui-native';
import { WarningIcon } from 'phosphor-react-native/src/icons/Warning';
import { useCSSVariable } from 'uniwind';

interface Props {
  onPress: () => void;
  isDisabled?: boolean;
  className?: string;
}

export function EmergencyStopButton({ onPress, isDisabled, className }: Props) {
  const [danger] = useCSSVariable(['--color-danger']) as string[];
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
      <WarningIcon size={24} color={danger} weight='bold' />
      <Button.Label className='text-danger font-semibold tracking-wide uppercase'>
        Emergency stop
      </Button.Label>
    </Button>
  );
}

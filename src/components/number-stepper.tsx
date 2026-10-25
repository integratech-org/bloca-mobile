import { Button, Input, TextField } from 'heroui-native';
import { View } from 'react-native';
import { StyledMaterialDesignIcons } from './styled-material-design-icons';
import { useNumberFieldState } from '@react-stately/numberfield';

interface Props {
  label?: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  isDisabled?: boolean;
  isInvalid?: boolean;
  locale?: string;
}

export default function NumberStepper({
  label,
  minValue = 0,
  maxValue = 99,
  step = 0.05,
  isDisabled,
  isInvalid,
  locale = 'en-US',
  ...props
}: Props) {
  const state = useNumberFieldState({
    ...props,
    locale,
    minValue,
    maxValue,
    step,
    isDisabled,
    formatOptions: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  });

  return (
    <View className='flex-row items-center gap-3'>
      <Button
        isIconOnly
        variant='secondary'
        isDisabled={isDisabled || !state.canDecrement}
        onPress={() => state.decrement()}
        className='rounded-2xl'
      >
        <StyledMaterialDesignIcons
          name='minus'
          size={20}
          className='text-muted'
        />
      </Button>

      <TextField
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        className='flex-1'
      >
        <Input
          value={state.inputValue}
          onChangeText={state.setInputValue}
          onBlur={() => state.commit()}
          onSubmitEditing={() => state.commit()}
          keyboardType='decimal-pad'
          inputMode='decimal'
          selectTextOnFocus
          accessibilityRole='adjustable'
          accessibilityValue={{
            min: minValue,
            max: maxValue,
            now: state.numberValue,
          }}
          className='rounded-2xl text-center'
        />
      </TextField>

      <Button
        isIconOnly
        variant='secondary'
        isDisabled={isDisabled || !state.canIncrement}
        onPress={state.increment}
        className='rounded-2xl'
      >
        <StyledMaterialDesignIcons
          name='plus'
          size={20}
          className='text-muted'
        />
      </Button>
    </View>
  );
}

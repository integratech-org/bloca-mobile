import { Button } from 'heroui-native';
import { View } from 'react-native';
import { Proportion, PROPORTIONS } from '../api/feedstock-schema';

interface Props {
  value: Proportion | null;
  onChange: (v: Proportion) => void;
  isDisabled?: boolean;
}

export default function ProportionSelector({
  value,
  onChange,
  isDisabled,
}: Props) {
  return (
    <View className='flex-row items-center gap-3'>
      {PROPORTIONS.map((option) => {
        const selected = value === option;

        return (
          <Button
            key={option}
            isDisabled={isDisabled}
            variant={selected ? 'primary' : 'secondary'}
            onPress={() => onChange(option)}
            className='flex-1 rounded-2xl'
          >
            <Button.Label
              className={selected ? 'text-accent-foreground' : 'text-muted'}
            >
              {option}
            </Button.Label>
          </Button>
        );
      })}
    </View>
  );
}

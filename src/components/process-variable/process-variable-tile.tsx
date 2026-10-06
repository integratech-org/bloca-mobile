import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Card, cn, PressableFeedback, Typography } from 'heroui-native';
import { View } from 'react-native';
import {
  PROCESS_VARIABLE_INFO,
  ProcessVariableKey,
} from '@/constants/process-variable-info';

interface Props {
  variable: ProcessVariableKey;
  value: string;
  label?: string;
  active?: boolean;
  onPress?: () => void;
}

export default function ProcessVariableTile({
  variable,
  value,
  label: labelOverride,
  active = false,
  onPress,
}: Props) {
  const { icon, label: defaultLabel } = PROCESS_VARIABLE_INFO[variable];

  const label = labelOverride ?? defaultLabel;

  const card = (
    <Card className='gap-2 rounded-2xl'>
      <Card.Title>
        <View className='flex-row items-center gap-1.5'>
          <StyledMaterialDesignIcons
            name={icon}
            size={16}
            className='text-muted'
          />
          <Typography.Paragraph
            type='body-xs'
            className='text-muted font-medium uppercase'
            numberOfLines={1}
          >
            {label}
          </Typography.Paragraph>
        </View>
      </Card.Title>
      <Card.Body>
        <View>
          <Typography.Paragraph className='text-xl font-semibold'>
            {value}
          </Typography.Paragraph>
        </View>
      </Card.Body>
    </Card>
  );

  if (!onPress) {
    return card;
  }

  return (
    <PressableFeedback
      onPress={onPress}
      className={cn(
        'flex-1 overflow-hidden rounded-2xl border',
        active ? 'border-accent' : 'border-transparent',
      )}
    >
      {card}
      <PressableFeedback.Highlight />
    </PressableFeedback>
  );
}

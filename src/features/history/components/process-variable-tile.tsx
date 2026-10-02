import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Card, Typography } from 'heroui-native';
import { Pressable, View } from 'react-native';
import {
  PROCESS_VARIABLE_INFO,
  ProcessVariableKey,
} from '../constants/process-variable-info';

interface Props {
  variable: ProcessVariableKey;
  value: string;
  onPress?: () => void;
}

export default function ProcessVariableTile({
  variable,
  value,
  onPress,
}: Props) {
  const { icon, label } = PROCESS_VARIABLE_INFO[variable];

  return (
    <Pressable onPress={onPress} className='flex-1'>
      <Card variant='secondary' className='gap-2 rounded-lg'>
        <Card.Title>
          <View className='flex-row items-center gap-1.5'>
            <StyledMaterialDesignIcons
              name={icon}
              size={16}
              className='text-muted'
            />
            <Typography.Paragraph
              type='body-xs'
              className='text-muted font-medium'
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
    </Pressable>
  );
}

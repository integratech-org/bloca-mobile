import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Avatar, Card, Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  operator: string;
}

export default function OperatorCard({ operator }: Props) {
  return (
    <Card className='gap-2 rounded-2xl'>
      <Card.Body>
        <View className='flex-row items-center gap-3'>
          <Avatar>
            <Avatar.Image />
            <Avatar.Fallback>
              <StyledMaterialDesignIcons
                name='account-outline'
                size={22}
                className='text-accent'
              />
            </Avatar.Fallback>
          </Avatar>

          <View>
            <Typography.Paragraph className='text-lg font-semibold'>
              {operator}
            </Typography.Paragraph>
            <Typography.Paragraph className='text-muted text-xs'>
              Operator
            </Typography.Paragraph>
          </View>
        </View>
      </Card.Body>
    </Card>
  );
}

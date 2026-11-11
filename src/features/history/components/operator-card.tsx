import { Avatar, Card, Typography } from 'heroui-native';
import { UserIcon } from 'phosphor-react-native/src/icons/User';
import { View } from 'react-native';
import { useCSSVariable } from 'uniwind';

interface Props {
  operator: string;
}

export function OperatorCard({ operator }: Props) {
  const [accent] = useCSSVariable(['--color-accent']) as string[];

  return (
    <Card className='gap-2 rounded-2xl'>
      <Card.Body>
        <View className='flex-row items-center gap-3'>
          <Avatar>
            <Avatar.Image />
            <Avatar.Fallback>
              <UserIcon size={22} color={accent} weight='bold' />
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

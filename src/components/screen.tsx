import { cn } from 'heroui-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { withUniwind } from 'uniwind';

const StyledSafeAreaView = withUniwind(SafeAreaView);

interface Props extends SafeAreaViewProps {
  className?: string;
}

export function Screen({
  className,
  edges = ['left', 'right'],
  ...props
}: Props) {
  return (
    <StyledSafeAreaView
      edges={edges}
      className={cn('bg-background flex-1', className)}
      {...props}
    />
  );
}

import { cn } from 'heroui-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { withUniwind } from 'uniwind';

const StyledSafeAreaView = withUniwind(SafeAreaView);

interface Props {
  children: React.ReactNode;
  className?: string;
  edges?: Edge[];
}

export function Screen({
  children,
  className,
  edges = ['left', 'right'],
}: Props) {
  return (
    <StyledSafeAreaView
      edges={edges}
      className={cn('bg-background flex-1', className)}
    >
      {children}
    </StyledSafeAreaView>
  );
}

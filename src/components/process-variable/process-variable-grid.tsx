import type { ProcessVariableKey } from '@/constants/process-variable-info';
import { View } from 'react-native';
import ProcessVariableTile from './process-variable-tile';

interface TileItem {
  variable: ProcessVariableKey;
  value: string;
  label?: string;
}

interface Props {
  tiles: readonly TileItem[];
  /** Highlights the matching tile. Only visible on pressable tiles. */
  activeVariable?: ProcessVariableKey | null;
  /** Omit for a static grid. Pass it to make every tile pressable. */
  onPressTile?: (variable: ProcessVariableKey) => void;
}

export default function ProcessVariableGrid({
  tiles,
  activeVariable,
  onPressTile,
}: Props) {
  return (
    <View className='flex-row flex-wrap gap-2'>
      {tiles.map((t) => (
        <View key={t.variable} className='grow basis-[48%]'>
          <ProcessVariableTile
            variable={t.variable}
            value={t.value}
            label={t.label}
            active={activeVariable === t.variable}
            onPress={onPressTile ? () => onPressTile(t.variable) : undefined}
          />
        </View>
      ))}
    </View>
  );
}

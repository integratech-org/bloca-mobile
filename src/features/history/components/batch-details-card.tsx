import { View } from 'react-native';
import ProcessVariableTile from './process-variable-tile';
import { useProcessVariableSheetStore } from '../stores/process-variable-sheet-store';
import { Section } from '@/components/section';

interface Props {
  maxTemp: number; // 110 (°C)
  peakPressure: number; // 20 (psi)
  heatingDuration: string; // '00:30'
  coolingTime: string; // '01:30'
  compressedHeight: number; // 10 (cm)
  powerDraw: number; // 4.6 (kW)
}

export default function BatchDetailsCard({
  maxTemp,
  peakPressure,
  heatingDuration,
  coolingTime,
  compressedHeight,
  powerDraw,
}: Props) {
  const open = useProcessVariableSheetStore((s) => s.open);

  return (
    <Section title='Batch details'>
      <View className='gap-2'>
        <View className='flex-row gap-2'>
          <ProcessVariableTile
            variable='maxTemp'
            value={`${maxTemp} °C`}
            onPress={() => open('maxTemp')}
          />
          <ProcessVariableTile
            variable='peakPressure'
            value={`${peakPressure} psi`}
            onPress={() => open('peakPressure')}
          />
        </View>
        <View className='flex-row gap-2'>
          <ProcessVariableTile
            variable='heatingDuration'
            value={heatingDuration}
            onPress={() => open('heatingDuration')}
          />
          <ProcessVariableTile
            variable='coolingTime'
            value={coolingTime}
            onPress={() => open('coolingTime')}
          />
        </View>
        <View className='flex-row gap-2'>
          <ProcessVariableTile
            variable='compressedHeight'
            value={`${compressedHeight} cm`}
            onPress={() => open('compressedHeight')}
          />
          <ProcessVariableTile
            variable='powerDraw'
            value={`${powerDraw} kW`}
            onPress={() => open('powerDraw')}
          />
        </View>
      </View>
    </Section>
  );
}

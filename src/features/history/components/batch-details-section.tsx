import { useProcessVariableSheetStore } from '../stores/process-variable-sheet-store';
import { Section } from '@/components/section';
import ProcessVariableGrid from '@/components/process-variable/process-variable-grid';

interface Props {
  maxTemp: number;
  peakPressure: number;
  heatingDuration: string;
  coolingTime: string;
  compressedHeight: number;
  powerDraw: number;
}

export default function BatchDetailsSection({
  maxTemp,
  peakPressure,
  heatingDuration,
  coolingTime,
  compressedHeight,
  powerDraw,
}: Props) {
  const open = useProcessVariableSheetStore((s) => s.open);
  const activeVariable = useProcessVariableSheetStore((s) =>
    s.isOpen ? s.selected : null,
  );

  const tiles = [
    { variable: 'maxTemp', value: `${maxTemp} °C` },
    { variable: 'peakPressure', value: `${peakPressure} psi` },
    { variable: 'heatingDuration', value: heatingDuration },
    { variable: 'coolingTime', value: coolingTime },
    { variable: 'compressedHeight', value: `${compressedHeight} cm` },
    { variable: 'powerDraw', value: `${powerDraw} kW` },
  ] as const;

  return (
    <Section title='Batch Details'>
      <ProcessVariableGrid
        tiles={tiles}
        activeVariable={activeVariable}
        onPressTile={open}
      />
    </Section>
  );
}

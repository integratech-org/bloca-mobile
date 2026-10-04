import ProcessVariableGrid from '@/components/process-variable/process-variable-grid';
import { Section } from '@/components/section';

interface Props {
  maxTemp: number;
  peakPressure: number;
  heatingDuration: string;
  coolingTime: string;
  compressedHeight: number;
  powerDraw: number;
}

export default function LiveReadingsGrid({
  maxTemp,
  peakPressure,
  heatingDuration,
  coolingTime,
  compressedHeight,
  powerDraw,
}: Props) {
  const tiles = [
    { variable: 'maxTemp', label: 'Temperature', value: `${maxTemp} °C` },
    {
      variable: 'peakPressure',
      label: 'Pressure',
      value: `${peakPressure} psi`,
    },
    { variable: 'heatingDuration', value: heatingDuration },
    { variable: 'coolingTime', value: coolingTime },
    { variable: 'compressedHeight', value: `${compressedHeight} cm` },
    { variable: 'powerDraw', value: `${powerDraw} kW` },
  ] as const;

  return (
    <Section title='Live Readings'>
      <ProcessVariableGrid tiles={tiles} />
    </Section>
  );
}

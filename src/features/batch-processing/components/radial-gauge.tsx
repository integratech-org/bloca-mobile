import { View } from 'react-native';
import { Pie, PolarChart } from 'victory-native';
import { useThemeColor } from 'heroui-native';

interface Props {
  /** 0 to 1. Values outside the range are clamped. */
  progress: number;
  size?: number;
  /** Ring thickness in px. */
  strokeWidth?: number;
  /** Override the arc color. Defaults to the theme accent. */
  progressColor?: string;
  /** Override the track color. Defaults to the theme `default` surface. */
  trackColor?: string;
  /** Rendered in the center of the ring (value + phase label). */
  children?: React.ReactNode;
}

export function RadialGauge({
  progress,
  size = 180,
  strokeWidth = 16,
  progressColor,
  trackColor,
  children,
}: Props) {
  const [accent, track] = useThemeColor(['accent', 'default']);

  const pct = Math.min(1, Math.max(0, progress)) * 100;
  const innerRadius = `${((size / 2 - strokeWidth) / (size / 2)) * 100}%`;

  const data = [
    { label: 'progress', value: pct, color: progressColor ?? accent },
    { label: 'remaining', value: 100 - pct, color: trackColor ?? track },
  ];

  return (
    <View style={{ width: size, height: size }}>
      <PolarChart
        data={data}
        labelKey='label'
        valueKey='value'
        colorKey='color'
      >
        <Pie.Chart
          innerRadius={innerRadius}
          startAngle={-90}
          circleSweepDegrees={360}
        >
          {() => <Pie.Slice />}
        </Pie.Chart>
      </PolarChart>

      <View className='pointer-events-none absolute inset-0 items-center justify-center'>
        {children}
      </View>
    </View>
  );
}

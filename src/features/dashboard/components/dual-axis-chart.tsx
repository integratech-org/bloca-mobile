import { View } from 'react-native';
import { CartesianChart, Line } from 'victory-native';
import { useFont } from '@shopify/react-native-skia';
import { Inter_400Regular } from '@expo-google-fonts/inter';

const data = [
  { x: 1, gpa: 2.45, score: 88 },
  { x: 2, gpa: 3.3, score: 97 },
  { x: 3, gpa: 3.55, score: 101 },
  { x: 4, gpa: 3.55, score: 101 },
  { x: 5, gpa: 3.85, score: 101 },
  { x: 6, gpa: 3.55, score: 110 },
  { x: 7, gpa: 4.2, score: 101 },
];

const ORANGE = '#b5573a';
const BLUE = '#6a9bb0';

export function DualAxisChart() {
  const font = useFont(Inter_400Regular, 12);

  return (
    <View className='h-64 w-full'>
      <CartesianChart
        data={data}
        xKey='x'
        yKeys={['gpa', 'score']}
        domainPadding={{ left: 24, right: 24, top: 16, bottom: 16 }}
        xAxis={{
          font,
          tickCount: 7,
          lineWidth: 0, // tanggal vertical gridlines
          formatXLabel: (v) => `B${v}`,
        }}
        yAxis={[
          {
            yKeys: ['gpa'],
            axisSide: 'left',
            font,
            domain: [2, 5.45],
            tickCount: 6,
            lineWidth: 0,
            formatYLabel: (v) => v.toFixed(2),
          },
          {
            yKeys: ['score'],
            axisSide: 'right',
            font,
            domain: [60, 160],
            tickCount: 6,
            lineWidth: 0,
            formatYLabel: (v) => String(v),
          },
        ]}
      >
        {({ points }) => (
          <>
            <Line points={points.gpa} color={ORANGE} strokeWidth={3} />
            <Line points={points.score} color={BLUE} strokeWidth={3} />
          </>
        )}
      </CartesianChart>
    </View>
  );
}

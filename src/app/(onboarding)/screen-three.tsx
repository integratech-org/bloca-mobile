import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { Typography } from 'heroui-native';
import { Text, View } from 'react-native';

export default function WelcomeScreenThree() {
  // add the features to the list below
  const features = [
    {
      icon: 'clipboard-text-outline',
      text: 'Check Feedstock and Equipment',
    },
    {
      icon: 'play-outline',
      text: 'Start Compaction Cycle ',
    },
    {
      icon: 'chart-timeline-variant',
      text: 'Watch Live Cycle',
    },
    {
      icon: 'camera-outline',
      text: 'Position Block for Scan ',
    },
    {
      icon: 'book-search-outline',
      text: 'Read Quality Result',
    },
  ] as const;
  return (
    <>
      <View className='px-4'>
        {/* Header */}
        <Typography.Heading>Run a Batch</Typography.Heading>
      </View>

      {/* Description Text */}
      <View className='px-4'>
        <Typography.Paragraph>
          as an Operator these are your responsibilities.
        </Typography.Paragraph>
      </View>

      {/* Image PNG */}
      <View className='justify-between px-4 py-4'>
        {/* map the features array */}
        {features.map((feature) => (
          <View key={feature.text} className='flex-row items-center gap-2 py-2'>
            <View className='flex h-14 w-14 items-center justify-center rounded-full bg-[#C45A27]'>
              <MaterialDesignIcons
                name={feature.icon}
                size={32}
                color='#FFFFFF'
              />
            </View>
            <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}>
              {feature.text}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
}

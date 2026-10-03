import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

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
              <StyledMaterialDesignIcons
                name={feature.icon}
                size={32}
                color='#FFFFFF'
              />
            </View>
            <Typography.Paragraph className='text-wrap' type='body-sm'>
              {feature.text}
            </Typography.Paragraph>
          </View>
        ))}
      </View>
    </>
  );
}

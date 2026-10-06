import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { Text, View } from 'react-native';

export default function WelcomePageThree() {
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
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 36 }}>
          Run a Batch
        </Text>
      </View>

      {/* Description Text */}
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}>
          as an Operator these are your responsibilities.
        </Text>
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

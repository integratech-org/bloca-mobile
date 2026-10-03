import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { Text, View } from 'react-native';

export default function WelcomeScreenTwo() {
  // add features array with icon and text
  const features = [
    {
      icon: 'hand-back-right-outline',
      text: 'Emergency Stop is in app and the machine',
    },
    { icon: 'fire', text: 'Temperature degrees has cutoff ' },
    { icon: 'fan', text: 'HEPA and carbon filter handles fumes' },
  ] as const;

  return (
    <>
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 36 }}>
          Safety First
        </Text>
      </View>

      {/* Description Text */}
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}>
          Things you must know as an Operator on BLOCA.
        </Text>
      </View>

      <View className='items-center justify-center px-14 py-10'>
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

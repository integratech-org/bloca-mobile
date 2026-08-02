import { View, Image, Text } from 'react-native';
import { Card } from 'heroui-native/card';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'heroui-native/button';

export default function MachinePreview() {
  return (
    <Card className='h-80 overflow-hidden rounded-3xl border-0 p-0 shadow-none'>
      <Image
        source={{
          uri: 'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.99422-6/752178047_1377138767934837_3409832974902660188_n.png?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGfR4bM669sFWgt7sdOAsRL7Mb7DbDLTtLsxvsNsMtO0oMqE50mXD6VHAsUsgHemZ4Qua2J0bCX34ar-EiJlxHT&_nc_ohc=ytMlkrNBjr0Q7kNvwHBB6ef&_nc_oc=AdqZ2evPfXSjmVr-ISDNc0lPxItiwRSSZS2fd8mkMUtcOKErLH4VOIsU9MLYU_BTOf4&_nc_zt=14&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=R69mEU8hxdT2EHDqZKqppg&_nc_ss=7b2a8&oh=00_AQAJGSp5ytjCUJHCfNeBVhueQFH2DeDQPkHjIFAbx3n3sw&oe=6A701182',
        }}
        className='absolute inset-0 h-full w-full'
        resizeMode='cover'
      />

      <LinearGradient
        colors={['rgba(0,0,0,0.55)', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.75)']}
        locations={[0, 0.4, 1]}
        className='absolute inset-0'
      />

      <View className='flex-1 justify-between p-4'>
        <View>
          <Text className='text-2xl font-bold text-white'>BLOCA Machine</Text>
          <Text className='text-white/70'>Plastic Brick Compactor</Text>
        </View>

        <View className='flex-row items-end justify-between'>
          <View>
            <Text className='text-lg font-semibold text-white'>Batch #125</Text>
            <Text className='text-green-300'>● Running</Text>
          </View>

          <Button size='sm' variant='outline' className='gap-2'>
            <Text className='text-white'>View Details</Text>
          </Button>
        </View>
      </View>
    </Card>
  );
}

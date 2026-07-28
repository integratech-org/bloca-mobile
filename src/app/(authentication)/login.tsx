import { View, Image, Text, Pressable } from 'react-native';
import { Button, Separator } from 'heroui-native';
import LoginForm from '@/components/forms/authentication/LoginForm';
import { Link, router } from 'expo-router';
export default function LoginScreen() {
  return (
    <View className='flex-1'>
      {/* Logo View */}
      <View className='items-center justify-center gap-2 pt-16 pb-8'>
        <Image
          className='h-32 w-32'
          source={{
            uri: 'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/756953566_122117995599264829_1326058351049837461_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH0_yIfRFsYpJIM2xS1HZkoY0faRfJK2M1jR9pF8krYzZK7_9SXw4lOp-a3QnJf2AVBAk4kXqJe22lgdqyNC_-0&_nc_ohc=UCrE49G-Yb0Q7kNvwGVOgff&_nc_oc=AdqcZWH2wyanCg9lj0AEvEcBeqQuObXOWQNrepNZx9zAnmjx7_n5rY6V5o0Zonuk2uU&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=-U5pZ4Zfqsrak-pASGZZkw&_nc_ss=7b2a8&oh=00_AQB-zDGASv1FDZmHB7NjdIA3omnvhQL3rTzFkDYKDwNmrA&oe=6A6C2D94',
          }}
        />
        <Text className='mt-1 text-lg font-bold'> SALAMAT RENE </Text>
      </View>

      {/* Bottom View */}
      <View className='justify-top flex-1 gap-4 px-4'>
        {/* Login Form */}
        <LoginForm />

        {/* Login Button */}
        <Button
          className='text-accent gap-4'
          size='md'
          variant='primary'
          onPress={() => router.push('/(tabs)/dashboard')}
        >
          <Button.Label>Login</Button.Label>
        </Button>
        {/* Divider with text */}
        <View className='flex-row items-center gap-3 p-4'>
          <Separator className='flex-1' />
          <Text className='text-muted text-sm'>or login with Google</Text>
          <Separator className='flex-1' />
        </View>

        {/* Google Login Button */}
        <Button
          className='gap-2'
          size='md'
          variant='secondary'
          onPress={() => console.log('Google login pressed')}
        >
          <Button.Label>Continue with Google</Button.Label>
        </Button>

        {/* Sign up row */}
        <View className='flex-row items-center justify-center gap-1 pb-4'>
          <Text className='text-muted text-sm'>Dont have an account yet?</Text>
          <Link href='/(authentication)/signup'>
            <Text className='text-accent text-sm font-medium'>
              Sign up here
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

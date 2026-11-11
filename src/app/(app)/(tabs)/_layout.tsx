import { Tabs } from 'expo-router';
import { PlatformPressable } from 'expo-router/build/react-navigation';
import { Pressable, View } from 'react-native';
import { useCSSVariable } from 'uniwind';
import { HouseIcon } from 'phosphor-react-native/src/icons/House';
import { SealCheckIcon } from 'phosphor-react-native/src/icons/SealCheck';
import { ClockCounterClockwiseIcon } from 'phosphor-react-native/src/icons/ClockCounterClockwise';
import { PlusIcon } from 'phosphor-react-native/src/icons/Plus';
import { UserIcon } from 'phosphor-react-native/src/icons/User';

export default function TabsLayout() {
  const [surface, accent, accentFg, muted, border] = useCSSVariable([
    '--surface',
    '--accent',
    '--accent-foreground',
    '--muted',
    '--border',
  ]) as string[];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        popToTopOnBlur: true,
        tabBarLabelStyle: {
          fontFamily: 'Inter_500Medium',
          fontSize: 9,
        },
        tabBarActiveTintColor: accent,
        tabBarInactiveTintColor: muted,
        tabBarStyle: {
          backgroundColor: surface,
          borderTopColor: border,
        },
        tabBarButton: (props) => (
          <PlatformPressable {...props} pressColor='transparent' />
        ),
      }}
    >
      <Tabs.Screen
        name='(dashboard)'
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <HouseIcon
              size={30}
              weight={focused ? 'fill' : 'regular'}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='quality-grade'
        options={{
          title: 'Quality Grade',
          tabBarIcon: ({ color, focused }) => (
            <SealCheckIcon
              size={30}
              weight={focused ? 'fill' : 'regular'}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='batch-processing'
        options={{
          tabBarButton: (props) => (
            <View className='flex-1 items-center justify-center'>
              <Pressable
                onPress={props.onPress}
                onLongPress={props.onLongPress}
                accessibilityRole='button'
                accessibilityLabel='Batch processing'
                className='bg-accent h-10 w-16 items-center justify-center rounded-2xl shadow-lg'
              >
                <PlusIcon size={30} color={accentFg} weight='bold' />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='history'
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <ClockCounterClockwiseIcon
              size={30}
              weight={focused ? 'fill' : 'regular'}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <UserIcon
              size={30}
              weight={focused ? 'fill' : 'regular'}
              color={color as string}
            />
          ),
        }}
      />
    </Tabs>
  );
}

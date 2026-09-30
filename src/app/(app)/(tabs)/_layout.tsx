import { Tabs } from 'expo-router';
import { PlatformPressable } from 'expo-router/build/react-navigation';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { Pressable, View } from 'react-native';
import { useCSSVariable } from 'uniwind';

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
            <MaterialDesignIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='quality-grade'
        options={{
          title: 'Quality Grade',
          tabBarIcon: ({ color, focused }) => (
            <MaterialDesignIcons
              name={focused ? 'check-decagram' : 'check-decagram-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='batch-processing'
        options={{
          title: '',
          tabBarButton: (props) => (
            <View className='flex-1 items-center'>
              <Pressable
                onPress={props.onPress}
                onLongPress={props.onLongPress}
                accessibilityRole='button'
                accessibilityLabel='Batch processing'
                className='bg-accent -mt-5 size-16 items-center justify-center rounded-2xl shadow-lg'
              >
                <MaterialDesignIcons name='plus' color={accentFg} size={36} />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='history'
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialDesignIcons name='history' color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialDesignIcons
              name={focused ? 'account' : 'account-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}

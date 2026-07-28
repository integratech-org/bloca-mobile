import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { EnvelopeIcon } from 'react-native-heroicons/outline';
import { EnvelopeIcon as EnvelopeIconSolid } from 'react-native-heroicons/solid';

function TabIcon({ focused }: { focused: boolean }) {
  const Icon = focused ? EnvelopeIconSolid : EnvelopeIcon;

  return (
    <View
      className={
        focused
          ? 'h-10 w-10 items-center justify-center rounded-full bg-blue-500'
          : 'h-10 w-10 items-center justify-center rounded-full'
      }
    >
      <Icon size={20} color={focused ? '#fff' : '#9ca3af'} />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 64, paddingTop: 8 },
      }}
    >
      <Tabs.Screen
        name='dashboard'
        options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} /> }}
      />
      <Tabs.Screen
        name='logs'
        options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} /> }}
      />
      <Tabs.Screen
        name='processing'
        options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} /> }}
      />
      <Tabs.Screen
        name='profile'
        options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} /> }}
      />
      <Tabs.Screen
        name='quality'
        options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} /> }}
      />
    </Tabs>
  );
}

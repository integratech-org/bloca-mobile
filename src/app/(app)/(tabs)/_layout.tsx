import { Tabs } from 'expo-router';
import { PlatformPressable } from 'expo-router/build/react-navigation';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
              size={24}
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
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen name='batch-processing' options={{ title: '' }} />
      <Tabs.Screen
        name='history'
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <MaterialDesignIcons name='history' color={color} size={24} />
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
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

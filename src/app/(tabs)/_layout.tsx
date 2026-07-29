import { Tabs, usePathname, router } from 'expo-router';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Button } from 'heroui-native';

function TabIcon({
  name,
  focused,
}: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  focused: boolean;
}) {
  return (
    <View
      className={
        focused
          ? 'h-10 w-10 items-center justify-center rounded-full bg-blue-500'
          : 'h-10 w-10 items-center justify-center rounded-full'
      }
    >
      <MaterialIcons
        name={name}
        size={20}
        color={focused ? '#fff' : '#9ca3af'}
      />
    </View>
  );
}

// Maps each route to its header text
const HEADER_CONFIG: Record<string, { greeting: string; title: string }> = {
  '/dashboard': { greeting: 'Welcome back!', title: 'Bloca, User' },
  '/logs': { greeting: 'Activity', title: 'Logs' },
  '/processing': { greeting: 'In progress', title: 'Processing' },
  '/quality': { greeting: 'Standards', title: 'Quality' },
  '/profile': { greeting: 'Your account', title: 'Profile' },
};

function ScreenHeader() {
  const pathname = usePathname();
  const { greeting, title } = HEADER_CONFIG[pathname] ?? {
    greeting: '',
    title: '',
  };

  return (
    <View
      className='flex-row items-center justify-between bg-white'
      style={{ paddingTop: 10, paddingBottom: 10 }}
    >
      <View className='px-4'>
        <Text className='text-sm text-neutral-500'>{greeting}</Text>
        <Text className='text-2xl font-bold'>{title}</Text>
      </View>

      <Button className='bg-transparent' feedbackVariant='none'>
        <Ionicons name='notifications-outline' size={25} />
      </Button>
    </View>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View className='flex-1'>
      <Tabs
        screenOptions={{
          headerShown: true,
          header: () => <ScreenHeader />,
          tabBarShowLabel: false,
          animation: 'none',
          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom,
            paddingTop: 8,
          },
        }}
      >
        <Tabs.Screen
          name='dashboard'
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name='dashboard' focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name='logs'
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name='receipt-long' focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name='processing'
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name='autorenew' focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name='quality'
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name='verified' focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name='person' focused={focused} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

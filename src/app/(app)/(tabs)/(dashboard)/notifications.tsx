import { Screen } from '@/components/screen';
import { Typography } from 'heroui-native';
import { StyledRefreshControl } from '@/components/styled-refresh-control';
import { useCSSVariable } from 'uniwind';
import { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

export default function NotificationsScreen() {
  const accent = useCSSVariable('--color-accent') as string;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Screen>
      {/* TODO: Replace with FlatList once the notification UI is implemented. */}
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
        refreshControl={
          <StyledRefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[accent]}
            tintColorClassName='accent-accent'
            progressBackgroundColorClassName='accent-surface'
          />
        }
      >
        <Typography.Heading>Notifications Screen</Typography.Heading>
      </ScrollView>
    </Screen>
  );
}

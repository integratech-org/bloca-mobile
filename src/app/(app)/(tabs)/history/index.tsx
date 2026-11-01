import { Screen } from '@/components/screen';
import { StyledRefreshControl } from '@/components/styled-refresh-control';
import { BatchLogItemCard } from '@/features/history/components/batch-log-item-card';
import { mockBatchLogs } from '@/features/history/data/mock-batch-logs';
import { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useCSSVariable } from 'uniwind';

export default function HistoryScreen() {
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
      <FlatList
        data={mockBatchLogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BatchLogItemCard batch={item} />}
        ItemSeparatorComponent={() => <View className='h-2' />}
        showsVerticalScrollIndicator={false}
        contentContainerClassName='p-4'
        refreshControl={
          <StyledRefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[accent]}
            tintColorClassName='accent-accent'
            progressBackgroundColorClassName='accent-surface'
          />
        }
      />
    </Screen>
  );
}

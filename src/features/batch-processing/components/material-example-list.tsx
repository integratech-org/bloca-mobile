import { FlatList, View } from 'react-native';
import { materials } from '../constants/materials';
import MaterialExampleCard from './material-example-card';

export default function MaterialExampleList() {
  return (
    <FlatList
      data={materials}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MaterialExampleCard image={item.image} label={item.label} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className='w-3' />}
      className='-mx-4'
      contentContainerClassName='px-4'
    />
  );
}

import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import type { BatchFeature } from '@/features/onboarding/types';
import { Typography } from 'heroui-native';
import { View } from 'react-native';

interface Props {
  feature: BatchFeature;
}

export function BatchFeatureItem({ feature }: Props) {
  return (
    <View className='flex-row items-center gap-2 py-2'>
      <View className='bg-accent flex h-12 w-12 items-center justify-center rounded-full'>
        <StyledMaterialDesignIcons
          name={feature.icon}
          size={32}
          className='text-white'
        />
      </View>
      <Typography.Paragraph type='body-sm' className='flex-1'>
        {feature.text}
      </Typography.Paragraph>
    </View>
  );
}

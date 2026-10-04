import { BottomSheet, Typography, Separator } from 'heroui-native';
import { View } from 'react-native';
import { useProcessVariableSheetStore } from '../stores/process-variable-sheet-store';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { PROCESS_VARIABLE_INFO } from '@/constants/process-variable-info';

export default function ProcessVariableDetailSheet() {
  const selected = useProcessVariableSheetStore((s) => s.selected);
  const isOpen = useProcessVariableSheetStore((s) => s.isOpen);
  const close = useProcessVariableSheetStore((s) => s.close);

  const info = selected ? PROCESS_VARIABLE_INFO[selected] : null;

  return (
    <BottomSheet isOpen={isOpen} onOpenChange={(open) => !open && close()}>
      <BottomSheet.Portal>
        <BottomSheet.Overlay />

        <BottomSheet.Content>
          <View className='gap-2'>
            {/*title*/}
            <View className='flex-row justify-between'>
              <View className='flex-row items-center gap-2'>
                {info && (
                  <View className='bg-surface-secondary size-8 items-center justify-center rounded-lg'>
                    <StyledMaterialDesignIcons
                      name={info.icon}
                      size={20}
                      className='text-muted'
                    />
                  </View>
                )}
                <BottomSheet.Title>{info?.title}</BottomSheet.Title>
              </View>
              <BottomSheet.Close />
            </View>

            {/*recorded value & target range*/}
            <View className='flex-row justify-between'>
              <View>
                <Typography.Paragraph
                  type='body-xs'
                  className='text-muted uppercase'
                >
                  Recorded value
                </Typography.Paragraph>
                <Typography.Paragraph className='text-2xl font-semibold'>
                  123
                </Typography.Paragraph>
              </View>
              <View className='items-end'>
                <Typography.Paragraph
                  type='body-xs'
                  className='text-muted uppercase'
                >
                  Target range
                </Typography.Paragraph>
                <Typography.Paragraph className='text-lg font-semibold'>
                  {info?.targetRange}
                </Typography.Paragraph>
              </View>
            </View>

            <Separator />

            {/*significance*/}
            <View>
              <Typography.Paragraph
                type='body-xs'
                className='text-muted uppercase'
              >
                Significance
              </Typography.Paragraph>
              <BottomSheet.Description className='text-sm'>
                {info?.significance}
              </BottomSheet.Description>
            </View>
          </View>
        </BottomSheet.Content>
      </BottomSheet.Portal>
    </BottomSheet>
  );
}

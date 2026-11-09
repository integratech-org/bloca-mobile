import { Screen } from '@/components/screen';
import { THEME_OPTIONS } from '@/constants/theme';
import { Theme, themes, useThemeStore } from '@/stores/theme-store';
import {
  Button,
  Radio,
  RadioGroup,
  Separator,
  Surface,
  Typography,
} from 'heroui-native';
import { View } from 'react-native';
import { Fragment } from 'react';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';

export default function ThemeScreen() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <Screen>
      <View className='gap-3 p-4'>
        <Typography.Paragraph type='body-sm' className='text-muted'>
          Choose how the app looks on your device.
        </Typography.Paragraph>

        <Surface className='rounded-2xl p-1'>
          <RadioGroup
            value={theme}
            onValueChange={(v) => setTheme(v as Theme)}
            className='gap-0.5'
          >
            {themes.map((t, i) => {
              const { label, description, icon } = THEME_OPTIONS[t];
              return (
                <Fragment key={t}>
                  {i > 0 ? <Separator /> : null}
                  <RadioGroup.Item value={t}>
                    <Button
                      variant='ghost'
                      onPress={() => setTheme(t)}
                      className='w-full justify-between rounded-lg'
                    >
                      <View className='flex-1 flex-row items-center gap-3'>
                        <StyledMaterialDesignIcons
                          name={icon}
                          size={18}
                          className='text-foreground shrink-0'
                        />
                        <View className='flex-1 flex-col gap-0.5'>
                          <Typography.Paragraph
                            type='body-xs'
                            numberOfLines={1}
                          >
                            {label}
                          </Typography.Paragraph>
                          {description && (
                            <Typography.Paragraph
                              type='body-xs'
                              numberOfLines={1}
                              className='text-muted'
                            >
                              {description}
                            </Typography.Paragraph>
                          )}
                        </View>
                      </View>
                      <Radio />
                    </Button>
                  </RadioGroup.Item>
                </Fragment>
              );
            })}
          </RadioGroup>
        </Surface>
      </View>
    </Screen>
  );
}

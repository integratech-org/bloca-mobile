import type { Icon } from 'phosphor-react-native';
import { DeviceMobileIcon } from 'phosphor-react-native/src/icons/DeviceMobile';
import { MoonIcon } from 'phosphor-react-native/src/icons/Moon';
import { SunIcon } from 'phosphor-react-native/src/icons/Sun';

import { Theme } from '@/stores/theme-store';

export const THEME_OPTIONS: Record<
  Theme,
  { label: string; description?: string; icon: Icon }
> = {
  system: {
    label: 'System Default',
    description: 'Match your device settings',
    icon: DeviceMobileIcon,
  },
  light: {
    label: 'Light',
    description: 'Always use light mode',
    icon: SunIcon,
  },
  dark: {
    label: 'Dark',
    description: 'Always use dark mode',
    icon: MoonIcon,
  },
};

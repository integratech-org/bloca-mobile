import { Theme } from '@/stores/theme-store';
import { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';

export const THEME_OPTIONS: Record<
  Theme,
  { label: string; description?: string; icon: MaterialDesignIconsIconName }
> = {
  system: {
    label: 'System Default',
    description: 'Match your device settings',
    icon: 'cellphone',
  },
  light: {
    label: 'Light',
    description: 'Always use light mode',
    icon: 'white-balance-sunny',
  },
  dark: {
    label: 'Dark',
    description: 'Always use dark mode',
    icon: 'weather-night',
  },
};

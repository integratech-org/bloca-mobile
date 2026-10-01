import { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
import { BatchLogStatus } from './types';

export const STATUS_CONFIG: Record<
  BatchLogStatus,
  { label: string; icon: MaterialDesignIconsIconName; cssVar: string }
> = {
  pass: {
    label: 'Pass',
    icon: 'check-circle-outline',
    cssVar: '--success',
  },
  suggestion: {
    label: 'Suggestion',
    icon: 'information-outline',
    cssVar: '--info',
  },
  fail: {
    label: 'Fail',
    icon: 'alert-outline',
    cssVar: '--danger',
  },
};

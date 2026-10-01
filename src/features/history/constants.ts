import { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
import { BatchStatus } from './types';

export const STATUS_CONFIG: Record<
  BatchStatus,
  { listLabel: string; reportLabel: string; icon: MaterialDesignIconsIconName }
> = {
  pass: {
    listLabel: 'Pass',
    reportLabel: 'Accepted',
    icon: 'check-circle-outline',
  },
  suggestion: {
    listLabel: 'Suggestion',
    reportLabel: 'Needs review',
    icon: 'information-outline',
  },
  fail: {
    listLabel: 'Fail',
    reportLabel: 'Rejected',
    icon: 'alert-outline',
  },
};

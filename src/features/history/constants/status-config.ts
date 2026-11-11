import { CheckCircleIcon } from 'phosphor-react-native/src/icons/CheckCircle';
import { BatchStatus } from '../types';
import { type Icon } from 'phosphor-react-native';
import { InfoIcon } from 'phosphor-react-native/src/icons/Info';
import { WarningIcon } from 'phosphor-react-native/src/icons/Warning';

export const STATUS_CONFIG: Record<
  BatchStatus,
  { listLabel: string; reportLabel: string; icon: Icon }
> = {
  pass: {
    listLabel: 'Pass',
    reportLabel: 'Accepted',
    icon: CheckCircleIcon,
  },
  suggestion: {
    listLabel: 'Suggestion',
    reportLabel: 'Needs review',
    icon: InfoIcon,
  },
  fail: {
    listLabel: 'Fail',
    reportLabel: 'Rejected',
    icon: WarningIcon,
  },
};

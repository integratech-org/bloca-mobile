import type { Icon } from 'phosphor-react-native';

export interface SafetyItem {
  icon: Icon;
  text: string;
}

export interface BatchItem {
  icon: Icon;
  text: string;
}

export interface ChecklistItem {
  icon: Icon;
  title: string;
  description: string;
}

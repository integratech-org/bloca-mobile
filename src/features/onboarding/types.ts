import { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';

export interface SafetyItem {
  icon: MaterialDesignIconsIconName;
  text: string;
}

export interface BatchItem {
  icon: MaterialDesignIconsIconName;
  text: string;
}

export interface ChecklistItem {
  icon: MaterialDesignIconsIconName;
  title: string;
  description: string;
}

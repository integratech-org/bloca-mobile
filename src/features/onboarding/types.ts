import type { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';

export interface SafetyFeature {
  icon: MaterialDesignIconsIconName;
  text: string;
}

export interface BatchFeature {
  icon: MaterialDesignIconsIconName;
  text: string;
}

export interface ChecklistItem {
  id: string;
  icon: MaterialDesignIconsIconName;
  title: string;
  description: string;
}

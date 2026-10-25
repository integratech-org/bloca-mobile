import type { BatchFeature, ChecklistItem, SafetyFeature } from './types';

export const safetyFeatures: SafetyFeature[] = [
  {
    icon: 'hand-back-right-outline',
    text: 'Emergency Stop is in app and the machine',
  },
  {
    icon: 'fire',
    text: 'Temperature degrees has cutoff',
  },
  {
    icon: 'fan',
    text: 'HEPA and carbon filter handles fumes',
  },
];

export const batchFeatures: BatchFeature[] = [
  {
    icon: 'clipboard-text-outline',
    text: 'Check Feedstock and Equipment',
  },
  {
    icon: 'play-outline',
    text: 'Start Compaction Cycle',
  },
  {
    icon: 'chart-timeline-variant',
    text: 'Watch Live Cycle',
  },
  {
    icon: 'camera-outline',
    text: 'Position Block for Scan',
  },
  {
    icon: 'book-search-outline',
    text: 'Read Quality Result',
  },
];

export const checklistItems: ChecklistItem[] = [
  {
    id: 'guidance',
    icon: 'file-document-outline',
    title: 'Guidance',
    description: 'Read manual instructions',
  },
  {
    id: 'discover',
    icon: 'plus-box-outline',
    title: 'Discover',
    description: 'Located the emergency buttons',
  },
  {
    id: 'info',
    icon: 'thermometer',
    title: 'Information',
    description: 'Know the temperature cutoff',
  },
];

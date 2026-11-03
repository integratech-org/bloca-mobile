import type { BatchItem, ChecklistItem, SafetyItem } from './types';

export const safetyItems: SafetyItem[] = [
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

export const batchItems: BatchItem[] = [
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
    icon: 'file-document-outline',
    title: 'Guidance',
    description: 'Read manual instructions',
  },
  {
    icon: 'plus-box-outline',
    title: 'Discover',
    description: 'Located the emergency buttons',
  },
  {
    icon: 'thermometer',
    title: 'Information',
    description: 'Know the temperature cutoff',
  },
];

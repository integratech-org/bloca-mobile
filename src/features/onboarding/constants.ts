import { CameraIcon } from 'phosphor-react-native/src/icons/Camera';
import { ChartLineUpIcon } from 'phosphor-react-native/src/icons/ChartLineUp';
import { ClipboardTextIcon } from 'phosphor-react-native/src/icons/ClipboardText';
import { FanIcon } from 'phosphor-react-native/src/icons/Fan';
import { FileTextIcon } from 'phosphor-react-native/src/icons/FileText';
import { FireIcon } from 'phosphor-react-native/src/icons/Fire';
import { HandPalmIcon } from 'phosphor-react-native/src/icons/HandPalm';
import { MagnifyingGlassIcon } from 'phosphor-react-native/src/icons/MagnifyingGlass';
import { MapPinIcon } from 'phosphor-react-native/src/icons/MapPin';
import { PlayIcon } from 'phosphor-react-native/src/icons/Play';
import { ThermometerIcon } from 'phosphor-react-native/src/icons/Thermometer';

import type { BatchItem, ChecklistItem, SafetyItem } from './types';

export const safetyItems: SafetyItem[] = [
  {
    icon: HandPalmIcon,
    text: 'Emergency Stop is in app and the machine',
  },
  {
    icon: FireIcon,
    text: 'Temperature degrees has cutoff',
  },
  {
    icon: FanIcon,
    text: 'HEPA and carbon filter handles fumes',
  },
];

export const batchItems: BatchItem[] = [
  {
    icon: ClipboardTextIcon,
    text: 'Check Feedstock and Equipment',
  },
  {
    icon: PlayIcon,
    text: 'Start Compaction Cycle',
  },
  {
    icon: ChartLineUpIcon,
    text: 'Watch Live Cycle',
  },
  {
    icon: CameraIcon,
    text: 'Position Block for Scan',
  },
  {
    icon: MagnifyingGlassIcon,
    text: 'Read Quality Result',
  },
];

export const checklistItems: ChecklistItem[] = [
  {
    icon: FileTextIcon,
    title: 'Guidance',
    description: 'Read manual instructions',
  },
  {
    icon: MapPinIcon,
    title: 'Discover',
    description: 'Located the emergency buttons',
  },
  {
    icon: ThermometerIcon,
    title: 'Information',
    description: 'Know the temperature cutoff',
  },
];

import { type Icon } from 'phosphor-react-native';
import { ThermometerIcon } from 'phosphor-react-native/src/icons/Thermometer';
import { GaugeIcon } from 'phosphor-react-native/src/icons/Gauge';
import { FireIcon } from 'phosphor-react-native/src/icons/Fire';
import { SnowflakeIcon } from 'phosphor-react-native/src/icons/Snowflake';
import { ArrowLineDownIcon } from 'phosphor-react-native/src/icons/ArrowLineDown';
import { LightningIcon } from 'phosphor-react-native/src/icons/Lightning';

interface ProcessVariableInfo {
  label: string;
  title: string;
  icon: Icon;
  targetRange: string;
  significance: string;
}

export const PROCESS_VARIABLE_INFO = {
  maxTemp: {
    label: 'Max temp',
    title: 'Max Temperature',
    icon: ThermometerIcon,
    targetRange: '105-110 °C',
    significance:
      'Highest mold temperature reached during heating. Ensures LDPE melts fully to bind the sand, while staying below the 111 °C safety cutoff.',
  },
  peakPressure: {
    label: 'Peak pressure',
    title: 'Peak Compaction Pressure',
    icon: GaugeIcon,
    targetRange: '18-22 psi',
    significance:
      'Maximum compressive force applied. Ensures aggregate bonding and removes air pockets.',
  },
  heatingDuration: {
    label: 'Heating',
    title: 'Heating Duration',
    icon: FireIcon,
    targetRange: '20-30 min',
    significance:
      'Time the mixture is held at processing temperature. Gives polymer chains enough time to diffuse and bond with the sand.',
  },
  coolingTime: {
    label: 'Cooling',
    title: 'Cooling Time',
    icon: SnowflakeIcon,
    targetRange: '5-10 min',
    significance:
      'Water-cooling period after compression. Lets the block solidify evenly to prevent warping and internal cracks.',
  },
  compressedHeight: {
    label: 'Height',
    title: 'Compressed Height',
    icon: ArrowLineDownIcon,
    targetRange: '5.8-6.2 cm',
    significance:
      'Final block thickness after compression. Serves as a density proxy and confirms the block meets the 60 mm target.',
  },
  powerDraw: {
    label: 'Power draw',
    title: 'Power Draw',
    icon: LightningIcon,
    targetRange: '0.2-0.3 kW',
    significance:
      'Electrical power consumed by the heaters. Verifies the heaters are working and flags abnormal electrical behavior.',
  },
} as const satisfies Record<string, ProcessVariableInfo>;

export type ProcessVariableKey = keyof typeof PROCESS_VARIABLE_INFO;

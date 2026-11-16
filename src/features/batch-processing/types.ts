export type Phase = 'heating' | 'compression' | 'cooling';

export type Telemetry = {
  seq: number;
  phase: Phase;
  phase_elapsed_s: number;
  temp_c: number;
  power_w: number;
  pressure_mpa: number;
  height_mm: number;
};

export type TelemetryMessage = {
  type: 'telemetry';
  payload: Telemetry;
};

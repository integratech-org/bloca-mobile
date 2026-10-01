export type BatchLogStatus = 'pass' | 'suggestion' | 'fail';

export interface BatchLog {
  id: string;
  batchId: string;
  timestamp: string;
  weight: number;
  operator: string;
  status: BatchLogStatus;
}

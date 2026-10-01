export type BatchStatus = 'pass' | 'suggestion' | 'fail';

export interface BatchLog {
  id: string;
  batchId: string;
  timestamp: string;
  weight: number;
  operator: string;
  status: BatchStatus;
}

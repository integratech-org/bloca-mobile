import { create } from 'zustand';
import { ProcessVariableKey } from '../constants/process-variable-info';

interface ProcessVariableSheetState {
  selected: ProcessVariableKey | null;
  isOpen: boolean;
  open: (key: ProcessVariableKey) => void;
  close: () => void;
}

export const useProcessVariableSheetStore = create<ProcessVariableSheetState>(
  (set) => ({
    selected: null,
    isOpen: false,
    open: (key: ProcessVariableKey) => set({ selected: key, isOpen: true }),
    close: () => set({ isOpen: false }),
  }),
);

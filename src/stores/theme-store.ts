import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Uniwind } from 'uniwind';

export const themes = ['system', 'light', 'dark'] as const;
export type Theme = (typeof themes)[number];

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme: Theme) => {
        Uniwind.setTheme(theme);
        set({ theme });
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        theme: state.theme,
      }),
      onRehydrateStorage: () => {
        return (state) => {
          if (state) {
            Uniwind.setTheme(state.theme);
          }
        };
      },
    },
  ),
);

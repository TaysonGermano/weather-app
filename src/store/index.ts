import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Store } from './types';

const store = create<Store>()(
  persist(
    (set) => ({
      coords: null,
      setCoords: (coords: { lat: number; lon: number } | null) =>
        set({ coords }),
    }),

    {
      name: 'weather-app-storage',
      partialize(state) {
        return { coords: state.coords };
      },
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default store;

import create from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const useStore = create(
  devtools<IStore>(
    (set) => ({
      count: 0,
      isMenuOpen: false,
      setIsMenuOpen: (isMenuOpen) => set((state) => ({ ...state, isMenuOpen })),
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "store",
    }
  )
);

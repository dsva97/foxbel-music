import create from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useStore = create(
  devtools<IStore>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "store",
    }
  )
);
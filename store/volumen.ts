import { GetState, SetState } from "zustand";
import { IStore } from ".";

export interface IVolumenStore {
  volumen: number;
  setVolumen: (volumen: number) => void;
}

export const getMenuStore = (
  set: SetState<IStore>,
  _get: GetState<IStore>
) => ({
  volumen: 100,
  setVolumen: (volumen: number) => set((state) => ({ ...state, volumen })),
});

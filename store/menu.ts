import { GetState, SetState } from "zustand";
import { IStore } from ".";

export interface IMenuStore {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const getMenuStore = (
  set: SetState<IStore>,
  _get: GetState<IStore>
) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) =>
    set((state) => ({ ...state, isMenuOpen })),
});

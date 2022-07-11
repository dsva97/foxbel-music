import create from "zustand";
import { devtools } from "zustand/middleware";
import { getMenuStore, IMenuStore } from "./menu";
import { getPlayerStore, IPlayerStore } from "./player";

export interface IStore extends IMenuStore, IPlayerStore {}

export const useStore = create(
  devtools<IStore>(
    (set, get) => ({
      ...getMenuStore(set, get),
      ...getPlayerStore(set, get),
    }),
    {
      name: "store",
    }
  )
);

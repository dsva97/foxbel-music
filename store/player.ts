import { GetState, SetState } from "zustand";
import { IStore } from ".";

export interface IPlayer {
  artist: string;
  artistPicture: string;
  title: string;
  album: string;
  albumCover: string;
}
export interface IPlayerStore {
  player: null | IPlayer;
}
export const getPlayerStore = (
  set: SetState<IStore>,
  _get: GetState<IStore>
) => ({
  player: null,
  setPlayer: (player: IPlayer) => set((state) => ({ ...state, player })),
});

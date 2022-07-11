import axios from "axios";

export const deezerAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEEZER_API,
});

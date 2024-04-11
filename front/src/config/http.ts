import axios from "axios";
import { AxiosResponse } from "axios";

export const Axios = axios.create({
  baseURL: "https://api.example.com",
});

export type { AxiosResponse };

import axios from "axios";
import { AxiosResponse } from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export type { AxiosResponse };

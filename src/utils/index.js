/**
 *  This file will contain custom config
 */
import axios from "axios";
import { productUrl } from "../application";

export const customAxiosInstance = axios.create({
  baseURL: productUrl,
});

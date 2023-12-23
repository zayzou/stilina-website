/**
 *  This file will contain custom config
 */
import axios from "axios";
import { productUrl } from "../application";

const customAxios = axios.create({
  baseURL: productUrl,
  headers: { "X-author": "Zayzou" },
});
export default customAxios;

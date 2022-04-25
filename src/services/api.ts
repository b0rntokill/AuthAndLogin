import axios from "axios";

const BACKEND_URL = "http://188.166.119.86:8080/api";
const REQUEST_TIMEOUT = 5000;

export const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

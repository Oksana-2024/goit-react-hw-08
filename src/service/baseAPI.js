import axios from "axios";

export const baseURL = "https://connections-api.goit.global/";
axios.defaults.baseURL = baseURL;

export const baseAPI = axios.create({ baseURL });

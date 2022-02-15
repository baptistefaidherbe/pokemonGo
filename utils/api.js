import axios from 'axios';
import Constants from "expo-constants";
const api = axios.create({
  baseURL: Constants.manifest.extra.URL,
  timeout: 20000,
});

export default api;

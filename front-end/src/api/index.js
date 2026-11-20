import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8002/api"
});

export const apiGuide = axios.create({
  baseURL: "http://localhost:8002/guides"
});

export default api;


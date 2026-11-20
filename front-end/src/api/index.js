import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8002";



const api = axios.create({
  baseURL: `${backendUrl}/api`
});

export const apiGuide = axios.create({
  baseURL: `${backendUrl}/guides`
});

export default api;


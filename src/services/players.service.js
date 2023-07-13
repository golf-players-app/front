import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

class PlayerService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/players`,
    });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  create(data) {
    return this.api.post("/signup", data);
  }

  login(data) {
    return this.api.post("/login", data);
  }

  verify() {
    return this.api.get(`/verify`);
  }

  update(id, data) {
    return this.api.put(`/${id}`, data);
  }

  // getAll() {
  //   return this.api.get(`/`);
  // }

  getOne(id) {
    return this.api.get(`/${id}`);
  }
}

const playerService = new PlayerService();

export default playerService;

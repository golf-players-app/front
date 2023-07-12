import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

class RoundService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/rounds`,
    });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  getRounds(token) {
    return this.api.get("/", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  addPlayer(id) {
    return this.api.post(`/player/${id}`);
  }
}

const roundService = new RoundService();

export default roundService;

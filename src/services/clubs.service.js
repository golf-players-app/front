import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

class ClubService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/clubs`,
    });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  getAll() {
    return this.api.get("/");
  }

  getOne(id) {
    return this.api.get(`/${id}`);
  }
}

const clubService = new ClubService();

export default clubService;

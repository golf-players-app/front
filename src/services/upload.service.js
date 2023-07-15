import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

class UploadService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/upload`,
    });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  uploadImage(image) {
    return this.api.post("/image", image);
  }
}

const uploadService = new UploadService();

export default uploadService;

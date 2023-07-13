import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

class CourseService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/courses`,
    });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  getCourse(id) {
    return this.api.get(`/${id}`);
  }
}

const courseService = new CourseService();

export default courseService;

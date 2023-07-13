import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

class FederatedService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_FEDERATED}/federates`,
    });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  getByName(data) {
    console.log(data);
    return this.api.get("/by-name", data);
  }

  getById(id) {
    console.log(id);
    return this.api.get("/by-id", id);
  }
}

const federatedService = new FederatedService();

export default federatedService;

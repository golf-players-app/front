import axios from "axios";

class PlayerService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/players`,
    });
  }

  create(data) {
    return this.api.post("/signup", data);
  }

  login(data) {
    return this.api.post("/login", data);
  }

  verify(token) {
    return this.api.get(`/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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

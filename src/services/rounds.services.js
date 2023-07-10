import axios from "axios";

class RoundService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/rounds`,
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

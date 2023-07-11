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

  addPlayer(token, id) {
    return this.api.post(`/player/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const roundService = new RoundService();

export default roundService;

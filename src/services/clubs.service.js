import axios from "axios";

class ClubService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/clubs`,
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

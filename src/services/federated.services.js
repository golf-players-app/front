import axios from "axios";

class FederatedService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_FEDERATED}/federates`,
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

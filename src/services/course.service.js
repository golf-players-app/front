import axios from "axios";

class CourseService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL_PLAYER}/courses`,
    });
  }

  getCourse(id) {
    return this.api.get("/:id");
  }
}

const courseService = new CourseService();

export default courseService;

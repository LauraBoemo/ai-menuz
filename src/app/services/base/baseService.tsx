import axios from "axios";

const baseService = axios.create({
    baseURL: process.env.PEEK_APP_API_URL,
});

baseService.defaults.headers.common["Content-Type"] = "application/json";

export default baseService;
  
import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.127.168.84:3000",
});

export default instance;

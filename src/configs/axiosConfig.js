import axios from "axios";

const instance = axios.create({
  baseURL: "https://13.127.168.84:3000",
});
// baseURL: "https://15.207.117.200:9000/admin",
// baseURL: "http://65.0.183.149:8000/admin",
export default instance;

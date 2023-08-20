import axios from "axios";

const API_URL = 'https://laser-pointy-larkspur.glitch.me'

const axiosApi = axios.create({
  baseURL: API_URL
})

export default axiosApi
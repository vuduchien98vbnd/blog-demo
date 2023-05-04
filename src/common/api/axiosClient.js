import axios from "axios";

const BASE_URL = "http://contabo.foxcode.site:8085";

const axiosClient = axios.create({
    baseURL: BASE_URL
})

export default axiosClient
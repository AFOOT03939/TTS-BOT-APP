import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://victortts-api.onrender.com/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;
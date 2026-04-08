import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1bc93667d2a6470693f23aa3f7a19e4d'
    }
})
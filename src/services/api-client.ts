import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e0b1c38824b0403eab2006129bb9498d'

    }
})
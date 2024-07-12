import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0eb03544d7ef4514a00ae3b32b6ec163'
    }
})
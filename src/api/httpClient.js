import axios from 'axios'

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    params: { 
        client_id : process.env.VUE_APP_API_CLIENT_ID,
        client_secret : process.env.VUE_APP_API_CLIENT_SECRET,
        v : process.env.VUE_APP_API_VERSIONING
    },
    headers: {
        "Content-Type": "application/json",
    }
});

export default httpClient;
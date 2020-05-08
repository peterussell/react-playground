import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1ZoMUz9uJMD9V_7n3_6miaDyEu7IWAWtCPQpGyPX91k'
    }
});
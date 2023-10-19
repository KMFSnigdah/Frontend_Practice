import axios from 'axios';

const API_URL = 'http://localhost:8202/api/v2';

export const getHealthData = async () => {
    const token = localStorage.getItem('token');
    return await axios.get(`${API_URL}/proxyUser/getAll`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then((response) => response)
        .catch((error) => {
            throw error;
        })
};
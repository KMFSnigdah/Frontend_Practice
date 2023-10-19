import axios from 'axios';
import axioss from '../AppConfig/axiosConfig';

const API_URL = 'http://localhost:8202/api/v1/userInfo';
const token = localStorage.getItem('token');
const headers = {
    "Authorization": `Bearer ${token}`,
    'Content-Type': 'application/json'
}

// Get User information
// export const getUserInfo = async () => {
//     return await axios
//         .get(`${API_URL}/getById`, { headers })
//         .then((response) => response)
//         .catch((error) => {
//             throw error;
//         });
// }

export const getUserInfo = async () => {
    return await axioss
        .get('/userInfo/getById')
        .then((response) => response)
        .catch((error) => {
            throw error;
        })
}

// Create User Info
export const createUserInfo = async (data) => {
    return await axios
        .post(`${API_URL}/create`, data, { headers })
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
}

// Update User Info
export const updateUserInfo = async (data) => {
    return await axios
        .put(`${API_URL}/update`, data, { headers })
        .then((response) => response)
        .catch((error) => {
            throw error;
        });
}

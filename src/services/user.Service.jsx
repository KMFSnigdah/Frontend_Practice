import axios from "axios";

const API_URL = "http://localhost:8202/api/v2";
const headers = {
  "Content-Type": "application/json",
};

export const getProfileData = async () => {
  return await axios
    .get(`${API_URL}/proxyUser/getAll`, { headers })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const getHealthInformation = async (userId) => {
  return await axios
    .get(`${API_URL}/proxyUser/health-data/${userId}`, { headers })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

import axios from "axios";

const API_URL = "http://localhost:8202/api/v1/auth";

export const login = async (loginData) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return await axios
    .post(`${API_URL}/login`, loginData, { headers })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

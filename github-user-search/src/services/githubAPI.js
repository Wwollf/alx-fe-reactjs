import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL;
const TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
        return response.data; // Returns the user data from GitHub
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

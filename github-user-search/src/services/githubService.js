import axios from 'axios';

// Function to fetch user data from the GitHub API using the username
export const fetchUserData = async (username) => {
    try {
        // Make a GET request to the GitHub API to fetch user data
        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        // Return the user data from the response
        return response.data;
    } catch (error) {
        // If the request fails (e.g., user not found), throw an error
        throw new Error("User not found");
    }
};



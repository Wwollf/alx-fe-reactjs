import axios from 'axios';

const fetchUserData = async (username, location = '', minRepos = '') => {
    try {
        const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:${minRepos}` : ''}`;
        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

        if (response.data.items) {
            return response.data.items;
        } else {
            throw new Error("No users found");
        }
    } catch (error) {
        throw new Error(error.response?.data?.message || 'An error occurred');
    }
};

export { fetchUserData };




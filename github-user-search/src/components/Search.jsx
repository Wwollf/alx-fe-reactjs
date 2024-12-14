import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
    // State to store the input value, user data, loading status, and error message
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Handle form submission and fetch user data from GitHub
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);  // Set loading to true when the request starts
        setError(''); // Clear previous errors
        setUserData(null);  // Reset previous user data

        try {
            // Fetch user data from GitHub API using the provided username
            const data = await fetchUserData(username);
            setUserData(data);  // Set the fetched user data to the state
        } catch (err) {
            setError("Looks like we can't find the user"); // Show error if user not found
        } finally {
            setLoading(false);  // Set loading to false once the request is done
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Enter GitHub username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>

            {/* Display loading message if data is being fetched */}
            {loading && <p>Loading...</p>}

            {/* Display error message if an error occurred */}
            {error && <p>{error}</p>}

            {/* Display user data if successfully fetched */}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt="User Avatar" width="100" />
                    <h2>{userData.login}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;



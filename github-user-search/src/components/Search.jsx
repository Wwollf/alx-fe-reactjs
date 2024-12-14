import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // Import the fetchUserData function

const Search = () => {
    const [username, setUsername] = useState('');  // Track the username input
    const [userData, setUserData] = useState(null);  // Store the fetched user data
    const [loading, setLoading] = useState(false);  // Track the loading state
    const [error, setError] = useState(null);  // Track any error messages

    // Handle the input change for the username
    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    // Handle form submission to fetch the user data
    const handleSearch = async (event) => {
        event.preventDefault();  // Prevent the page from refreshing on form submission
        setLoading(true);  // Set loading to true when starting the fetch request
        setError(null);  // Reset any previous error
        setUserData(null);  // Reset the user data on each new search

        try {
            // Fetch the user data from the GitHub API
            const data = await fetchUserData(username);
            setUserData(data);  // Set the user data state with the fetched data
        } catch (error) {
            setError("Looks like we can't find the user");  // Set error message if the user is not found
        } finally {
            setLoading(false);  // Set loading to false after the API call completes
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    required
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}  {/* Display Loading text when fetching */}
            {error && <p>{error}</p>}  {/* Display error message if user is not found */}
            {userData && !loading && (
                <div>
                    <img src={userData.avatar_url} alt="User Avatar" width="100" height="100" />
                    <h2>{userData.login}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;

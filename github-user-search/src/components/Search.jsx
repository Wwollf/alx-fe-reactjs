import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Ensure the API function is correctly imported

const Search = () => {
    const [username, setUsername] = useState('');  // State for tracking input value
    const [userData, setUserData] = useState(null);  // State for storing fetched user data
    const [loading, setLoading] = useState(false);  // State to indicate loading status
    const [error, setError] = useState(null);  // State to store error messages

    // Handle input changes for the username
    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    // Handle the form submission to fetch user data
    const handleSearch = async (event) => {
        event.preventDefault();  // Prevent default form submission (page reload)
        setLoading(true);  // Set loading to true before making the API call
        setError(null);  // Reset any existing error message
        setUserData(null);  // Reset user data

        try {
            // Fetch user data from the GitHub API
            const data = await fetchUserData(username);
            setUserData(data);  // Set the user data once fetched
        } catch (error) {
            // Set error message if user is not found or API fails
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);  // Set loading to false once API call is done
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

            {loading && <p>Loading...</p>}  {/* Display Loading text when fetching data */}
            {error && <p>{error}</p>}  {/* Display error message if user not found */}
            {userData && !loading && (
                <div>
                    <img src={userData.avatar_url} alt="User Avatar" width="100" height="100" /> {/* Display user's avatar */}
                    <h2>{userData.login}</h2>  {/* Display GitHub username */}
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;

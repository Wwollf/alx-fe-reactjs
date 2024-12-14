import React, { useState } from 'react';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import { fetchUserData } from './services/githubService';

const App = () => {
    // States for managing search results and loading state
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to handle the search
    const handleSearch = async (username) => {
        setLoading(true);
        setError('');
        setUser(null);

        try {
            // Fetch user data from GitHub API
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (err) {
            // Handle error if the user is not found
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            
            {/* Search Component */}
            <Search onSearch={handleSearch} />

            {/* Results Display Component */}
            <SearchResults user={user} error={error} loading={loading} />
        </div>
    );
};

export default App;



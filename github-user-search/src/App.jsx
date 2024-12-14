import React, { useState } from 'react';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import { fetchUserData } from './services/githubService';

const App = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (username) => {
        setLoading(true);
        setError('');
        setUser(null);

        try {
            const userData = await fetchUserData(username); // Fetch data from GitHub API
            setUser(userData); // Set user data
        } catch (err) {
            setError('Looks like we can\'t find the user.'); // Handle errors
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} /> {/* Search component */}
            <SearchResults user={user} error={error} loading={loading} /> {/* Results component */}
            
        </div>
        
    );
};

export default App;






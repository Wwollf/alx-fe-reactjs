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
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            <SearchResults user={user} error={error} loading={loading} />
        </div>
    );
};

export default App;




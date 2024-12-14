import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([]);
        setPage(1); // Reset page number for new search

        try {
            const data = await fetchUserData(username, location, minRepos, 1);
            setUserData(data);
        } catch (error) {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        setLoading(true);

        try {
            const newPage = page + 1;
            const data = await fetchUserData(username, location, minRepos, newPage);
            setUserData((prevData) => [...prevData, ...data]);
            setPage(newPage);
        } catch (error) {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <form onSubmit={handleSearch} className="space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => handleInputChange(e, setUsername)}
                    placeholder="Enter GitHub username"
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => handleInputChange(e, setLocation)}
                    placeholder="Enter location (optional)"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => handleInputChange(e, setMinRepos)}
                    placeholder="Minimum repositories"
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData.length > 0 && !loading && (
                <div className="mt-4">
                    {userData.map((user) => (
                        <div key={user.login} className="border p-4 rounded mb-4">
                            <img src={user.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full" />
                            <h2 className="text-xl font-semibold">{user.login}</h2>
                            <p>{user.location}</p>
                            <p>Repositories: {user.public_repos}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
                        </div>
                    ))}
                    <button
                        onClick={handleLoadMore}
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;

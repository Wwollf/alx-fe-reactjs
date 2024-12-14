import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username);
            setUsername('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;

import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username); // Trigger the API call in App.jsx
            setUsername(''); // Reset the input field after submitting
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


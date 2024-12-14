import React from 'react';

const SearchResults = ({ user, error, loading }) => {
    // Show loading message if loading state is true
    if (loading) return <p>Loading...</p>;

    // Show error message if there is an error
    if (error) return <p>Looks like we can't find the user.</p>;

    // Display user data if the user exists
    if (user) {
        return (
            <div>
                <img src={user.avatar_url} alt={user.login} width="100" />
                <h2>{user.name || user.login}</h2>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                </a>
            </div>
        );
    }

    return null; // Return nothing if no user data is available
};

export default SearchResults;


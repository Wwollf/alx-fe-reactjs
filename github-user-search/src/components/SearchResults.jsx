import React from 'react';

const SearchResults = ({ user, error, loading }) => {
    // Display loading state
    if (loading) return <p>Loading...</p>;

    // Display error message if user is not found
    if (error) return <p>Looks like we can't find the user.</p>;

    // Display user details
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


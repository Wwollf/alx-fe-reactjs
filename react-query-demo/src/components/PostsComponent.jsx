import React from 'react';
import { useQuery } from 'react-query';

// Fetch function for posts
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { 
    data, 
    error, 
    isLoading, 
    isError, 
    refetch, 
    isFetching 
  } = useQuery('posts', fetchPosts, {
    // Cache settings
    cacheTime: 1000 * 60 * 5, // Cache time in ms (5 minutes)
    staleTime: 1000 * 30,     // Data is considered fresh for 30 seconds
    refetchOnWindowFocus: false, // Disable refetch when window is focused
    keepPreviousData: true,   // Keep old data when refetching
  });

  // Display loading or error messages
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;


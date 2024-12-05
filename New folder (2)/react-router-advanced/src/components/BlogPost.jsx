// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Extract the 'id' from the URL using the useParams hook
  const { id } = useParams();

  // You can fetch the blog post based on the 'id' or display the id for now
  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Here, you would normally fetch and display the actual blog post content */}
    </div>
  );
};

export default BlogPost;





import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic part of the URL (the post ID)

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>Content of the blog post goes here.</p>
    </div>
  );
};

export default BlogPost;

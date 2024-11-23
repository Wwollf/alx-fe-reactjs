import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();  // Grab the dynamic ID from the URL
  return <div>Blog Post ID: {id}</div>;
};

export default BlogPost;


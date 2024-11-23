import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();  // Get dynamic ID from URL
  return <div>Blog Post ID: {id}</div>;
};

export default BlogPost;



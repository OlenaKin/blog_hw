import React from 'react';

function Blog({ title, content }) {
  return (
    <div className="blog">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Blog;

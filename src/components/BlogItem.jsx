// src/components/BlogItem.js

import React from "react";

function BlogItem({ title, content }) {
  return (
    <div className="blog__item">
      <h2 className="blog__title">{title}</h2>
      <p className="blog__content">{content}</p>
    </div>
  );
}

export default BlogItem;

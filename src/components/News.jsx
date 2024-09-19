import React from 'react';

function News({ headline, content }) {
  return (
    <div className="news">
      <h2>News</h2>
      <p>{headline}</p>
      <p>{content}</p>
    </div>
  );
}

export default News;

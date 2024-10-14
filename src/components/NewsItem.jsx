// src/components/NewsItem.js

import React from "react";

function NewsItem({ headline, content }) {
  return (
    <div className="news__item">
      <h2 className="news__headline">{headline}</h2>
      <p className="news__content">{content}</p>
    </div>
  );
}

export default NewsItem;

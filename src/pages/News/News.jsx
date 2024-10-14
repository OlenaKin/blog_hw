// src/pages/News/News.js

import React from "react";
import NewsItem from "../../components/NewsItem"; // Import NewsItem component

function News() {
  // Sample news articles
  const articles = [
    {
      headline: "Breaking News",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id eligendi a nisi? Autem id illo animi doloribus, minus totam.",
    },
    {
      headline: "Local News",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem accusantium veritatis velit autem magni commodi dolore quod incidunt.",
    },
    {
      headline: "World News",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit doloremque mollitia saepe, expedita quam aut nisi.",
    },
  ];

  return (
    <div className="news__container">
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          headline={article.headline}
          content={article.content}
        />
      ))}
    </div>
  );
}

export default News;

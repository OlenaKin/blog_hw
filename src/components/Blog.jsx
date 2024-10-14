import React from "react";

function Blog() {
  // Sample blog articles
  const articles = [
    {
      title: "Blog post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Blog post 2",
      content: "Curabitur quis risus eget nibh lacinia feugiat.",
    },
    {
      title: "Blog post 3",
      content:
        "Donec scelerisque felis vitae erat malesuada, non sollicitudin.",
    },
  ];

  return (
    <div className="blog__container">
      {articles.map((article, index) => (
        <BlogItem
          key={index}
          title={article.title} // Ensure you're passing the title prop
          content={article.content}
        />
      ))}
    </div>
  );
}

export default Blog; // Ensure to export as Blog

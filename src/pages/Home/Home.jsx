import React from "react";
// import Header from "../../components/Header";

import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import NewsItem from "../../components/NewsItem";

/*function Home() {
  return (
    <div className="app-container">
      <Banner />
      <div className="content-container">
        <div className="blog__container">
          <Blog
            title="Lorem ipsum"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe
        iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id
        eligendi a nisi? Autem id illo animi doloribus, minus totam. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Repellat facilis adipisci
        illum dolores perferendis id quasi ex minima eum libero aut quisquam
        commodi, exercitationem sit harum repudiandae dolorem itaque ad."
          />
          <Blog
            title="Lorem ipsum"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe
        iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id
        eligendi a nisi? Autem id illo animi doloribus, minus totam. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Repellat facilis adipisci
        illum dolores perferendis id quasi ex minima eum libero aut quisquam
        commodi, exercitationem sit harum repudiandae dolorem itaque ad."
          />
          <Blog
            title="Lorem ipsum"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe
        iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id
        eligendi a nisi? Autem id illo animi doloribus, minus totam. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Repellat facilis adipisci
        illum dolores perferendis id quasi ex minima eum libero aut quisquam
        commodi, exercitationem sit harum repudiandae dolorem itaque ad."
          />
          <Blog
            title="Lorem ipsum"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe
        iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id
        eligendi a nisi? Autem id illo animi doloribus, minus totam. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Repellat facilis adipisci
        illum dolores perferendis id quasi ex minima eum libero aut quisquam
        commodi, exercitationem sit harum repudiandae dolorem itaque ad."
          />
        </div>
        <div className="news__container">
          <News
            headline="Breaking News"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id eligendi a nisi? Autem id illo animi doloribus, minus totam. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <News
            headline="Local News"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem accusantium veritatis velit autem magni commodi dolore quod incidunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <News
            headline="World News"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit doloremque mollitia saepe, expedita quam aut nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <News
            headline="World News"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit doloremque mollitia saepe, expedita quam aut nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
      </div>
    </div>
  );
}*/
function Home() {
  return (
    <div className="app-container">
      <Banner />
      <div className="content-container">
        <div className="blog__container">
          <Blog
            title="Lorem ipsum"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe
          iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id
          eligendi a nisi? Autem id illo animi doloribus, minus totam. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Repellat facilis adipisci
          illum dolores perferendis id quasi ex minima eum libero aut quisquam
          commodi, exercitationem sit harum repudiandae dolorem itaque ad."
          />
          {/* Add more Blog components as needed */}
        </div>
        <div className="news__container">
          {/* Use NewsItem instead of News */}
          <NewsItem
            headline="Breaking News"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit saepe iure laudantium quidem! Vel quis rem recusandae adipisci laboriosam id eligendi a nisi? Autem id illo animi doloribus, minus totam. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <NewsItem
            headline="Local News"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem accusantium veritatis velit autem magni commodi dolore quod incidunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <NewsItem
            headline="World News"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit doloremque mollitia saepe, expedita quam aut nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <NewsItem
            headline="Another World News"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugit doloremque mollitia saepe, expedita quam aut nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

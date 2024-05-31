import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sept 01, 2024"
            title="GPT-4 and Open AI is the future. Let's explore how it'll change lives"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sept 01, 2024"
            title="GPT-4 and Open AI is the future. Let's explore how it'll change lives"
          />{" "}
          <Article
            imgUrl={blog03}
            date="Sept 01, 2024"
            title="GPT-4 and Open AI is the future. Let's explore how it'll change lives"
          />
          <Article
            imgUrl={blog04}
            date="Sept 01, 2024"
            title="GPT-4 and Open AI is the future. Let's explore how it'll change lives"
          />{" "}
          <Article
            imgUrl={blog05}
            date="Sept 01, 2024"
            title="GPT-4 and Open AI is the future. Let's explore how it'll change lives"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

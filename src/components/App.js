import React from "react";
import blogData from "../data/blog";
import  ArticleList from "./ArticleList";
import Aside from "./Aside";
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <Aside image ={blogData.image} about ={blogData.about}/>
      <ArticleList/>
    </div>
  );
}

export default App;
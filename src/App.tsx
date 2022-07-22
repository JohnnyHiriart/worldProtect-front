import "./App.scss";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Product from "./components/Product";
import Recette from "./components/Recette";
import Comment from "./components/Comment";
import React from "react";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Presentation />
      <Recette />
      <Product />
      <Comment />
    </div>
  );
}

export default App;

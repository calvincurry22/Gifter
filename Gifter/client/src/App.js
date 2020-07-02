import React, { useEffect, useContext } from "react";
import "./App.css";
import { PostProvider, PostContext } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SearchBar from "./components/SearchBar";

function App() {

  return (
    <div className="App">
      <PostProvider>
        <SearchBar />
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
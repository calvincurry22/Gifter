import React, { useState } from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerms, setTerms] = useState(null)
  return (
    <div className="App">
      <PostProvider>
        <div className="formBarContainer">
          <PostForm />
          <SearchBar setTerms={setTerms} />
        </div>
        <PostList searchTerms={searchTerms} />
      </PostProvider>
    </div>
  );
}

export default App;
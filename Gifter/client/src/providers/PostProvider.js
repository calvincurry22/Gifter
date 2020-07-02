import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        return fetch("api/posts")
            .then((res) => res.json())
            .then(setPosts);
    };

    const addPost = (post) => {
        return fetch("api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then(getAllPosts)
    };

    const searchPosts = (keyword) => {
        return fetch(`api/posts/search?t=${keyword}`)
            .then(res => res.json())
            .then(setPosts)
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts }}>
            {props.children}
        </PostContext.Provider>
    );
};
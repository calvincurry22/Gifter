import React, { useState } from "react";
import * as firebase from 'firebase/app';
import "firebase/auth";
export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const getToken = () => firebase.auth().currentUser.getIdToken();

    const getAllPosts = () => {
        return getToken().then((token) =>
            fetch("/api/posts", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => res.json())
                .then(setPosts));
    };

    const getPost = (id) => {
        return getToken().then((token) =>
            fetch(`/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => res.json()));
    };

    const getUserPosts = (userId) => {
        return fetch(`/api/posts/getbyuser/${userId}`).then((res) => res.json());
    };

    const addPost = (post) => {
        return getToken().then((token) =>
            fetch("/api/posts", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            })
                .then(getAllPosts))
    };

    const searchPosts = (keyword) => {
        return getToken().then((token) =>
            fetch(`/api/posts/search?t=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(setPosts))
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, getPost, getUserPosts }}>
            {props.children}
        </PostContext.Provider>
    );
};
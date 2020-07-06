import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = ({ searchTerms }) => {
    const { posts, getAllPosts, searchPosts } = useContext(PostContext);

    useEffect(() => {
        console.log(searchTerms)
        if (searchTerms === null || searchTerms === "") {
            getAllPosts();

        } else {
            searchPosts(searchTerms);
        }
    }, [searchTerms])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;
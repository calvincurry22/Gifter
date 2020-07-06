import React, { useContext, useState, useEffect } from 'react';
import { PostContext } from '../providers/PostProvider';
import { useParams } from 'react-router-dom';
import Post from './Post';

export default () => {

    const { getUserPosts } = useContext(PostContext)
    const [userPosts, setUserPosts] = useState()
    const { id } = useParams()

    useEffect(() => {
        getUserPosts(id)
            .then(setUserPosts)
            .then(console.log(userPosts))
    }, [])

    if (!userPosts) {
        return null;
    }

    return (
        <div>
            {
                userPosts.map(post => {
                    return <Post key={post.id} post={post} />
                })
            }
        </div>
    )
}
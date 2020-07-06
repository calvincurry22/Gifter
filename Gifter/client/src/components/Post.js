import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Post = ({ post }) => {
    const location = useLocation()
    console.log(location)
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: &nbsp;
                <Link to={`/users/${post.userProfile.id}`}>
                    {post.userProfile.name}
                </Link>
            </p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                {
                    (location.pathname === `/posts/${post.id}`)
                        ? <strong>{post.title}</strong>
                        : <Link to={`/posts/${post.id}`}><strong>{post.title}</strong> </Link>
                }



                <p>Caption: {post.caption}</p>
                <p>
                    <strong>Comments</strong>
                </p>
                <div>
                    {
                        (post.comments == null)
                            ? false
                            : post.comments.map(comment => <p key={comment.id}>{comment.message}</p>)
                    }
                </div>
            </CardBody>
        </Card>
    );
};

export default Post;
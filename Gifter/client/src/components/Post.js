import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
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
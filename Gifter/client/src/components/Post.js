import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <strong>{post.title}</strong>
                </p>
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
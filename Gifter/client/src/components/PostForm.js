import React, { useRef, useContext } from "react";
import { Form, Button } from "reactstrap";
import "./PostForm.css";
import { PostContext } from "../providers/PostProvider";
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";


export default () => {

    const imageUrl = useRef()
    const { getUserProfile } = useContext(UserProfileContext)
    const title = useRef()
    const caption = useRef()
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"))
    const { addPost } = useContext(PostContext)
    const history = useHistory()
    const form = document.querySelector(".gifForm")
    const createNewGif = () => {
        addPost({
            title: title.current.value,
            imageUrl: imageUrl.current.value,
            caption: caption.current.value,
            dateCreated: new Date().toJSON(),
            userProfileId: userProfile.id
        })
    }

    return (
        <Form className="gifForm">
            <h3>Create a new Gif</h3>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl" className="form-label">Image Url:</label>
                    <input type="text" name="imageUrl" required className="form-control"
                        placeholder="type url here..."
                        ref={imageUrl}
                        id="postImage"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" name="title" required className="form-control"
                        placeholder="type title here..."
                        ref={title}
                        id="postTitle"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption" className="form-label">Caption:</label>
                    <input type="text" name="caption" required className="form-control"
                        placeholder="type caption here..."
                        ref={caption}
                        id="postCaption"
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="userProfileId" className="form-label">User Id:</label>
                    <input type="text" name="userProfileId" required className="form-control"
                        ref={userProfileId}
                        id="postUserId"
                    />
                </div>
            </fieldset> */}
            <Button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    createNewGif()
                    history.push("/")
                }}>
                Save New Gif
                </Button>
        </Form>
    )
}
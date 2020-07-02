import React, { useRef, useContext } from "react";
import { Button } from "reactstrap";
import { PostContext } from "../providers/PostProvider";

export default () => {
    const { searchPosts } = useContext(PostContext)
    const keyword = useRef()

    return (
        <fieldset className="searchBarFieldset">
            <div className="form-group search">
                <input
                    type="text"
                    id="searchTerms"
                    ref={keyword}
                    required
                    autoComplete="off"
                    placeholder="Search..."
                    autoFocus
                    className="form-control searchBox"
                />
            </div>
            <Button onClick={e => {
                e.preventDefault()
                searchPosts(keyword.current.value)
            }}>Search</Button>
        </fieldset>
    )
}
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";

const ApplicationViews = () => {
    const [searchTerms, setTerms] = useState(null)
    return (
        <Switch>
            <Route path="/" exact>
                <SearchBar setTerms={setTerms} />
                <PostList searchTerms={searchTerms} />
            </Route>

            <Route path="/posts/add">
                <PostForm />
            </Route>

            <Route path="/posts/:id">{/* TODO: Post Details Component */}</Route>
        </Switch>
    );
};

export default ApplicationViews;
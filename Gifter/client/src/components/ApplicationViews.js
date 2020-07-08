import React, { useState, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);
    console.log(isLoggedIn)
    const [searchTerms, setTerms] = useState(null)
    return (
        <Switch>
            <Route path="/" exact>
                {isLoggedIn ?
                    <div>
                        <SearchBar setTerms={setTerms} />
                        <PostList searchTerms={searchTerms} />
                    </div>
                    : <Redirect to="/login" />
                }
            </Route>

            <Route path="/posts/add">
                <PostForm />
            </Route>

            <Route path="/posts/:id">
                <PostDetails />
            </Route>

            <Route path="/users/:id">
                <UserPosts />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;
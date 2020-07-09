import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

const Header = () => {
    const { isLoggedIn, logout } = useContext(UserProfileContext)
    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <Link to="/" className="navbar-brand">
                GiFTER
            </Link>
            {isLoggedIn &&
                <>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Feed
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts/add" className="nav-link">
                                New Post
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={logout} className="nav-link">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </>
            }
        </nav>
    );
};

export default Header;
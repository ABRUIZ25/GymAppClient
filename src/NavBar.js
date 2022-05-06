import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
    return (
        <nav>
            <Link to='/Home' > Home </Link>
            <Link to='/SignUp'>Sign Up</Link>
            <Link to='/LogIn'>Log In</Link>
        </nav>
    )
}
export default navBar
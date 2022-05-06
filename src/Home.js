import { useState } from "react";


import "./App.css";

import { Link, BrowserRouter, Route, Router, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import App from "./App";

function Home() {
    return (
        <div className="page">

            <div className="navBar">
                <NavBar />


                <nav>

                </nav>

            </div>

        </div>

    )
}

export default Home

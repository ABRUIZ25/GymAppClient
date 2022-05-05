import { useState } from "react";


import "./App.css";
import SignUp from "./SignUp?"

import NavBar from "../src/NavBar"







import { Link, Route } from "react-router-dom"

let serverUrl = "http://localhost:8080/SignUp?";
let API = 'https://data.mongodb-api.com/app/data-ryhqv/endpoint/data/beta/'
//https://data.mongodb-api.com/app/data-ryhqv/endpoint/data/beta
if (process.env.REACT_APP_ENVIRONMENT === "production") {
  console.log("in prod");
  serverUrl = "https://final-workotserver.herokuapp.com/";
} else if (process.env.REACT_APP_ENVIRONMENT === "development") {
  console.log("in dev");
  serverUrl = "http://localhost:8080/login/login-user";

}


function App() {



  const [LoginUserEmail, SetLoginEmail] = useState('')
  const [LoginUserPassword, SetLoginPassword] = useState('')
  const loginUser = {
    LoginUserEmail,
    LoginUserPassword
  }

  const handleClickMe = async () => {



    const response = await fetch(serverUrl, {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        "Content-Type": "application/json",

      }

    })


    const data = await response.json();
    console.log("front end data ", data);

    return data;





  };








  return (
    <div>
      <NavBar />
      <h1> home page / gym name </h1>

      <h3> about the gym</h3>



      <div className="sign-in">
        <div className="email">
          <label>Email</label>
          <input value={LoginUserEmail} onChange={event => SetLoginEmail(event.target.value)} />
        </div>

        <div className="passWord">
          <label>PassWord</label>
          <input value={LoginUserPassword} onChange={event => SetLoginPassword(event.target.value)} />
        </div>


      </div>

      <button
        onClick={handleClickMe}
      >
        Click me!
      </button>



    </div>
  )
}

export default App;

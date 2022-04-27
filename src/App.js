import { useState } from "react";

import "./App.css";

let serverUrl = "http://localhost:8080";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  console.log("in prod");
  serverUrl = "https://final-workotserver.herokuapp.com/";
} else if (process.env.REACT_APP_ENVIRONMENT === "development") {
  console.log("in dev");
  serverUrl = "http://localhost:8080";
}

const handleClickMe = async () => {
  const response = await fetch(`${serverUrl}`);
  const data = await response.json();
  console.log("front end data ", data);
  return data;
};

function App() {
  const [message, setMessage] = useState("before");
  return (
    <div className="App">
      <header className="App-header">
        {message}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React


        </a>

        <button
          onClick={async () => {
            const fetchedMessage = await handleClickMe();
            console.log("fetchedMessage ", fetchedMessage)
            setMessage(fetchedMessage.message)
          }}
        >
          Click me!
        </button>

      </header>

    </div>
  );
}

export default App;

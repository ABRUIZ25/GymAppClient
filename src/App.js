import Login from './Login'
import SighUp from './SignUp'
import './App.css';

import { Router, Route, Switch } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <header className="App-header">

        <div className="Gym-name">
          <h2>
            Gym Name
          </h2>
        </div>

        <div className="Login/Sign-Up">
          <button>Login</button>

        </div>

      </header>
    </div>

  );
}

export default App;

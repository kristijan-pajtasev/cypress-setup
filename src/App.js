import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {add} from './service';

function App() {
  const [user, setUser] = useState({firstName: "", lastName: ""});

  useEffect(() => {
    fetch('/data.json').then(
        res => res.json().then(setUser)
    )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{add(2,3)}
        </a>

        <div id="userMessage">
          Hello {user.firstName} {user.lastName}
        </div>
      </header>
    </div>
  );
}

export default App;

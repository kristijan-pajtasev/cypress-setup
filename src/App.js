import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {add} from './service';

function App() {
  const [user, setUser] = useState({firstName: "", lastName: ""});

  useEffect(() => {
    fetch('http://127.0.0.1:3002/data', {
      // mode:'no-cors',
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      // headers: {
      //   'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // }
    }).then(
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

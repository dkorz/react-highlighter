import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Highlight } from "./components/highlight";

function App() {
  const json = '{"text": "Hello, World!"}';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <main>
        <Highlight>{json}</Highlight>
      </main>
    </div>
  );
}

export default App;

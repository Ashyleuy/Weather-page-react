import React from "react";
import "./css/App.css";
import Form from "./form";
import Githublink from "./githublink";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="bigicon"></div>
        <div className="container">
          <Form />
        </div>
      </div>
      <Githublink />
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;

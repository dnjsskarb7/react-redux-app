import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> This is App! ❤</h1>
        <a href="/auth/google">
          <button className="ui google plus button">
            {" "}
            <i className="google icon"></i>
            Log In with Google
          </button>
        </a>
      </div>
    );
  }
}

export default App;

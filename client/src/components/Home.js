import React from "react";
import { Link } from "react-router-dom";
import UserDropDown from "../menus/UserDropDown";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1> This is Home! ❤</h1>
        
        <UserDropDown />
        <div className="page" style={{ textAlign: "center" }}>
          <p className="page-title">Simple OAuth with Node.js</p>
          <p style={{ fontSize: 20 }}>
            Passport.js contains support for over
            <span style={{ color: "var(--primary-red)" }}> 500+ </span>
            Get started today with just a username and password for apps like
            Facebook, Instagram, and Google.
          </p>
          {/* <Terminal
            userData={"passport.authenticate('facebook')"}
            selected="All"
          /> */}
          <p style={{ fontSize: 28 }}>Popular Strategies</p>

          <div style={{ marginBottom: 20 }} />
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";
import UserDropDown from "../menus/UserDropDown";
import { changeAuth } from "../actions";

class Home extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  // renderDropDown() {
  //   if (this.props.auth) {
  //     return (
  //       <button
  //         onClick={() => {
  //           this.props.changeAuth(true);
  //           this.props.history.push("/");
  //         }}
  //         style={{ float: "right" }}
  //       >
  //         Sign out
  //       </button>
  //     );
  //   } else {
  //     return <UserDropDown />;
  //   }
  // }

  render() {
    console.log("this");
    console.log(this.props);
    return (
      <div>
        {/* {this.renderDropDown()} */}
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

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { fetchUser, changeAuth })(Home);

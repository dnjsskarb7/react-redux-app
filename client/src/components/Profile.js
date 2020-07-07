import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";
import UserDropDown from "../menus/UserDropDown";
import { signOut, changeAuth } from "../actions";

class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchUser());
  }

  componentWillMount() {}
  renderDropDown() {
    return (
      <button
        onClick={() => {
          this.props.signOut();
          this.props.history.push("/");
        }}
        style={{ float: "right" }}
      >
        Sign out
      </button>
    );
  }

  render() {
    console.log(this.props.auth);
    return (
      <div>
        {this.renderDropDown()}
        {/* <UserDropDown /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { fetchUser, changeAuth, signOut })(
  Profile
);

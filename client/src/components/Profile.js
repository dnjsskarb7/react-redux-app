import React from "react";
import { connect } from "react-redux";
import { authUser } from "../actions";
import { Link } from "react-router-dom";
import UserDropDown from "../menus/UserDropDown";
import { signOut, changeAuth } from "../actions";

class Profile extends React.Component {
  render() {
    return <div>Profile</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStateToProps)(Profile);

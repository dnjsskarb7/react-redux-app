import React from "react";
import { connect } from "react-redux";
import { authUser } from "../actions";
import { Link } from "react-router-dom";
import UserDropDown from "../menus/UserDropDown";
import { changeAuth } from "../actions";

class Home extends React.Component {
  render() {
    return (
      <div>
        <UserDropDown />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Home);

import React from "react";
import { connect } from "react-redux";
import { authUser } from "../actions";
import { Link } from "react-router-dom";
import UserDropDown from "../menus/UserDropDown";
import { changeAuth } from "../actions";

class Header extends React.Component {
  componentDidMount() {
    this.props.authUser();
  }
  renderContent = () => {
    switch (this.props.auth.isLogin) {
      case null:
        return;
      case false:
        return <UserDropDown />;

      default:
        return (
          <h3 style={{ float: "right" }}>
            Welcome {this.props.auth.isLogin.title}
            <br />
            <a style={{ color: "black" }} href="/auth/logout">
              Log out
            </a>
          </h3>
        );
    }
  };

  render() {
    console.log(this.props.auth);
    return (
      <div>
        {this.renderContent()}
        {/* <Terminal
            userData={"passport.authenticate('facebook')"}
            selected="All"
          /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { authUser })(Header);

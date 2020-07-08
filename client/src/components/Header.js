import React from "react";
import { connect } from "react-redux";
import { authUser } from "../actions";
import { Link } from "react-router-dom";
import UserDropDown from "../menus/UserDropDown";
import Payment from "./Payment";
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
        return [
          <div style={{ float: "right" }}>
            <Payment />
            Welcome {this.props.auth.isLogin.title}
            <br />
            <a style={{ color: "black" }} href="/auth/logout">
              Log out
            </a>
          </div>,
        ];
    }
  };

  render() {
    return (
      <div>
        <div style={{ float: "left" }}>
          <Link to={this.props.auth.isLogin ? "/surveys" : "/"}>LogoHere</Link>
        </div>
        <div>{this.renderContent()}</div>
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

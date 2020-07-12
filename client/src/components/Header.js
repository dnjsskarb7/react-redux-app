import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "../actions";

class Header extends React.Component {
  renderButton() {
    if (this.props.auth === null) {
      return;
    } else if (this.props.auth === false) {
      return (
        <a href="/auth/google">
          <button>Log in</button>
        </a>
      );
    } else {
      return (
        <a href="/auth/logout">
          <div>Hello {this.props.auth.givenName}</div>
          <button>Log Out</button>
        </a>
      );
    }
  }
  renderHeader() {
    return (
      <div className="ui clearing segment">
        <div className="ui left floated header">
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Post a Comment</Link>
          <br />
          <Link to="/posts/edit">Edit</Link>
        </div>
        <div className="ui right floated header"> {this.renderButton()}</div>
      </div>
    );
  }

  render() {
    console.log("AAAA", this.props.auth);
    return <div>{this.renderHeader()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);

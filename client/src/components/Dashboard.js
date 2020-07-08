import React from "react";
import { connect } from "react-redux";
class Dashboard extends React.Component {
  renderFirst = () => {
    if (this.props.auth.isLogin === false || null) {
      return this.props.history.push("/");
    } else {
      return null;
    }
  };

  render() {
    console.log(this.props.auth);
    return (
      <div>
        {this.renderFirst()}
        dashboard
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStateToProps)(Dashboard);

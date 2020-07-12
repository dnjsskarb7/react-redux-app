import React from "react";
import requireAuth from "./requireAuth";
import { connect } from "react-redux";
class PostEdit extends React.Component {
  render() {
    return <div>PostEdit</div>;
  }
}
export default requireAuth(PostEdit);

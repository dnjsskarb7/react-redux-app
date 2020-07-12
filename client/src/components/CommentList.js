import React from "react";
import { connect } from "react-redux";
import PostEdit from "./PostEdit";
class CommentList extends React.Component {
  renderComments() {
    return this.props.comment.map((data, index) => {
      return <li key={index}>{data}</li>;
    });
  }

  render() {
    console.log("!!!!!!!!", this.props.comment);
    return (
      <div>
        <h1>CommentList</h1>
        <h3>{this.renderComments()}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    comment: state.comment,
  };
};
export default connect(mapStateToProps)(CommentList);

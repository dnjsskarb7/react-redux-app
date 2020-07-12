//CommentBox component for now is only place where i want users to authenticate to get in
import React from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions";
import requireAuth from "./requireAuth";
import PostEdit from "./PostEdit"
class CommentBox extends React.Component {
  state = {
    input: "",
  };

  onTextHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.input.length < 2) {
      alert("FUCK TYPE SOMETHING");
    } else {
      this.props.saveComment(this.state.input);
      this.props.history.push("/");

      this.setState({ input: "" });
    }
  };
  render() {
    console.log("this is from CommentBox", this.props);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.onTextHandler} value={this.setState.input} />
          <div>
            <button>Submit Comments</button>
          </div>
        </form>
        <button> Fetch Comments </button>
        
      </div>
    );
  }
}

export default connect(null, { saveComment })(requireAuth(CommentBox));

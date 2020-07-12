import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import CommentList from "./components/CommentList";
import CommentBox from "./components/CommentBox";
import { fetchUser } from "./actions";
import PostEdit from "./components/PostEdit";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props);
    return (
      <div className="ui container">
        <Header />
        <Route path="/" exact component={CommentList} />
        <Route path="/posts" exact component={CommentBox} />
        <Route path="/posts/edit" exact component={PostEdit} />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

export default connect(null, { fetchUser })(App);

import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import CommentList from "./components/CommentList";
import CommentBox from "./components/CommentBox";
import { fetchUser } from "./actions";
import PostEdit from "./components/PostEdit";
import SurveyNew from "./components/surveys/SurveyNew";


const Dashboard = () => {
  return (
    <div className="item">
      <Link to="/surveys/new">
        <button className="ui right floated button">
          <i className="address book icon"></i>
          Add
        </button>
      </Link>
    </div>
  );
};



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
        <Route path="/surveys" exact component={Dashboard} />
        <Route path="/surveys/new" exact component={SurveyNew} />
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

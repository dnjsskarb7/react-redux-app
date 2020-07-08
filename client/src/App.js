import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/news" exact component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

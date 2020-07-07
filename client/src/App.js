import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Route, BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import Home from "./components/Home";
import Profile from "./components/Profile";


const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="ui container">
          <Route path="/" exact component={Home} />
          {/* <Route path="/auth/login" exact component={Auth} /> */}
          <Route path="/profile" exact component={Profile} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

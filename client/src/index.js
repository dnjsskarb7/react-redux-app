import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Route, BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="ui container">
        <Route exact path="/" component={App} />
        {/* <Route exact path="/posts" component={createPosts} />
        <Route exact path="/posts/:id" component={postShow} /> */}
      </div>
    </BrowserRouter>
  </Provider>,

  document.querySelector("#root")
);

import { combineReducers } from "redux";
import { authReducers } from "./authReducers";
import { commentReducers } from "./commentReducers";

export default combineReducers({
  auth: authReducers,
  comment: commentReducers,
});

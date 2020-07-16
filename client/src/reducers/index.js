import { combineReducers } from "redux";
import { authReducers } from "./authReducers";
import { commentReducers } from "./commentReducers";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducers,
  comment: commentReducers,
  form: reduxForm,
});

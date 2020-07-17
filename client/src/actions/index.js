import { FETCH_USER, COMMENT } from "./types";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/auth/current_user");
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};

// export const changeAuth = (isLoggedin) => {
//   return {
//     type: CHANGE_AUTH,
//     payload: isLoggedin,
//   };
// };
export const saveComment = (comment) => {
  return {
    type: COMMENT,
    payload: comment,
  };
};

export const submitSurveys = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({
    type: "FETCH_USER",
    payload: res.data,
  });
};

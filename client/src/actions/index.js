import axios from "axios";
import { AUTH_USER, CHANGE_AUTH, SIGN_OUT } from "./types";

// export const fetchUser = () => async (dispatch) => {
//   const response = await axios.get("/posts");
//   dispatch({
//     type: FETCH_USER,
//     payload: response.data,
//   });
// };

// export const changeAuth = (isLoggedIn) => {
//   return {
//     type: CHANGE_AUTH,
//     payload: isLoggedIn,
//   };
// };

//if logged in, you get an req.user from server
export const authUser = () => async (dispatch) => {
  const request = await axios.get("/auth/current_user");
  dispatch({
    type: AUTH_USER,
    payload: request.data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  const response = await axios.post("/api/stripe");

  dispatch({
    type: AUTH_USER,
    payload: response.data,
  });
};

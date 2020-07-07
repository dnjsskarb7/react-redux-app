import axios from "axios";
import { FETCH_USER, CHANGE_AUTH, SIGN_OUT } from "./types";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/posts");
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};

export const signOut = () => async (dispatch) => {
  const request = await axios.get("/auth/logout");
  dispatch({
    type: SIGN_OUT,
    payload: request,
  });
};

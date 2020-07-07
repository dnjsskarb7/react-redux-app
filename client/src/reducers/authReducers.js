import { FETCH_USER, CHANGE_AUTH, SIGN_OUT } from "../actions/types";
const initial_state = {
  fetchUser: null,
  changeAuth: false,
  signOut: false,
};
export default function (state = initial_state, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, fetchUser: action.payload };
    case CHANGE_AUTH:
      return { ...state, changeAuth: action.payload };
    case SIGN_OUT:
      return { ...state, signOut: action.payload };
    default:
      return state;
  }
}

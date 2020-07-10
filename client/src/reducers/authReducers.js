import { AUTH_USER, CHANGE_AUTH, SIGN_OUT } from "../actions/types";
const initial_state = {
  isLogin: null,
};
export default function (state = initial_state, action) {
  console.log(action);
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isLogin: action.payload || false };
    // case CHANGE_AUTH:
    //   return { ...state, changeAuth: action.payload };
    // case SIGN_OUT:
    //   return { ...state, signOut: action.payload };
    default:
      return state;
  }
}

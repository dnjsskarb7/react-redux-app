import { COMMENT } from "../actions/types";

export function commentReducers(state = [], action) {
  console.log("this is from comment Reducers", action);
  switch (action.type) {
    case COMMENT:
      return [...state, action.payload];

    default:
      return state;
  }
}

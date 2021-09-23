import * as Actions from "./actions";
import initialState from "../store/initialStore";

export const ProductsReducer= (state = initialState.products, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
    default:
      return state;
  }
};

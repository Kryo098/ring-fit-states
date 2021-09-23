import * as Actions from "./actions";
import initialState from "../store/initialStore";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      };
    case Actions.FETCH_WORK_BACKPRESS:
      return {
        ...state,
        backpress: [...action.payload],
      };
    case Actions.FETCH_WORK_BOWPRESS:
      return {
        ...state,
        bowpress: [...action.payload],
      };
    case Actions.FETCH_WORK_FLUTTERKICK:
      return {
        ...state,
        flutterkick: [...action.payload],
      };
    case Actions.FETCH_WORK_FRONTPRESS:
      return {
        ...state,
        frontpress: [...action.payload],
      };
    case Actions.FETCH_WORK_HIPLIFT:
      return {
        ...state,
        hiplift: [...action.payload],
      };
    case Actions.FETCH_WORK_KNEELIFT:
      return {
        ...state,
        kneelift: [...action.payload],
      };
    case Actions.FETCH_WORK_KNEELIFTCOMBO:
      return {
        ...state,
        kneeliftcombo: [...action.payload],
      };
    case Actions.FETCH_WORK_KNEETOCHEST:
      return {
        ...state,
        kneetochest: [...action.payload],
      };
    case Actions.FETCH_WORK_LEGRAISE:
      return {
        ...state,
        legraise: [...action.payload],
      };
    case Actions.FETCH_WORK_LEGSCISSORS:
      return {
        ...state,
        legscissors: [...action.payload],
      };
    case Actions.FETCH_WORK_MOUNTAINCLIMBER:
      return {
        ...state,
        mountainclimber: [...action.payload],
      };

    default:
      return state;
  }
};

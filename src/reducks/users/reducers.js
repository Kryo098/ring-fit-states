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
    case Actions.FETCH_WORK_OVERHEADARMSPIN:
      return {
        ...state,
        overheadarmspin: [...action.payload],
      };
    case Actions.FETCH_WORK_OVERHEADARMTWIST:
      return {
        ...state,
        overheadarmtwist: [...action.payload],
      };
    case Actions.FETCH_WORK_OVERHEADBENT:
      return {
        ...state,
        overheadbend: [...action.payload],
      };
    case Actions.FETCH_WORK_OPENCLOSELEGRAISE:
      return {
        ...state,
        opencloselegraise: [...action.payload],
      };
    case Actions.FETCH_WORK_OVERHEADHIPSHAKE:
      return {
        ...state,
        overheadhipshake: [...action.payload],
      };
    case Actions.FETCH_WORK_OVERHEADLUNGETWIST:
      return {
        ...state,
        overheadlungetwist: [...action.payload],
      };
    case Actions.FETCH_WORK_OVERHEADPRESS:
      return {
        ...state,
        overheadpress: [...action.payload],
      };
    case Actions.FETCH_WORK_OVERHEADSIDEBENT:
      return {
        ...state,
        overheadsidebend: [...action.payload],
      };
    case Actions.FETCH_WORK_OVERHEADSQUAT:
      return {
        ...state,
        overheadsquat: [...action.payload],
      };
    case Actions.FETCH_WORK_PENDULUMBENT:
      return {
        ...state,
        pendulumbend: [...action.payload],
      };
    case Actions.FETCH_WORK_PLANK:
      return {
        ...state,
        plank: [...action.payload],
      };
    case Actions.FETCH_WORK_RINGRAISECOMBO:
      return {
        ...state,
        ringraisecombo: [...action.payload],
      };
    case Actions.FETCH_WORK_RUSSIANTWIST:
      return {
        ...state,
        russiantwist: [...action.payload],
      };
    case Actions.FETCH_WORK_SEATEDFORWARDPRESS:
      return {
        ...state,
        seatedforwardpress: [...action.payload],
      };
    case Actions.FETCH_WORK_SEATEDRINGRAISE:
      return {
        ...state,
        seatedringraise: [...action.payload],
      };
    case Actions.FETCH_WORK_SHOULDERPRESS:
      return {
        ...state,
        shoulderpress: [...action.payload],
      };
    case Actions.FETCH_WORK_SIDESTEP:
      return {
        ...state,
        sidestep: [...action.payload],
      };
    case Actions.FETCH_WORK_SQUAT:
      return {
        ...state,
        squat: [...action.payload],
      };

    case Actions.FETCH_WORK_STANDINGTWIST:
      return {
        ...state,
        standingtwist: [...action.payload],
      };

    case Actions.FETCH_WORK_THIGHPRESS:
      return {
        ...state,
        thighpress: [...action.payload],
      };

    case Actions.FETCH_WORK_TRICEPKICKBACK:
      return {
        ...state,
        tricepkickback: [...action.payload],
      };

    case Actions.FETCH_WORK_WIDESQUAT:
      return {
        ...state,
        widesquat: [...action.payload],
      };

    default:
      return state;
  }
};

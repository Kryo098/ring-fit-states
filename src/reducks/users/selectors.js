import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);

export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUsername = createSelector(
  [usersSelector],
  (state) => state.username
);


export const getbackpress = createSelector(
  [usersSelector],
  (state) => state.backpress
); 
export const getbowpress = createSelector(
  [usersSelector],
  (state) => state.bowpress
);
export const getflutterkick = createSelector(
  [usersSelector],
  (state) => state.flutterkick
);
export const getfrontpress = createSelector(
  [usersSelector],
  (state) => state.frontpress
);
export const gethiplift = createSelector(
  [usersSelector],
  (state) => state.hiplift
);
export const getkneeliftcombo = createSelector(
  [usersSelector],
  (state) => state.kneeliftcombo
);
export const getkneelift = createSelector(
  [usersSelector],
  (state) => state.kneelift
);
export const getkneetochest = createSelector(
  [usersSelector],
  (state) => state.kneetochest
);
export const getlegraise = createSelector(
  [usersSelector],
  (state) => state.legraise
);
export const getlegscissors = createSelector(
  [usersSelector],
  (state) => state.legcissors
);
export const getmountainclimber = createSelector(
  [usersSelector],
  (state) => state.mountainclimer
);

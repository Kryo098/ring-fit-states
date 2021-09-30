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
  (state) => state.legscissors
);
export const getmountainclimber = createSelector(
  [usersSelector],
  (state) => state.mountainclimber
);
export const getopencloselegraise = createSelector(
  [usersSelector],
  (state) => state.opencloselegraise
);
export const getoverheadarmspin = createSelector(
  [usersSelector],
  (state) => state.overheadarmspin
);
export const getoverheadarmtwist = createSelector(
  [usersSelector],
  (state) => state.overheadarmtwist
);
export const getoverheadbend = createSelector(
  [usersSelector],
  (state) => state.overheadbend
);
export const getoverheadhipshake = createSelector(
  [usersSelector],
  (state) => state.overheadhipshake
);
export const getoverheadlungetwist = createSelector(
  [usersSelector],
  (state) => state.overheadlungetwist
);
export const getoverheadpress = createSelector(
  [usersSelector],
  (state) => state.overheadpress
);
export const getoverheadsidebend = createSelector(
  [usersSelector],
  (state) => state.overheadsidebend
);
export const getoverheadsquat = createSelector(
  [usersSelector],
  (state) => state.overheadsquat
);
export const getpendulumbend = createSelector(
  [usersSelector],
  (state) => state.pendulumbend
);
export const getplank = createSelector(
  [usersSelector],
  (state) => state.plank
);
export const getringraisecombo = createSelector(
  [usersSelector],
  (state) => state.ringraisecombo
);
export const getrussiantwist = createSelector(
  [usersSelector],
  (state) => state.russiantwist
);
export const getseatedforwardpress = createSelector(
  [usersSelector],
  (state) => state.seatedforwardpress
);
export const getseatedringraise = createSelector(
  [usersSelector],
  (state) => state.seatedringraise
);
export const getshoulderpress = createSelector(
  [usersSelector],
  (state) => state.shoulderpress
);
export const getsidestep = createSelector(
  [usersSelector],
  (state) => state.sidestep
);
export const getsquat = createSelector(
  [usersSelector],
  (state) => state.squat
);
export const getstandingtwist = createSelector(
  [usersSelector],
  (state) => state.standingtwist
);
export const getthighpress = createSelector(
  [usersSelector],
  (state) => state.thighpress
);
export const gettricepkickback = createSelector(
  [usersSelector],
  (state) => state.tricepkickback
);
export const getwidesquat = createSelector(
  [usersSelector],
  (state) => state.widesquat
);

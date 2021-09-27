export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
      backpress: userState.backpress,
      bowpress: userState.bowpress,
      flutterkick: userState.flutterkick,
      frontpress: userState.frontpress,
      hiplift: userState.hiplift,
      kneeliftcombo: userState.kneeliftcombo,
      kneelift: userState.kneelift,
      kneetochest: userState.kneetochest,
      legraise: userState.legraise,
      legscissors: userState.legscissors,
      mountainclimber: userState.mountainclimber,

    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
      backpress: "",
      bowpress:"",
      flutterkick: "",
      frontpress: "",
      hiplift: "",
      kneeliftcombo: "",
      kneelift: "",
      kneetochest: "",
      legraise: "",
      legscissors: "",
      mountainclimber: "",
    },
  };
};

export const FETCH_WORK_BACKPRESS = "FETCH_WORK_BACKPRESS";
export const fetchBackPressAction = (works) => {
  return {
    type: "FETCH_WORK_BACKPRESS",
    payload: works,
  };
};
export const FETCH_WORK_BOWPRESS = "FETCH_WORK_BOWPRESS";
export const fetchBowPressAction = (works) => {
  return {
    type: "FETCH_WORK_BOWPRESS",
    payload: works,
  };
};
export const FETCH_WORK_FLUTTERKICK = "FETCH_WORK_FLUTTERKICK";
export const fetchFlutterKickAction = (works) => {
  return {
    type: "FETCH_WORK_FLUTTERKICK",
    payload: works,
  };
};
export const FETCH_WORK_FRONTPRESS = "FETCH_WORK_FRONTPRESS";
export const fetchFrontPressAction = (works) => {
  return {
    type: "FETCH_WORK_FRONTPRESS",
    payload: works,
  };
};
export const FETCH_WORK_HIPLIFT = "FETCH_WORK_HIPLIFT";
export const fetchHipLiftAction = (works) => {
  return {
    type: "FETCH_WORK_HIPLIFT",
    payload: works,
  };
};
export const FETCH_WORK_KNEELIFTCOMBO = "FETCH_WORK_KNEELIFTCOMBO";
export const fetchKneeLiftComboAction = (works) => {
  return {
    type: "FETCH_WORK_KNEELIFTCOMBO",
    payload: works,
  };
};
export const FETCH_WORK_KNEELIFT = "FETCH_WORK_KNEELIFT";
export const fetchKneeLiftAction = (works) => {
  return {
    type: "FETCH_WORK_KNEELIFT",
    payload: works,
  };
};
export const FETCH_WORK_KNEETOCHEST = "FETCH_WORK_KNEETOCHEST";
export const fetchKneetoChestAction = (works) => {
  return {
    type: "FETCH_WORK_KNEETOCHEST",
    payload: works,
  };
};
export const FETCH_WORK_LEGRAISE = "FETCH_WORK_LEGRAISE";
export const fetchLegRaiseAction = (works) => {
  return {
    type: "FETCH_WORK_LEGRAISE",
    payload: works,
  };
};
export const FETCH_WORK_LEGSCISSORS = "FETCH_WORK_LEGSCISSORS";
export const fetchLegScissorsAction = (works) => {
  return {
    type: "FETCH_WORK_LEGSCISSORS",
    payload: works,
  };
};
export const FETCH_WORK_MOUNTAINCLIMBER = "FETCH_WORK_MOUNTAINCLIMBER";
export const fetchMountainClimberAction = (works) => {
  return {
    type: "FETCH_WORK_MOUNTAINCLIMBER",
    payload: works,
  };
};

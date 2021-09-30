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
      opencloselegraise: userState.opencloselegraise,
      overheadarmspin: userState.overheadarmspin,
      overheadarmtwist: userState.overheadarmtwist,
      overheadbend: userState.overheadbend,
      overheadhipshake: userState.overheadhipshake,
      overheadlungetwist: userState.overheadlungetwist,
      overheadpress: userState.overheadpress,
      overheadsidebend: userState.overheadsidebend,
      overheadsquat: userState.overheadsquat,
      pendulumbend: userState.pendulumbend,
      plank: userState.plank,
      ringraisecombo: userState.ringraisecombo,
      russiantwist: userState.russiantwist,
      seatedforwardpress: userState.seatedforwardpress,
      seatedringraise: userState.seatedringraise,
      shoulderpress: userState.shoulderpress,
      sidestep: userState.sidestep,
      squat: userState.squat,
      standingtwist: userState.standingtwist,
      thighpress: userState.thighpress,
      tricepkickback: userState.tricepkickback,
      widesquat: userState.widesquat,
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
      bowpress: "",
      flutterkick: "",
      frontpress: "",
      hiplift: "",
      kneeliftcombo: "",
      kneelift: "",
      kneetochest: "",
      legraise: "",
      legscissors: "",
      mountainclimber: "",
      opencloselegraise: "",
      overheadarmspin: "",
      overheadarmtwist: "",
      overheadbend: "",
      overheadhipshake: "",
      overheadlungetwist: "",
      overheadpress: "",
      overheadsidebend: "",
      overheadsquat: "",
      pendulumbend: "",
      plank: "",
      ringraisecombo: "",
      russiantwist: "",
      seatedforwardpress: "",
      seatedringraise: "",
      shoulderpress: "",
      sidestep: "",
      squat: "",
      standingtwist: "",
      thighpress: "",
      tricepkickback: "",
      widesquat: "",
    }
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
export const FETCH_WORK_OPENCLOSELEGRAISE =
  "FETCH_WORK_OPENCLOSELEGRAISE";
export const fetchOpenCloseLegRaiseAction = (works) => {
  return {
    type: "FETCH_WORK_OPENCLOSELEGRAISE",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADARMSPIN = "FETCH_WORK_OVERHEADARMSPIN";
export const fetchOverheadArmSpinAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADARMSPIN",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADARMTWIST = "FETCH_WORK_OVERHEADARMTWIST";
export const fetchOverheadArmTwistAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADARMTWIST",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADBENT = "FETCH_WORK_OVERHEADBENT";
export const fetchOverheadBentAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADBENT",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADHIPSHAKE = "FETCH_WORK_OVERHEADHIPSHAKE";
export const fetchOverheadHipShakeAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADHIPSHAKE",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADLUNGETWIST = "FETCH_WORK_OVERHEADLUNGETWIST";
export const fetchOverheadLungeTwistAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADLUNGETWIST",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADPRESS = "FETCH_WORK_OVERHEADPRESS";
export const fetchOverheadPressAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADPRESS",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADSIDEBENT = "FETCH_WORK_OVERHEADSIDEBENT";
export const fetchOverheadSideBentAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADSIDEBENT",
    payload: works,
  };
};
export const FETCH_WORK_OVERHEADSQUAT = "FETCH_WORK_OVERHEADSQUAT";
export const fetchOverheadSquatAction = (works) => {
  return {
    type: "FETCH_WORK_OVERHEADSQUAT",
    payload: works,
  };
};
export const FETCH_WORK_PENDULUMBENT = "FETCH_WORK_PENDULUMBENT";
export const fetchPendulumBentAction = (works) => {
  return {
    type: "FETCH_WORK_PENDULUMBENT",
    payload: works,
  };
};
export const FETCH_WORK_PLANK = "FETCH_WORK_PLANK";
export const fetchPlankAction = (works) => {
  return {
    type: "FETCH_WORK_PLANK",
    payload: works,
  };
};
export const FETCH_WORK_RINGRAISECOMBO = "FETCH_WORK_RINGRAISECOMBO";
export const fetchRingRaiseComboAction = (works) => {
  return {
    type: "FETCH_WORK_RINGRAISECOMBO",
    payload: works,
  };
};
export const FETCH_WORK_RUSSIANTWIST = "FETCH_WORK_RUSSIANTWIST";
export const fetchRussianTwistAction = (works) => {
  return {
    type: "FETCH_WORK_RUSSIANTWIST",
    payload: works,
  };
};
export const FETCH_WORK_SEATEDRINGRAISE = "FETCH_WORK_SEATEDRINGRAISE";
export const fetchSeateddRingRaiseAction = (works) => {
  return {
    type: "FETCH_WORK_SEATEDRINGRAISE",
    payload: works,
  };
};
export const FETCH_WORK_SEATEDFORWARDPRESS = "FETCH_WORK_SEATEDFORWARDPRESS";
export const fetchSeatedForwardPressAction = (works) => {
  return {
    type: "FETCH_WORK_SEATEDFORWARDPRESS",
    payload: works,
  };
};
export const FETCH_WORK_SHOULDERPRESS = "FETCH_WORK_SHOULDERPRESS";
export const fetchShoulderPressAction = (works) => {
  return {
    type: "FETCH_WORK_SHOULDERPRESS",
    payload: works,
  };
};
export const FETCH_WORK_SIDESTEP = "FETCH_WORK_SIDESTEP";
export const fetchSideStepAction = (works) => {
  return {
    type: "FETCH_WORK_SIDESTEP",
    payload: works,
  };
};
export const FETCH_WORK_SQUAT = "FETCH_WORK_SQUAT";
export const fetchSquatAction = (works) => {
  return {
    type: "FETCH_WORK_SQUAT",
    payload: works,
  };
};
export const FETCH_WORK_STANDINGTWIST = "FETCH_WORK_STANDINGTWIST";
export const fetchStandingTwistAction = (works) => {
  return {
    type: "FETCH_WORK_STANDINGTWIST",
    payload: works,
  };
};
export const FETCH_WORK_THIGHPRESS = "FETCH_WORK_THIGHPRESS";
export const fetchThighPressAction = (works) => {
  return {
    type: "FETCH_WORK_THIGHPRESS",
    payload: works,
  };
};
export const FETCH_WORK_TRICEPKICKBACK = "FETCH_WORK_TRICEPKICKBACK";
export const fetchTricepKickbackAction = (works) => {
  return {
    type: "FETCH_WORK_TRICEPKICKBACK",
    payload: works,
  };
};
export const FETCH_WORK_WIDESQUAT = "FETCH_WORK_WIDESQUAT";
export const fetchWideSquatAction = (works) => {
  return {
    type: "FETCH_WORK_WIDESQUAT",
    payload: works,
  };
};
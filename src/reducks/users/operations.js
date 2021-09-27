import {
  fetchBackPressAction,
  fetchBowPressAction,
  fetchFlutterKickAction,
  fetchFrontPressAction,
  fetchHipLiftAction,
  fetchKneeLiftAction,
  fetchKneeLiftComboAction,
  fetchKneetoChestAction,
  fetchLegRaiseAction,
  fetchLegScissorsAction,
  fetchMountainClimberAction,
  signInAction,
  signOutAction,
} from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from "../../firebase/index";
import { arrayUnion } from "firebase/firestore";

const usersRef = db.collection("users");

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
                backpress: data.backpress,
                bowpress: data.bowpress,
                flutterkick: data.flutterkick,
                frontpress: data.frontpress,
                hiplift: data.hiplift,
                kneeliftcombo: data.kneeliftcombo,
                kneelift: data.kneelift,
                kneetochest: data.kneetochest,
                legraise: data.legraise,
                legscissors: data.legscissors,
                mountainclimber: data.mountainclimber,
              })
            );
          });
      } else {
        dispatch(push("/Signin"));
      }
    });
  };
};

export const addData = (day, count, props) => {
  return async (dispatch, getState) => {
    const timestamp = FirebaseTimestamp.now();
    const date = new Date();
    const year = date.getFullYear();
    const tomonth = date.getMonth() + 1;
    const today = year + "-" + tomonth + "-" + date.getDate();
    const counts = Number(count) ? count : (count = 0);
    const days = day ? day : (day = today);
    const data = [
      { day: days, count: parseInt(counts, 10), addedAt: timestamp },
    ];
    const uid = getState().users.uid;
    const workRef = usersRef.doc(uid);

    switch (props.work) {
      case "BackPress":
        await workRef.update({
          backpress: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchBackPressAction(data.backpress));
          });
        break;
      case "BowPress":
        await workRef.update({
          bowpress: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchBowPressAction(data.bowpress));
          });
        break;
      case "FlutterKick":
        await workRef.update({
          flutterkick: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchFlutterKickAction(data.flutterkick));
          });
        break;
      case "FrontPress":
        await workRef.update({
          frontpress: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchFrontPressAction(data.frontpress));
          });
        break;
      case "HipLift":
        await workRef.update({
          hiplift: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchHipLiftAction(data.hiplift));
          });
        break;
      case "KneeLiftCombo":
        await workRef.update({
          kneeliftcombo: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchKneeLiftComboAction(data.kneeliftcombo));
          });
        break;
      case "KneeLift":
        await workRef.update({
          kneelift: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchKneeLiftAction(data.kneelift));
          });
        break;
      case "KneetoChest":
        await workRef.update({
          kneetochest: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchKneetoChestAction(data.kneetochest));
          });
        break;
      case "LegRaise":
        await workRef.update({
          legraise: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchLegRaiseAction(data.legraise));
          });
        break;
      case "LegScissors":
        await workRef.update({
          legscissors: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchLegScissorsAction(data.legscissors));
          });
        break;
      case "MountainClimber":
        await workRef.update({
          mountainclimber: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchMountainClimberAction(data.mountainclimber));
          });
        break;
      default:
    }
  };
};

export const SignIn = (email, password) => {
  return async (dispatch) => {
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }

    auth.signInWithEmailAndPassword(email, password).then((retult) => {
      const user = retult.user;
      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
                backpress: data.backpress,
                bowpress: data.bowpress,
                flutterkick: data.flutterkick,
                frontpress: data.frontpress,
                hiplift: data.hiplift,
                kneeliftcombo: data.kneeliftcombo,
                kneelift: data.kneelift,
                kneetochest: data.kneetochest,
                legraise: data.legraise,
                legscissors: data.legscissors,
                mountainclimber: data.mountainclimber,
              })
            );

            dispatch(push("/"));
          });
      }
    });
  };
};

export const SignUp = (username, email, password, confirmpass) => {
  return async (dispatch) => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmpass === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }
    if (password !== confirmpass) {
      alert("パスワードが一致していません");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            uid: uid,
            username: username,
            backpress: [],
            bowpress: [],
            flutterkick: [],
            frontpress: [],
            hiplift: [],
            kneeliftcombo: [],
            kneelift: [],
            kneetochest: [],
            legraise: [],
            legscissors: [],
            mountainclimber: [],
          };

          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/"));
            });
        }
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/signin"));
    });
  };
};

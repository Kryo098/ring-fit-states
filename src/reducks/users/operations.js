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
  fetchOpenCloseLegRaiseAction,
  fetchOverheadArmSpinAction,
  fetchOverheadArmTwistAction,
  fetchOverheadBendAction,
  fetchOverheadHipShakeAction,
  fetchOverheadLungeTwistAction,
  fetchOverheadPressAction,
  fetchOverheadSideBendAction,
  fetchOverheadSquatAction,
  fetchPendulumBendAction,
  fetchPlankAction,
  fetchRingRaiseComboAction,
  fetchRussianTwistAction,
  fetchSeatedForwardPressAction,
  fetchSeateddRingRaiseAction,
  fetchShoulderPressAction,
  fetchSideStepAction,
  fetchSquatAction,
  fetchStandingTwistAction,
  fetchThighPressAction,
  fetchTricepKickbackAction,
  fetchWideSquatAction,
  signInAction,
  signOutAction,
  showLoadingAction,
  hideLoadingAction,
} from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from "../../firebase/index";
import { arrayUnion, arrayRemove } from "firebase/firestore";
import { isVaildEmail, isVaildRequired } from "../../function/common";

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
            if (!data) {
              throw new Error("ユーザーが存在しません。");
            }
            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                username: data.username,
                email: data.email,
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
                opencloselegraise: data.opencloselegraise,
                overheadarmspin: data.overheadarmspin,
                overheadarmtwist: data.overheadarmtwist,
                overheadbend: data.overheadbend,
                overheadhipshake: data.overheadhipshake,
                overheadlungetwist: data.overheadlungetwist,
                overheadpress: data.overheadpress,
                overheadsidebend: data.overheadsidebend,
                overheadsquat: data.overheadsquat,
                pendulumbend: data.pendulumbend,
                plank: data.plank,
                ringraisecombo: data.ringraisecombo,
                russiantwist: data.russiantwist,
                seatedforwardpress: data.seatedforwardpress,
                seatedringraise: data.seatedringraise,
                shoulderpress: data.shoulderpress,
                sidestep: data.sidestep,
                squat: data.squat,
                standingtwist: data.standingtwist,
                thighpress: data.thighpress,
                tricepkickback: data.tricepkickback,
                widesquat: data.widesquat,
              })
            );
          });
      } else {
        dispatch(push("/Signin"));
      }
    });
  };
};

const timestamp = FirebaseTimestamp.now();

//現在時刻の取得
const date = new Date();
const year = date.getFullYear();
const tomonthNm = date.getMonth() + 1;
const tomonthSt =
  String(tomonthNm).length < 2 ? "0" + tomonthNm : String(tomonthNm);

const todayNm = date.getDate();
const todaySt = String(todayNm).length < 2 ? "0" + todayNm : String(todayNm);

const today = "" + year + tomonthSt + todaySt;

export const addData = (day, count, props) => {
  return async (dispatch, getState) => {
    //入力された日付を最適化
    if (day) {
      const inputyear = day.getFullYear();
      const inputmonthNm = day.getMonth() + 1;
      const inputmouthSt =
        String(inputmonthNm).length < 2
          ? "0" + inputmonthNm
          : String(inputmonthNm);

      const inputdayNm = day.getDate();
      const inputdaySt =
        String(inputdayNm).length < 2 ? "0" + inputdayNm : String(inputdayNm);
      var inputtoday = "" + inputyear + inputmouthSt + inputdaySt;
    }

    //入力された回数が0以下ではないことを確認
    const counts = count < 0 || !count ? (count = 0) : count;

    //日付が未入力の場合、現在時刻を代入
    const days = inputtoday ? inputtoday : today;
    const data = [
      { day: Number(days), count: parseInt(counts, 10), addedAt: timestamp },
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
      case "OpenCloseLegRaise":
        await workRef.update({
          opencloselegraise: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOpenCloseLegRaiseAction(data.opencloselegraise));
          });
        break;
      case "OverheadArmSpin":
        await workRef.update({
          overheadarmspin: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadArmSpinAction(data.overheadarmspin));
          });
        break;
      case "OverheadArmTwist":
        await workRef.update({
          overheadarmtwist: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadArmTwistAction(data.overheadarmtwist));
          });
        break;
      case "OverheadBend":
        await workRef.update({
          overheadbend: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadBendAction(data.overheadbend));
          });
        break;
      case "OverheadHipShake":
        await workRef.update({
          overheadhipshake: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadHipShakeAction(data.overheadhipshake));
          });
        break;
      case "OverheadLungeTwist":
        await workRef.update({
          overheadlungetwist: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadLungeTwistAction(data.overheadlungetwist));
          });
        break;
      case "OverheadPress":
        await workRef.update({
          overheadpress: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadPressAction(data.overheadpress));
          });
        break;
      case "OverheadSideBend":
        await workRef.update({
          overheadsidebend: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadSideBendAction(data.overheadsidebend));
          });
        break;
      case "OverheadSquat":
        await workRef.update({
          overheadsquat: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadSquatAction(data.overheadsquat));
          });
        break;
      case "PendulumBend":
        await workRef.update({
          pendulumbend: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchPendulumBendAction(data.pendulumbend));
          });
        break;
      case "Plank":
        await workRef.update({
          plank: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchPlankAction(data.plank));
          });
        break;
      case "RingRaiseCombo":
        await workRef.update({
          ringraisecombo: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchRingRaiseComboAction(data.ringraisecombo));
          });
        break;
      case "RussianTwist":
        await workRef.update({
          russiantwist: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchRussianTwistAction(data.russiantwist));
          });
        break;
      case "SeatedForwardPress":
        await workRef.update({
          seatedforwardpress: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSeatedForwardPressAction(data.seatedforwardpress));
          });
        break;
      case "SeatedRingRaise":
        await workRef.update({
          seatedringraise: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSeateddRingRaiseAction(data.seatedringraise));
          });
        break;
      case "ShoulderPress":
        await workRef.update({
          shoulderpress: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchShoulderPressAction(data.shoulderpress));
          });
        break;
      case "SideStep":
        await workRef.update({
          sidestep: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSideStepAction(data.sidestep));
          });
        break;
      case "Squat":
        await workRef.update({
          squat: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSquatAction(data.squat));
          });
        break;
      case "StandingTwist":
        await workRef.update({
          standingtwist: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchStandingTwistAction(data.standingtwist));
          });
        break;
      case "ThighPress":
        await workRef.update({
          thighpress: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchThighPressAction(data.thighpress));
          });
        break;
      case "TricepKickback":
        await workRef.update({
          tricepkickback: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchTricepKickbackAction(data.tricepkickback));
          });
        break;
      case "WideSquat":
        await workRef.update({
          widesquat: arrayUnion(...data),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchWideSquatAction(data.widesquat));
          });
        break;
      default:
    }
  };
};

export const deleteData = (item, index, props) => {
  return (dispatch, getState) => {
    const uid = getState().users.uid;
    const workRef = usersRef.doc(uid);
    index.day = Number(index.day.split("/").join(""));

    switch (props.work) {
      case "BackPress":
        workRef.update({
          backpress: arrayRemove(index),
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
        workRef.update({
          bowpress: arrayRemove(index),
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
        workRef.update({
          flutterkick: arrayRemove(index),
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
        workRef.update({
          frontpress: arrayRemove(index),
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
        workRef.update({
          hiplift: arrayRemove(index),
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
        workRef.update({
          kneeliftcombo: arrayRemove(index),
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
        workRef.update({
          kneelift: arrayRemove(index),
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
        workRef.update({
          kneetochest: arrayRemove(index),
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
        workRef.update({
          legraise: arrayRemove(index),
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
        workRef.update({
          legscissors: arrayRemove(index),
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
        workRef.update({
          mountainclimber: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchMountainClimberAction(data.mountainclimber));
          });
        break;
      case "OpenCloseLegRaise":
        workRef.update({
          opencloselegraise: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOpenCloseLegRaiseAction(data.opencloselegraise));
          });
        break;
      case "OverheadArmSpin":
        workRef.update({
          overheadarmspin: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadArmSpinAction(data.overheadarmspin));
          });
        break;
      case "OverheadArmTwist":
        workRef.update({
          overheadarmtwist: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadArmTwistAction(data.overheadarmtwist));
          });
        break;
      case "OverheadBend":
        workRef.update({
          overheadbend: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadBendAction(data.overheadbend));
          });
        break;
      case "OverheadHipShake":
        workRef.update({
          overheadhipshake: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadHipShakeAction(data.overheadhipshake));
          });
        break;
      case "OverheadLungeTwist":
        workRef.update({
          overheadlungetwist: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadLungeTwistAction(data.overheadlungetwist));
          });
        break;
      case "OverheadPress":
        workRef.update({
          overheadpress: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadPressAction(data.overheadpress));
          });
        break;
      case "OverheadSideBend":
        workRef.update({
          overheadsidebend: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadSideBendAction(data.overheadsidebend));
          });
        break;
      case "OverheadSquat":
        workRef.update({
          overheadsquat: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchOverheadSquatAction(data.overheadsquat));
          });
        break;
      case "PendulumBend":
        workRef.update({
          pendulumbend: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchPendulumBendAction(data.pendulumbend));
          });
        break;
      case "Plank":
        workRef.update({
          plank: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchPlankAction(data.plank));
          });
        break;
      case "RingRaiseCombo":
        workRef.update({
          ringraisecombo: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchRingRaiseComboAction(data.ringraisecombo));
          });
        break;
      case "RussianTwist":
        workRef.update({
          russiantwist: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchRussianTwistAction(data.russiantwist));
          });
        break;
      case "SeatedForwardPress":
        workRef.update({
          seatedforwardpress: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSeatedForwardPressAction(data.seatedforwardpress));
          });
        break;
      case "SeatedRingRaise":
        workRef.update({
          seatedringraise: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSeateddRingRaiseAction(data.seatedringraise));
          });
        break;
      case "ShoulderPress":
        workRef.update({
          shoulderpress: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchShoulderPressAction(data.shoulderpress));
          });
        break;
      case "SideStep":
        workRef.update({
          sidestep: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSideStepAction(data.sidestep));
          });
        break;
      case "Squat":
        workRef.update({
          squat: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchSquatAction(data.squat));
          });
        break;
      case "StandingTwist":
        workRef.update({
          standingtwist: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchStandingTwistAction(data.standingtwist));
          });
        break;
      case "ThighPress":
        workRef.update({
          thighpress: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchThighPressAction(data.thighpress));
          });
        break;
      case "TricepKickback":
        workRef.update({
          tricepkickback: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchTricepKickbackAction(data.tricepkickback));
          });
        break;
      case "WideSquat":
        workRef.update({
          widesquat: arrayRemove(index),
        });
        usersRef
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(fetchWideSquatAction(data.widesquat));
          });
        break;
      default:
    }
  };
};

export const SignIn = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoadingAction("Sign in..."));
    if (!isVaildRequired(email, password)) {
      dispatch(hideLoadingAction());
      alert("メールアドレス、又はパスワードが未入力です。");
      return false;
    }

    if (!isVaildEmail(email)) {
      dispatch(hideLoadingAction());
      alert("メールアドレスの形式が不正です。");
      return false;
    }

    return auth
      .signInWithEmailAndPassword(email, password)
      .then(async (retult) => {
        const user = retult.user;
        if (!user) {
          dispatch(hideLoadingAction());
          alert("ユーザーIDを取得できません。");
          console.log("error");
          throw new Error("ユーザーIDを取得できません。");
        }
        const userId = user.uid;

        const snapshot = await usersRef.doc(userId).get();
        const data = snapshot.data();
        if (!data) {
          dispatch(hideLoadingAction());
          console.log("error");
          alert("ユーザーが存在しません。");
          throw new Error("ユーザーが存在しません。");
        }
        dispatch(
          signInAction({
            isSignedIn: true,
            uid: userId,
            username: data.username,
            email: data.email,
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
            opencloselegraise: data.opencloselegraise,
            overheadarmspin: data.overheadarmspin,
            overheadarmtwist: data.overheadarmtwist,
            overheadbend: data.overheadbend,
            overheadhipshake: data.overheadhipshake,
            overheadlungetwist: data.overheadlungetwist,
            overheadpress: data.overheadpress,
            overheadsidebend: data.overheadsidebend,
            overheadsquat: data.overheadsquat,
            pendulumbend: data.pendulumbend,
            plank: data.plank,
            ringraisecombo: data.ringraisecombo,
            russiantwist: data.russiantwist,
            seatedforwardpress: data.seatedforwardpress,
            seatedringraise: data.seatedringraise,
            shoulderpress: data.shoulderpress,
            sidestep: data.sidestep,
            squat: data.squat,
            standingtwist: data.standingtwist,
            thighpress: data.thighpress,
            tricepkickback: data.tricepkickback,
            widesquat: data.widesquat,
          })
        );
        dispatch(hideLoadingAction());
        dispatch(push("/"));
      })
      .catch(() => {
        dispatch(hideLoadingAction());
      });
  };
};

export const SignUp = (username, email, password, confirmpass) => {
  return async (dispatch) => {
    if (!isVaildRequired(email, password, confirmpass)) {
      alert("必須項目が未入力です");
      return false;
    }

    if (!isVaildEmail(email)) {
      alert("メールアドレスの形式が不正です。もう一度入力してください。");
      return false;
    }

    if (password !== confirmpass) {
      alert("パスワードが一致しません。もう一度入力してください。");
      return false;
    }

    if (password.length < 6) {
      alert("パスワードは６文字以上で入力してください。");
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
            backpress: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            bowpress: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            flutterkick: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            frontpress: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            hiplift: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            kneeliftcombo: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            kneelift: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            kneetochest: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            legraise: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            legscissors: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            mountainclimber: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            opencloselegraise: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadarmspin: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadarmtwist: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadbend: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadhipshake: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadlungetwist: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadpress: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadsidebend: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            overheadsquat: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            pendulumbend: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            plank: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            ringraisecombo: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            russiantwist: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            seatedforwardpress: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            seatedringraise: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            shoulderpress: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            sidestep: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            squat: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            standingtwist: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            thighpress: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            tricepkickback: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
            widesquat: [
              {
                addedAt: timestamp,
                count: 0,
                day: Number(today),
              },
            ],
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

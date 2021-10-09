import React from "react";
import { Route, Switch } from "react-router";
import Auth from "./Auth";
import{
  Home,
  Signup,
  Signin,
  MountainClimber,
  LegScissors,
  LegRaise,
  KneetoChest,
  KneeLiftCombo,
  KneeLift,
  HipLift,
  FrontPress,
  FlutterKick,
  BowPress,
  BackPress,
  OverheadArmSpin,
  OverheadArmTwist,
  OverheadBend,
  OverheadHipShake,
  OverheadLungeTwist,
  OverheadPress,
  OverheadSideBend,
  OverheadSquat,
  OpenCloseLegRaise,
  PendulumBend,
  Plank,
  RingRaiseCombo,
  RussianTwist,
  SeatedForwardPress,
  SeatedRingRaise,
  ShoulderPress,
  StandingTwist,
  ThighPress,
  TricepKickback,
  SideStep,
  Squat,
  WideSquat,
  Contact

} from "./pages/index"


const Router = () => {
  return (
    <Switch>
      <Route exact path={"/Signup"} component={Signup} />
      <Route exact path={"/Signin"} component={Signin} />
      <Route exact path={"/Contact"} component={Contact} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
        <Route exact path={"/BackPress"} component={BackPress} />
        <Route exact path={"/BowPress"} component={BowPress} />
        <Route exact path={"/FlutterKick"} component={FlutterKick} />
        <Route exact path={"/FrontPress"} component={FrontPress} />
        <Route exact path={"/HipLift"} component={HipLift} />
        <Route exact path={"/KneeLiftCombo"} component={KneeLiftCombo} />
        <Route exact path={"/KneeLift"} component={KneeLift} />
        <Route exact path={"/KneetoChest"} component={KneetoChest} />
        <Route exact path={"/LegRaise"} component={LegRaise} />
        <Route exact path={"/LegScissors"} component={LegScissors} />
        <Route exact path={"/MountainClimber"} component={MountainClimber} />
        <Route exact path={"/OpenCloseLegRaise"} component={OpenCloseLegRaise} />
        <Route exact path={"/OverheadArmSpin"} component={OverheadArmSpin} />
        <Route exact path={"/OverheadArmTwist"} component={OverheadArmTwist} />
        <Route exact path={"/OverheadBend"} component={OverheadBend} />
        <Route exact path={"/OverheadHipShake"} component={OverheadHipShake} />
        <Route exact path={"/OverheadLungeTwist"} component={OverheadLungeTwist} />
        <Route exact path={"/OverheadPress"} component={OverheadPress} />
        <Route exact path={"/OverheadSideBend"} component={OverheadSideBend} />
        <Route exact path={"/OverheadSquat"} component={OverheadSquat} />
        <Route exact path={"/PendulumBend"} component={PendulumBend} />
        <Route exact path={"/Plank"} component={Plank} />
        <Route exact path={"/RingRaiseCombo"} component={RingRaiseCombo} />
        <Route exact path={"/RussianTwist"} component={RussianTwist} />
        <Route exact path={"/SeatedForwardPress"} component={SeatedForwardPress} />
        <Route exact path={"/SeatedRingRaise"} component={SeatedRingRaise} />
        <Route exact path={"/ShoulderPress"} component={ShoulderPress} />
        <Route exact path={"/SideStep"} component={SideStep} />
        <Route exact path={"/Squat"} component={Squat} />
        <Route exact path={"/StandingTwist"} component={StandingTwist} />
        <Route exact path={"/ThighPress"} component={ThighPress} />
        <Route exact path={"/TricepKickback"} component={TricepKickback} />
        <Route exact path={"/WideSquat"} component={WideSquat} />
      </Auth>
    </Switch>
  );
};

export default Router;

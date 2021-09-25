import React from "react";
import { Route, Switch } from "react-router";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home";
import Auth from "./Auth";
import Signin from "./pages/Signin";
import BackPress from "./pages/BackPress";
import BowPress from "./pages/Bow_Press";
import FlutterKick from "./pages/Flutter_Kick";
import FrontPress from "./pages/Front_Press";
import HipLift from "./pages/Hip_Lift";
import KneeLift from "./pages/Knee_Lift";
import KneeLiftCombo from "./pages/Knee_Lift_Combo";
import KneetoChest from "./pages/Knee_to_Chest";
import LegRaise from "./pages/Leg_Raise";
import LegScissors from "./pages/Leg_Scissors";
import MountainClimber from "./pages/Mountain_Climber";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/Signup"} component={Signup} />
      <Route exact path={"/Signin"} component={Signin} />
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
      </Auth>
    </Switch>
  );
};

export default Router;

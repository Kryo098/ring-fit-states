import React from "react";
import { Route, Switch } from "react-router";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home";
import Auth from "./Auth";
import Signin from "./pages/Signin";
import BackPress from "./pages/BackPress";
import BowPress from "./pages/Bow_Press";
import Flutter_Kick from "./pages/Flutter_Kick";
import Front_Press from "./pages/Front_Press";
import Hip_Lift from "./pages/Hip_Lift";
import Knee_Lift from "./pages/Knee_Lift";
import Knee_Lift_Combo from "./pages/Knee_Lift";
import Knee_to_Chest from "./pages/Knee_to_Chest";
import Leg_Raise from "./pages/Leg_Raise";
import Leg_Scissors from "./pages/Leg_Scissors";
import Mountain_Climber from "./pages/Mountain_Climber";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/Signup"} component={Signup} />
      <Route exact path={"/Signin"} component={Signin} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
        <Route exact path={"/BackPress"} component={BackPress} />
        <Route exact path={"/BowPress"} component={BowPress} />
        <Route exact path={"/FlutterKick"} component={Flutter_Kick} />
        <Route exact path={"/FrontPress"} component={Front_Press} />
        <Route exact path={"/HipLift"} component={Hip_Lift} />
        <Route exact path={"/KneeLift"} component={Knee_Lift} />
        <Route exact path={"/KneeLiftCombo"} component={Knee_Lift_Combo} />
        <Route exact path={"/KneetoChest"} component={Knee_to_Chest} />
        <Route exact path={"/LegRaise"} component={Leg_Raise} />
        <Route exact path={"/LegScissors"} component={Leg_Scissors} />
        <Route exact path={"/MountainClimber"} component={Mountain_Climber} />
      </Auth>
    </Switch>
  );
};

export default Router;

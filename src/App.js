import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Appbar from "./components/Appbar.jsx";
import "./App.css";
import Router from "./Router";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Appbar />
      <Router />
    </React.Fragment>
  );
};

export default App;

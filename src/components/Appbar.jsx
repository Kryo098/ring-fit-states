import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "../reducks/users/selectors";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color:"#ff8e00"
  },
  title: {
    margin:"0 auto",
    fontSize:30,
    cursor:"pointer"
  },
  menu: {
    backgroundColor: "#fff",
    color: "#444",
  },
  toolBar: {
    margin: "0",
    width: "100%",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
});

const ButtonAppBar = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(
    (e) => {
      setOpen(!open);
    },
    [setOpen, open]
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#e73e0e" }} >
        <Toolbar className={classes.toolBar}>
          <IconButton color="inherit" aria-label="Menu">
          </IconButton>
          <Typography className={classes.title} color="inherit" onClick={() => dispatch(push("/"))}>
            RINGFIT ADVENTURE STATES
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;

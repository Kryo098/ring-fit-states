import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { ExitToApp } from "@material-ui/icons";
import { signOut } from "../reducks/users/operations";
import { getIsSignedIn } from "../reducks/users/selectors";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme)=> ({
  root: {
    flexGrow: 1,
    color:"#ff8e00",
    [theme.breakpoints.down('sm')]: {
      width:'100%',
    }
  },
  title: {
    position:"relative",
    left:-60,
    right:0,
    margin:"0 auto",
    fontSize:30,
    cursor:"pointer",
    [theme.breakpoints.down('sm')]: {
      fontSize:21,
      left:20,
    }
  },
  menu: {
    backgroundColor: "#fff",
    color: "#444",
    width:200
  },
  toolBar: {
    margin: "0",
    width: "100%",
    },
  iconButtons: {
    margin: "0 0 0 auto",
  },
  logout: {
    fontSize:18,
    [theme.breakpoints.down('sm')]: {
      fontSize:0,
    }
  }
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state)
  const IsSignedIn = getIsSignedIn(selector)

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#e73e0e" }} >
        <Toolbar className={classes.toolBar}>
          {IsSignedIn&&
          (
                      <IconButton color="inherit" onClick={()=>dispatch(signOut())}>
                      <ExitToApp />
                      <Typography className={classes.logout}>ログアウト</Typography>
                      </IconButton>
          )}
          <Typography className={classes.title} color="inherit" onClick={() => dispatch(push("/"))}>
            RINGFIT ADVENTURE STATES
          </Typography>
        </Toolbar>
      
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;

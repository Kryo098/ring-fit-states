//import React from "react";
//import { Router, Route, Link } from "react-router-dom";
//import PropTypes from "prop-types";
//import { withStyles } from "@material-ui/core/styles";
//import Drawer from "@material-ui/core/Drawer";
//import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from "@material-ui/core/ListItemIcon";
//import ListItemText from "@material-ui/core/ListItemText";
//import InboxIcon from "@material-ui/icons/MoveToInbox";
//import Home from "../pages/Home";
//import Bow_Press from "../pages/Bow_Press.js";
//import Auth from "./Auth";
//import Signin from "../pages/Signin";

//const drawerWidth = 240;
//const styles = (theme) => ({
//  root: {
//    flexGrow: 1,
//    zIndex: 1,
//    overflow: "hidden",
//    position: "relative",
//    display: "flex",
//  },
//  drawerPaper: {
//    position: "relative",
//    width: drawerWidth,
//  },
//  content: {
//    flexGrow: 1,
//    backgroundColor: theme.palette.background.default,
//    padding: theme.spacing.unit * 3,
//    minWidth: 0,
//  },
//  toolbar: theme.mixins.toolbar,
//});
//const Routes = (props) => {
//  const { classes } = props;
//  return (
//    <div>
//      <Router>
//        <div className={classes.root}>
//          <Drawer
//            variant="permanent"
//            classes={{
//              paper: classes.drawerPaper,
//            }}
//          >
//            <List>
//              <ListItem button component={Link} to="/">
//                <ListItemIcon>
//                  <InboxIcon />
//                </ListItemIcon>
//                <ListItemText primary="Home" />
//              </ListItem>
//              <ListItem button component={Link} to="/Signin">
//                <ListItemIcon>
//                  <InboxIcon />
//                </ListItemIcon>
//                <ListItemText primary="Signin" />
//              </ListItem>
//            </List>
//          </Drawer>
//          <main className={classes.content}>
//            <Auth>
//              <Route exact path="/" component={Home} />
//              <Route path="/Bow_Press" component={Bow_Press} />
//              <Route path="/signin" component={Signin} />
//            </Auth>
//          </main>
//        </div>
//      </Router>
//    </div>
//  );
//};
//Routes.propTypes = {
//  classes: PropTypes.object.isRequired,
//};
//export default withStyles(styles)(Routes);

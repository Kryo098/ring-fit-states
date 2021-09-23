import React from "react";
import { Divider, ListItemText } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { House } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
//import { makeStyles } from "@material-ui/core";
//import { IconButton } from "@material-ui/core";
//const useStyles = makeStyles({});

export const MenuDrawer = (props) => {
  //const classes = useStyles();
  const { container } = props;
  const dispatch = useDispatch();
  const selectwork = (e, path) => {
    dispatch(push(path));
    props.onClose(e);
  };
  const menus = [
    {
      func: selectwork,
      label: "ウシロプッシュ",
      id: "BackPress",
      value: "/BackPress",
      icon:<House />,
    },
    
    { func: selectwork,
    label: "リングアロー",
    id: "BowPress",
    value: "/BowPress",
    icon:<House />,
    },
    {
      func: selectwork,
      label: "バタバタレッグ",
      id: "FlutterKick",
      value: "/FlutterKick",
      icon:<House />,
    },
    {
      func: selectwork,
      label: "サゲテプッシュ",
      id: "FrontPress",
      value: "/FrontPress",
      icon:<House />,
    },

    { func: selectwork, label: "ヒップリフト", id: "HipLift", value: "/HipLift",icon:<House />, },
    {
      func: selectwork,
      label: "モモアゲコンボ",
      id: "KneeLiftCombo",
      value: "/KneeLiftCombo",
      icon:<House />,
    },
    { func: selectwork,
    label: "モモアゲアゲ",
    id: "KneeLift",
    value: "/KneeLift",
    icon:<House />,
    },
    {
      func: selectwork,
      label: "ニートゥーチェスト",
      id: "KneetoChest",
      value: "/KneetoChest",
      icon:<House />,
    },
    { func: selectwork, label: "レッグレイズ", id: "LegRaise", value: "/LegRaise",icon:<House />, }, 
    {
      func: selectwork,
      label: "ハサミレッグ",
      id: "LegScissors",
      value: "/LegScissors",
      icon:<House />,
    },
    {
      func: selectwork,
      label: "マウンテンクライマー",
      id: "MountainClimber",
      value: "/MountainClimber",
      icon:<House />,
    },
  ];

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        anchor="left"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        ModalProps={{ keepMounted: true }}
      >
        <div>
          <div></div>
          <Divider />
          <List>
            {menus.map((menu) => (
              <ListItem
                button
                key={menu.id}
                onClick={(e) => menu.func(e, menu.value)}
              >
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

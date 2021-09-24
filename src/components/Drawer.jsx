import React from "react";
import { Divider, ListItemText } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import BackPressIcon from "../icons/presin-tras-la-nucapng.png"
import BowPressIcon from '../icons/arco-ring-conpng.png';
import FlutterKickIcon from '../icons/piernas-alternas-arribapng.png';
import FrontPressIcon from '../icons/presin-abajopng.png';
import KneeLiftComboIcon from "../icons/rodillas-arriba-y-sentadillapng.png"
import kneeLiftIcon from "../icons/rodillas-arribapng.png"
import KneetoChestIcon from "../icons/rodillas-al-pechopng.png"
import LegScissorsIcon from "../icons/tijeras-con-crucepng.png"
import LegRaiseIcon from "../icons/piernas-juntas-arribapng.png"
import MountainClimberIcon from "../icons/el-escaladorpng.png"
import HipLiftIcon from "../icons/caderas-arribapng.png";
import { makeStyles } from "@material-ui/core";

//import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  icontext: {
    color:"#e73e0e",
  },
  icontextcontent :{
    borderBottom: "solid 1px #ff8e00",
  },
  list: {
    backgroundColor: "#f4f4f4",
    color:"#e73e0e"
  }
})



export const MenuDrawer = (props) => {
  const classes = useStyles();
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
      icon:(<img height="50" src={BackPressIcon} alt="icon"></img>)
    },
    
    { func: selectwork,
    label: "リングアロー",
    id: "BowPress",
    value: "/BowPress",
    icon:(<img height="50" src={BowPressIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バタバタレッグ",
      id: "FlutterKick",
      value: "/FlutterKick",
      icon:(<img height="50" src={FlutterKickIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "サゲテプッシュ",
      id: "FrontPress",
      value: "/FrontPress",
      icon:(<img height="50" src={FrontPressIcon} alt="icon"></img>),
    },

    { func: selectwork, label: "ヒップリフト", id: "HipLift", value: "/HipLift",icon:(<img height="50" src={HipLiftIcon} alt="icon"></img>), },
    {
      func: selectwork,
      label: "モモアゲコンボ",
      id: "KneeLiftCombo",
      value: "/KneeLiftCombo",
      icon:(<img height="50" src={KneeLiftComboIcon} alt="icon"></img>),
    },
    { func: selectwork,
    label: "モモアゲアゲ",
    id: "KneeLift",
    value: "/KneeLift",
    icon:(<img height="50" src={kneeLiftIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "ニートゥーチェスト",
      id: "KneetoChest",
      value: "/KneetoChest",
      icon:(<img height="50" src={KneetoChestIcon} alt="icon"></img>),
    },
    { func: selectwork, label: "レッグレイズ", id: "LegRaise", value: "/LegRaise",icon:(<img height="50" src={LegRaiseIcon} alt="icon"></img>), }, 
    {
      func: selectwork,
      label: "ハサミレッグ",
      id: "LegScissors",
      value: "/LegScissors",
      icon:(<img height="50" src={LegScissorsIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "マウンテンクライマー",
      id: "MountainClimber",
      value: "/MountainClimber",
      icon:(<img height="50" src={MountainClimberIcon} alt="icon"></img>),
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
          <List className={classes.list}>
            {menus.map((menu) => (
              <ListItem
                button className={classes.icontextcontent}
                key={menu.id}
                onClick={(e) => menu.func(e, menu.value)}
              >
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText className={classes.icontext} primary={menu.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

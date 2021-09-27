import React from "react";
import { makeStyles,Box,Paper} from "@material-ui/core";
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

const useStyles = makeStyles({
  root:{
    backgroundColor: "#f4f4f4",
    position: "absolute",
    bottom: 0,
    left:0,
    right:0,
  },
  cards:{
    width:70,
    display:"inline",
    cursor:"pointer",
    margin:10,
  },
  card: {
    width:70,
    height:70,
  }
})

export const HomeMenuItem = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch();

  const selectwork  =(e, path) => {
    dispatch(push(path))

  }
  const menus = [
    {
      func: selectwork,
      label: "ウシロプッシュ",
      id: "BackPress",
      value: "/BackPress",
      icon:(<img height="80" src={BackPressIcon} alt="icon"></img>),
      timeout:"0ms"
    },
    
    { func: selectwork,
    label: "リングアロー",
    id: "BowPress",
    value: "/BowPress",
    icon:(<img height="80" src={BowPressIcon} alt="icon"></img>),
    timeout:"10ms"
    },
    {
      func: selectwork,
      label: "バタバタレッグ",
      id: "FlutterKick",
      value: "/FlutterKick",
      icon:(<img height="80" src={FlutterKickIcon} alt="icon"></img>),
      timeout:"20ms"
    },
    {
      func: selectwork,
      label: "サゲテプッシュ",
      id: "FrontPress",
      value: "/FrontPress",
      icon:(<img height="80" src={FrontPressIcon} alt="icon"></img>),
      timeout:"30ms"
    
    },

    { func: selectwork, label: "ヒップリフト", id: "HipLift", value: "/HipLift",icon:(<img height="80" src={HipLiftIcon} alt="icon"></img>),      
    timeout:"40ms" },
    {
      func: selectwork,
      label: "モモアゲコンボ",
      id: "KneeLiftCombo",
      value: "/KneeLiftCombo",
      icon:(<img height="80" src={KneeLiftComboIcon} alt="icon"></img>),
      timeout:"50ms"
    },
    { func: selectwork,
    label: "モモアゲアゲ",
    id: "KneeLift",
    value: "/KneeLift",
    icon:(<img height="80" src={kneeLiftIcon} alt="icon"></img>),
    timeout:"60ms"
    },
    {
      func: selectwork,
      label: "ニートゥーチェスト",
      id: "KneetoChest",
      value: "/KneetoChest",
      icon:(<img height="80" src={KneetoChestIcon} alt="icon"></img>),
      timeout:"70ms"
    },
    { func: selectwork, label: "レッグレイズ", id: "LegRaise", value: "/LegRaise",icon:(<img height="80" src={LegRaiseIcon} alt="icon"></img>),
    timeout:"80ms"
    }, 
    {
      func: selectwork,
      label: "ハサミレッグ",
      id: "LegScissors",
      value: "/LegScissors",
      icon:(<img height="80" src={LegScissorsIcon} alt="icon"></img>),
      timeout:"90ms"
    },
    {
      func: selectwork,
      label: "マウンテンクライマー",
      id: "MountainClimber",
      value: "/MountainClimber",
      icon:(<img height="80" src={MountainClimberIcon} alt="icon"></img>),
      timeout:"100ms"
    },
  ]
  return(
      <Paper className={classes.root}>
        {menus.map((menu)=> (
          <Box
          key={menu.id}
          onClick={(e)=>menu.func(e, menu.value)}
          className={classes.cards}
          >
              {menu.icon}
          </Box>
        ))}
      </Paper>
  )
}
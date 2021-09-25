import React from "react";
import { makeStyles,Zoom,Box,Paper} from "@material-ui/core";
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
  cards:{
    width:50,
    display:"inline",
  }
})

export const HomeMenuItem = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch();

  const selectwork  =(e, path) => {
    dispatch(push(path))
    props.onClose(e)
  }
  const menus = [
    {
      func: selectwork,
      label: "ウシロプッシュ",
      id: "BackPress",
      value: "/BackPress",
      icon:(<img height="50" src={BackPressIcon} alt="icon"></img>),
      timeout:"0ms"
    },
    
    { func: selectwork,
    label: "リングアロー",
    id: "BowPress",
    value: "/BowPress",
    icon:(<img height="50" src={BowPressIcon} alt="icon"></img>),
    timeout:"10ms"
    },
    {
      func: selectwork,
      label: "バタバタレッグ",
      id: "FlutterKick",
      value: "/FlutterKick",
      icon:(<img height="50" src={FlutterKickIcon} alt="icon"></img>),
      timeout:"20ms"
    },
    {
      func: selectwork,
      label: "サゲテプッシュ",
      id: "FrontPress",
      value: "/FrontPress",
      icon:(<img height="50" src={FrontPressIcon} alt="icon"></img>),
      timeout:"30ms"
    
    },

    { func: selectwork, label: "ヒップリフト", id: "HipLift", value: "/HipLift",icon:(<img height="50" src={HipLiftIcon} alt="icon"></img>),      
    timeout:"40ms" },
    {
      func: selectwork,
      label: "モモアゲコンボ",
      id: "KneeLiftCombo",
      value: "/KneeLiftCombo",
      icon:(<img height="50" src={KneeLiftComboIcon} alt="icon"></img>),
      timeout:"50ms"
    },
    { func: selectwork,
    label: "モモアゲアゲ",
    id: "KneeLift",
    value: "/KneeLift",
    icon:(<img height="50" src={kneeLiftIcon} alt="icon"></img>),
    timeout:"60ms"
    },
    {
      func: selectwork,
      label: "ニートゥーチェスト",
      id: "KneetoChest",
      value: "/KneetoChest",
      icon:(<img height="50" src={KneetoChestIcon} alt="icon"></img>),
      timeout:"70ms"
    },
    { func: selectwork, label: "レッグレイズ", id: "LegRaise", value: "/LegRaise",icon:(<img height="50" src={LegRaiseIcon} alt="icon"></img>),
    timeout:"80ms"
    }, 
    {
      func: selectwork,
      label: "ハサミレッグ",
      id: "LegScissors",
      value: "/LegScissors",
      icon:(<img height="50" src={LegScissorsIcon} alt="icon"></img>),
      timeout:"90ms"
    },
    {
      func: selectwork,
      label: "マウンテンクライマー",
      id: "MountainClimber",
      value: "/MountainClimber",
      icon:(<img height="50" src={MountainClimberIcon} alt="icon"></img>),
      timeout:"100ms"
    },
  ]
  return(
    <div>
      <Paper
      >
        {menus.map((menu)=> (
          <Box
          button
          key={menu.id}
          onClick={(e)=>menu.func(e, menu.value)}
          className={classes.cards}
          >
            <Zoom in={props.open} style={{transitionDelay:menu.timeout}}>
              {menu.icon}
            </Zoom>
          </Box>
        ))}
      </Paper>
    </div>
  )
}
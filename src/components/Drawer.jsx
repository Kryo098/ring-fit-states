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
import OpenCloseLegRaiseIcon from "../icons/tijeras-abiertaspng.png"
import OverheadArmSpinIcon from "../icons/rotacin-con-los-brazospng.png"
import OverheadArmTwistIcon from "../icons/rotacin-de-muecaspng.png"
import OverheadBendIcon from "../icons/inclinacin-hacia-delantepng.png"
import OverheadHipShakeIcon from "../icons/caderas-ligeraspng.png"
import OverheadLungeTwistIcon from "../icons/torsin-a-un-ladopng.png"
import OverheadPressIcon from "../icons/presin-sobre-la-cabezapng.png"
import OverheadSideBendIcon from "../icons/inclinacin-lateralpng.png"
import OverheadSquatIcon from "../icons/sentadilla-brazos-arribapng.png"
import PendulumBendIcon from "../icons/rotacin-en-inclinacinpng.png"
import PlankIcon from "../icons/la-tablapng.png"
import RingRaiseComboIcon from "../icons/subibaja-de-ring-conpng.png"
import RussianTwistIcon from "../icons/torsin-rusapng.png"
import SeatedForwardPressIcon from "../icons/presin-con-inclinacinpng.png"
import SeatedRingRaiseIcon from "../icons/subibaja-de-ring-conpng.png"
import ShoulderPressIcon from "../icons/presin-sobre-el-hombropng.png"
import SideStepIcon from "../icons/pasos-lateralespng.png"
import SquatIcon from "../icons/cambio-de-ritmopng.png"
import StandingTwistIcon from "../icons/rotacin-troncalpng.png"
import ThighPressIcon from "../icons/presin-de-muslospng.png"
import TricepKickbackIcon from "../icons/tricepspng.png"
import WideSquatIcon from "../icons/sentadilla-de-sumopng.png"



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
    {
      func: selectwork,
      label: "アシパカパカ",
      id: "OpenCloseLegRaise",
      value: "/OpenCloseLegRaise",
      icon:(<img height="50" src={OpenCloseLegRaiseIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "グルグルアーム",
      id: "OverheadArmSpin",
      value: "/OverheadArmSpin",
      icon:(<img height="50" src={OverheadArmSpinIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "アームツイスト",
      id: "OverheadArmTwist",
      value: "/OverheadArmTwist",
      icon:(<img height="50" src={OverheadArmTwistIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バンザイモーニング",
      id: "OverheadBend",
      value: "/OverheadBend",
      icon:(<img height="50" src={OverheadBendIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バンザイコシフリ",
      id: "OverheadHipShake",
      value: "/OverheadHipShake",
      icon:(<img height="50" src={OverheadHipShakeIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "ワイドスクワット",
      id: "WideSquat",
      value: "/WideSquat",
      icon:(<img height="50" src={WideSquatIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "モモデプッシュ",
      id: "ThighPress",
      value: "/ThighPress",
      icon:(<img height="50" src={ThighPressIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "トライセプス",
      id: "TricepKickback",
      value: "/TricepKickback",
      icon:(<img height="50" src={TricepKickbackIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "スクワット",
      id: "Squat",
      value: "/Squat",
      icon:(<img height="50" src={SquatIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "スワイショウ",
      id: "StandingTwist",
      value: "/StandingTwist",
      icon:(<img height="50" src={StandingTwistIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "サイドステップ",
      id: "SideStep",
      value: "/SideStep",
      icon:(<img height="50" src={SideStepIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "カタニプッシュ",
      id: "ShoulderPress",
      value: "/ShoulderPress",
      icon:(<img height="50" src={ShoulderPressIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "リングアゲサゲ",
      id: "SeatedRingRaise",
      value: "/SeatedRingRaise",
      icon:(<img height="50" src={SeatedRingRaiseIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "マエニプッシュ",
      id: "SeatedForwardPress",
      value: "/SeatedForwardPress",
      icon:(<img height="50" src={SeatedForwardPressIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "ロシアンツイスト",
      id: "RussianTwist",
      value: "/RussianTwist",
      icon:(<img height="50" src={RussianTwistIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "アゲサゲコンボ",
      id: "RingRaiseCombo",
      value: "/RingRaiseCombo",
      icon:(<img height="50" src={RingRaiseComboIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "プランク",
      id: "Plank",
      value: "/Plank",
      icon:(<img height="50" src={PlankIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "ベントオーバー",
      id: "PendulumBend",
      value: "/PendulumBend",
      icon:(<img height="50" src={PendulumBendIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バンザイスクワット",
      id: "OverheadSquat",
      value: "/OverheadSquat",
      icon:(<img height="50" src={OverheadSquatIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バンザイサイドベント",
      id: "OverheadSideBend",
      value: "/OverheadSideBend",
      icon:(<img height="50" src={OverheadSideBendIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バンザイプッシュ",
      id: "OverheadPress",
      value: "/OverheadPress",
      icon:(<img height="50" src={OverheadPressIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バンザイツイスト",
      id: "OverheadLungeTwist",
      value: "/OverheadLungeTwist",
      icon:(<img height="50" src={OverheadLungeTwistIcon} alt="icon"></img>),
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

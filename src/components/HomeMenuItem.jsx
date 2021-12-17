import React from "react"
import { makeStyles,Box,Paper} from "@material-ui/core"
import { useDispatch } from "react-redux"
import { push } from "connected-react-router"
import BackPressIcon from "../icons/presin-tras-la-nucapng.png"
import BowPressIcon from '../icons/arco-ring-conpng.png'
import FlutterKickIcon from '../icons/piernas-alternas-arribapng.png'
import FrontPressIcon from '../icons/presin-abajopng.png'
import KneeLiftComboIcon from "../icons/rodillas-arriba-y-sentadillapng.png"
import kneeLiftIcon from "../icons/rodillas-arribapng.png"
import KneetoChestIcon from "../icons/rodillas-al-pechopng.png"
import LegScissorsIcon from "../icons/tijeras-con-crucepng.png"
import LegRaiseIcon from "../icons/piernas-juntas-arribapng.png"
import MountainClimberIcon from "../icons/el-escaladorpng.png"
import HipLiftIcon from "../icons/caderas-arribapng.png"
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


const useStyles = makeStyles((theme)=> ({
  root: {
    backgroundColor: "#f4f4f4",
    position: "relative",
    bottom: -10,
    left: 0,
    right: 0,
    margin: "0 auto",
    paddingTop: 15,
    width: "90%",
    [theme.breakpoints.up('xl')]:{
      height: 430,
      transition: theme.transitions.create(
      ['bottom'],
      {duration:theme.transitions.duration.complex}
    ),
    "&:hover": {
      bottom: 150
    },
  },
  },
  cards: {
    display: "inline-block",
    cursor: "pointer",
    margin: 5,
    height: 130,
    width: 120,
    [theme.breakpoints.up('xl')]: {
      display: "inline",
      height: "auto",
      width: "auto",
    }
  },
  card: {
    position: "relative",
    top: -40,
    width: 110,
    height: 110,
    margin: 5,
    zIndex: 2,
    [theme.breakpoints.up('xl')]: {
      width: 70,
      height: 70,
      top: 0,
      transition: theme.transitions.create(
        ['width','height','margin'],
        {duration:theme.transitions.duration.complex}
      ),
      "&:hover": {
        width: 100,
        height: 100,
        margin: -10,
      },
    },
    [theme.breakpoints.down('xl')]: {
    }
  },
  label: {
    display: "table-cell",
    position: "relative",
    top: 90,
    backgroundColor: "#ff8e00",
    border: "1px solid",
    height: 40,
    width: 120,
    color: "#fff",
    fontWeight: 600,
    zIndex: 3,
    verticalAlign: "middle",
    [theme.breakpoints.up('xl')]:{
      display:'none'
    },
  }
}))

export const HomeMenuItem = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const selectwork = (e, path) => {
    dispatch(push(path))

  }
  const menus = [
    {
      func: selectwork,
      label: "ウシロプッシュ",
      id: "BackPress",
      value: "/BackPress",
      icon: (<img className={classes.card} src={BackPressIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "リングアロー",
      id: "BowPress",
      value: "/BowPress",
      icon:(<img className={classes.card} src={BowPressIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "バタバタレッグ",
      id: "FlutterKick",
      value: "/FlutterKick",
      icon:(<img className={classes.card} src={FlutterKickIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "サゲテプッシュ",
      id: "FrontPress",
      value: "/FrontPress",
      icon:(<img className={classes.card} src={FrontPressIcon} alt="icon"></img>),
    },
    { 
      func: selectwork,
      label: "ヒップリフト",
      id: "HipLift",
      value: "/HipLift",
      icon:(<img className={classes.card} src={HipLiftIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "モモアゲコンボ",
      id: "KneeLiftCombo",
      value: "/KneeLiftCombo",
      icon:(<img className={classes.card} src={KneeLiftComboIcon} alt="icon"></img>),
      
    },
    {
      func: selectwork,
      label: "モモアゲアゲ",
      id: "KneeLift",
      value: "/KneeLift",
      icon:(<img className={classes.card} src={kneeLiftIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "ニートゥーチェスト",
      id: "KneetoChest",
      value: "/KneetoChest",
      icon:(<img className={classes.card} src={KneetoChestIcon} alt="icon"></img>),
    },
    { 
      func: selectwork,
      label: "レッグレイズ",
      id: "LegRaise",
      value: "/LegRaise",
      icon:(<img className={classes.card} src={LegRaiseIcon} alt="icon"></img>),
    }, 
    {
      func: selectwork,
      label: "ハサミレッグ",
      id: "LegScissors",
      value: "/LegScissors",
      icon:(<img className={classes.card} src={LegScissorsIcon} alt="icon"></img>),
    },
    {
      func: selectwork,
      label: "マウンテンクライマー",
      id: "MountainClimber",
      value: "/MountainClimber",
      icon:(<img className={classes.card} src={MountainClimberIcon} alt="icon"></img>),
    },
  {
      func: selectwork,
      label: "アシパカパカ",
      id: "OpenCloseLegRaise",
      value: "/OpenCloseLegRaise",
      icon:(<img className={classes.card} src={OpenCloseLegRaiseIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "グルグルアーム",
    id: "OverheadArmSpin",
    value: "/OverheadArmSpin",
    icon:(<img className={classes.card} src={OverheadArmSpinIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "アームツイスト",
    id: "OverheadArmTwist",
    value: "/OverheadArmTwist",
    icon:(<img className={classes.card} src={OverheadArmTwistIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "バンザイモーニング",
    id: "OverheadBend",
    value: "/OverheadBend",
    icon:(<img className={classes.card} src={OverheadBendIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "バンザイコシフリ",
    id: "OverheadHipShake",
    value: "/OverheadHipShake",
    icon:(<img className={classes.card} src={OverheadHipShakeIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "ワイドスクワット",
    id: "WideSquat",
    value: "/WideSquat",
    icon:(<img className={classes.card} src={WideSquatIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "モモデプッシュ",
    id: "ThighPress",
    value: "/ThighPress",
    icon:(<img className={classes.card} src={ThighPressIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "トライセプス",
    id: "TricepKickback",
    value: "/TricepKickback",
    icon:(<img className={classes.card} src={TricepKickbackIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "スクワット",
    id: "Squat",
    value: "/Squat",
    icon:(<img className={classes.card} src={SquatIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "スワイショウ",
    id: "StandingTwist",
    value: "/StandingTwist",
    icon:(<img className={classes.card} src={StandingTwistIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "サイドステップ",
    id: "SideStep",
    value: "/SideStep",
    icon:(<img className={classes.card} src={SideStepIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "カタニプッシュ",
    id: "ShoulderPress",
    value: "/ShoulderPress",
    icon:(<img className={classes.card} src={ShoulderPressIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "リングアゲサゲ",
    id: "SeatedRingRaise",
    value: "/SeatedRingRaise",
    icon:(<img className={classes.card} src={SeatedRingRaiseIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "マエニプッシュ",
    id: "SeatedForwardPress",
    value: "/SeatedForwardPress",
    icon:(<img className={classes.card} src={SeatedForwardPressIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "ロシアンツイスト",
    id: "RussianTwist",
    value: "/RussianTwist",
    icon:(<img className={classes.card} src={RussianTwistIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "アゲサゲコンボ",
    id: "RingRaiseCombo",
    value: "/RingRaiseCombo",
    icon:(<img className={classes.card} src={RingRaiseComboIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "プランク",
    id: "Plank",
    value: "/Plank",
    icon:(<img className={classes.card} src={PlankIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "ベントオーバー",
    id: "PendulumBend",
    value: "/PendulumBend",
    icon:(<img className={classes.card} src={PendulumBendIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "バンザイスクワット",
    id: "OverheadSquat",
    value: "/OverheadSquat",
    icon:(<img className={classes.card} src={OverheadSquatIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "バンザイサイドベント",
    id: "OverheadSideBend",
    value: "/OverheadSideBend",
    icon:(<img className={classes.card} src={OverheadSideBendIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "バンザイプッシュ",
    id: "OverheadPress",
    value: "/OverheadPress",
    icon:(<img className={classes.card} src={OverheadPressIcon} alt="icon"></img>),
  },
  {
    func: selectwork,
    label: "バンザイツイスト",
    id: "OverheadLungeTwist",
    value: "/OverheadLungeTwist",
    icon:(<img className={classes.card} src={OverheadLungeTwistIcon} alt="icon"></img>),
  },
  ]
  return(
      <Paper className={classes.root} style={{bottom:props.bottom,height:props.height}}>
        {menus.map((menu)=> (
          <Box
          key={menu.id}
          onClick={(e)=>menu.func(e, menu.value)}
          className={classes.cards}
          title={menu.label}
          >
              <span className={classes.label}>{menu.label}</span>
              {menu.icon}
          </Box>
        ))}
      </Paper>
  )
}
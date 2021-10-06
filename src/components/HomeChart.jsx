import React,{useState} from "react"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar
} from "recharts";
import { useSelector } from "react-redux";
import {
  getbackpress,
  getbowpress,
  getflutterkick,
  getfrontpress,
  gethiplift,
  getkneelift,
  getkneeliftcombo,
  getkneetochest,
  getlegraise,
  getlegscissors,
  getmountainclimber,
  getopencloselegraise,
  getoverheadarmspin,
  getoverheadarmtwist,
  getoverheadbend,
  getoverheadhipshake,
  getoverheadlungetwist,
  getoverheadpress,
  getoverheadsidebend,
  getoverheadsquat,
  getpendulumbend,
  getringraisecombo,
  getplank,
  getrussiantwist,
  getseatedforwardpress,
  getseatedringraise,
  getshoulderpress,
  getsidestep,
  getsquat,
  getstandingtwist,
  getthighpress,
  gettricepkickback,
  getwidesquat,
} from "../reducks/users/selectors";
import { makeStyles,Switch, Typography} from "@material-ui/core";

const  useStyles= makeStyles((theme) => ({
  chartcontent: {
    margin:"0 auto",
    marginTop:"9vh",
    marginBottom:"2vh",
    width:"95vw",
    height:"50vh",
    [theme.breakpoints.down('md')]: {
      marginTop:'5vh',
      marginBottom:'5vh'
    }
  },
  swich:{
    position:"relative",
    top:"10vh",
    left:"60vw",
    width:400,
    "&:span":{
      fontSize:1
    },
    [theme.breakpoints.down('md')]:{
      top:"59vh",
      left:"2vw",
    }
  }
}))

export const HomeChart = () => {
  const classes = useStyles()
  const [toggle,setToggle]= useState(false)
  const handle = e => {
    setToggle(prev=>!prev)
  }


  const selector = useSelector((state) => state)
  const backpress = getbackpress(selector)
  const bowpress = getbowpress(selector)
  const flutterkick = getflutterkick(selector)
  const frontpress = getfrontpress(selector)
  const hiplift =gethiplift(selector)
  const kneelift =getkneelift(selector)
  const kneeliftcombo =getkneeliftcombo(selector)
  const legraise=getlegraise(selector)
  const legscissors =getlegscissors(selector)
  const kneetochest =getkneetochest(selector)
  const mountainclimber =getmountainclimber(selector)

  const opencloselegraise =getopencloselegraise(selector)
  const overheadarmspin =getoverheadarmspin(selector)
  const overheadarmtwist =getoverheadarmtwist(selector)
  const overheadbend =getoverheadbend(selector)
  const overheadhipshake =getoverheadhipshake(selector)
  const overheadlungetwist =getoverheadlungetwist(selector)
  const overheadpress =getoverheadpress(selector)
  const overheadsidebend =getoverheadsidebend(selector)
  const overheadsquat =getoverheadsquat(selector)
  const pendulumbend =getpendulumbend(selector)
  const ringraisecombo =getringraisecombo(selector)
  const plank =getplank(selector)
  const russiantwist =getrussiantwist(selector)
  const seatedforwardpress =getseatedforwardpress(selector)
  const seatedringraise =getseatedringraise(selector)
  const shoulderpress =getshoulderpress(selector)
  const sidestep =getsidestep(selector)
  const squat =getsquat(selector)
  const standingtwist =getstandingtwist(selector)
  const thighpress =getthighpress(selector)
  const tricepkickback =gettricepkickback(selector)
  const widesquat =getwidesquat(selector)

  
  const date = new Date();
  const year = date.getFullYear();
  const tomonth = date.getMonth() + 1;
  const today = year + "/" + tomonth + "/" + date.getDate();

  var backpressTotalCount = 0
  var bowpressTotalCount = 0
  var flutterkickTotalCount = 0
  var frontpressTotalCount = 0
  var hipliftTotalCount = 0
  var kneeliftTotalCount =0
  var kneeliftcomboTotalCount = 0
  var kneetochestTotalCount = 0
  var legraiseTotalCount = 0
  var legscissorsTotalCount = 0
  var mountainclimberTotalCount = 0
  var opencloselegraiseTotalCount = 0
  var overheadarmspinTotalCount = 0
  var overheadarmtwistTotalCount = 0
  var overheadbendTotalCount = 0
  var overheadhipshakeTotalCount = 0
  var overheadlungetwistTotalCount = 0
  var overheadpressTotalCount = 0
  var overheadsquatTotalCount = 0
  var overheadsidebendTotalCount = 0
  var pendulumbendTotalCount = 0
  var ringraisecomboTotalCount = 0
  var plankTotalCount = 0
  var russiantwistTotalCount = 0
  var seatedforwardpressTotalCount = 0
  var seatedringraiseTotalCount = 0
  var shoulderpressTotalCount = 0
  var sidestepTotalCount = 0
  var squatTotalCount = 0
  var standingtwistTotalCount = 0
  var thighpressTotalCount = 0
  var tricepkickbackTotalCount = 0
  var widesquatTotalCount = 0

  var backpressTodayCount = 0
  var bowpressTodayCount = 0
  var flutterkickTodayCount = 0
  var frontpressTodayCount = 0
  var hipliftTodayCount = 0
  var kneeliftTodayCount =0
  var kneeliftcomboTodayCount = 0
  var kneetochestTodayCount = 0
  var legraiseTodayCount = 0
  var legscissorsTodayCount = 0
  var mountainclimberTodayCount = 0
  var opencloselegraiseTodayCount = 0
  var overheadarmspinTodayCount = 0
  var overheadarmtwistTodayCount = 0
  var overheadbendTodayCount = 0
  var overheadhipshakeTodayCount = 0
  var overheadlungetwistTodayCount = 0
  var overheadpressTodayCount = 0
  var overheadsquatTodayCount = 0
  var overheadsidebendTodayCount = 0
  var pendulumbendTodayCount = 0
  var ringraisecomboTodayCount = 0
  var plankTodayCount = 0
  var russiantwistTodayCount = 0
  var seatedforwardpressTodayCount = 0
  var seatedringraiseTodayCount = 0
  var shoulderpressTodayCount = 0
  var sidestepTodayCount = 0
  var squatTodayCount = 0
  var standingtwistTodayCount = 0
  var thighpressTodayCount = 0
  var tricepkickbackTodayCount = 0
  var widesquatTodayCount = 0

    //今日行なったワークアウト（回数）フィルター処理
  const backpressfilledtoday = backpress.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const bowpressfilledtoday = bowpress.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const flutterkickfilledtoday = flutterkick.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const frontpressfilledtoday = frontpress.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const hipliftfilledtoday = hiplift.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const kneeliftfilledtoday = kneelift.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const kneeliftcombofilledtoday = kneeliftcombo.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const kneetochestfilledtoday = kneetochest.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const legraisefilledtoday = legraise.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const legscissorsfilledtoday = legscissors.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const mountainclimberfilledtoday = mountainclimber.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const opencloselegraisefilledtoday = opencloselegraise.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadarmspinfilledtoday = overheadarmspin.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadarmtwistfilledtoday = overheadarmtwist.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadbendfilledtoday = overheadbend.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadhipshakefilledtoday = overheadhipshake.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadlungetwistfilledtoday = overheadlungetwist.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadpressfilledtoday = overheadpress.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadsidebendfilledtoday = overheadsidebend.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const overheadsquatfilledtoday = overheadsquat.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const pendulumbendfilledtoday = pendulumbend.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const ringraisecombofilledtoday = ringraisecombo.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const plankfilledtoday = plank.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const russiantwistfilledtoday = russiantwist.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const seatedforwardpressfilledtoday = seatedforwardpress.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const seatedringraisefilledtoday = seatedringraise.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const shoulderpressfilledtoday = shoulderpress.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const sidestepfilledtoday = sidestep.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const squatfilledtoday = squat.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const standingtwistfilledtoday = standingtwist.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const thighpressfilledtoday = thighpress.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const tricepkickbackfilledtoday = tricepkickback.filter((filledtoday)=>{
    return filledtoday.day === today
  })
  const widesquatfilledtoday = widesquat.filter((filledtoday)=>{
    return filledtoday.day === today
  })

  
  //今日行なったワークアウト（回数）for処理
  for(let i=0;i<backpressfilledtoday.length;i++){
    backpressTodayCount=backpressTodayCount+backpress[i].count
  }
  for(let i=0;i<bowpressfilledtoday.length;i++){
    bowpressTodayCount = bowpressTodayCount + bowpress[i].count
  }
  for(let i=0;i<flutterkickfilledtoday.length;i++){
    flutterkickTodayCount = flutterkickTodayCount + flutterkick[i].count
  }
  for(let i=0;i<frontpressfilledtoday.length;i++){
    frontpressTodayCount = frontpressTodayCount + frontpress[i].count
  }
  for(let i=0;i<hipliftfilledtoday.length;i++){
    hipliftTodayCount = hipliftTodayCount + hiplift[i].count
  }
  for(let i=0;i<kneeliftfilledtoday.length;i++){
    kneeliftTodayCount = kneeliftTodayCount + kneelift[i].count
  }
  for(let i=0;i<kneeliftcombofilledtoday.length;i++){
    kneeliftcomboTodayCount = kneeliftcomboTodayCount + kneeliftcombo[i].count
  }
  for(let i=0;i<kneetochestfilledtoday.length;i++){
    kneetochestTodayCount = kneetochestTodayCount + kneetochest[i].count
  }
  for(let i=0;i<legraisefilledtoday.length;i++){
    legraiseTodayCount = legraiseTodayCount + legraise[i].count
  }
  for(let i=0;i<legscissorsfilledtoday.length;i++){
    legscissorsTodayCount = legscissorsTodayCount + legscissors[i].count
  }
  for(let i=0;i<mountainclimberfilledtoday.length;i++){
    mountainclimberTodayCount = mountainclimberTodayCount + mountainclimber[i].count
  }
  for(let i=0;i<opencloselegraisefilledtoday.length;i++){
    opencloselegraiseTodayCount = opencloselegraiseTodayCount + opencloselegraise[i].count
  }
  for(let i=0;i<overheadarmspinfilledtoday.length;i++){
    overheadarmspinTodayCount = overheadarmspinTodayCount + overheadarmspin[i].count
  }
  for(let i=0;i<overheadarmtwistfilledtoday.length;i++){
    overheadarmtwistTodayCount = overheadarmtwistTodayCount + overheadarmtwist[i].count
  }
  for(let i=0;i<overheadbendfilledtoday.length;i++){
    overheadbendTodayCount = overheadbendTodayCount + overheadbend[i].count
  }
  for(let i=0;i<overheadhipshakefilledtoday.length;i++){
    overheadhipshakeTodayCount = overheadhipshakeTodayCount + overheadhipshake[i].count
  }
  for(let i=0;i<overheadlungetwistfilledtoday.length;i++){
    overheadlungetwistTodayCount = overheadlungetwistTodayCount + overheadlungetwist[i].count
  }
  for(let i=0;i<overheadpressfilledtoday.length;i++){
    overheadpressTodayCount = overheadpressTodayCount + overheadpress[i].count
  }
  for(let i=0;i<overheadsidebendfilledtoday.length;i++){
    overheadsidebendTodayCount = overheadsidebendTodayCount + overheadsidebend[i].count
  }
  for(let i=0;i<overheadsquatfilledtoday.length;i++){
    overheadsquatTodayCount = overheadsquatTodayCount + overheadsquat[i].count
  }
  for(let i=0;i<pendulumbendfilledtoday.length;i++){
    pendulumbendTodayCount = pendulumbendTodayCount + pendulumbend[i].count
  }
  for(let i=0;i<ringraisecombofilledtoday.length;i++){
    ringraisecomboTodayCount = ringraisecomboTodayCount + ringraisecombo[i].count
  }
  for(let i=0;i<plankfilledtoday.length;i++){
    plankTodayCount = plankTodayCount + plank[i].count
  }
  for(let i=0;i<russiantwistfilledtoday.length;i++){
    russiantwistTodayCount = russiantwistTodayCount + russiantwist[i].count
  }
  for(let i=0;i<seatedforwardpressfilledtoday.length;i++){
    seatedforwardpressTodayCount = seatedforwardpressTodayCount + seatedforwardpress[i].count
  }
  for(let i=0;i<seatedringraisefilledtoday.length;i++){
    seatedringraiseTodayCount = seatedringraiseTodayCount + seatedringraise[i].count
  }
  for(let i=0;i<shoulderpressfilledtoday.length;i++){
    shoulderpressTodayCount = shoulderpressTodayCount + shoulderpress[i].count
  }
  for(let i=0;i<sidestepfilledtoday.length;i++){
    sidestepTodayCount = sidestepTodayCount + sidestep[i].count
  }
  for(let i=0;i<squatfilledtoday.length;i++){
    squatTodayCount = squatTodayCount + squat[i].count
  }
  for(let i=0;i<standingtwistfilledtoday.length;i++){
    standingtwistTodayCount = standingtwistTodayCount + standingtwist[i].count
  }
  for(let i=0;i<thighpressfilledtoday.length;i++){
    thighpressTodayCount = thighpressTodayCount + thighpress[i].count
  }
  for(let i=0;i<tricepkickbackfilledtoday.length;i++){
    tricepkickbackTodayCount = tricepkickbackTodayCount + tricepkickback[i].count
  }
  for(let i=0;i<widesquatfilledtoday.length;i++){
    widesquatTodayCount = widesquatTodayCount + widesquat[i].count
  }


    //総合行なったワークアウト（回数）for処理
  for(let i=0;i<backpress.length;i++){
    backpressTotalCount = backpressTotalCount + backpress[i].count
  }
  for(let i=0;i<bowpress.length;i++){
    bowpressTotalCount = bowpressTotalCount + bowpress[i].count
  }
  for(let i=0;i<flutterkick.length;i++){
    flutterkickTotalCount = flutterkickTotalCount + flutterkick[i].count
  }
  for(let i=0;i<frontpress.length;i++){
    frontpressTotalCount = frontpressTotalCount + frontpress[i].count
  }
  for(let i=0;i<hiplift.length;i++){
    hipliftTotalCount = hipliftTotalCount + hiplift[i].count
  }
  for(let i=0;i<kneelift.length;i++){
    kneeliftTotalCount = kneeliftTotalCount + kneelift[i].count
  }
  for(let i=0;i<kneeliftcombo.length;i++){
    kneeliftcomboTotalCount = kneeliftcomboTotalCount + kneeliftcombo[i].count
  }
  for(let i=0;i<kneetochest.length;i++){
    kneetochestTotalCount = kneetochestTotalCount + kneetochest[i].count
  }
  for(let i=0;i<legraise.length;i++){
    legraiseTotalCount = legraiseTotalCount + legraise[i].count
  }
  for(let i=0;i<legscissors.length;i++){
    legscissorsTotalCount = legscissorsTotalCount + legscissors[i].count
  }
  for(let i=0;i<mountainclimber.length;i++){
    mountainclimberTotalCount = mountainclimberTotalCount + mountainclimber[i].count
  }
  for(let i=0;i<opencloselegraise.length;i++){
    opencloselegraiseTotalCount = opencloselegraiseTotalCount + opencloselegraise[i].count
  }
  for(let i=0;i<overheadarmspin.length;i++){
    overheadarmspinTotalCount = overheadarmspinTotalCount + overheadarmspin[i].count
  }
  for(let i=0;i<overheadarmtwist.length;i++){
    overheadarmtwistTotalCount = overheadarmtwistTotalCount + overheadarmtwist[i].count
        }
  for(let i=0;i<overheadbend.length;i++){
    overheadbendTotalCount = overheadbendTotalCount + overheadbend[i].count
  }
  for(let i=0;i<overheadhipshake.length;i++){
    overheadhipshakeTotalCount = overheadhipshakeTotalCount + overheadhipshake[i].count
  }
  for(let i=0;i<overheadlungetwist.length;i++){
    overheadlungetwistTotalCount = overheadlungetwistTotalCount + overheadlungetwist[i].count
  }
  for(let i=0;i<overheadpress.length;i++){
    overheadpressTotalCount = overheadpressTotalCount + overheadpress[i].count
  }
  for(let i=0;i<overheadsidebend.length;i++){
    overheadsidebendTotalCount = overheadsidebendTotalCount + overheadsidebend[i].count
  }
  for(let i=0;i<overheadsquat.length;i++){
    overheadsquatTotalCount = overheadsquatTotalCount + overheadsquat[i].count
  }
  for(let i=0;i<pendulumbend.length;i++){
    pendulumbendTotalCount = pendulumbendTotalCount + pendulumbend[i].count
  }
  for(let i=0;i<ringraisecombo.length;i++){
    ringraisecomboTotalCount = ringraisecomboTotalCount + ringraisecombo[i].count
  }
  for(let i=0;i<plank.length;i++){
    plankTotalCount = plankTotalCount + plank[i].count
  }
  for(let i=0;i<russiantwist.length;i++){
    russiantwistTotalCount = russiantwistTotalCount + russiantwist[i].count
  }
  for(let i=0;i<seatedforwardpress.length;i++){
    seatedforwardpressTotalCount = seatedforwardpressTotalCount + seatedforwardpress[i].count
  }
  for(let i=0;i<seatedringraise.length;i++){
    seatedringraiseTotalCount = seatedringraiseTotalCount + seatedringraise[i].count
  }
  for(let i=0;i<shoulderpress.length;i++){
    shoulderpressTotalCount = shoulderpressTotalCount + shoulderpress[i].count
  }
  for(let i=0;i<sidestep.length;i++){
    sidestepTotalCount = sidestepTotalCount + sidestep[i].count
  }
  for(let i=0;i<squat.length;i++){
    squatTotalCount = squatTotalCount + squat[i].count
  }
  for(let i=0;i<standingtwist.length;i++){
    standingtwistTotalCount = standingtwistTotalCount + standingtwist[i].count
  }
  for(let i=0;i<thighpress.length;i++){
    thighpressTotalCount = thighpressTotalCount + thighpress[i].count
  }
  for(let i=0;i<tricepkickback.length;i++){
    tricepkickbackTotalCount = tricepkickbackTotalCount + tricepkickback[i].count
  }
  for(let i=0;i<widesquat.length;i++){
    widesquatTotalCount = widesquatTotalCount + widesquat[i].count
  }

  //総合ワークアウト回数
  const data = [
    {
    work:"BackPress",
    Count:backpressTotalCount,
  },{
    work:"BowPress",
    Count:bowpressTotalCount,
  },{
    work:"FlutterKick",
    Count:flutterkickTotalCount,
  },{
    work:"FrontPress",
    Count:frontpressTotalCount,
  },{
    work:"HipLift",
    Count:hipliftTotalCount,
  },{
    work:"KneeLift",
    Count:kneeliftTotalCount,
  },{
    work:"KneeLiftCombo",
    Count:kneeliftcomboTotalCount,
  },{
    work:"KneetoChest",
    Count:kneetochestTotalCount,
  },{
    work:"LegRaise",
    Count:legraiseTotalCount,
  },{
    work:"LegScissors",
    Count:legscissorsTotalCount,
  },
    {
    work:"MountainClimber",
    Count:mountainclimberTotalCount,
  },
  {
    work:"OpenCloseLegRaise",
    Count:opencloselegraiseTotalCount,
  },
  {
    work:"OverheadArmSpin",
    Count:overheadarmspinTotalCount,
  },
  {
    work:"OverheadArmTwist",
    Count:overheadarmtwistTotalCount,
  },
  {
    work:"OverheadBend",
    Count:overheadbendTotalCount,
  },
  {
    work:"OverheadHipShake",
    Count:overheadhipshakeTotalCount,
  },
  {
    work:"OverheadLungeTwist",
    Count:overheadlungetwistTotalCount,
  },
  {
    work:"OverheadPress",
    Count:overheadpressTotalCount,
  },
  {
    work:"OverheadSideBend",
    Count:overheadsidebendTotalCount,
  },
  {
    work:"OverheadSquat",
    Count:overheadsquatTotalCount,
  },
  {
    work:"PendulumBend",
    Count:pendulumbendTotalCount,
  },
  {
    work:"RingRaiseCombo",
    Count:ringraisecomboTotalCount,
  },
  {
    work:"Plank",
    Count:plankTotalCount,
  },
  {
    work:"RussianTwist",
    Count:russiantwistTotalCount,
  },
  {
    work:"MountainClimber",
    Count:mountainclimberTotalCount,
  },
  {
    work:"SeatedForwardPress",
    Count:seatedforwardpressTotalCount,
  },
  {
    work:"SeatedRingRaise",
    Count:seatedringraiseTotalCount,
  },
  {
    work:"ShoulderPress",
    Count:shoulderpressTotalCount,
  },
  {
    work:"SideStep",
    Count:sidestepTotalCount,
  },
  {
    work:"Squat",
    Count:squatTotalCount,
  },
  {
    work:"StandingTwist",
    Count:standingtwistTotalCount,
  },
  {
    work:"thighpress",
    Count:thighpressTotalCount,
  },
  {
    work:"ThighPress",
    Count:thighpressTotalCount,
  },
  {
    work:"TricepKickback",
    Count:tricepkickbackTotalCount,
  },
  {
    work:"WideSquat",
    Count:widesquatTotalCount,
  },

  ]
    //今日行ったワークアウト回数
  const todaydata = [
    {
    work:"BackPress",
    Count:backpressTodayCount,
  },{
    work:"BowPress",
    Count:bowpressTodayCount,
  },{
    work:"FlutterKick",
    Count:flutterkickTodayCount,
  },{
    work:"FrontPress",
    Count:frontpressTodayCount,
  },{
    work:"HipLift",
    Count:hipliftTodayCount,
  },{
    work:"KneeLift",
    Count:kneeliftTodayCount,
  },{
    work:"KneeLiftCombo",
    Count:kneeliftcomboTodayCount,
  },{
    work:"KneetoChest",
    Count:kneetochestTodayCount,
  },{
    work:"LegRaise",
    Count:legraiseTodayCount,
  },{
    work:"LegScissors",
    Count:legscissorsTodayCount,
  },
    {
    work:"MountainClimber",
    Count:mountainclimberTodayCount,
  },
  {
    work:"OpenCloseLegRaise",
    Count:opencloselegraiseTodayCount,
  },
  {
    work:"OverheadArmSpin",
    Count:overheadarmspinTodayCount,
  },
  {
    work:"OverheadArmTwist",
    Count:overheadarmtwistTodayCount,
  },
  {
    work:"OverheadBend",
    Count:overheadbendTodayCount,
  },
  {
    work:"OverheadHipShake",
    Count:overheadhipshakeTodayCount,
  },
  {
    work:"OverheadLungeTwist",
    Count:overheadlungetwistTodayCount,
  },
  {
    work:"OverheadPress",
    Count:overheadpressTodayCount,
  },
  {
    work:"OverheadSideBend",
    Count:overheadsidebendTodayCount,
  },
  {
    work:"OverheadSquat",
    Count:overheadsquatTodayCount,
  },
  {
    work:"PendulumBend",
    Count:pendulumbendTodayCount,
  },
  {
    work:"RingRaiseCombo",
    Count:ringraisecomboTodayCount,
  },
  {
    work:"Plank",
    Count:plankTodayCount,
  },
  {
    work:"RussianTwist",
    Count:russiantwistTodayCount,
  },
  {
    work:"MountainClimber",
    Count:mountainclimberTodayCount,
  },
  {
    work:"SeatedForwardPress",
    Count:seatedforwardpressTodayCount,
  },
  {
    work:"SeatedRingRaise",
    Count:seatedringraiseTodayCount,
  },
  {
    work:"ShoulderPress",
    Count:shoulderpressTodayCount,
  },
  {
    work:"SideStep",
    Count:sidestepTodayCount,
  },
  {
    work:"Squat",
    Count:squatTodayCount,
  },
  {
    work:"StandingTwist",
    Count:standingtwistTodayCount,
  },
  {
    work:"thighpress",
    Count:thighpressTodayCount,
  },
  {
    work:"ThighPress",
    Count:thighpressTodayCount,
  },
  {
    work:"TricepKickback",
    Count:tricepkickbackTodayCount,
  },
  {
    work:"WideSquat",
    Count:widesquatTodayCount,
  },

  ]
  return (
    <div className={classes.root}>
    <div className={classes.swich}>
      <Typography component="span">本日のワークアウト</Typography>
      <Switch checked={toggle} onChange={handle}/>
      <Typography component="span">総合のワークアウト</Typography>
    </div>
    <div className={classes.chartcontent}>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart data={toggle?data:todaydata} margin={{left:10,right:50}}>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey="work" fontSize={12} />
        
        <YAxis />
        <Tooltip />
        <Bar dataKey="Count" fill="#ff8e00" />
      </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};
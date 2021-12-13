import React,{ useState } from "react"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar
} from "recharts"
import { useSelector } from "react-redux"
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
} from "../reducks/users/selectors"
import { makeStyles, Button} from "@material-ui/core"

const useStyles= makeStyles((theme) => ({
  chartcontent: {
    margin: "0 auto",
    marginTop: "9vh",
    marginBottom: "2vh",
    width: "95vw",
    height: "50vh",
    [theme.breakpoints.down('md')]: {
      marginTop: "5vh",
      marginBottom: "5vh"
    }
  },
  swich: {
    position: "relative",
    top: "10vh",
    left: "65vw",
    width: 400,
    [theme.breakpoints.down('md')]: {
      top: "5vh",
      left: 0,
      right:0,
      margin:"0 auto"
    }
  },
  button: {
    position: "relative",
    top:-20,
    left: 0,
    right: 0,
    backgroundColor: "#ff8e00",
    color: "#fff",
    fontSize: 16,
    height: 42,
    fontWeight: 400,
    borderRadius: 0,
    padding: 15,
    letterSpacing: 2,
    border: "2px solid",
    "&:hover": {
      backgroundColor: "#ff8e00",
    },
    [theme.breakpoints.down('md')]: {
    },
  },
  buttonFalse: {
    position: "relative",
    top: -20,
    left: 0,
    right: 0,
    backgroundColor: "#e73e0e",
    color: "#fff",
    fontSize: 16,
    height: 42,
    fontWeight: 400,
    borderRadius: 0,
    padding: 15,
    letterSpacing: 2,
    border: "2px solid",
    opacity: 0.5,
    "&:hover": {
      backgroundColor: "#ff8e00",
    },
    [theme.breakpoints.down('md')]: {
    },
  }
}))

export const HomeChart = () => {
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)
  const TodayHandle = () => setToggle(false)
  const CopHandle = () => setToggle(true)


  const selector = useSelector((state) => state)

  const backpress = getbackpress(selector)
  const bowpress = getbowpress(selector)
  const flutterkick = getflutterkick(selector)
  const frontpress = getfrontpress(selector)
  const hiplift = gethiplift(selector)
  const kneelift = getkneelift(selector)
  const kneeliftcombo = getkneeliftcombo(selector)
  const legraise= getlegraise(selector)
  const legscissors = getlegscissors(selector)
  const kneetochest = getkneetochest(selector)
  const mountainclimber = getmountainclimber(selector)
  const opencloselegraise = getopencloselegraise(selector)
  const overheadarmspin = getoverheadarmspin(selector)
  const overheadarmtwist = getoverheadarmtwist(selector)
  const overheadbend = getoverheadbend(selector)
  const overheadhipshake = getoverheadhipshake(selector)
  const overheadlungetwist = getoverheadlungetwist(selector)
  const overheadpress = getoverheadpress(selector)
  const overheadsidebend = getoverheadsidebend(selector)
  const overheadsquat = getoverheadsquat(selector)
  const pendulumbend = getpendulumbend(selector)
  const ringraisecombo = getringraisecombo(selector)
  const plank = getplank(selector)
  const russiantwist = getrussiantwist(selector)
  const seatedforwardpress = getseatedforwardpress(selector)
  const seatedringraise = getseatedringraise(selector)
  const shoulderpress = getshoulderpress(selector)
  const sidestep = getsidestep(selector)
  const squat = getsquat(selector)
  const standingtwist = getstandingtwist(selector)
  const thighpress = getthighpress(selector)
  const tricepkickback = gettricepkickback(selector)
  const widesquat = getwidesquat(selector)
  
  //今日の日付取得、YYYYMMDD型に変換
  const date = new Date()
  const year = date.getFullYear()
  const tomonthNm = date.getMonth() + 1
  const tomonthSt = String(tomonthNm).length<2?('0'+tomonthNm):String(tomonthNm)
  const todayNm = date.getDate()
  const todaySt = String(todayNm).length<2?('0'+todayNm):String(todayNm)
  const today = Number("" + year + tomonthSt  + todaySt)
  
  //トータルカウント初期化
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

    //今日のカウント初期化
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
  
  //日付の最適化 String型YYYY/MM/DD => Number型YYYYMMDD　へ変換
  if(typeof(backpress[0].day) === "string"){
    Object.keys(backpress).forEach(a=>{
      backpress[a].day = Number((backpress[a].day).replace(/\//g,""))
  })
  }
  if(typeof(bowpress[0].day) === "string"){
    Object.keys(bowpress).forEach(a=>{
      bowpress[a].day = Number((bowpress[a].day).replace(/\//g,""))
  })
  }
  if(typeof(flutterkick[0].day) === "string"){
    Object.keys(flutterkick).forEach(a=>{
      flutterkick[a].day = Number((flutterkick[a].day).replace(/\//g,""))
  })
  }
  if(typeof(frontpress[0].day) === "string"){
    Object.keys(frontpress).forEach(a=>{
      frontpress[a].day = Number((frontpress[a].day).replace(/\//g,""))
  })
  }
  if(typeof(hiplift[0].day) === "string"){
    Object.keys(hiplift).forEach(a=>{
      hiplift[a].day = Number((hiplift[a].day).replace(/\//g,""))
  })
  }
  if(typeof(kneelift[0].day) === "string"){
    Object.keys(kneelift).forEach(a=>{
      kneelift[a].day = Number((kneelift[a].day).replace(/\//g,""))
  })
  }
  if(typeof(kneeliftcombo[0].day) === "string"){
    Object.keys(kneeliftcombo).forEach(a=>{
      kneeliftcombo[a].day = Number((kneeliftcombo[a].day).replace(/\//g,""))
  })
  }
  if(typeof(legraise[0].day) === "string"){
    Object.keys(legraise).forEach(a=>{
      legraise[a].day = Number((legraise[a].day).replace(/\//g,""))
  })
  }
  if(typeof(legscissors[0].day) === "string"){
    Object.keys(legscissors).forEach(a=>{
      legscissors[a].day = Number((legscissors[a].day).replace(/\//g,""))
  })
  }
  if(typeof(kneetochest[0].day) === "string"){
    Object.keys(kneetochest).forEach(a=>{
      kneetochest[a].day = Number((kneetochest[a].day).replace(/\//g,""))
  })
  }
  if(typeof(mountainclimber[0].day) === "string"){
    Object.keys(mountainclimber).forEach(a=>{
      mountainclimber[a].day = Number((mountainclimber[a].day).replace(/\//g,""))
  })
  }
  if(typeof(opencloselegraise[0].day) === "string"){
    Object.keys(opencloselegraise).forEach(a=>{
      opencloselegraise[a].day = Number((opencloselegraise[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadarmspin[0].day) === "string"){
    Object.keys(overheadarmspin).forEach(a=>{
      overheadarmspin[a].day = Number((overheadarmspin[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadarmtwist[0].day) === "string"){
    Object.keys(overheadarmtwist).forEach(a=>{
      overheadarmtwist[a].day = Number((overheadarmtwist[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadbend[0].day) === "string"){
    Object.keys(overheadbend).forEach(a=>{
      overheadbend[a].day = Number((overheadbend[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadhipshake[0].day) === "string"){
    Object.keys(overheadhipshake).forEach(a=>{
      overheadhipshake[a].day = Number((overheadhipshake[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadlungetwist[0].day) === "string"){
    Object.keys(overheadlungetwist).forEach(a=>{
      overheadlungetwist[a].day = Number((overheadlungetwist[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadpress[0].day) === "string"){
    Object.keys(overheadpress).forEach(a=>{
      overheadpress[a].day = Number((overheadpress[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadsidebend[0].day) === "string"){
    Object.keys(overheadsidebend).forEach(a=>{
      overheadsidebend[a].day = Number((overheadsidebend[a].day).replace(/\//g,""))
  })
  }
  if(typeof(overheadsquat[0].day) === "string"){
    Object.keys(overheadsquat).forEach(a=>{
      overheadsquat[a].day = Number((overheadsquat[a].day).replace(/\//g,""))
  })
  }
  if(typeof(pendulumbend[0].day) === "string"){
    Object.keys(pendulumbend).forEach(a=>{
      pendulumbend[a].day = Number((pendulumbend[a].day).replace(/\//g,""))
  })
  }
  if(typeof(ringraisecombo[0].day) === "string"){
    Object.keys(ringraisecombo).forEach(a=>{
      ringraisecombo[a].day = Number((ringraisecombo[a].day).replace(/\//g,""))
  })
  }
  if(typeof(plank[0].day) === "string"){
    Object.keys(plank).forEach(a=>{
      plank[a].day = Number((plank[a].day).replace(/\//g,""))
  })
  }
  if(typeof(russiantwist[0].day) === "string"){
    Object.keys(russiantwist).forEach(a=>{
      russiantwist[a].day = Number((russiantwist[a].day).replace(/\//g,""))
  })
  }
  if(typeof(seatedforwardpress[0].day) === "string"){
    Object.keys(seatedforwardpress).forEach(a=>{
      seatedforwardpress[a].day = Number((seatedforwardpress[a].day).replace(/\//g,""))
  })
  }
  if(typeof(seatedringraise[0].day) === "string"){
    Object.keys(seatedringraise).forEach(a=>{
      seatedringraise[a].day = Number((seatedringraise[a].day).replace(/\//g,""))
  })
  }
  if(typeof(shoulderpress[0].day) === "string"){
    Object.keys(shoulderpress).forEach(a=>{
      shoulderpress[a].day = Number((shoulderpress[a].day).replace(/\//g,""))
  })
  }
  if(typeof(sidestep[0].day) === "string"){
    Object.keys(sidestep).forEach(a=>{
      sidestep[a].day = Number((sidestep[a].day).replace(/\//g,""))
  })
  }
  if(typeof(squat[0].day) === "string"){
    Object.keys(squat).forEach(a=>{
      squat[a].day = Number((squat[a].day).replace(/\//g,""))
  })
  }
  if(typeof(standingtwist[0].day) === "string"){
    Object.keys(standingtwist).forEach(a=>{
      standingtwist[a].day = Number((standingtwist[a].day).replace(/\//g,""))
  })
  }
  if(typeof(thighpress[0].day) === "string"){
    Object.keys(thighpress).forEach(a=>{
      thighpress[a].day = Number((thighpress[a].day).replace(/\//g,""))
  })
  }
  if(typeof(tricepkickback[0].day) === "string"){
    Object.keys(tricepkickback).forEach(a=>{
      tricepkickback[a].day = Number((tricepkickback[a].day).replace(/\//g,""))
  })
  }
  if(typeof(widesquat[0].day) === "string"){
    Object.keys(widesquat).forEach(a=>{
      widesquat[a].day = Number((widesquat[a].day).replace(/\//g,""))
  })
  }

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
    backpressTodayCount += backpressfilledtoday[i].count
  }
  for(let i=0;i<bowpressfilledtoday.length;i++){
    bowpressTodayCount += bowpressfilledtoday[i].count
  }
  for(let i=0;i<flutterkickfilledtoday.length;i++){
    flutterkickTodayCount += flutterkickfilledtoday[i].count
  }
  for(let i=0;i<frontpressfilledtoday.length;i++){
    frontpressTodayCount += frontpressfilledtoday[i].count
  }
  for(let i=0;i<hipliftfilledtoday.length;i++){
    hipliftTodayCount += hipliftfilledtoday[i].count
  }
  for(let i=0;i<kneeliftfilledtoday.length;i++){
    kneeliftTodayCount += kneeliftfilledtoday[i].count
  }
  for(let i=0;i<kneeliftcombofilledtoday.length;i++){
    kneeliftcomboTodayCount += kneeliftcombofilledtoday[i].count
  }
  for(let i=0;i<kneetochestfilledtoday.length;i++){
    kneetochestTodayCount += kneetochestfilledtoday[i].count
  }
  for(let i=0;i<legraisefilledtoday.length;i++){
    legraiseTodayCount += legraisefilledtoday[i].count
  }
  for(let i=0;i<legscissorsfilledtoday.length;i++){
    legscissorsTodayCount += legscissorsfilledtoday[i].count
  }
  for(let i=0;i<mountainclimberfilledtoday.length;i++){
    mountainclimberTodayCount += mountainclimberfilledtoday[i].count
  }
  for(let i=0;i<opencloselegraisefilledtoday.length;i++){
    opencloselegraiseTodayCount += opencloselegraisefilledtoday[i].count
  }
  for(let i=0;i<overheadarmspinfilledtoday.length;i++){
    overheadarmspinTodayCount += overheadarmspinfilledtoday[i].count
  }
  for(let i=0;i<overheadarmtwistfilledtoday.length;i++){
    overheadarmtwistTodayCount += overheadarmtwistfilledtoday[i].count
  }
  for(let i=0;i<overheadbendfilledtoday.length;i++){
    overheadbendTodayCount += overheadbendfilledtoday[i].count
  }
  for(let i=0;i<overheadhipshakefilledtoday.length;i++){
    overheadhipshakeTodayCount += overheadhipshakefilledtoday[i].count
  }
  for(let i=0;i<overheadlungetwistfilledtoday.length;i++){
    overheadlungetwistTodayCount += overheadlungetwistfilledtoday[i].count
  }
  for(let i=0;i<overheadpressfilledtoday.length;i++){
    overheadpressTodayCount += overheadpressfilledtoday[i].count
  }
  for(let i=0;i<overheadsidebendfilledtoday.length;i++){
    overheadsidebendTodayCount += overheadsidebendfilledtoday[i].count
  }
  for(let i=0;i<overheadsquatfilledtoday.length;i++){
    overheadsquatTodayCount += overheadsquatfilledtoday[i].count
  }
  for(let i=0;i<pendulumbendfilledtoday.length;i++){
    pendulumbendTodayCount += pendulumbendfilledtoday[i].count
  }
  for(let i=0;i<ringraisecombofilledtoday.length;i++){
    ringraisecomboTodayCount += ringraisecombofilledtoday[i].count
  }
  for(let i=0;i<plankfilledtoday.length;i++){
    plankTodayCount += plankfilledtoday[i].count
  }
  for(let i=0;i<russiantwistfilledtoday.length;i++){
    russiantwistTodayCount += russiantwistfilledtoday[i].count
  }
  for(let i=0;i<seatedforwardpressfilledtoday.length;i++){
    seatedforwardpressTodayCount += seatedforwardpressfilledtoday[i].count
  }
  for(let i=0;i<seatedringraisefilledtoday.length;i++){
    seatedringraiseTodayCount += seatedringraisefilledtoday[i].count
  }
  for(let i=0;i<shoulderpressfilledtoday.length;i++){
    shoulderpressTodayCount += shoulderpressfilledtoday[i].count
  }
  for(let i=0;i<sidestepfilledtoday.length;i++){
    sidestepTodayCount += sidestepfilledtoday[i].count
  }
  for(let i=0;i<squatfilledtoday.length;i++){
    squatTodayCount += squatfilledtoday[i].count
  }
  for(let i=0;i<standingtwistfilledtoday.length;i++){
    standingtwistTodayCount += standingtwistfilledtoday[i].count
  }
  for(let i=0;i<thighpressfilledtoday.length;i++){
    thighpressTodayCount += thighpressfilledtoday[i].count
  }
  for(let i=0;i<tricepkickbackfilledtoday.length;i++){
    tricepkickbackTodayCount += tricepkickbackfilledtoday[i].count
  }
  for(let i=0;i<widesquatfilledtoday.length;i++){
    widesquatTodayCount += widesquatfilledtoday[i].count
  }
    //総合行なったワークアウト（回数）for処理
  for(let i=0;i<backpress.length;i++){
    backpressTotalCount += backpress[i].count
  }
  for(let i=0;i<bowpress.length;i++){
    bowpressTotalCount += bowpress[i].count
  }
  for(let i=0;i<flutterkick.length;i++){
    flutterkickTotalCount += flutterkick[i].count
  }
  for(let i=0;i<frontpress.length;i++){
    frontpressTotalCount += frontpress[i].count
  }
  for(let i=0;i<hiplift.length;i++){
    hipliftTotalCount += hiplift[i].count
  }
  for(let i=0;i<kneelift.length;i++){
    kneeliftTotalCount += kneelift[i].count
  }
  for(let i=0;i<kneeliftcombo.length;i++){
    kneeliftcomboTotalCount += kneeliftcombo[i].count
  }
  for(let i=0;i<kneetochest.length;i++){
    kneetochestTotalCount += kneetochest[i].count
  }
  for(let i=0;i<legraise.length;i++){
    legraiseTotalCount += legraise[i].count
  }
  for(let i=0;i<legscissors.length;i++){
    legscissorsTotalCount += legscissors[i].count
  }
  for(let i=0;i<mountainclimber.length;i++){
    mountainclimberTotalCount += mountainclimber[i].count
  }
  for(let i=0;i<opencloselegraise.length;i++){
    opencloselegraiseTotalCount += opencloselegraise[i].count
  }
  for(let i=0;i<overheadarmspin.length;i++){
    overheadarmspinTotalCount += overheadarmspin[i].count
  }
  for(let i=0;i<overheadarmtwist.length;i++){
    overheadarmtwistTotalCount += overheadarmtwist[i].count
  }
  for(let i=0;i<overheadbend.length;i++){
    overheadbendTotalCount += overheadbend[i].count
  }
  for(let i=0;i<overheadhipshake.length;i++){
    overheadhipshakeTotalCount += overheadhipshake[i].count
  }
  for(let i=0;i<overheadlungetwist.length;i++){
    overheadlungetwistTotalCount += overheadlungetwist[i].count
  }
  for(let i=0;i<overheadpress.length;i++){
    overheadpressTotalCount += overheadpress[i].count
  }
  for(let i=0;i<overheadsidebend.length;i++){
    overheadsidebendTotalCount += overheadsidebend[i].count
  }
  for(let i=0;i<overheadsquat.length;i++){
    overheadsquatTotalCount += overheadsquat[i].count
  }
  for(let i=0;i<pendulumbend.length;i++){
    pendulumbendTotalCount += pendulumbend[i].count
  }
  for(let i=0;i<ringraisecombo.length;i++){
    ringraisecomboTotalCount += ringraisecombo[i].count
  }
  for(let i=0;i<plank.length;i++){
    plankTotalCount += plank[i].count
  }
  for(let i=0;i<russiantwist.length;i++){
    russiantwistTotalCount += russiantwist[i].count
  }
  for(let i=0;i<seatedforwardpress.length;i++){
    seatedforwardpressTotalCount += seatedforwardpress[i].count
  }
  for(let i=0;i<seatedringraise.length;i++){
    seatedringraiseTotalCount += seatedringraise[i].count
  }
  for(let i=0;i<shoulderpress.length;i++){
    shoulderpressTotalCount += shoulderpress[i].count
  }
  for(let i=0;i<sidestep.length;i++){
    sidestepTotalCount += sidestep[i].count
  }
  for(let i=0;i<squat.length;i++){
    squatTotalCount += squat[i].count
  }
  for(let i=0;i<standingtwist.length;i++){
    standingtwistTotalCount += standingtwist[i].count
  }
  for(let i=0;i<thighpress.length;i++){
    thighpressTotalCount += thighpress[i].count
  }
  for(let i=0;i<tricepkickback.length;i++){
    tricepkickbackTotalCount += tricepkickback[i].count
  }
  for(let i=0;i<widesquat.length;i++){
    widesquatTotalCount += widesquat[i].count
  }
  //総合ワークアウト回数
  const data = [
  {
    work:"ウシロプッシュ",
    Count:backpressTotalCount,
  },{
    work:"リングアロー",
    Count:bowpressTotalCount,
  },{
    work:"バタバタレッグ",
    Count:flutterkickTotalCount,
  },{
    work:"サゲテプッシュ",
    Count:frontpressTotalCount,
  },{
    work:"ヒップリフト",
    Count:hipliftTotalCount,
  },{
    work:"モモアゲアゲ",
    Count:kneeliftTotalCount,
  },{
    work:"モモアゲコンボ",
    Count:kneeliftcomboTotalCount,
  },{
    work:"ニートゥーチェスト",
    Count:kneetochestTotalCount,
  },{
    work:"レッグレイス",
    Count:legraiseTotalCount,
  },{
    work:"ハサミレッグ",
    Count:legscissorsTotalCount,
  },
    {
    work:"マウンテンクライマー",
    Count:mountainclimberTotalCount,
  },
  {
    work:"アシパカパカ",
    Count:opencloselegraiseTotalCount,
  },
  {
    work:"グルグルアーム",
    Count:overheadarmspinTotalCount,
  },
  {
    work:"アームツイスト",
    Count:overheadarmtwistTotalCount,
  },
  {
    work:"バンザイモーニング",
    Count:overheadbendTotalCount,
  },
  {
    work:"バンザイコシフリ",
    Count:overheadhipshakeTotalCount,
  },
  {
    work:"バンザイツイスト",
    Count:overheadlungetwistTotalCount,
  },
  {
    work:"バンザイプッシュ",
    Count:overheadpressTotalCount,
  },
  {
    work:"バンザイサイドベント",
    Count:overheadsidebendTotalCount,
  },
  {
    work:"バンザイスクワット",
    Count:overheadsquatTotalCount,
  },
  {
    work:"ベントオーバー",
    Count:pendulumbendTotalCount,
  },
  {
    work:"アゲサゲコンボ",
    Count:ringraisecomboTotalCount,
  },
  {
    work:"プランク",
    Count:plankTotalCount,
  },
  {
    work:"ロシアンツイスト",
    Count:russiantwistTotalCount,
  },
  {
    work:"マウンテンクライマー",
    Count:mountainclimberTotalCount,
  },
  {
    work:"マエニプッシュ",
    Count:seatedforwardpressTotalCount,
  },
  {
    work:"リングアゲサゲ",
    Count:seatedringraiseTotalCount,
  },
  {
    work:"カタデプッシュ",
    Count:shoulderpressTotalCount,
  },
  {
    work:"サイドステップ",
    Count:sidestepTotalCount,
  },
  {
    work:"スクワット",
    Count:squatTotalCount,
  },
  {
    work:"スワイショウ",
    Count:standingtwistTotalCount,
  },
  {
    work:"モモデプッシュ",
    Count:thighpressTotalCount,
  },
  {
    work:"トライセプト",
    Count:tricepkickbackTotalCount,
  },
  {
    work:"ワイドスクワット",
    Count:widesquatTotalCount,
  },

  ]
  //今日行ったワークアウト回数
  const todaydata = [
    {
    work:"ウシロプッシュ",
    Count:backpressTodayCount,
  },{
    work:"リングアロー",
    Count:bowpressTodayCount,
  },{
    work:"バタバタレッグ",
    Count:flutterkickTodayCount,
  },{
    work:"サゲテプッシュ",
    Count:frontpressTodayCount,
  },{
    work:"ヒップリフト",
    Count:hipliftTodayCount,
  },{
    work:"モモアゲアゲ",
    Count:kneeliftTodayCount,
  },{
    work:"モモアゲコンボ",
    Count:kneeliftcomboTodayCount,
  },{
    work:"ニートゥーチェスト",
    Count:kneetochestTodayCount,
  },{
    work:"レッグレイス",
    Count:legraiseTodayCount,
  },{
    work:"ハサミレッグ",
    Count:legscissorsTodayCount,
  },
    {
    work:"マウンテンクライマー",
    Count:mountainclimberTodayCount,
  },
  {
    work:"アシパカパカ",
    Count:opencloselegraiseTodayCount,
  },
  {
    work:"グルグルアーム",
    Count:overheadarmspinTodayCount,
  },
  {
    work:"アームツイスト",
    Count:overheadarmtwistTodayCount,
  },
  {
    work:"バンザイモーニング",
    Count:overheadbendTodayCount,
  },
  {
    work:"バンザイコシフリ",
    Count:overheadhipshakeTodayCount,
  },
  {
    work:"バンザイツイスト",
    Count:overheadlungetwistTodayCount,
  },
  {
    work:"バンザイプッシュ",
    Count:overheadpressTodayCount,
  },
  {
    work:"バンザイサイドベント",
    Count:overheadsidebendTodayCount,
  },
  {
    work:"バンザイスクワット",
    Count:overheadsquatTodayCount,
  },
  {
    work:"ベントオーバー",
    Count:pendulumbendTodayCount,
  },
  {
    work:"アゲサゲコンボ",
    Count:ringraisecomboTodayCount,
  },
  {
    work:"プランク",
    Count:plankTodayCount,
  },
  {
    work:"ロシアンツイスト",
    Count:russiantwistTodayCount,
  },
  {
    work:"マウンテンクライマー",
    Count:mountainclimberTodayCount,
  },
  {
    work:"マエニプッシュ",
    Count:seatedforwardpressTodayCount,
  },
  {
    work:"リングアゲサゲ",
    Count:seatedringraiseTodayCount,
  },
  {
    work:"カタデプッシュ",
    Count:shoulderpressTodayCount,
  },
  {
    work:"サイドステップ",
    Count:sidestepTodayCount,
  },
  {
    work:"スクワット",
    Count:squatTodayCount,
  },
  {
    work:"スワイショウ",
    Count:standingtwistTodayCount,
  },
  {
    work:"モモデプッシュ",
    Count:thighpressTodayCount,
  },
  {
    work:"トライセプト",
    Count:tricepkickbackTodayCount,
  },
  {
    work:"ワイドスクワット",
    Count:widesquatTodayCount,
  },
  ]
  return (
    <div className={classes.root}>
      <div className={classes.swich}>
        <Button onClick={TodayHandle} className={toggle?classes.buttonFalse:classes.button}>本日のフィットネス回数</Button>
        <Button onClick={CopHandle} className={toggle?classes.button:classes.buttonFalse}>総合のフィットネス回数</Button>
      </div>
      <div className={classes.chartcontent}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={toggle?data:todaydata} margin={{left:0,right:50}}>
          <CartesianGrid strokeDasharray="0" />
          <XAxis dataKey="work" fontSize={12} />
          <YAxis fontWeight={800}/>
          <Tooltip />
          <Bar dataKey="Count" fill="#ff8e00" />
        </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}
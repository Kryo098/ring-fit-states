import React from "react"
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
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
import { useSelector } from "react-redux"
import ChartInput from "./ChartInput"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
  root: {
    height: "50vh",
    width: "95vw",
  }
}))

export const BackPressChart = (work) => {
  const selector = useSelector((state) => state)
  const data = getbackpress(selector)
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })

  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const BowPressChart = (work) => {
  const selector = useSelector((state) => state)
  const data = getbowpress(selector)
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const FlutterKickChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getflutterkick(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const FrontPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getfrontpress(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const HipLiftChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = gethiplift(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const KneeLiftChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getkneelift(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const KneeLiftComboChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getkneeliftcombo(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const KneetoChestChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getkneetochest(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const LegRaiseChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getlegraise(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const LegScissorsChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getlegscissors(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const MountainClimberChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getmountainclimber(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const OpenCloseLegRaiseChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getopencloselegraise(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadArmSpinChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadarmspin(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadArmTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadarmtwist(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadBendChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadbend(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadHipShakeChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadhipshake(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadLungeTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadlungetwist(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadpress(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadSideBendChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadsidebend(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadSquatChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadsquat(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const PendulumBendChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getpendulumbend(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const PlankChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getplank(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const RingRaiseComboChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getringraisecombo(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const RussianTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getrussiantwist(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const SeatedForwardPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getseatedforwardpress(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const SeatedRingRaiseChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getseatedringraise(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const ShoulderPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getshoulderpress(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const SquatChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getsquat(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const SideStepChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getsidestep(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const StandingTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getstandingtwist(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const ThighPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getthighpress(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const TricepKickbackChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = gettricepkickback(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const WideSquatChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getwidesquat(selector)
  
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer width="100%" height='100%'>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:50,right:50}}
        >
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
          <YAxis domain={[0, 500]} fontSize="18px"/>
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}

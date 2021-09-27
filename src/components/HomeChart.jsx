import React from "react"
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
} from "../reducks/users/selectors";
import { makeStyles } from "@material-ui/core";
//import BackPressIcon from "../icons/presin-tras-la-nucapng.png"

const  useStyles= makeStyles({
  chartcontent: {
    margin:"0 auto",
    marginTop:"20vh",
  }
})

export const HomeChart = () => {
  const classes = useStyles()

  const selector = useSelector((state) => state);
  const backpress = getbackpress(selector)
  const bowpress = getbowpress(selector)
  const flutterkick = getflutterkick(selector)
  const frontpress = getfrontpress(selector)
  const hiplift =gethiplift(selector)
  const kneelift =getkneelift(selector)
  const kneeliftcombo =getkneeliftcombo(selector)
  const legraise=getlegraise(selector)
  const legscissors =getlegscissors(selector)
  const mountainclimber =getmountainclimber(selector)
  const kneetochest =getkneetochest(selector)
  
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

for(let i=0;i<backpress.length;i++){
    backpressTotalCount=backpressTotalCount+backpress[i].count
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
  const data = [
    {
    work:"BackPress",
    TotalCount:backpressTotalCount,
  },{
    work:"BowPress",
    TotalCount:bowpressTotalCount,
  },{
    work:"FlutterKick",
    TotalCount:flutterkickTotalCount,
  },{
    work:"FrontPress",
    TotalCount:frontpressTotalCount,
  },{
    work:"HipLift",
    TotalCount:hipliftTotalCount,
  },{
    work:"KneeLift",
    TotalCount:kneeliftTotalCount,
  },{
    work:"KneeLiftCombo",
    TotalCount:kneeliftcomboTotalCount,
  },{
    work:"KneetoChest",
    TotalCount:kneetochestTotalCount,
  },{
    work:"LegRaise",
    TotalCount:legraiseTotalCount,
  },{
    work:"LegScissors",
    TotalCount:legscissorsTotalCount,
  },
    {
    work:"MountainClimber",
    TotalCount:mountainclimberTotalCount,
  }
]
  return (
    <>
      <ResponsiveContainer width="60%" height={450} className={classes.chartcontent}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="work" />
        
        <YAxis />
        <Tooltip />
        <Bar dataKey="TotalCount" fill="#ff8e00" />
        
      </BarChart>
      </ResponsiveContainer>
    </>
  );
};
import React,{ useState } from "react"
import { Data } from "../reducks/store/HomeData"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar
} from "recharts"
import { makeStyles, Button} from "@material-ui/core"

const useStyles= makeStyles((theme) => ({
  chartcontent: {
    margin: "0 auto",
    marginTop: "4vh",
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
    top: "5vh",
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

  return (
    <div className={classes.root}>
      <div className={classes.swich}>
        <Button onClick={TodayHandle} className={toggle?classes.buttonFalse:classes.button}>本日のフィットネス回数</Button>
        <Button onClick={CopHandle} className={toggle?classes.button:classes.buttonFalse}>総合のフィットネス回数</Button>
      </div>
      <div className={classes.chartcontent}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={toggle?Data().datas:Data().todaydatas} margin={{left:0,right:50}}>
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
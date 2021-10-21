import React from "react"
import { getUsername } from "../reducks/users/selectors"
import { useSelector } from "react-redux"
import { Box } from "@material-ui/core"
import { HomeMenuItem } from "../components/HomeMenuItem"
import { HomeChart } from "../components/HomeChart"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles((theme)=>({
  home: {
    textAlign:"center",
  },
  welcome:{
    marginTop:40,
  }
}))

const Home = () => {
  const classes = useStyles()
  const selector = useSelector((state) => state)
  const name = getUsername(selector)

  return (
    <div className={classes.home}>
      <h2 className={classes.welcome}>ようこそ！{name}</h2>
      <HomeChart />
      <Box
        sx={{
          justifyContent: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <HomeMenuItem bottom={0} height={"auto"}/>
      </Box>
    </div>
  )
}

export default Home

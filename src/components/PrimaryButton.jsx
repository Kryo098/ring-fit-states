import React from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme)=> ({
  button: {
    backgroundColor: "#e73e0e",
    color: "#fff",
    fontSize: 20,
    height: 48,
    margin: 16,
    width: 200,
    letterSpacing: 6,
    fontWeight: 800,
    "&:hover": {
      backgroundColor: "#ff8e00",
      color: "#e73e0e",
    },
  },
}))

const PrimaryButton = (props) => {
  const classes = useStyles()
  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => props.onClick()}
      required={props.required}
    >
      {props.label}
    </Button>
  )
}

export default PrimaryButton
  

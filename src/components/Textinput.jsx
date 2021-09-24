import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  textfield:{
    margin:10,
    color:"red"
  }
});
const TextInput = (props) => {
  const classes = useStyles()
  return (
    <TextField className={classes.textfield}
      fullWidth={props.fullWidth}
      label={props.label}
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;

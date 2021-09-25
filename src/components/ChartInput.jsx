import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../reducks/users/operations";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./Textinput";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
const useStyle = makeStyles({
  root:{
    marginTop:30,
  },
  workInputCard:{
    display:"block",
    margin:"0 auto",
    width:"50%",
    backgroundColor:"#f4f4f4"
  },
  workout:{
    color:"",
    fontWeight:800,
    borderBottom:"solid 2px #e73e0e"
  },
});

const WorkoutInput = (props) => {
  const classes= useStyle();
  const dispatch = useDispatch();
  const [day, setDay] = useState(""),
    [count, setCount] = useState("");
  const inputDay = useCallback(
    (e) => {
      setDay(e.target.value);
    },
    [setDay]
  );
  const inputCount = useCallback(
    (e) => {
      setCount(e.target.value);
    },
    [setCount]
  );
  return (
    <div className={classes.root}>
      <Paper className={classes.workInputCard} elevation={4}>
        <p className={classes.workout}>ワークアウトの追加</p>
        <TextInput
          type={"deta"}
          onChange={inputDay}
          label={"日付"}
        />
        <TextInput
          type={"number"}
          onChange={inputCount}
          label={"回数"}
        />
        <PrimaryButton required onClick={()=>dispatch(addData(day,count,props.work))} label={'SEVE!'} />
      </Paper>
    </div>
  );
};

export default WorkoutInput;

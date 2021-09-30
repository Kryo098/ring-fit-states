import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../reducks/users/operations";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./Textinput";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';

const useStyle = makeStyles({
  root:{
    marginTop:20,
  },
  workInputCard:{
    display:"block",
    margin:"0 auto",
    width:"50%",
    backgroundColor:"#f4f4f4",
  },
  workout:{
    fontWeight:800,
    borderBottom:"solid 2px #e73e0e"
  },
  datePicker :{
    marginTop:10,
  },
});

const WorkoutInput = (props) => {
  const classes= useStyle();
  const dispatch = useDispatch();
  const [day,setDay] = useState(""),
        [count, setCount] = useState("");
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
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale} className={classes.inputday}>
        <DatePicker
        className={classes.datePicker}
        disableToolbar
        variant="dialog"
        inputVariant="standard"
        format="yyyy/MM/dd"
        id="@material-ui/pickers"
        label="日付"
        value={day}
        onChange={setDay}
      />
    </MuiPickersUtilsProvider>
        <TextInput
          type={"number"}
          onChange={inputCount}
          label={"回数"}
          value={count}
        />
        <PrimaryButton required onClick={()=>dispatch(addData(day,count,props.work))} label={'SEVE!'} />
        {count<0?<span>0以上の数字を入力してください</span>:<></>}
      </Paper>
    </div>
  );
};

export default WorkoutInput;

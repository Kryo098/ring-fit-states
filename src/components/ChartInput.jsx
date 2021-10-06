import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addData,deleteData } from "../reducks/users/operations";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./Textinput";
import { makeStyles,Paper,Modal,Box,Typography,Button,} from "@material-ui/core";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';
import { getbackpress } from "../reducks/users/selectors";
import { useSelector } from "react-redux";
import { Settings } from "@material-ui/icons";

const useStyle = makeStyles((theme)=>({
  root:{
    marginTop:20,
  },
  workInputCard:{
    display:"block",
    margin:"0 auto",
    width:"50%",
    backgroundColor:"#f4f4f4",
    [theme.breakpoints.down('sm')]: {
      width:"98%",
    }
  },
  workout:{
    fontWeight:800,
    borderBottom:"solid 2px #e73e0e"
  },
  count: {
    [theme.breakpoints.down('sm')]: {
      width:50,
    }
  },
  datePicker :{
    marginTop:10,
    [theme.breakpoints.down('sm')]: {
      width:100,
    },
  },
  modal:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: '#f4f4f4',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
  },
  icon:{
    transform:"scale(1.4)"
  }
}));

const WorkoutInput = (props) => {
  const selector = useSelector((state)=>state)
  const data = getbackpress(selector)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
        <div>
          <Button onClick={handleOpen}><Settings className={classes.icon}/></Button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          {data.map((item,index)=>(
          <button key={item.id} onClick={()=>dispatch(deleteData(index,item))}>{item.day}</button>
        ))}
        </Box>
      </Modal>
        </div>
      </Paper>
    </div>
  );
};

export default WorkoutInput;

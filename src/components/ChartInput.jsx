import { useCallback, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addData,deleteData } from "../reducks/users/operations";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./Textinput";
import { makeStyles,Paper,Modal,Box,Button, TableContainer,Table,TableBody,TableCell,TableHead,TableRow} from "@material-ui/core";
import { MuiPickersUtilsProvider,DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';
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
  getwidesquat } from "../reducks/users/selectors";
import { Settings,Backspace } from "@material-ui/icons";

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
    width: "60%",
    backgroundColor: '#f4f4f4',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
  },
  delete: {
    position:"relative",
    left:0,
    right:0,
  },
  icon:{
    transform:"scale(1.4)"
  }
}));

const WorkoutInput = (props) => {

  const selector = useSelector((state)=>state)
  let data
  switch (props.work.work) {
      case "BackPress":
        data = getbackpress(selector)
        break;
      case "BowPress":
        data = getbowpress(selector)
        break;
      case "FlutterKick":
        data = getflutterkick(selector)
        break;
      case "FrontPress":
        data = getfrontpress(selector)
        break;
      case "HipLift":
        data = gethiplift(selector)
        break;
      case "KneeLiftCombo":
        data = getkneeliftcombo(selector)
        break;
      case "KneeLift":
        data = getkneelift(selector)
        break;
      case "KneetoChest":
        data = getkneetochest(selector)
        break;
      case "LegRaise":
        data = getlegraise(selector)
        break;
      case "LegScissors":
        data = getlegscissors(selector)
        break;
      case "MountainClimber":
        data = getmountainclimber(selector)
        break;
      case "OpenCloseLegRaise":
        data = getopencloselegraise(selector)
        break;
      case "OverheadArmSpin":
        data = getoverheadarmspin(selector)
        break;
      case "OverheadArmTwist":
        data = getoverheadarmtwist(selector)
        break;
      case "OverheadBend":
        data = getoverheadbend(selector)
        break;
      case "OverheadHipShake":
        data = getoverheadhipshake(selector)
        break;
      case "OverheadLungeTwist":
        data = getoverheadlungetwist(selector)
        break;
      case "OverheadPress":
        data = getoverheadpress(selector)
        break;
      case "OverheadSideBend":
        data = getoverheadsidebend(selector)
        break;
      case "OverheadSquat":
        data = getoverheadsquat(selector)
        break;
      case "PendulumBend":
        data = getpendulumbend(selector)
        break;
      case "Plank":
        data = getplank(selector)
        break;
      case "RingRaiseCombo":
        data = getringraisecombo(selector)
        break;
      case "RussianTwist":
        data = getrussiantwist(selector)
        break;
      case "SeatedForwardPress":
        data = getseatedforwardpress(selector)
        break;
      case "SeatedRingRaise":
        data = getseatedringraise(selector)
        break;
      case "ShoulderPress":
        data = getshoulderpress(selector)
        break;
      case "SideStep":
        data = getsidestep(selector)
        break;
      case "Squat":
        data = getsquat(selector)
        break;
      case "StandingTwist":
        data = getstandingtwist(selector)
        break;
      case "ThighPress":
        data = getthighpress(selector)
        break;
      case "TricepKickback":
        data = gettricepkickback(selector)
        break;
      case "WideSquat":
        data = getwidesquat(selector)
        break;
      default:
    }
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
          <Button onClick={handleOpen} className={classes.delete}><Settings className={classes.icon}/></Button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>日付</TableCell>
                  <TableCell>回数</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {data.map((item,index)=>(
                  <TableRow key={item.id}>
                    <TableCell>{item.day}</TableCell>
                    <TableCell>{item.count}</TableCell>
                    <TableCell><Button onClick={()=>dispatch(deleteData(index,item,props.work))}><Backspace /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
        </div>
      </Paper>
    </div>
  );
};

export default WorkoutInput;
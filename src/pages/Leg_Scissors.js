import { LegScissorsChart } from "../components/Chart";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import LegScissorsIcon from "../icons/tijeras-con-crucepng.png";

const useStyles = makeStyles({
  titlecard: {
    position: "relative",
    height: 200,
    backgroundColor: "#f4f4f4",
    margin: "30px auto",
    borderLeft: "solid 10px #ff8e00",
    width: "50rem",
  },
  title: {
    position: "absolute",
    top: "2.5rem",
    left: "17.5rem",
    fontSize: "2.1rem",
    fontWeight: "800",
    fontStyle: "italic",
    color: "#ff8e00",
    lineHeight: 1,
    letterSpacing: -2,
    textIndent: "-0.2em",
    transform: "scale(0.9, 1)",
    transformOrigin: "top",
  },
  sbtitle: {
    position: "absolute",
    top: "2rem",
    left: "18rem",
    color: "#ff8e00",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: 1,
    textIndent: "0.05rem",
  },
  icon: {
    position: "absolute",
    top: 40,
    left: 50,
  },
  effect: {
    position: "absolute",
    top: "9.5rem",
    left: 0,
    width: "100%",
    color: "#9a9b9d",
    fontWeight: 500,
    fontSize: "1rem",
  },
  small: {
    fontWeight: 500,
    fontSize: 16,
  },
});

const LegScissors = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Paper elevation={4} className={classes.titlecard}>
        <img src={LegScissorsIcon} alt="icon" className={classes.icon}></img>
        <p className={classes.sbtitle}>Leg Scissors</p>
        <h2 className={classes.title}>ハサミレッグ</h2>
        <div className={classes.effect}>
          <span>#ぽっこりお腹改善</span>
          <span className={classes.small}>　</span>
          <span>#すっきり美脚</span>
          <span className={classes.small}>　</span>
          <span>#脂肪燃焼</span>
        </div>
      </Paper>
      <LegScissorsChart work="LegScissors" />
    </div>
  );
};

export default LegScissors;
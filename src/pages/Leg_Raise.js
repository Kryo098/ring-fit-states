import { LegRaiseChart } from "../components/Chart";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import LegRaiseIcon from "../icons/piernas-juntas-arribapng.png";

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

const LegRaise = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Paper elevation={4} className={classes.titlecard}>
        <img src={LegRaiseIcon} alt="icon" className={classes.icon}></img>
        <p className={classes.sbtitle}>Leg Raise</p>
        <h2 className={classes.title}>レッグレイス</h2>
        <div className={classes.effect}>
          <span>#ぽっこりお腹改善</span>
          <span className={classes.small}>　</span>
          <span>#体幹の強化</span>
          <span className={classes.small}>　</span>
        </div>
      </Paper>
      <LegRaiseChart work="LegRaise" />
    </div>
  );
};

export default LegRaise;

import { OverheadArmTwistChart } from "../components/Chart";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import OverheadArmTwistIcon from "../icons/rotacin-de-muecaspng.png";
import { HomeMenuItem } from "../components/HomeMenuItem";
const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
    height: "92.3vh",
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      overflow:"auto",
    },
  },
  titlecard: {
    position: "relative",
    height: 130,
    backgroundColor: "#f4f4f4",
    margin: "20px auto",
    borderLeft: "solid 10px #ff8e00",
    width: "50rem",
    [theme.breakpoints.down("md")]: {
      width: "98%",
      height: 100,
    },
  },
  title: {
    position: "absolute",
    top: 5,
    left: 0,
    width:"100%",
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
    top: 0,
    left: 0,
    width:"100%",
    color: "#ff8e00",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: 1,
    textIndent: "0.05rem",
    [theme.breakpoints.down("md")]: {
    },
  },
  icon: {
    position: "absolute",
    top: 5,
    left: 60,
    [theme.breakpoints.down("md")]: {
      height: 70,
      top: 10,
      left: 20,
    },
  },
  effect: {
    position: "absolute",
    top: "6rem",
    left: 0,
    width: "100%",
    color: "#9a9b9d",
    fontWeight: 500,
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      top: "4.8rem",
      fontSize: 12,
    },
  },
  small: {
    fontWeight: 500,
    fontSize: 16,
  },
}));


const OverheadArmTwist = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Paper elevation={4} className={classes.titlecard}>
        <img src={OverheadArmTwistIcon} alt="icon" className={classes.icon}></img>
        <p className={classes.sbtitle}>Overhead Arm Twist</p>
        <h2 className={classes.title}>アームツイスト</h2>
        <div className={classes.effect}>
          <span>#肩こりの改善</span>
          <span className={classes.small}>　</span>
          <span>#すっきり二の腕</span>
          <span className={classes.small}>　</span>
          <span>#体幹の強化</span>
        </div>
      </Paper>
      <OverheadArmTwistChart work="OverheadArmTwist" />
      <HomeMenuItem />
    </div>
  );
};

export default OverheadArmTwist;

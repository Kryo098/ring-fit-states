import { BackPressChart } from "../components/Chart";
import ChartInput from "../components/ChartInput";

const BackPress = () => {
  return (
    <div className="App">
      <h1>BackPressStste</h1>
      <div className="ChartBox">
        <BackPressChart work="BackPress" />
      </div>
      <ChartInput work="BackPress" />
    </div>
  );
};

export default BackPress;

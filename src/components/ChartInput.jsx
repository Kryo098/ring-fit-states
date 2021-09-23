import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./Textinput";
import { addData } from "../reducks/users/operations";

const WorkoutInput = (props) => {
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
    <div>
      <section>
        <h2>ワークアウトの追加</h2>
        <TextInput
          label={"日付"}
          type={"date"}
          onChange={inputDay}
          required={true}
        />
        <TextInput
          type={"number"}
          label={"回数"}
          onChange={inputCount}
          required={true}
        />
        <PrimaryButton
          label={"保存"}
          onClick={() => dispatch(addData(day, count, props.work))}
        />
      </section>
    </div>
  );
};

export default WorkoutInput;

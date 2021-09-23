import React, { useCallback, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import TextInput from "../components/Textinput";
import { useDispatch } from "react-redux";
import { SignUp } from "../reducks/users/operations";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmpass, setConfirmpass] = useState("");

  const inputUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );
  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );
  const inputConfirmpass = useCallback(
    (e) => {
      setConfirmpass(e.target.value);
    },
    [setConfirmpass]
  );
  return (
    <div>
      <h2>アカウント登録</h2>
      <br />
      <TextInput
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        row={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
      />
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        row={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        row={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード（再確認）"}
        multiline={false}
        required={true}
        row={1}
        value={confirmpass}
        type={"password"}
        onChange={inputConfirmpass}
      />
      <div>
        <br />
        <PrimaryButton
          label={"アカウントを登録する"}
          onClick={() =>
            dispatch(SignUp(username, email, password, confirmpass))
          }
        />
      </div>
    </div>
  );
};

export default Signup;

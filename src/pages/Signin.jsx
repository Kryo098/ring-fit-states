import React, { useCallback, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SignIn } from "../reducks/users/operations";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

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

  return (
    <div>
      <h2>サインイン</h2>
      <br />
      <TextField
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        row={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextField
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        row={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <div>
        <br />
        <PrimaryButton
          label={"サインイン"}
          onClick={() => dispatch(SignIn(email, password))}
        />
      </div>
    </div>
  );
};

export default Signin;

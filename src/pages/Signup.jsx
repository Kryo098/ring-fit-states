import React, { useCallback, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import TextInput from "../components/Textinput";
import { useDispatch } from "react-redux";
import { SignUp } from "../reducks/users/operations";
import {makeStyles} from "@material-ui/core"
import { push } from "connected-react-router";

const useStyles =makeStyles((theme)=>({
    root:{
      textAlign:"center",
    },
    title:{
      marginTop:100,
      fontSize:30,
    },
    form:{
      width:"50%",
      margin:"0 auto",
      marginTop:100,
    },
    text:{
      cursor:"pointer",
      width:220,
      margin:"0 auto",
      marginTop:20,
      transition: theme.transitions.create(
        ['color'],
        {duration: theme.transitions.duration.complex}
      ),
      "&:hover": {
        color:'#ff8e00'
      },
    },
  
}))
const Signup = () => {
  const classes = useStyles()
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
    <div className={classes.root}>
      <h2 className={classes.title}>アカウント登録</h2>
      <div className={classes.form}>
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
      </div>
      <div>
        <PrimaryButton
          label={"SIGN UP"}
          onClick={() =>
            dispatch(SignUp(username, email, password, confirmpass))
          }
        />
        <p className={classes.text} onClick={() => dispatch(push('/signin'))}>アカウントをお持ちの方はこちら</p>
      </div>
    </div>
  );
};

export default Signup;

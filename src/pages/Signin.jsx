import React, { useCallback, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SignIn } from "../reducks/users/operations";
import { makeStyles } from "@material-ui/core";

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
    transition: theme.transitions.create(
      ['color'],
      {duration: theme.transitions.duration.complex}
    ),
    "&:hover": {
      color:'#ff8e00'
    },
  },

}))
const Signin = () => {
  const classes = useStyles()
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
    <div className={classes.root}>
      <h2 className={classes.title}>サインイン</h2>
      <div className={classes.form}>
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
      </div>
      <div>
        <br />
        <PrimaryButton
          label={"SIGN IN"}
          onClick={() => dispatch(SignIn(email, password))}
        />
      </div>
    </div>
  );
};

export default Signin;

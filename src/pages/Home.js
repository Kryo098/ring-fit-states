import React, { useCallback, useState } from "react";
import { getUserId, getUsername } from "../reducks/users/selectors";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { HomeMenuItem } from "../components/HomeMenuItem";

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
});

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const name = getUsername(selector);
  const [open,setOpen] =useState(false)

  const handleToggle = useCallback(
    (e) => {
      setOpen(!open)
    },
    [setOpen,open]
  )
  const classes = useStyles();
  
  return (
    <div className="App">
      <p>Home</p>
      <p>{uid}</p>
      <p>{name}</p>
      <Box>
        <FormControlLabel
          control={<Switch  onChange={handleToggle} />}
          label="Show"
        />
        <Box sx={{justifyContent: "center", bgcolor: "red" ,width:"90%", margin:"0 auto" }}>
          <HomeMenuItem open={open} onClose={handleToggle}/>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
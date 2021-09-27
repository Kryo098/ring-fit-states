import React from "react";
import { getUsername } from "../reducks/users/selectors";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { HomeMenuItem } from "../components/HomeMenuItem";
import { HomeChart } from "../components/HomeChart";

const Home = () => {
  const selector = useSelector((state) => state)
  const name = getUsername(selector);

  return (
    <div className="App">
      <h2>ようこそ！{name}</h2>
      <HomeChart />
      <Box
        sx={{
          justifyContent: "center",
          bgcolor: "red",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <HomeMenuItem />
      </Box>
    </div>
  );
};

export default Home;

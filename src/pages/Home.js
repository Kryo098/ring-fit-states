import React from "react";
import { getUserId, getUsername } from "../reducks/users/selectors";
import { useSelector } from "react-redux";
const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const name = getUsername(selector);

  return (
    <div className="App">
      <p>Home</p>
      <p>{uid}</p>
      <p>{name}</p>
    </div>
  );
};

export default Home;

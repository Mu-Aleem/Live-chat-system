import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/Slices/UserSlice";
import { logout } from "../../utils/auth";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";

const useStyles = makeStyles((theme) => ({
  Wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const UserDetails = localStorage.getItem("chatuser");
    if (!UserDetails) {
      logout();
    } else {
      dispatch(setUserDetails(JSON.parse(UserDetails)));
      connectWithSocketServer(JSON.parse(UserDetails));
    }
  }, []);
  return (
    <>
      <Box className={classes.Wrapper}>
        <SideBar />
        <FriendsSideBar />
        <Messenger />
        <AppBar />
      </Box>
    </>
  );
};

export default Dashboard;

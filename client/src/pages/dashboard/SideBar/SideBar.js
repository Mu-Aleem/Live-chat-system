import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202225",
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.maincontainer}>
        <MainPageButton />
        <CreateRoomButton />
      </Box>
    </>
  );
};

export default SideBar;

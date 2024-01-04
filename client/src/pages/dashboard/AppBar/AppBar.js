import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    backgroundColor: "#36393f",
    position: "absolute",
    top: 0,
    right: 0,
    borderBottom: "1px solid #000",
    height: "48px",
    width: "calc(100% - 295px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
  },
}));

const AppBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.maincontainer}>
        <ChosenOptionLabel />
        <DropdownMenu />
      </Box>
    </>
  );
};

export default AppBar;

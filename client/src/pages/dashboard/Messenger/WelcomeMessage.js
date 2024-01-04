import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const WelcomeMessage = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.maincontainer}>
        <Typography variant="h6" sx={{ color: "white" }}>
          To start chatting - choose conversation
        </Typography>
      </Box>
    </>
  );
};

export default WelcomeMessage;

import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: "#36393f",
    marginTop: "48px",
    color: "#FFFFFF",
  },
}));

const Messenger = () => {
  const classes = useStyles();
  const ChosenDetails = useSelector((state) => state.chat.chosen_chat_details);

  return (
    <>
      <Box className={classes.maincontainer}>
        {!ChosenDetails ? <WelcomeMessage /> : <MessengerContent />}
      </Box>
    </>
  );
};

export default Messenger;

import React, { useEffect } from "react";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { getDirectChatHistory } from "../../../realtimeCommunication/socketConnection";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    flexGrow: 1,
  },
}));

const MessengerContent = () => {
  const classes = useStyles();
  const chosenChatDetails = useSelector(
    (state) => state.chat.chosen_chat_details
  );
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);
  return (
    <>
      <Box className={classes.maincontainer}>
        <Messages />
        <NewMessageInput />
      </Box>
    </>
  );
};

export default MessengerContent;

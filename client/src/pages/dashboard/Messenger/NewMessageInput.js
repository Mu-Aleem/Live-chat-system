import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Box, Input } from "@mui/material";
import { sendDirectMessage } from "../../../realtimeCommunication/socketConnection";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    backgroundColor: "#2f3136",
    width: "98%",
    height: "44px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "0 10px",
    border: "1px solid white",
    color: "white !important",
    "&:focus": {
      border: "none !important",
      color: "white",
    },
  },
}));

const NewMessageInput = () => {
  const classes = useStyles();
  const chosenChatDetails = useSelector(
    (state) => state.chat.chosen_chat_details
  );

  const [message, setMessage] = useState("");
  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
      setMessage("");
    }
  };

  return (
    <>
      <Box className={classes.maincontainer}>
        <Input
          className={classes.Input}
          placeholder={`Write message to ${chosenChatDetails?.name}`}
          value={message}
          onChange={handleMessageValueChange}
          onKeyDown={handleKeyPressed}
        />
      </Box>
    </>
  );
};

export default NewMessageInput;

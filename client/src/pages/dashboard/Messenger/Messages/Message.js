import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "../../../../shared/component/Avatar";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    width: "97%",
    display: "flex",
    marginTop: "10px",
  },
  AvatarContainer: {
    width: "70px",
  },
  MessageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  MessageContent: {
    color: "#DCDDDE",
  },
  SameAuthorMessageContent: {
    color: "#DCDDDE",
    width: "97%",
  },
  SameAuthorMessageText: {
    marginLeft: "70px",
  },
}));

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
  const classes = useStyles();

  if (sameAuthor && sameDay) {
    return (
      <Box className={classes.SameAuthorMessageContent}>
        <Box className={classes.SameAuthorMessageText}>{content}</Box>
      </Box>
    );
  }

  return (
    <>
      <Box className={classes.maincontainer}>
        <Box className={classes.AvatarContainer}>
          <Avatar username={username} />
        </Box>
        <Box className={classes.MessageContainer}>
          <Typography style={{ fontSize: "16px", color: "white" }}>
            {username}{" "}
            <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
          </Typography>
          <Box className={classes.MessageContent}>{content}</Box>
        </Box>
      </Box>
    </>
  );
};

export default Message;

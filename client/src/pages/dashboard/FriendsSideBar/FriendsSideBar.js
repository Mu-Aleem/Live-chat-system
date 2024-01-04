import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import AddFriendButton from "./AddFriendButton";
import FriendsList from "./FriendsList/FriendsList";
import FriendsTitle from "./FriendsTitle";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2f3136",
  },
}));

const FriendsSideBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.maincontainer}>
        <AddFriendButton />
        <FriendsTitle title="Private Messages" />
        <FriendsList />
        <FriendsTitle title="Invitations" />
        <PendingInvitationsList />
      </Box>
    </>
  );
};

export default FriendsSideBar;

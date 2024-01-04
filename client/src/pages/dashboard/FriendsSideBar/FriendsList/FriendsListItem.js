import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../../../shared/component/Avatar";
import Typography from "@mui/material/Typography";
import OnlineIndicator from "./OnlineIndicator";
import { useDispatch } from "react-redux";
import {
  set_chosen_chat_details,
  chatTypes,
} from "../../../../redux/Slices/ChatSlice";

const FriendsListItem = ({ id, username, isOnline }) => {
  const dispatch = useDispatch();

  const SetChosenConversaction = () => {
    dispatch(
      set_chosen_chat_details({
        id: id,
        name: username,
        chatTypes: chatTypes.DIRECT,
      })
    );
  };

  return (
    <Button
      onClick={SetChosenConversaction}
      style={{
        width: "100%",
        height: "35px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
        marginBottom: "15px",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;

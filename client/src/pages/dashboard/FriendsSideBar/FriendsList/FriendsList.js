import React from "react";
import FriendsListItem from "./FriendsListItem";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

// const DUMMY_FRIENDS = [
//   {
//     id: 1,
//     username: "Mark",
//     isOnline: true,
//   },
//   {
//     id: 2,
//     username: "Anna",
//     isOnline: false,
//   },
//   {
//     id: 3,
//     username: "John",
//     isOnline: false,
//   },
// ];

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    flexGrow: 1,
    width: "100%",
  },
}));

const FriendsList = () => {
  const classes = useStyles();
  const FriendsList = useSelector((state) => state.Friends.friends);
  const OnlineFriendsList = useSelector((state) => state.Friends.onlineUsers);

  const CheckOnline = (id) => {
    const FilterData = OnlineFriendsList.find((onlineuser) => {
      return onlineuser.userId === id ? true : false;
    });
    return FilterData;
  };

  // console.log("OnlineFriendsList", OnlineFriendsList);

  return (
    <Box className={classes.maincontainer}>
      {FriendsList &&
        FriendsList?.map((f) => (
          <FriendsListItem
            username={f.username}
            id={f.id}
            key={f.id}
            isOnline={CheckOnline(f.id)}
          />
        ))}
    </Box>
  );
};

export default FriendsList;

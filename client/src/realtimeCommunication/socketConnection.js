import io from "socket.io-client";
import store from "../redux/store";
import {
  setpendingFriendsInvitations,
  setFriendsList,
  setOnlineList,
} from "../redux/Slices/FriendsSlice";

import { updateDirectChatHistoryIfActive } from "../utils/chat";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("succesfully connected with socket.io server");
    console.log(socket.id);
  });

  // get the all invited friends
  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setpendingFriendsInvitations(pendingInvitations));
  });

  // get the list of  friends

  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriendsList(friends));
  });

  // get the online users

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    // console.log("onlineUsers", onlineUsers);
    store.dispatch(setOnlineList(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    console.log("direct-chat-history", data);
    updateDirectChatHistoryIfActive(data);
  });
};

export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
};
export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

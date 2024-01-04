import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import FriendsSlice from "./Slices/FriendsSlice";
import UserSlice from "./Slices/UserSlice";
import ChatSlice from "./Slices/ChatSlice";
import RoomSlice from "./Slices/RoomSlice";

const reducer = combineReducers({
  userDetails: UserSlice,
  Friends: FriendsSlice,
  chat: ChatSlice,
  RoomSlice: RoomSlice,
});
const store = configureStore({
  reducer,
});
export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const FriendsSlice = createSlice({
  name: "FriendsSlice",
  initialState,
  reducers: {
    setpendingFriendsInvitations(state, action) {
      state.pendingFriendsInvitations = action.payload;
    },
    setFriendsList(state, action) {
      state.friends = action.payload;
    },
    setOnlineList(state, action) {
      state.onlineUsers = action.payload;
    },
  },
});

export const { setpendingFriendsInvitations, setFriendsList, setOnlineList } =
  FriendsSlice.actions;
export default FriendsSlice.reducer;

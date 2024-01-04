import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
  isUserJoinedWithOnlyAudio: false,
};

const RoomSlice = createSlice({
  name: "RoomSlice",
  initialState,
  reducers: {
    isUserInRoomAndisUserRoomCreator(state, action) {
      console.log("action and payload", action.payload);
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreator = action.payload.isUserRoomCreator;
    },
  },
});

export const { isUserInRoomAndisUserRoomCreator } = RoomSlice.actions;
export default RoomSlice.reducer;

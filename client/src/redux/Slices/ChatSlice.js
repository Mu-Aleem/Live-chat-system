import { createSlice } from "@reduxjs/toolkit";

export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

const initialState = {
  chosen_chat_details: null,
  messages: null,
};

const ChatSlice = createSlice({
  name: "ChatSlice",
  initialState,
  reducers: {
    set_chosen_chat_details(state, action) {
      state.chosen_chat_details = action.payload;
    },
    SetMessage(state, action) {
      state.messages = action.payload;
    },
  },
});

export const { set_chosen_chat_details, SetMessage } = ChatSlice.actions;
export default ChatSlice.reducer;

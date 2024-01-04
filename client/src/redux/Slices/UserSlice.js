import { createSlice } from "@reduxjs/toolkit";
// createAsyncThunk
const initialState = {
  updateData: [],
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state.updateData = action.payload;
    },
  },
});

export const { setUserDetails } = UserSlice.actions;
export default UserSlice.reducer;

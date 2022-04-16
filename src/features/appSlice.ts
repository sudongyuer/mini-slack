import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState={
  roomId : string|null
}
const initialState:initialState={
  roomId: null,
}
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action:PayloadAction<initialState>) => {
      console.log(action);
      
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state:any) => state.app.roomId;

export default appSlice.reducer;

import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

interface initialState {
  roomId: string|null
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
const initialState: initialState = {
  roomId: null,
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action: PayloadAction<initialState>) => {
      console.log(action)

      state.roomId = action.payload.roomId
    },
  },
})

export const { enterRoom } = appSlice.actions

export const selectRoomId = (state: RootState) => state.app.roomId

export default appSlice.reducer

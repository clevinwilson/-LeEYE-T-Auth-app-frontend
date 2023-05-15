import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.value = action.payload
        },
        setSignoutState: (state) => {
            state.value={};
        }
    }
})

export const { setSignoutState, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
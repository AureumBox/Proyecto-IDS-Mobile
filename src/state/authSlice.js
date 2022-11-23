import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false,
        token: null,
    },
    reducers: {
        logIn: (state, action) => {
            state.token = action.payload.token;
            state.logged = true;
        },
    },
})

export const { logIn } = authSlice.actions
export default authSlice.reducer;

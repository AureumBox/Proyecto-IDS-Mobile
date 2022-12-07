import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false,
        token: null,
    },
    reducers: {
        'logIn': (state, { payload }) => {
            console.log("entro");
            state.token = payload;
            state.logged = true;
        },
    },
})

export const { logIn } = authSlice.actions
export default authSlice.reducer;

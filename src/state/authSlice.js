import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false,
        token: null,
        username: "",
        currentEventId: 0,
        money: 0,
        code: null,
    },
    reducers: {
        'logIn': (state, { payload }) => {
            state.token = payload;
            state.logged = true;
        },
        'setCurrentEventId': (state, { payload }) => {
            state.currentEventId = payload;
        },
        'setMoney': (state, { payload }) => {
            console.log("cambiando aa"+payload)
            state.money = payload;
        },
        'setUsername': (state, { payload }) => {
            state.username = payload;
        },
        'setCode': (state, { payload }) => {
            state.code = payload;
        }
    },
})

export const { logIn, setCurrentEventId, setMoney, setUsername, setCode } = authSlice.actions
export default authSlice.reducer;

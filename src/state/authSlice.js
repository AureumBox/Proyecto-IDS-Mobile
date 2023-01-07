import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false,
        token: null,
        currentEventId: 0,
        money: 0,
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
            state.money = payload;
        }
    },
})

export const { logIn, setCurrentEventId, setMoney } = authSlice.actions
export default authSlice.reducer;

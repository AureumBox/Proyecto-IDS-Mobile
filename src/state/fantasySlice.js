import { createSlice } from "@reduxjs/toolkit";

export const fantasySlice = createSlice({
  name: "fantasy",
  initialState: {
    selectedPlayer: {},
    bench: [],
  },
  reducers: {
    setSelectedPlayer: (state, action) => {
      console.log('unu')
      state.selectedPlayer = action.payload;
      console.log('slice'+JSON.stringify(state.selectedPlayer))
    },
    setBench: (state, action) => {
      state.bench = action.payload;
    },
  },
});

export const { setSelectedPlayer, setBench } = fantasySlice.actions;
export default fantasySlice.reducer;
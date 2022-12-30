import { createSlice } from "@reduxjs/toolkit";

export const fantasySlice = createSlice({
  name: "fantasy",
  initialState: {
    selectedPlayer: {},
    bench: [],
  },
  reducers: {
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
    setBench: (state, action) => {
      state.bench = action.payload;
    },
  },
});

export const { setSelectedPlayer, setBench } = fantasySlice.actions;
export default fantasySlice.reducer;
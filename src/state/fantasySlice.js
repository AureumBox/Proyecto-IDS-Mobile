import { createSlice } from "@reduxjs/toolkit";

export const fantasySlice = createSlice({
  name: "fantasy",
  initialState: {
    selectedPlayer: {},
    bench: [],
    points: 0,
  },
  reducers: {
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
    setBench: (state, action) => {
      state.bench = action.payload;
    },
    setPoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { setSelectedPlayer, setBench, setPoints } = fantasySlice.actions;
export default fantasySlice.reducer;

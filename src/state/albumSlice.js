import { createSlice } from "@reduxjs/toolkit";


export const albumSlice = createSlice({
  name: "album",
  initialState: {
    percentage: 1,
    teamList: [],
    currentTeam: {
        index: 0,
        id: 0, 
        name: null,
        stickers: [],
        obtainedCount: 0,
    },
    event: 1
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload;
    },
    setTeamList: (state, action) => {
      state.teamList = action.payload;
      console.log('desde setEamList');
    },
    setCurrentTeam: (state, action) => {
      const { index, id, name, stickers, obtainedCount } = action.payload;

      state.currentTeam.index = index;
      state.currentTeam.id = id;
      state.currentTeam.name = name;
      state.currentTeam.stickers = stickers;
      state.currentTeam.obtainedCount = obtainedCount;
    },
    setTeamStickers: (state, action) => {
      state.currentTeam.stickers = action.payload;
    },
    setPercentage: (state, action) => {
      state.percentage = action.payload;
    }
  },
});

export const {
  setTeamList,
  setTeamStickers,
  setTeam,
  setEvent,
  setPercentage,
  setCurrentTeam
} = albumSlice.actions;
export default albumSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const albumSlice = createSlice({
  name: "album",
  initialState: {
    event: 1,
    percentage: 1,
    teamList: [],
    idStickerSelected: 0,
    currentTeam: {
      index: 0,
      id: 0,
      name: "",
      stickers: [],
      obtainedCount: 0,
    },
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload;
    },
    setTeamList: (state, action) => {
      state.teamList = action.payload;
    },
    setIdStickerSelected: (state, action) => {
      state.idStickerSelected = action.payload;
    },
    setCurrentTeam: (state, action) => {
      const { id, name, obtainedCount } = action.payload;

      state.currentTeam.id = id;
      state.currentTeam.name = name;
      state.currentTeam.obtainedCount = obtainedCount;
    },
    setStickers: (state, action) => {
      state.currentTeam.stickers = action.payload;
    },
    setPercentage: (state, action) => {
      state.percentage = action.payload;
    },
    setNextIndex: (state) => {
      if (state.currentTeam.index + 1 < state.teamList.length) {
        state.currentTeam.index++;
      }
    },
    setIndex: (state) => {
      state.currentTeam.index = action.payload;
    },
    setPrevIndex: (state) => {
      if (state.currentTeam.index - 1 >= 0) {
        state.currentTeam.index--;
      }
    },
  },
});

export const {
  setTeamList,
  setTeam,
  setEvent,
  setPercentage,
  setCurrentTeam,
  setNextIndex,
  setPrevIndex,
  setStickers,
  setIdStickerSelected,
  setIndex,
} = albumSlice.actions;
export default albumSlice.reducer;

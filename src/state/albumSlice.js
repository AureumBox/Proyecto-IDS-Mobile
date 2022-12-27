import { createSlice } from "@reduxjs/toolkit";

const STICKER_PER_PAGE = 6;

export const albumSlice = createSlice({
  name: "album",
  initialState: {
    event: 1,
    percentage: 1,
    teamList: [],
    idStickerSelected: 0,
    currentTeam: {
      stickers: [],
      index: 0,
      id: 0,
      name: "",
      pages: 0,
      currentPage: 0,
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
      state.currentTeam.pages = ((Math.ceil(obtainedCount/STICKER_PER_PAGE)));
      state.currentTeam.currentPage = 1;
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
    setIndex: (state, action) => {
      state.currentTeam.index = action.payload;
    },
    setPrevIndex: (state) => {
      if (state.currentTeam.index - 1 >= 0) {
        state.currentTeam.index--;
      }
    },
    setNextPage: (state) => {
      if (state.currentTeam.currentPage < state.currentTeam.pages){
        state.currentTeam.currentPage++;
        state.currentTeam.index = state.currentTeam.index
      
      }
    },
    setPrevPage: (state) => {
      state.currentTeam.currentPage--;
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
  setNextPage,
  setPrevPage,
} = albumSlice.actions;
export default albumSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

const STICKER_PER_PAGE = 6;

export const albumSlice = createSlice({
  name: "album",
  initialState: {
    event: 1,
    percentage: 1,
    teamList: [],
    idStickerSelected: 0,
    lastPagePrevTeam: 0,
    currentTeam: {
      stickers: [],
      index: 0,
      id: 0,
      name: "",
      pages: 0,
      currentPage: 1,
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
      state.currentTeam.pages = Math.ceil(obtainedCount / STICKER_PER_PAGE);
    },
    setStickers: (state, action) => {
      state.currentTeam.stickers = action.payload;
    },
    setPercentage: (state, action) => {
      state.percentage = action.payload;
    },
    setNextIndex: (state) => {
      if (state.currentTeam.index + 1 < state.teamList.length) {
        state.lastPagePrevTeam = state.currentTeam.pages;
        state.currentTeam.index++;
        state.currentTeam.currentPage = 1;
      }
    },
    setIndex: (state, action) => {
      state.currentTeam.index = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentTeam.currentPage = action.payload;
    },
    setPrevIndex: (state) => {
      if (state.currentTeam.index - 1 >= 0) {
        state.currentTeam.index--;
        state.currentTeam.currentPage = state.lastPagePrevTeam;

        const teamList = current(state.teamList);
        
        if ((state.currentTeam.index - 1) > 0) {
          state.lastPagePrevTeam = Math.ceil(
            teamList[state.currentTeam.index - 1].stickers.length /
              STICKER_PER_PAGE
          );
        }
      }
    },
    setNextPage: (state) => {
      if (state.currentTeam.currentPage < state.currentTeam.pages) {
        state.currentTeam.currentPage++;
        state.currentTeam.index = state.currentTeam.index;
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
  setCurrentPage,
  setNextIndex,
  setPrevIndex,
  setStickers,
  setIdStickerSelected,
  setIndex,
  setNextPage,
  setPrevPage,
} = albumSlice.actions;
export default albumSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
      obtainedCount: 0,
      pages: 0,
      currentPage: 0,
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
      console.log(Math.ceil(obtainedCount/9))
      state.currentTeam.pages = (Math.ceil(obtainedCount/9));
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
        // TODO: Esto debe refactorizarse amiwos xd... By Hector
        const index = state.currentTeam.index;
        state.currentTeam.id = state.teamList[index].id;
        state.currentTeam.name = state.teamList[index].name;
        state.currentTeam.obtainedCount = state.teamList[index].stickers.length;
      }
    },
    setIndex: (state, action) => {
      console.log('>')
      state.currentTeam.index = action.payload;
    },
    setPrevIndex: (state) => {
      if (state.currentTeam.index - 1 >= 0) {
        state.currentTeam.index--;
        // TODO: Esto debe refactorizarse amiwos xd... By Hector
        const index = state.currentTeam.index;
        state.currentTeam.id = state.teamList[index].id;
        state.currentTeam.name = state.teamList[index].name;
        state.currentTeam.obtainedCount = state.teamList[index].stickers.length;
      }
    },
    setNextPage: (state) => {
      if (state.currentTeam.currentPage < state.currentTeam.pages)
        state.currentTeam.currentPage++;
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

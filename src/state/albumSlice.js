import { createSlice } from "@reduxjs/toolkit";

const qwertybb = {
  auth: {
    logged: true,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6NSwibmFtZSI6IkF1cmkgIiwicm9sZSI6InVzZXIiLCJlbWFpbCI6ImFzQGRmLmdnZyIsInBhc3N3b3JkIjoiJDJiJDEwJHJJdHByWXFqLmIzdkRuVmsuc0p2Vk9jVFpmaEhxQXRza0M3OU1qSncvN0RKdHFYOWlDS0dPIiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0xM1QwMDo0NzoxOS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0xM1QwMDo0NzoxOS4wMDBaIn0sImlhdCI6MTY3MTQ1ODIyNSwiZXhwIjoxNjcxNTQ0NjI1fQ.b5iG12uRsF4c0yy2-kVd6ZZVLzW-ffPxNXCYCwwtNxk",
  },
  album: {
    percentage: 0,
    teamList: [
      {
        id: 1,
        name: "Brasil",
        badge:
          "https://backend-staging.playoffside.online/uploads/img/Brasil-9ad88d55-db32-442d-99c5-37ee06748acb.png",
        createdAt: "2022-12-14T04:41:38.000Z",
        updatedAt: "2022-12-14T04:41:38.000Z",
        idEvents: 1,
        stickers: [
          {
            id: 1,
            playerName: "Salcedinho",
            country: "Venezuela",
            position: "Delantero",
            img: "https://backend-staging.playoffside.online/uploads/img/ger_24-98990f6f-ec12-477e-88e8-c52bf61722b6.png",
            height: 170,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-16T15:24:47.000Z",
            updatedAt: "2022-12-16T15:24:47.000Z",
            teamId: 1,
          },
          {
            id: 3,
            playerName: "Ale",
            country: "Venezuela",
            position: "Defensa",
            img: "https://backend-staging.playoffside.online/uploads/img/ger_11-221de09a-2338-41cf-8dc8-bcabb6a9d136.png",
            height: 160,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-16T15:35:39.000Z",
            updatedAt: "2022-12-16T15:35:39.000Z",
            teamId: 1,
          },
          {
            id: 7,
            playerName: "Jesussinho",
            country: "Venezuela",
            position: "Delantero",
            img: "https://backend-staging.playoffside.online/uploads/img/ger_26-3ef50467-f6e3-4387-97be-e44c99f1eae8.png",
            height: 180,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-17T04:06:15.000Z",
            updatedAt: "2022-12-17T04:06:15.000Z",
            teamId: 1,
          },
          {
            id: 9,
            playerName: "Héctor",
            country: "Venezuela",
            position: "Defensa",
            img: "https://backend-staging.playoffside.online/uploads/img/hector-67522a67-7099-48a4-b271-85a40010e75d.png",
            height: 170,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-17T04:18:58.000Z",
            updatedAt: "2022-12-17T04:18:58.000Z",
            teamId: 1,
          },
          {
            id: 10,
            playerName: "Sticker1",
            country: "Venezuela",
            position: "Defensa",
            img: "https://backend-staging.playoffside.online/uploads/img/pol_20-1a43b29f-9634-4578-b048-eead645f9937.png",
            height: 170,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-17T04:43:16.000Z",
            updatedAt: "2022-12-17T04:43:16.000Z",
            teamId: 1,
          },
          {
            id: 11,
            playerName: "Sticker2",
            country: "Venezuela",
            position: "Defensa",
            img: "https://backend-staging.playoffside.online/uploads/img/pol_22-84ffb39f-cd49-4640-9fb0-de045fd3f9e5.png",
            height: 170,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-17T04:43:34.000Z",
            updatedAt: "2022-12-17T04:43:34.000Z",
            teamId: 1,
          },
          {
            id: 12,
            playerName: "Sticker3",
            country: "Venezuela",
            position: "Defensa",
            img: "https://backend-staging.playoffside.online/uploads/img/ger_2-9c7dcc7e-c177-4d1c-b9c8-d443442479d3.png",
            height: 170,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-17T04:43:57.000Z",
            updatedAt: "2022-12-17T04:43:57.000Z",
            teamId: 1,
          },
        ],
        event: {
          id: 1,
          eventName: "Mundial de Qatar 2022",
          status: true,
          createdAt: "2022-12-14T04:40:30.000Z",
          updatedAt: "2022-12-14T04:40:30.000Z",
        },
      },
      {
        id: 2,
        name: "Mimidos Fc",
        badge:
          "https://backend-staging.playoffside.online/uploads/img/meme-mcgregor-f83e6f5f-db36-4ddb-ba80-aa1fa4b1c516.jpg",
        createdAt: "2022-12-16T03:00:38.000Z",
        updatedAt: "2022-12-16T03:00:38.000Z",
        idEvents: 1,
        stickers: [
          {
            id: 2,
            playerName: "Cristinini",
            country: "Venezuela",
            position: "MedioCentro",
            img: "https://backend-staging.playoffside.online/uploads/img/pol_2-c3aaad59-260b-4afb-813f-665456ca24e7.png",
            height: 130,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-16T15:31:20.000Z",
            updatedAt: "2022-12-16T15:31:20.000Z",
            teamId: 2,
          },
          {
            id: 4,
            playerName: "AuriGod",
            country: "Venezuela",
            position: "Arquero",
            img: "https://backend-staging.playoffside.online/uploads/img/ksa_10-514926f7-5b88-413b-a753-213ce9b6b828.png",
            height: 160,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-16T15:58:50.000Z",
            updatedAt: "2022-12-16T15:58:50.000Z",
            teamId: 2,
          },
          {
            id: 5,
            playerName: "José Andrés",
            country: "Venezuela",
            position: "MedioCentro",
            img: "https://backend-staging.playoffside.online/uploads/img/pol_11-67405e90-2bcd-4b3a-8f02-77d3d4db76cc.png",
            height: 120,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-17T04:01:05.000Z",
            updatedAt: "2022-12-17T04:01:05.000Z",
            teamId: 2,
          },
          {
            id: 6,
            playerName: "Ranna",
            country: "Venezuela",
            position: "Defensa",
            img: "https://backend-staging.playoffside.online/uploads/img/pol_25-7140d94a-2335-47e1-91ec-c02e9e253d77.png",
            height: 120,
            weight: 65,
            appearanceRate: 50,
            createdAt: "2022-12-17T04:01:42.000Z",
            updatedAt: "2022-12-17T04:01:42.000Z",
            teamId: 2,
          },
        ],
        event: {
          id: 1,
          eventName: "Mundial de Qatar 2022",
          status: true,
          createdAt: "2022-12-14T04:40:30.000Z",
          updatedAt: "2022-12-14T04:40:30.000Z",
        },
      },
    ],
    currentTeam: {
      index: 0,
      id: 1,
      name: "Brasil",
      stickers: 0,
      obtainedCount: 7,
    },
    event: 1,
  },
};

export const albumSlice = createSlice({
  name: "album",
  initialState: {
    percentage: 1,
    teamList: [],
    currentTeam: {
      index: 0,
      id: 0,
      name: "",
      stickers: [],
      obtainedCount: 0,
    },
    event: 1,
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload;
    },
    setTeamList: (state, action) => {
      state.teamList = action.payload;
      console.log("desde setEamList");
    },
    setCurrentTeam: (state, action) => {
      const { index, id, name, stickers, obtainedCount } = action.payload;

      console.log(name);
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
    },
    setNextIndex: (state, action) => {
      const indice = state.currentTeam.index
      console.log(indice)
      console.log(indice)
      console.log((state.currentTeam.index++)+' <= '+(state.teamList.length--))
      if (indice <= state.teamList.length-1) {
        console.log('entro a next')
        state.currentTeam.index = indice;
      } 
    },
    setPrevIndex: (state, action) => {
      console.log((state.currentTeam.index-1)+' > 0')
      if (state.currentTeam.index-1 > 0) {
        console.log('entro a prev')
        state.currentTeam.index = state.currentTeam.index-1;
      }
    },
  },
});

export const {
  setTeamList,
  setTeamStickers,
  setTeam,
  setEvent,
  setPercentage,
  setCurrentTeam,
  setNextIndex,
  setPrevIndex,
} = albumSlice.actions;
export default albumSlice.reducer;

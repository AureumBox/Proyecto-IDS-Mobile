import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import RankingCard from "./RankingCard";

export default function RankingList({
  ranking = [],
  paginate = {},
  setPage = 0,
}) {
  const data = [
    {
      id: 11,
      points: 235,
      userId: 17,
      eventId: 1,
      rank: 1,
      user: {
        name: "José Andrés",
      },
    },
    {
      id: 85,
      points: 63,
      userId: 71,
      eventId: 1,
      rank: 2,
      user: {
        name: "w",
      },
    },
    {
      id: 6,
      points: 52,
      userId: 55,
      eventId: 1,
      rank: 3,
      user: {
        name: "adios",
      },
    },
    {
      id: 53,
      points: 25,
      userId: 24,
      eventId: 1,
      rank: 4,
      user: {
        name: "Cristinini",
      },
    },
    {
      id: 59,
      points: 25,
      userId: 22,
      eventId: 1,
      rank: 5,
      user: {
        name: "Luis Rivas",
      },
    },
    {
      id: 98,
      points: 23,
      userId: 74,
      eventId: 1,
      rank: 6,
      user: {
        name: "xd",
      },
    },
    {
      id: 68,
      points: 15,
      userId: 67,
      eventId: 1,
      rank: 7,
      user: {
        name: "abc",
      },
    },
    {
      id: 81,
      points: 15,
      userId: 70,
      eventId: 1,
      rank: 8,
      user: {
        name: "y",
      },
    },
    {
      id: 3,
      points: 0,
      userId: 48,
      eventId: 1,
      rank: 9,
      user: {
        name: "forero",
      },
    },
    {
      id: 21,
      points: 0,
      userId: 57,
      eventId: 1,
      rank: 10,
      user: {
        name: "Full",
      },
    },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      ListEmptyComponent={<Text>Ranking vacio</Text>}
      contentContainerStyle={{ width: "100%", alignSelf: "center" }}
      onEndReached={() => {
        if (paginate?.page < paginate?.pages - 1) {
          setPage(paginate?.page + 1);
        }
      }}
      renderItem={({ item }) => {
        return <RankingCard
          positionRanking={item?.rank}
          userRanking={item?.user?.name}
          userPoints={item?.points}
        />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textAñadir: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
    textAlign: "left",
  },
});

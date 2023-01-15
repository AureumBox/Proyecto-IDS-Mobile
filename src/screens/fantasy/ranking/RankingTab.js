import { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { AntDesign } from "@expo/vector-icons";

import * as fantasyServices from "../../../services/fantasy.services";
import RankingCard from "../ranking/RankingCard";
import RankingList from "./RankingList";

export default function RankingTab() {
  const { token } = useSelector((state) => state.auth);
  const { currentEventId } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [ranking, setRanking] = useState(false);
  const [page, setPage] = useState(0);
  const [paginate, setPaginate] = useState(0);
  const [myRanking, setMyRanking] = useState({});

  const positionRanking = 4; //Colocar aquí la posición del usuario en el ranking
  const userRanking = "Cristinini"; //Colocar aquí el nombre del usuario
  const userPoints = 1500; //Colocar aquí el puntaje del usuario

  const loadRanking = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fantasyServices.fetchRanking(
        token,
        currentEventId,
        page
      );

      if (page != 0) {
        setRanking((ranking) => ranking.concat(data?.items));
      } else {
        setRanking(data?.items);
      }
      setPaginate(data?.paginate);
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [page]);
  useEffect(() => {
    loadRanking();
  }, [loadRanking]);

  return (
    <View style={styles.Ranking}>
      <RankingCard
        positionRanking={positionRanking}
        userRanking={userRanking}
        userPoints={userPoints}
        isUser={true}
      />
      <View style={styles.containerRanking} />
      <RankingList paginate={paginate} ranking={ranking} setPage={setPage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRanking: {
    backgroundColor: "black",
    width: "90%",
    height: 2,
    marginTop: 15,
    marginBottom: 15,
  },
  Ranking: {
    flex: 0.85,
    flexDirection: "column",
    alignItems: "center",
  },
});

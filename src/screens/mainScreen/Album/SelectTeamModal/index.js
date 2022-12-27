import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { ModalPopup } from "../../../../components/ModalPopup";
import botonX from "../../../../../assets/appAssets/x.png";
import styles from '../styles';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTeam, setIndex, setFirstPage } from "../../../../state/albumSlice.js";
import OneTeam from "./OneTeam";

export default function SelectTeamModal({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const teamList = useSelector((state) => state.album.teamList);

  const changeCurrentTeamByIndex = (index) => {
    dispatch(setIndex(index))
    dispatch(
      setCurrentTeam({
        index,
        id: teamList[index].id,
        name: teamList[index].name,
        obtainedCount: teamList[index].stickers.length,
      })
    );
    onClose();
  }

  return (
    <ModalPopup visible={isVisible}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={onClose}>
            <Image source={botonX} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView>
        {/* Lista de equipos */}
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={
            <Text style={styles.listHeadLine}>Equipos</Text>
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={teamList}
          renderItem={({ item, index }) => {
            return (<OneTeam item={item} index={index} onPress={changeCurrentTeamByIndex} />);
          }}
        />
      </SafeAreaView>
    </ModalPopup>
  );
}
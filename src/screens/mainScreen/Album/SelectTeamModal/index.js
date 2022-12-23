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
import {
  setCurrentTeam,
} from "../../../../state/albumSlice.js";

export default function SelectTeamModal({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const teamList = useSelector((state) => state.album.teamList);

  const changeCurrentTeamByIndex = (index) => {
    dispatch(
      setCurrentTeam({
        index,
        id: teamList[index].id,
        name: teamList[index].name,
        obtainedCount: teamList[index].stickers.length,
      })
    );
  }

  return (
      <ModalPopup visible={isVisible}>
        {/* Ventana Emergente con el Filtro de Equipos */}
        <View style={{ alignItems: "center" }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose}>
              <Image source={botonX} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView>
          <FlatList
            ListHeaderComponentStyle={styles.listHeader}
            ListHeaderComponent={
              <Text style={styles.listHeadLine}>Filtrar por Equipos</Text>
            }
            ItemSeparatorComponent={<View style={styles.separator} />}
            data={teamList}
            renderItem={({ item, index }) => {
              return (<OneTeam item={item} index={index} onPress={changeCurrentTeamByIndex} />);
            }}
          />
        </SafeAreaView>
      </ModalPopup>
  );
}
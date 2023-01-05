import React from 'react';
import {
  StyleSheet,
  TouchableOpacity, View
} from "react-native";
import EmptyPlayer from './EmptyPlayer';
import FantasyPlayer from "./FantasyPlayer";

export default function Goalkeeper(players = {}) {
  return (
    <TouchableOpacity style={styles.container}>
      {players?.players?.map((player, index) => (
        <>
          {player?.emptyPlayer ? (
            <EmptyPlayer position={"Arquero"} />
          ) : (
            <FantasyPlayer player={player} />
          )}
        </>
      ))}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    backgroundColor: '#92278F80',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
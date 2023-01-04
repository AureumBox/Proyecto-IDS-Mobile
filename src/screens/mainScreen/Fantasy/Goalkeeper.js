import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from "react-native";
import EmptyPlayer from './EmptyPlayer';

export default function Goalkeeper() {
  return (
    // <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <EmptyPlayer position={'Arquero'} />
      </TouchableOpacity>
    // </View>
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
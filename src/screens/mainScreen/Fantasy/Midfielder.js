import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
  } from "react-native";
import EmptyPlayer from './EmptyPlayer';

  export default function Midfielder(){
    return(
        <TouchableOpacity style={styles.container}>
            <EmptyPlayer position={'MedioCentro'}/>
            <EmptyPlayer position={'MedioCentro'}/>
            <EmptyPlayer position={'MedioCentro'}/>
        </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
        backgroundColor: '#D96B3280',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
  })
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
  } from "react-native";
import EmptyPlayer from './EmptyPlayer';

  export default function Defender(){
    return(
        <TouchableOpacity style={styles.container}>
            <EmptyPlayer position={'Defensa'}/>
            <EmptyPlayer position={'Defensa'}/>
            <EmptyPlayer position={'Defensa'}/>
            <EmptyPlayer position={'Defensa'}/>
        </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
        backgroundColor: '#D2252B80',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
  })
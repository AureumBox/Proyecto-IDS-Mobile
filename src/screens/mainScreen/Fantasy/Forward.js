import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
  } from "react-native";
import EmptyPlayer from './EmptyPlayer';

  export default function Foward(){
    return(
        <TouchableOpacity style={styles.container}>
            <EmptyPlayer position={'Delantero'}/>
            <EmptyPlayer position={'Delantero'}/>
            <EmptyPlayer position={'Delantero'}/>
        </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
        backgroundColor: '#4EB43280',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
  })
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const {width} = Dimensions.get('window')

export default function HeadComponent() {
    return (
      <View style= {styles.header}>
        
        <View>
            <Text>Header</Text>
        </View> 
      </View>
    )
  }


const styles = StyleSheet.create({
    header: {
        width: width,
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
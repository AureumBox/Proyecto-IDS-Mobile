import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

function colorMedalla (positionRanking){
    switch (positionRanking){
        case 1:
            return '#D8B062';
        case 2:
            return '#9E9E9E';
        case 3:
            return '#947014';        
    }
    return '#3D405B';
}

export default function RankingCard({positionRanking, userRanking, userPoints, isUser = false}){
console.log(positionRanking)
    return(
    <View>
        <View style={styles.containerPosition}>
            <View style={styles.containerUser}>
                <View style={styles.containerIcon}>
                    {positionRanking == 1 ? ( <MaterialCommunityIcons name="medal-outline" size={35} color={colorMedalla(positionRanking)} /> ): null}   
                    {positionRanking == 2 ? ( <MaterialCommunityIcons name="medal-outline" size={35} color={colorMedalla(positionRanking)} /> ): null}    
                    {positionRanking == 3 ? ( <MaterialCommunityIcons name="medal-outline" size={35} color={colorMedalla(positionRanking)} /> ): null}    
                    {(isUser) ? ( <Entypo name="star" size={35} color={colorMedalla(positionRanking)} /> ): null}     
                </View>	
                <View style={styles.infoUser}>
                    <Text style={styles.text}>{userRanking}</Text>
                    <Text style={styles.text}>{userPoints}</Text>
                </View>	
            </View>	
                {positionRanking == 1 ? ( 
                <View style={styles.containerPos1}>
                    <Text style={styles.pos1}>{positionRanking}</Text>
                </View>	 ): null}   
                {positionRanking == 2 ? ( 
                <View style={styles.containerPos2}>
                    <Text style={styles.pos2}>{positionRanking}</Text>
                </View> ): null}    
                {positionRanking == 3 ? ( 
                <View style={styles.containerPos3}>
                    <Text style={styles.pos3}>{positionRanking}</Text>
                </View>	 ): null}    
                {positionRanking > 3 ? ( 
                <View style={styles.containerPos}>
                    <Text style={styles.pos}>{positionRanking}</Text>
                </View>	 ): null}     
        </View> 
        
    </View>                       
    );
}
const styles = StyleSheet.create({
    containerPosition:{
        width: '90%', 
        height: 60, 
        marginTop: 10, 
        flexDirection: 'row'
    },
    containerUser:{
        width: '75%', 
        height: 60, 
        backgroundColor: 'white', 
        borderTopLeftRadius: 15, 
        flexDirection: 'row'
    },
    containerIcon:{
        width: '25%', 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    infoUser:{
        width: '75%', 
        height: 60, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        marginLeft:5
    },
    text:{
        fontWeight: '500', 
        color: "#3D405B"
    },
    containerPos1:{
        width: '25%', 
        height: 60, 
        backgroundColor: '#FFE9BE', 
        borderBottomRightRadius: 15, 
        alignSelf: 'flex-end', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    pos1:{
        fontSize: 26, 
        color: '#D8B062', 
        fontWeight: '500'
    },
    containerPos:{
        width: '25%', 
        height: 60, 
        backgroundColor: '#CAC4D0', 
        borderBottomRightRadius: 15, 
        alignSelf: 'flex-end', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    containerPos2:{
        width: '25%', 
        height: 60, 
        backgroundColor: '#D9D9D9', 
        borderBottomRightRadius: 15, 
        alignSelf: 'flex-end', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    pos:{
        fontSize: 26, 
        color: '#3D405B', 
        fontWeight: '500'
    },
    pos2:{
        fontSize: 26, 
        color: '#9E9E9E', 
        fontWeight: '500'
    },
    containerPos3:{
        width: '25%', 
        height: 60, 
        backgroundColor: '#DCD3BD', 
        borderBottomRightRadius: 15, 
        alignSelf: 'flex-end', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    pos3:{
        fontSize: 26, 
        color: '#947014', 
        fontWeight: '500'
    }
})
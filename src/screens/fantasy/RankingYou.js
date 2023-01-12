import React from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Entypo } from '@expo/vector-icons';

import RankingFirstP from "./RankingFirstP";
import RankingSecondP from "./RankingSecondP";
import RankingThirdP from "./RankingThirdP";

export default function RankingYou({positionRanking, userRanking, userPoints}){

    return(
    <View>
        {positionRanking == 1 ? (
            <RankingFirstP/>
        ) : null}
        { positionRanking == 2 ? (
            <RankingSecondP/>
        ) : null}
        { positionRanking == 3 ? (
            <RankingThirdP/>
        ) : null}
        { positionRanking > 3 ?(
            <View style={styles.containerPosition}>
            <View style={styles.containerUser}>
            <View style={styles.containerIcon}>
            <Entypo name="star" size={35} color="#3D405B" />
            </View>	
            <View style={styles.infoUser}>
                <Text style={styles.text}>{userRanking}</Text>
                <Text style={styles.text}>{userPoints}</Text>
            </View>	
            </View>	
            <View style={styles.containerPos}>
            <Text style={styles.pos}>{positionRanking}</Text>
            </View>	
        </View>
        ) : null}
        
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
    containerPos:{
        width: '25%', 
        height: 60, 
        backgroundColor: '#CAC4D0', 
        borderBottomRightRadius: 15, 
        alignSelf: 'flex-end', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    pos:{
        fontSize: 26, 
        color: '#3D405B', 
        fontWeight: '500'
    }
})
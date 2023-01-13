import React from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RankingFirstP(){

    return(
        <View style={styles.containerPosition}>
								<View style={styles.containerUser}>
								<View style={styles.containerIcon}>
								<MaterialCommunityIcons name="medal-outline" size={35} color="#D8B062" />
								</View>	
								<View style={styles.infoUser}>
									<Text style={styles.text}>Noramisis</Text>
									<Text style={styles.text}>1400 pts</Text>
								</View>	
								</View>	
								<View style={styles.containerPos}>
								<Text style={styles.pos}>1</Text>
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
    containerPos:{
        width: '25%', 
        height: 60, 
        backgroundColor: '#FFE9BE', 
        borderBottomRightRadius: 15, 
        alignSelf: 'flex-end', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    pos:{
        fontSize: 26, 
        color: '#D8B062', 
        fontWeight: '500'
    }
})
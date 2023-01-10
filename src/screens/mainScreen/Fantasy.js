import React from "react";
import {
    StyleSheet,
    Text,
    TextComponent,
    View
} from "react-native";
import { Avatar } from 'react-native-paper';

export default function Fantasy() {
    return (
        <View style={styles.fondo}>
            <Text style={styles.titleRanking}>Ranking</Text>
            <View style={styles.contatop}>
                <Avatar.Text size={50} label="A" />
                <View style={styles.containterTextTop}>
                    <Text style={styles.textTop}>Noramisis</Text>
                    <Text style={styles.pointTop}>1400 PTS</Text>
                </View>
                <View style={styles.containerTop1}>
                    <Text style={styles.numberTop}>1</Text>
                </View>
            </View>
            <View style={styles.contatop}>
                <Avatar.Text size={50} label="A" />
                <View style={styles.containterTextTop}>
                    <Text style={styles.textTop}>Noramisis</Text>
                    <Text style={styles.pointTop}>1400 PTS</Text>
                </View>
                <View style={styles.containerTop2}>
                    <Text style={styles.numberTop}>2</Text>
                </View>
                
            </View>
            <View style={styles.contatop}>
                <Avatar.Text size={50} label="A" />
                <View style={styles.containterTextTop}>
                    <Text style={styles.textTop}>Noramisis</Text>
                    <Text style={styles.pointTop}>1400 PTS</Text>
                </View>
                <View style={styles.containerTop3}>
                    <Text style={styles.numberTop}>3</Text>
                </View>
                
            </View>
            <View style={styles.contatop}>
                <Avatar.Text size={50} label="A" />
                <View style={styles.containterTextTop}>
                    <Text style={styles.textTop}>Noramisis</Text>
                    <Text style={styles.pointTop}>1400 PTS</Text>
                </View>
                <View style={styles.containerTop4}>
                    <Text style={styles.numberTop}>4</Text>
                </View>
                
            </View>
            <View style={styles.contatop}>
                <Avatar.Text size={50} label="A" />
                <View style={styles.containterTextTop}>
                    <Text style={styles.textTop}>Noramisis</Text>
                    <Text style={styles.pointTop}>1400 PTS</Text>
                </View>
                <View style={styles.containerTop4}>
                    <Text style={styles.numberTop}>5</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#70ABAF',
    },
    titleRanking: {
        marginTop: 80,
        fontSize: 40,
        color: "#fff"
    },
    numberTop: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerTop1: {
        position: 'absolute',
        right: 0,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: '140%',
        backgroundColor: '#FFD700',
        borderBottomRightRadius: 20
    },
    containerTop2: {
        position: 'absolute',
        right: 0,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: '140%',
        backgroundColor: '#BEBEBE',
        borderBottomRightRadius: 20
    },
    containerTop3: {
        position: 'absolute',
        right: 0,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: '140%',
        backgroundColor: '#8e402a',
        borderBottomRightRadius: 20
    },
    containerTop4: {
        position: 'absolute',
        right: 0,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: '140%',
        backgroundColor: '#00aae4',
        borderBottomRightRadius: 20
    },
    textTop: {
        marginBottom: 5,
    },
    containterTextTop: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    fondo: {
        flex: 1,
        backgroundColor: '#70ABAF',
        alignItems: 'center',
    },
    top1: {
        color: '#C10001',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft:80,
        marginTop:20,
    },
    pointop1: {
        color: '#C10001',
        fontWeight: 'bold',
        fontSize: 10,
        marginLeft:90,
        marginTop:10,
    },
    contatop: {
        marginTop:30,
        backgroundColor: '#FFFF',
        width: "80%",
        border:3,      
        padding: 10,  
        flexDirection: 'row',
        position: 'relative',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    contatop2: {
        marginTop:10,
        marginLeft:40,
        backgroundColor: '#FFFF',
        width:250,
        height:95,
        border:3,        
    },
})

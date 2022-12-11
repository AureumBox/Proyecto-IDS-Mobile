import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";


export default function ProgressBar({completedPercent = 70}) {

    const [percent, setPercent] = useState(completedPercent)

    const completedBar = {
        width: `${percent}%`, //Para calcular el porcentaje de llenado de la barra
        height: '100%',
        backgroundColor: '#63130B',
        borderRadius: 10,
        flexDirection: 'row',
    }

    return (
        <View style={styles.containerPor}>
            <Text style={styles.texto}>{percent}%</Text>
            <View style={styles.barraPorcentaje}>
                <View style = {completedBar}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPor: {
        height: '100%',
        width: '90%',
        marginBottom: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    texto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 26,
    },
    pais: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
    },
    barraPorcentaje: {
        width: '60%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
})
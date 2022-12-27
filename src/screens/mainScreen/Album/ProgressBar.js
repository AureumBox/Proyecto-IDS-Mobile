import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
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
            <Text style={styles.texto}>{Math.trunc(percent)}%</Text>
            <View style={styles.barraPorcentaje}>
                <View style = {completedBar}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPor: {
        height: '6%',
        width: '90%',
        marginBottom: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 26,
        marginRight: 10
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
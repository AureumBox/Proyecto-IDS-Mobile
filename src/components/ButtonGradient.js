import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ButtonGradient = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                colors={['#710002', '#C10001', '#70ABAF', '#29555E']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.button}>
                <Text style={styles.text}>INICIAR SESIÓN</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        width: 250,
        marginTop: 60,
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default ButtonGradient;
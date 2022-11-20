import React, { useEffect, useState } from "react";
import * as Font from 'expo-font';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from "react-native";

export default function Album({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    useEffect(() => {
        if ( !fontsLoaded ) {
            loadFonts()
        }   
    })

    const loadFonts = async () => {
        await Font.loadAsync({
            'averta-demo-pe': require('../../../assets/fonts/Anton-Regular.ttf')
        })

        setFontsLoaded(true)
    }



    const { height } = Dimensions.get('window')

    return (
        <View style={styles.container}>
            <Text style={styles.textSt}>
                Album
            </Text>
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
    textSt: {
        fontWeight: 'bold',
        color: '#C10001',
        fontSize: 26,
        // fontFamily: 'averta-demo-pe',
    },
})
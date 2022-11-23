import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import Test from "../../components/Test";
import Header from '../../components/HeaderComponent';

export default function Home({ navigation }) {
    return (
        <View style={styles.fondo}>
        <Header/>
        <View style={styles.container}>
            <Test />
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
    fondo: {
        flex: 1,
        backgroundColor: '#70ABAF',
    },
    textSt: {
        color: '#C10001',
        fontWeight: 'bold',
        fontSize: 26,
    },
})
import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import Header from '../../components/HeaderComponent';

export default function Home({ navigation }) {
    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.textSt}>
                    Home
                </Text>
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
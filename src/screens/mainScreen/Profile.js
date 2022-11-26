import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from "react-native";
import Header from '../../components/HeaderComponent';

export default function Profile({ navigation }) {
    const { height } = Dimensions.get('window')

    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.textSt}>
                    Perfil
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
        fontWeight: 'bold',
        fontSize: 26,
        color: '#C10001'
    },
})
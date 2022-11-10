import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from "react-native";
// import SuperiorBar from "../../components/SuperiorBar";

export default function Inventory({ navigation }) {
    const { height } = Dimensions.get('window')

    return (
        <View style={styles.container}>
            <Text style={styles.textSt}>
                Tienda
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
        color: '#C10001',
        fontWeight: 'bold',
        fontSize: 26,
    },
})
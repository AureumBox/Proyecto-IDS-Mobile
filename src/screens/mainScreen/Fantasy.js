import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from "react-native";
// import SuperiorBar from "../../components/SuperiorBar";

export default function Fantasy({ navigation }) {
    const { height } = Dimensions.get('window')

    return (
        <View style={styles.container}>
            <Text style={styles.textSt}>
                Fantasy
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

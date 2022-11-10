import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'

export default class Test extends Component {
    render() {
        const { height } = Dimensions.get('window')
        return (
            <View style={styles.contentContainer}>
                    <Image
                        source={require('../../resources/sobre.png')}
                        style={{
                            width: 250,
                            height: 250,
                            resizeMode: 'contain',
                        }}
                    />
                    <TouchableOpacity
                        style={styles.logInButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Reclamar</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 65,
        paddingHorizontal: 40,
        backgroundColor: 'white',
        borderRadius: 25
    },
    pack: {
        backgroundColor: 'grey',
        borderRadius: 25
    },
    logInButton: {
        backgroundColor: '#70ABAF',
        padding: 20,
        borderRadius: 120,
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 20
    },
})
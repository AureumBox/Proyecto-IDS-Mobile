import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
} from 'react-native'
import fondo from '../../assets/appAssets/template/fondo.jpg'
import marco from '../../assets/appAssets/template/marco.png'

// Test
import jugador from '../../assets/appAssets/test/jugador2.png'
import Constants from 'expo-constants';
const BASE_URL = Constants.expoConfig.extra.apiUrl;

export default function StickerTemplate({sticker}) {
    //fix for localhost url. Temporal
    const player = (sticker?.img).replace('http://localhost:3000', BASE_URL)
    console.log(player)

    return (
        <View style={styles.container}>
            <ImageBackground
                source={fondo}
                style={{ height: 260, width: 200, resizeMode: 'contain' }}
            >
                <ImageBackground
                    source={{uri:player}} //http doesnt work for iOS
                    style={{ marginLeft: 8, marginVertical: 40, height: 220, width: 190, resizeMode: 'contain' }}
                >
                </ImageBackground>
                <Image
                    source={marco}
                    style={{ marginTop: -298, height: 260, width: 200, resizeMode: 'contain' }}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
    },
    jugador: {
        alignItems: 'center',
    }
});
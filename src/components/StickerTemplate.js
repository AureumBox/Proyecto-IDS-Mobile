import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from 'react-native'

// Plantilla
import fondo from '../../assets/appAssets/template/fondo.jpg'
import marco from '../../assets/appAssets/template/marco.png'

// Mientras no se tenga banderas
import bandera from "../../assets/appAssets/test/bandera.png";

import delantero from "../../assets/appAssets/test/delantero.png";
import defensa from "../../assets/appAssets/test/defensa.png";
import medioCentro from "../../assets/appAssets/test/medioCentro.png";
import arquero from "../../assets/appAssets/test/arquero.png";

const pos = '../assets/appAssets/test/'
const { width } = Dimensions.get('window')

export default function StickerTemplate({ sticker }) {
    // const [id, playerName, country, position, img, height, weight] = sticker
    // console.log(jugador, bandera, nombre, height, weight, position)
    console.log(sticker.img)
    // let ruta = pos + position + '.png'
    return (
        <View style={styles.container}>
            <ImageBackground
                source={fondo}
                style={styles.marco}
            >
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={{uri:sticker.img}}
                        style={[styles.jugador, {top: 8}]}
                    />
                </View>
                <View style={{ position: 'absolute' }}>
                    <Image
                        source={bandera}
                        style={[styles.bandera, { left: width / 4.5 }]}
                    />
                    <Image
                        source={
                            (sticker.position=='arquero')?(arquero):
                            ((sticker.position=='defensa')?(defensa):
                            ((sticker.position=='medioCentro')?(medioCentro):
                            ((sticker.position=='delantero')?(delantero):(delantero))
                            ))
                        }
                        style={[styles.bandera, { left: width / 4.75 }]}
                    />
                </View>
                <ImageBackground
                    source={marco}
                    style={[styles.marco, { position: 'absolute', alignItems: 'center', justifyContent: 'flex-end' }]}
                >
                    <View style={{ bottom: 90, right: 35 }}>
                        <Text style={styles.texto}>{sticker.height}</Text>
                        <Text style={styles.texto}>{sticker.weight}</Text>
                    </View>
                    <Text style={styles.nombreJugador}>{sticker.playerName}</Text>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marco: {
        width: width / 3.5,
        height: (width / 3.5) * 1.3,
        resizeMode: 'contain',
    },
    bandera: {
        width: width / 16,
        height: width / 16,
        resizeMode: 'contain',
        top: 10
    },
    jugador: {
        width: width / 3.5 * 1.15,
        height: width / 3.5 * 1.2,
        resizeMode: 'contain',
    },
    texto: {
        color: '#000000',
        fontSize: 8,
        fontWeight: 'bold',
    },
    nombreJugador: {
        color: '#3C545D',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 3
    }
});
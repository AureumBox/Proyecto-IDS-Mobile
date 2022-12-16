import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from 'react-native';
import fondoImg from '../../assets/app/template/fondo.jpg';
import alturaImg from '../../assets/app/template/altura.png';
import pesoImg from '../../assets/app/template/peso.png';
import marcoImg from '../../assets/app/template/marco.png';
import arqueroImg from '../../assets/app/template/arquero.png';
import defensaImg from '../../assets/app/template/defensa.png';
import medioCentroImg from '../../assets/app/template/medioCentro.png';
import delanteroImg from '../../assets/app/template/delantero.png';

const { width } = Dimensions.get('window');

function getPlayerRoleImg(position) {
    switch (position) {
        case 'Arquero':
            return arqueroImg;
        case 'Defensa':
            return defensaImg;
        case 'MedioCentro':
            return medioCentroImg;
    }
    return delanteroImg;
}

export default function StickerTemplate({ sticker }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={fondoImg}
                style={styles.marco}
            >
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={{ uri: sticker.img }}
                        style={[styles.jugador, { top: 8 }]}
                    />
                </View>
                <View style={{ position: 'absolute' }}>
                    <Image
                        source={{ uri: sticker.team.badge }}
                        style={[styles.bandera, { left: width / 4.5 }]}
                    />
                    <Image
                        source={getPlayerRoleImg(sticker.position)}
                        style={[styles.bandera, { left: width / 4.75 }]}
                    />
                </View>
                <ImageBackground
                    source={marcoImg}
                    style={[styles.marco, { position: 'absolute', alignItems: 'center', justifyContent: 'flex-end' }]}
                >
                    <View style={{ bottom: '50%', right: '30%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={alturaImg}
                                style={[styles.iconos]}
                            />
                            <Text style={styles.texto}>{sticker.height}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={pesoImg}
                                style={[styles.iconos, { marginRight: 2}]}
                            />
                            <Text style={styles.texto}>{sticker.weight}</Text>
                        </View>
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
    iconos: {
        width: 15,
        height: 15,
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
        overflow: 'hidden',
        resizeMode: 'contain',
    },
    texto: {
        color: '#000000',
        fontSize: 9,
        fontWeight: 'bold',
    },
    nombreJugador: {
        color: '#3C545D',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 3
    }
});
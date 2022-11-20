import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    Animated
} from 'react-native'

const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible)
    const scaleValue = React.useRef(new Animated.Value(0)).current
    React.useEffect(() => {
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start()
        } else {
            setTimeout(() => setShowModal(false), 200)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    }

    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )
}

export default function Test() {
    const [visible, setVisible] = React.useState(false)
    return (
        <View style={styles.contentContainer}>
            <ModalPopup visible={visible}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Image
                                source={require('../../resources/x.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../resources/Ads/yummy.jpg')}
                        style={{ height: 175, width: 320, resizeMode: 'contain', marginVertical: 10 }}
                    />
                </View>
                <Text
                    style={{
                        marginVertical: 30,
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                    ¡¡Felicidades has obtenido un Sobre!!
                </Text>
            </ModalPopup>
            <Image
                source={require('../../resources/sobre.png')}
                style={{
                    width: 250,
                    height: 250,
                    resizeMode: 'contain',
                }}
            />
            <TouchableOpacity
                style={styles.logInButton}
                onPress={() => setVisible(true)}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Reclamar</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
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
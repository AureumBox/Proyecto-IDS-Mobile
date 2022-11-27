import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native'

const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible)
    return (
        <Modal transparent visible={true}>
            <View style={styles.modalBackground}>
                <View style={[modal]}>

                </View>
            </View>
        </Modal>
    )
}


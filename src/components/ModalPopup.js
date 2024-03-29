import React, { useState, useEffect, useRef } from 'react'
import {
	View,
	Modal,
	Animated,
	StyleSheet
} from 'react-native'

export const ModalPopup = ({ visible, children, special }) => {
	const [showModal, setShowModal] = useState(visible);
	const scaleValue = useRef(new Animated.Value(0)).current;

	useEffect(() => {
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
				<Animated.View style={[{...styles.modalContainer, width: special ? '90%' : '80%'}, { transform: [{ scale: scaleValue }] }]}>
					{children}
				</Animated.View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: 'white',
		borderRadius: 25,
		elevation: 20,
	},
	modalBackground: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center'
	},
});

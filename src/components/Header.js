import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Dimensions,
	Text,
	TouchableWithoutFeedback
} from 'react-native';
import { useSelector } from "react-redux";
import Icon from 'react-native-remix-icon';
import { Audio } from 'expo-av'

import logoImg from '../../assets/app/logoHorizontal.png';

const { width } = Dimensions.get('window');

export default function Header() {
	const { money } = useSelector((state) => state.auth);

	// Easter Egg
	const [count, setCount] = useState(0);
	const [sound, setSound] = useState();

	const onPress = () => {
		setCount(count + 1);
		if (count == 10) {
			setCount(0)
			playSound()
		}
	};

	async function playSound() {
		const { sound } = await Audio.Sound.createAsync(require('../../assets/app/easter-egg.mp3'));
		setSound(sound);
		await sound.playAsync();
	}

	useEffect(() => {
		return sound ? () => {
			sound.unloadAsync();
		} : undefined;
	}, [sound]);
	//******************************************************/

	return (
		<View style={styles.header}>
			<TouchableWithoutFeedback onPress={onPress} >
				<Image source={logoImg} style={styles.logo} />
			</TouchableWithoutFeedback>
			<View style={styles.coins}>
				<Icon name="money-dollar-circle-fill" size="30" color="#E7484D" />
				<Text style={styles.coinsText}>{money}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: width,
		backgroundColor: 'white',
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	logo: {
		width: 125,
		resizeMode: 'contain',
		left: width / 32
	},
	coins: {
		width: 80,
		height: 30,
		justifyContent: 'center',
		backgroundColor: '#D9D9D9',
		borderRadius: 18,
		right: width / 16
	},
	coinsText: {
		position: 'absolute',
		left: '40%',
		fontSize: 20,
		fontWeight: '600'
	},
});
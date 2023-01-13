import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export default function SliderItem({ item }) {

	return (
		<View style={[styles.container, { width }]}>
			<Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
			<View style={{ flex: 0.6 }}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.body}>{item.description}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		fontSize: 26,
		fontWeight: '700',
		lineHeight: 25,
		marginTop: 12,
		textAlign: 'center',
		color: '#3A4159',
	},
	body: {
		paddingTop: 20,
		paddingHorizontal: '5%',
		fontSize: 16,
		lineHeight: 23,
		fontWeight: '500',
		textAlign: 'center',
		color: '#353147',
	},
});
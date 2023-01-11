import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export default function HelpSliderItem({ item }) {

	return (
		<View style={[styles.container, { width: (width * 0.8) }]}>
			<Image source={item.image} style={[styles.image, { width: (width * 0.8), resizeMode: 'contain' }]} />
			<View style={{ flex: 0.5 }}>
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
	body: {
		paddingTop: 20,
		paddingHorizontal: '10%',
		fontSize: 20,
		lineHeight: 23,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#353147'
	}
});
import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HelpPaginator({ data, scrollX }) {
	return(
		<View style={{ flexDirection: 'row', height: 24 }}>
			{data.map((_, i) => {
				const inputRange = [(i - 1) * (width * 0.8), i * (width * 0.8), (i + 1) * (width * 0.8)];

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: 'clamp',
				})

				return <Animated.View style={[styles.dot, { opacity }]} key={i.toString()} />
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	dot: {
		backgroundColor: '#E7484D',
		width: 10,
		height: 10,
		borderRadius: 7,
		marginHorizontal: 8,
	},
})
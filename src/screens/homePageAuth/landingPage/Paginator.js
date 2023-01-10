import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Paginator({ data, scrollX }) {
	return(
		<View style={{ flexDirection: 'row', height: 64 }}>
			{data.map((_, i) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [40, 100, 40],
					extrapolate: 'clamp',
				})
				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: 'clamp',
				})

				return <Animated.View style={[styles.dot, {width: dotWidth, opacity}]} key={i.toString()} />
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	dot: {
		backgroundColor: '#E7484D',
		height: 10,
		borderRadius: 7,
		marginHorizontal: 8,
	},
})
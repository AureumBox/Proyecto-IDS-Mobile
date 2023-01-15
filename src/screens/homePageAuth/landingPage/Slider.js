import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, SafeAreaView } from 'react-native';

import SliderItem from './SliderItem'
import Paginator from './Paginator'
import SliderContent from '../../../../assets/app/landingPage';

export default function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<FlatList
					data={SliderContent}
					renderItem={({ item }) => <SliderItem item={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					keyExtractor={(item) => item.id}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
						useNativeDriver: false
					})}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slidesRef}
				/>
			</View>
			<Paginator data={SliderContent} scrollX={scrollX} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0.75,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
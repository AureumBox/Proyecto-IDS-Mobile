import React, { useState, useRef } from "react";
import {
	View,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	Animated,
	Dimensions
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { ModalPopup } from "../ModalPopup";
import HelpSliderItem from './HelpSliderItem'
import HelpPaginator from './HelpPaginator'

const { width, height } = Dimensions.get('window');

export default function HelpSlider({ isVisible, onClose, sliderContent }) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
	return (
		<ModalPopup visible={isVisible}>
			<TouchableOpacity onPress={onClose}>
				<AntDesign name="closecircle" size={45} color="#E7484D" style={{ alignSelf: 'flex-end' }}/>
			</TouchableOpacity>
			<View style={{ width: width * 0.8, height: height * 0.75 }}>
				<View style={styles.container}>
					<View style={{ flex: 3 }}>
						<FlatList
							data={sliderContent}
							renderItem={({ item }) => <HelpSliderItem item={item} />}
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
					<HelpPaginator data={sliderContent} scrollX={scrollX} />
				</View>
			</View>
		</ModalPopup>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.95,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
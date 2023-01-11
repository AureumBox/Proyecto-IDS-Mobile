import React from "react";
import {
	Text,
	View,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	Animated
} from "react-native";

import { ModalPopup } from "../../../components/ModalPopup";

export default function HelpSlider({ isVisible, onClose, sliderContent }) {
	return (
		<ModalPopup visible={isVisible}>
			<View style={styles.container}>
				<View style={{ flex: 3 }}>
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
			</View>
		</ModalPopup>
	);
}
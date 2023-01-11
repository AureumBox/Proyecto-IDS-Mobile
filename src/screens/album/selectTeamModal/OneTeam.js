import React from "react";
import {
	Text,
	View,
	Image,
	TouchableOpacity
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles';

const OneTeam = ({ item, index, onPress }) => (
	<TouchableOpacity onPress={() => onPress?.(index)}>
		<View style={styles.listItem}>
			<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.listItemImageContainer}>
				<Image source={{ uri: item.badge }} style={styles.listItemImage} />
			</LinearGradient>
			<Text style={styles.listItemName}>{item.name}</Text>
		</View>
	</TouchableOpacity>
);

export default OneTeam;

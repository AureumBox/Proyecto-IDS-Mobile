import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import styles from '../styles';

const OneTeam = ({ item, index, onPress }) => (
  <TouchableOpacity onPress={() => { onPress?.(index) }}>
    <View style={styles.listItem}>
      <View style={styles.listItemImageContainer}>
        <Image source={{ uri: item.badge }} style={styles.listItemImage} />
      </View>
      <Text style={styles.listItemName}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

export default OneTeam;
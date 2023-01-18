import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text
} from 'react-native';
import Icon from 'react-native-remix-icon';

import logoImg from '../../../assets/app/logoHorizontal.png';

const { width, height } = Dimensions.get('window');

export default function HeaderComponent() {
  return (
    <View style={styles.header}>
      <Image source={logoImg} style={styles.logo} />
      <View style={styles.coins}>
        <Icon name="money-dollar-circle-fill" size="30" color="#63130B" />
        <Text style={styles.coinsText}>999</Text>
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
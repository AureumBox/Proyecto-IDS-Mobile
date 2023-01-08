import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text
} from 'react-native';
import { useSelector } from "react-redux";
import Icon from 'react-native-remix-icon';

import logoImg from '../../../assets/app/logoHorizontal.png';

const { width } = Dimensions.get('window');

export default function HeaderComponent() {
  const { money } = useSelector((state) => state.auth);
  return (
    <View style={styles.header}>
      <Image source={logoImg} style={styles.logo} />
      <View style={styles.coins}>
        <Icon name="money-dollar-circle-fill" size="30" color="#E7484D" />
        <Text style={styles.coinsText}>{money}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    backgroundColor: '#EAEAEA',
    borderBottomWidth: 2,
    borderBottomColor: '#BBB9B9',
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
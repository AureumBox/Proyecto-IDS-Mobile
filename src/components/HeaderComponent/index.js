import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Text,
  Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-remix-icon';

import logoImg from '../../../assets/app/logo.png';

const { width, height } = Dimensions.get('window');

export default function HeaderComponent() {
  return (
    <SafeAreaView style={styles.header}>
      {/* Header Layout */}
      <Image source={logoImg} style={styles.logo} />
      <View style={styles.coins}>
        <Icon name="money-dollar-circle-fill" size="30" color="#63130B" />
        <Text style={styles.coinsText}>999</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: height / 11,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

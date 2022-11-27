import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Text
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { ModalPopup } from '../ModalPopup'
import logo from '../../../assets/appAssets/logo.png'
import botonX from '../../../assets/appAssets/x.png'
import sobre from '../../../assets/appAssets/sobre.png'
import { watchAd, getAdRedirectUrl } from '../../services/ads';
import Spinner from 'react-native-loading-spinner-overlay';
import { Linking } from 'react-native';

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

export default function HeaderComponent() {
  const [loading, setLoading] = useState(false);
  const [visibleObtener, setVisibleObtener] = useState(false)
  const [visibleAnuncio, setVisibleAnuncio] = useState(false)
  const [visibleStickers, setVisibleStickers] = useState(false)
  const [ad, setAd] = useState(null);

  const onClaimClick = async () => {
    setLoading(true);
    try {
      const ad = await watchAd()
      setAd(ad)
      setVisibleAnuncio(true)
    } catch (error) {  
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onCloseAd = () => {
    setVisibleStickers(true)
  }

  const onAdClick = () => {
    const redirectUrl = getAdRedirectUrl(ad?.id);
    console.log('LE HAZ DADO CLICK A UN ANUNCIO :D ', redirectUrl);
    Linking.openURL(redirectUrl);
  };

  return (
    <SafeAreaView style={styles.header}>
      <Spinner
          visible={loading}
          textContent={'Cargando...'}
      />
      {/* Ventana Emergente de Obtener Cromos */}
      <ModalPopup visible={visibleObtener}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setVisibleObtener(false)}>
              <Image
                source={botonX}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={sobre}
            style={{
              width: 250,
              height: 250,
              resizeMode: 'contain',
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={() => {
            onClaimClick();
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Reclamar</Text>
        </TouchableOpacity>
      </ModalPopup>

      {/* Ventana Emergente de drop de Stickers */}
      <ModalPopup visible={visibleStickers}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setVisibleStickers(false)}>
              <Image
                source={botonX}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Image
            source={sobre}
            style={{ height: 140, width: 140, resizeMode: 'contain', marginVertical: -15 }}
          />
          <Image
            source={sobre}
            style={{ height: 140, width: 140, resizeMode: 'contain', marginVertical: -15 }}
          />
          <Image
            source={sobre}
            style={{ height: 140, width: 140, resizeMode: 'contain', marginVertical: -15 }}
          />
          <Image
            source={sobre}
            style={{ height: 140, width: 140, resizeMode: 'contain', marginVertical: -15 }}
          />
          <Image
            source={sobre}
            style={{ height: 140, width: 140, resizeMode: 'contain', marginVertical: -15, marginLeft: 75 }}
          />
        </View>
        <Text
          style={{
            marginVertical: 30,
            fontSize: 20,
            textAlign: 'center'
          }}>
          ¡¡Felicidades has obtenido un Sobre!!
        </Text>
      </ModalPopup>

      {/* Ventana Emergente de Anuncio */}
      <ModalPopup visible={visibleAnuncio}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => {
              onCloseAd()
              setVisibleAnuncio(false)
              }}>
              <Image
                source={botonX}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={onAdClick}>
          <View style={{ alignItems: 'center' }} >
            <Image
              source={(ad?.img) ? ({ uri: ad?.img }) : require('../../../assets/Ads/yummy.jpg')}
              style={{ height: 175, width: 320, resizeMode: 'contain', marginVertical: 10 }}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginVertical: 30,
            fontSize: 20,
            textAlign: 'center'
          }}>
          ¡¡Felicidades has obtenido un Sobre!!
        </Text>
      </ModalPopup>

      {/* Header Layout */}
      <Image
        source={logo}
        style={styles.logo}
      />

      <TouchableOpacity>
        <View style={[styles.coins]}>
          <MaterialIcons name="attach-money" size={25} color="#63130B" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setVisibleObtener(true)}>
        <View style={[styles.cofre]}>
          <MaterialCommunityIcons name="treasure-chest" size={35} color="#63130B" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.iconos]}>
          <Octicons name="three-bars" size={35} color="#63130B" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalHeader: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  header: {
    width: width,
    height: height / 11,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 40,
    width: 120,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 22,
    marginRight: 10,
    resizeMode: 'contain'
  },
  cofre: {
    alignItems: 'flex-start',
    marginLeft: 12,
    marginTop: -1,
    marginRight: -40,
    marginBottom: 6
  },
  coins: {
    width: 80,
    height: 25,
    backgroundColor: "#D9D9D9",
    borderRadius: 18,
    alignItems: 'flex-start',
    marginLeft: 12,
    marginRight: -40,
    marginTop: 3,
    marginBottom: 8
  },
  logInButton: {
    backgroundColor: '#70ABAF',
    padding: 20,
    borderRadius: 120,
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20
  },
});

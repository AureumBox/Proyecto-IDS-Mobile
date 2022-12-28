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
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-remix-icon';
import Spinner from 'react-native-loading-spinner-overlay';
import { watchAd, getAdRedirectUrl } from '../../services/ad.services';
import { obtainStickers } from '../../services/sticker.services';
import { ModalPopup } from '../ModalPopup';
import StickerTemplate from '../StickerTemplate';

import logoImg from '../../../assets/app/logoHorizontal.png';
import botonXImg from '../../../assets/app/x.png';
import sobreImg from '../../../assets/app/sobre.png';

const { width, height } = Dimensions.get('window');

export default function HeaderComponent() {
  const [loading, setLoading] = useState(false);
  const [visibleObtener, setVisibleObtener] = useState(false);
  const [visibleAnuncio, setVisibleAnuncio] = useState(false);
  const [visibleStickers, setVisibleStickers] = useState(false);
  const [ad, setAd] = useState(null);
  const [obtainedStickers, setObtainedStickers] = useState([]);
  const { token } = useSelector(state => state.auth);

  const onClaimClick = async () => {
    setLoading(true);
    try {
      setAd(await watchAd(token));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setVisibleAnuncio(true);
    }
  };

  const onCloseAd = async () => {
    setLoading(true);
    try {
      setObtainedStickers(await obtainStickers(token));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setVisibleStickers(true);
    }
  };

  const onAdClick = () => {
    const redirectUrl = getAdRedirectUrl(ad?.id);
    Linking.openURL(redirectUrl);
  };

  return (
    <SafeAreaView style={styles.header}>
      <Spinner visible={loading} textContent={'Cargando...'} />
      {/* Ventana Emergente de Obtener Cromos */}
      <ModalPopup visible={visibleObtener}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setVisibleObtener(false)}>
              <Image source={botonXImg} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={sobreImg}
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
              <Image source={botonXImg} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {obtainedStickers ? (
            obtainedStickers.map((sticker, i) => (
              <View key={i} style={{ marginVertical: 78 }}>
                <StickerTemplate sticker={sticker} onModal={true} />
              </View>
            ))
          ) : (
            <Text
              style={{
                marginVertical: 30,
                fontSize: 17,
                textAlign: 'center',
              }}
            >
              Ha ocurrido un error
            </Text>
          )}
        </View>
        <Text
          style={{
            marginVertical: 30,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          ¡Felicidades, has conseguido un sobre!
        </Text>
      </ModalPopup>

      {/* Ventana Emergente de Anuncio */}
      <ModalPopup visible={visibleAnuncio}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.modalHeader}>
          </View>
        </View>
        <TouchableOpacity onPress={onAdClick}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={
                ad?.img
                  ? { uri: ad?.img }
                  : require('../../../assets/ads/yummy.jpg')
              }
              style={{
                height: 175,
                width: 320,
                resizeMode: 'contain',
                marginVertical: 10,
              }}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginVertical: 30,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          ¡Felicidades, has conseguido un sobre!
        </Text>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={() => {
            onCloseAd();
            setVisibleAnuncio(false);
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Ver Sobre</Text>
        </TouchableOpacity>
      </ModalPopup>

      {/* Header Layout */}
      <Image source={logoImg} style={styles.logo} />

      <View style={styles.coins}>
        <Icon name="money-dollar-circle-fill" size="30" color="#63130B" />
        <Text style={styles.coinsText}>999</Text>
      </View>

      <TouchableOpacity onPress={() => setVisibleObtener(true)}>
        <View style={styles.cofre}>
          <Ionicons
            name='gift'
            size={38}
            color='#63130B'
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
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
    justifyContent: 'space-between'
  },
  logo: {
    width: 125,
    resizeMode: 'contain',
    left: width / 32
  },
  cofre: {
    right: width / 20
  },
  coins: {
    width: 80,
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 18,
    left: width / 8
  },
  coinsText: {
    position: 'absolute', 
    left: '40%', 
    fontSize: 20,
    fontWeight: '600'
  },
  logInButton: {
    backgroundColor: '#70ABAF',
    padding: 20,
    borderRadius: 120,
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
  },
});

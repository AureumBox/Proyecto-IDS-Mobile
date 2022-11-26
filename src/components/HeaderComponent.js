import { StyleSheet, View, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

export default function HeaderComponent() {
  return (
    <SafeAreaView style={styles.header}>
        <Image
          source={logo}
          style={styles.logo}
        />

      <TouchableOpacity>
        <View style={[styles.coins]}>
          <MaterialIcons name="attach-money" size={25} color="#63130B" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.cofre]}>
          <MaterialCommunityIcons name="treasure-chest" size={35} color="#63130B" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
      </TouchableOpacity>
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
});

import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


const {width}= Dimensions.get('window')

export default function HeaderComponent(){
  return (
      <SafeAreaView style= {styles.header}>
        <TouchableOpacity>   
         <Image 
            source={logo}
            style={styles.logo} 
         />  
        </TouchableOpacity>   
        <View style={[styles.coins]}>
            <MaterialIcons name="attach-money" size={25} color="#63130B"/>
        </View>  
        <View style={[styles.iconos]}>
            <MaterialCommunityIcons name="treasure-chest" size={25} color="#63130B" />
        </View> 
        <View style={[styles.iconos]}>
            <Octicons name="three-bars" size={25} color="#63130B" />
        </View>  
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 82,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 40,
    width: 130,
    marginLeft: 6,
    marginTop: 8,
    marginBottom: 22
  },
  iconos: {
    alignItems: 'flex-start',
    marginLeft: 2,
    marginTop: 3,
    marginRight: 12,
    marginBottom: 6
  },
  coins: {
    width:80,
    height:25,
    backgroundColor: "#D9D9D9",
    borderRadius: 18,
    alignItems: 'flex-start',
    marginLeft: 2,
    marginTop: 3,
    marginBottom: 8
},
});


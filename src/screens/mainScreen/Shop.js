import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";
import Header from '../../components/HeaderComponent';
import { ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons
  } from "@expo/vector-icons";

export default function Inventory({ navigation }) {
    const { height, width } = Dimensions.get('window')
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);
    
    const [opciones, setOpciones] = useState(1);

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.fondo}>
        <Header/>
        <View style={styles.container}>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={styles.title}>Mercado</Text>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={ opciones === 1 ? styles.buttonSelected : styles.button} onPress={() => setOpciones(1)}>
                        <Text style={styles.textButton}>Ofertas globales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ opciones === 2 ? styles.buttonSelected : styles.button} onPress={() => setOpciones(2)}>
                        <Text style={styles.textButton}>Mis subastas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ opciones === 3 ? styles.buttonSelected : styles.button} onPress={() => setOpciones(3)}>
                        <Text style={styles.textButton}>Mis ofertas</Text>
                    </TouchableOpacity>
                </View>
                <Searchbar
                    style={{width: width - 50, margin: 20 }}
                    placeholder="Buscar"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.card}>
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={{ uri: 'https://www.seekpng.com/png/detail/75-753494_world-cup-neymar-jr-brazil-2018-png.png' }}/>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{ width: 25, height: 25, resizeMode: 'contain'}} source={{ uri: 'https://www.elsoldemexico.com.mx/doble-via/ciencia/ai24wl-1.png/ALTERNATES/LANDSCAPE_1140/1.png' }}/>
                            <Text style={styles.textCard}>DELANTERO</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                            <MaterialIcons style={{backgroundColor: 'green', height: 25}} name="check" size={25} color="#fff" />
                            <Text style={styles.textCard}>En alineacion</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                            <MaterialIcons style={{backgroundColor: 'brown', height: 25}} name="attach-money" size={25} color="#fff" />
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={{color: '#fff'}}>Pujar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#294851',
    },
    editButton: {
        backgroundColor: '#B02419',
        width: 69,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,    
        marginTop: 30,
        borderRadius: 10,
    },
    textCard: {
        marginLeft: 5,
        fontSize: 15,
        lineHeight: 25,
    },
    containerPlayerName: {
        transform: [{ rotate: '-90deg'}],
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: 10,
        width: 100,
        alignItems: 'center',
        bottom: '-0.1%',
    },
    imagePlayer: {
        width: 100, 
        height: 100, 
        marginLeft: 20, 
        resizeMode: 'contain'
    },
    playerName: {
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#FFFFFF',
    },
    card: {
        backgroundColor: '#92C8C9',
        borderRadius: 10,
        width: '93%',
        margin: '5%',
        height: 105,
        position: 'relative',
        flexDirection: 'row',
    },
    searchBar: {
        marginTop: 15,
        width: 200,
    },
    fondo: {
        flex: 1,
        backgroundColor: '#294851',
    },
    title: {  
        marginTop: 15,
        fontWeight: 700,
        fontSize: '40px',
        lineHeight: '49px',
        color: '#fff'
    },
    buttonSelected: {
        backgroundColor: '#294249',
        borderRadius: '10px',
        textAlign: 'center',
        margin: '1.66%',
        padding: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#63130B',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#294249',
        borderRadius: '10px',
        textAlign: 'center',
        margin: '1.66%',
        padding: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#294249',
    },
    textButton: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '18px',
        color: '#fff',
    },
    containerButtons: {
        flexDirection: 'row',
        flexWrap:'wrap'
    }
})
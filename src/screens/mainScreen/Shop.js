import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import Header from '../../components/HeaderComponent';
import { ScrollView } from 'react-native';
import { Provider, Searchbar } from 'react-native-paper';
import { Dialog, Portal } from 'react-native-paper';
import {
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons
  } from "@expo/vector-icons";

export default function Inventory({ navigation }) {
    const { height, width } = Dimensions.get('window')
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const hideDialog = () => setVisible(false);
    const hideDialog2 = () => setVisible2(false);
    const hideDialog3 = () => setVisible3(false);
    const [opciones, setOpciones] = useState(1);

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);   

    return (
        <Provider>
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
                </View>
                <>
                    {opciones === 1 ? (
                        <>
                            <Searchbar
                                style={{width: width - 50, margin: 20 }}
                                placeholder="Buscar"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                            />
                            <ScrollView>
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
                                    <TouchableOpacity style={styles.editButton} onPress={() => setVisible(true)}>
                                        <Text style={{color: '#fff'}}>Pujar</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </>
                    ) : (
                        <View>
                            <Searchbar
                                style={{width: width - 50, margin: 20 }}
                                placeholder="Buscar"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                            />
                            <TouchableOpacity style={styles.buttonMyOffers}>
                                <Text style={styles.textButton}>Añade tus jugadores al Mercado</Text>
                            </TouchableOpacity>
                            <ScrollView>
                                <View style={styles.card} onPress>
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
                                            <MaterialIcons style={{height: 25}} name="" size={25} color="#fff" />
                                            <Text style={styles.textCard}>2h 20s</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                                            <MaterialIcons style={{backgroundColor: 'brown', height: 25}} name="attach-money" size={25} color="#fff" />
                                            <Text style={styles.textCard}>100.000.000</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.editButton} onPress={() => setVisible3(true)}>
                                        <Text style={{color: '#fff'}}>Info.</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </ScrollView>
                        </View>
                    )}
                </>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Content style={styles.dialogContainer}>
                            <Image style={styles.imagePlayerDialog} source={{ uri: 'https://www.seekpng.com/png/detail/75-753494_world-cup-neymar-jr-brazil-2018-png.png' }}/>
                            <Text style={styles.nombreJugador}>Neymar Jr</Text>  
                            <Text>Obtener Jugador</Text>  
                            <Text style={styles.infoData}>12.245.367</Text>    
                            <Text>Precio del mercado </Text>
                            <Text style={styles.infoData}>1.500.398.50$</Text>
                            <Text>Puja minima</Text>
                            <Text style={styles.infoData}>20.5634.215$</Text>
                            <TouchableOpacity style={styles.editButtonacep} onPress={() => {setVisible(false)}}>
                                <Text style={{color: '#fff'}}>aceptar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.editButtoncanc}>
                                <Text style={{color: '#fff'}} onPress={hideDialog}>Cancelar</Text>
                            </TouchableOpacity>
                            <Text style={styles.saldost}>TU saldo: -2.986.325$ </Text>
                        </Dialog.Content>
                    </Dialog>
                </Portal>
                <Portal>
                    <Dialog visible={visible2} onDismiss={hideDialog2}>
                        <Dialog.Content style={styles.dialogContainer}>
                            <Text style={styles.saldost}>este es el dialog 2</Text>
                        </Dialog.Content>
                    </Dialog>
                </Portal>

                <Portal>
                    <Dialog visible={visible3} onDismiss={hideDialog3}>
                        <Dialog.ScrollArea>
                            <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
                                <Dialog.Content style={styles.dialogContainer}>
                                    <Text style={styles.saldost}>Plantilla</Text>
                                    <Image style={styles.imagePlayerDialog} source={{ uri: 'https://www.seekpng.com/png/detail/75-753494_world-cup-neymar-jr-brazil-2018-png.png' }}/>
                                    <Text style={styles.nombreJugador}>Neymar Jr</Text>  
                                    <Text>Precio Inicial</Text>  
                                    <TextInput style={styles.infoData}/>    
                                    <Text>Compra directa </Text>
                                    <TextInput style={styles.infoData}/>
                                    <TouchableOpacity style={styles.editButtonacep} onPress={hideDialog3}>
                                        <Text style={{color: '#fff'}}>Aceptar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.editButtoncanc} onPress={hideDialog3}>
                                        <Text style={{color: '#fff'}}>Cancelar</Text>
                                    </TouchableOpacity>
                                </Dialog.Content>
                             </ScrollView>    
                        </Dialog.ScrollArea>
                    </Dialog>
                </Portal>
            </View>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#294851',
    },
    buttonMyOffers: {
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#D13256',
        borderRadius: '12px',
        margin: 10,

    },
    saldost: {
        padding: 10,
        borderRadius: 20,
        margin: 10,
        fontSize: "30",
        fontWeight:"bold",
    },
    nombreJugador: {
        margin: 10,
        borderColor: '#B02419',
        fontSize: "25",
        fontWeight: 'bold'
    },
    infoData: {
        borderWidth: 3,
        borderColor: '#B02419',
        padding: 8,
        borderRadius: 20,
        margin: 10,
        width: "100%",
    },
    dialogContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    editButtonacep: {
        backgroundColor: '#B02419',
        width: 190,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 30,
    },
    imagePlayerDialog: {
        width: 100, 
        height: 100,  
        borderRadius: 100,
        resizeMode: 'stretch',
        borderWidth: 3,
        borderColor: '#B02419',
    },
    editButtoncanc: {
        backgroundColor: '#B02419',
        width: 190,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',   
        marginTop: 23,
        borderRadius: 30,
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
        color: '#D13256',
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
    card2: {
        backgroundColor: '#ffff',
        borderRadius: 10,
        width: '160%',
        margin: 5,
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
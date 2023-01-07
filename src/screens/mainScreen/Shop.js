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
import { LinearGradient } from 'expo-linear-gradient';
import {
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons
  } from "@expo/vector-icons";
  
  import { Searchbar } from 'react-native-paper';
  import { SelectList } from 'react-native-dropdown-select-list';
  import { Entypo } from '@expo/vector-icons';

  import JugadorBra from '../../../assets/app/bra_10.png';
  import MoneyIcon from '../../../assets/app/moneyIcon.png';
  import Reloj from '../../../assets/app/reloj.png';
  import Bra from '../../../assets/app/bra.png';

export default function Shop({ navigation }) {
    const { height, width } = Dimensions.get('window')
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);
    
    const [opciones, setOpciones] = useState(1);

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const [selected, setSelected] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const data = [
        { key: '1', value: 'Seleccione una posición', disabled: true },
        { key: '2', value: 'Delantero' },
        { key: '3', value: 'Medio Campo' },
        { key: '4', value: 'Defensa' },
        { key: '5', value: 'Arquero' }
    ];

    const [selectedE, setSelectedE] = useState("");
    const [isFocusE, setIsFocusE] = useState(false);

    const dataEquipos = [
        { key: '1', value: 'Seleccione un equipo', disabled: true },
        { key: '2', value: 'España' },
        { key: '3', value: 'Argentina' },
        { key: '4', value: 'Alemania' },
        { key: '5', value: 'Brazil' }
    ];

    return (
        <View style={styles.fondo}>
        <Header/>
        <View style={styles.container}>
            <View style={styles.fondoMercado}>
            <View style={styles.rectanguloMercado}>
            <Text style={styles.title}>Mercado</Text>
            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={ opciones === 1 ? styles.buttonSelected : styles.button} onPress={() => setOpciones(1)}>
                        <Text style={styles.textButton}>Ofertas globales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ opciones === 2 ? styles.buttonSelected : styles.button} onPress={() => setOpciones(2)}>
                        <Text style={styles.textButton}>Mis subastas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ opciones === 3 ? styles.buttonSelected : styles.button} onPress={() => setOpciones(3)}>
                        <Text style={styles.textButton}>Mis   ofertas</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={{paddingTop:5}}>
                    {opciones == 1 ? <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'column', width: '90%', alignItems: 'flex-end', marginBottom: -15}}>    
                <TouchableOpacity>
                <LinearGradient colors={['#D13256', '#FE5F42']} style={{borderRadius:15, padding:3}}>   
                <Entypo name="help" size={22} color="white" />
                </LinearGradient> 
                </TouchableOpacity> 
                </View>    
                    <Searchbar
                     style={{width: width - 130,height: 35, margin: 20, borderRadius: 25}}
                     placeholder="Buscar"
                     onChangeText={onChangeSearch}
                     value={searchQuery}
                    />

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                    <SelectList setSelected={(val) => setSelectedE(val)}
                        data={dataEquipos}
                        save="value"
                        placeholder={!isFocusE ? 'Equipos' : '...'}
                        onFocus={() => setIsFocusE(true)}
                    />
                    <SelectList setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        placeholder={!isFocus ? 'Posición' : '...'}
                        onFocus={() => setIsFocus(true)}
                    />
                    </View>

                        <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ofertar</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Compra directa</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>

                    <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ofertar</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Compra directa</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>

                    <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ofertar</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Compra directa</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>

                    <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ofertar</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Compra directa</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>

                </View>
                : null}
                {opciones == 2 ? <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'column', width: '90%', alignItems: 'flex-end', marginBottom: -15}}>    
                <TouchableOpacity>
                <LinearGradient colors={['#D13256', '#FE5F42']} style={{borderRadius:15, padding:3}}>   
                <Entypo name="help" size={22} color="white" />
                </LinearGradient> 
                </TouchableOpacity> 
                </View>   
                <Searchbar
                     style={{width: width - 130,height: 35, margin: 20, borderRadius: 25}}
                     placeholder="Buscar"
                     onChangeText={onChangeSearch}
                     value={searchQuery}
                    />

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                    <SelectList setSelected={(val) => setSelectedE(val)}
                        data={dataEquipos}
                        save="value"
                        placeholder={!isFocusE ? 'Equipos' : '...'}
                        onFocus={() => setIsFocusE(true)}
                    />
                    <SelectList setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        placeholder={!isFocus ? 'Posición' : '...'}
                        onFocus={() => setIsFocus(true)}
                    />
                    </View>
                    <View style={styles.shadow}>
                    <TouchableOpacity style={{alignItems: 'center'}}>        
                    <LinearGradient style={styles.botonañadir} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textAñadir}>+  Añade tus jugadores al mercado</Text>
                    </LinearGradient> 
                    </TouchableOpacity>
                    </View>   

                    <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ver información</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>

                    <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ver información</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>

                    <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ver información</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>

                </View>
                
                :null}


                {opciones == 3 ? 
                <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'column', width: '90%', alignItems: 'flex-end', marginBottom: -15}}>    
                <TouchableOpacity>
                <LinearGradient colors={['#D13256', '#FE5F42']} style={{borderRadius:15, padding:3}}>   
                <Entypo name="help" size={22} color="white" />
                </LinearGradient> 
                </TouchableOpacity> 
                </View>   
                <Searchbar
                 style={{width: width - 130,height: 35, margin: 20, borderRadius: 25}}
                 placeholder="Buscar"
                 onChangeText={onChangeSearch}
                 value={searchQuery}
                />

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                <SelectList setSelected={(val) => setSelectedE(val)}
                    data={dataEquipos}
                    save="value"
                    placeholder={!isFocusE ? 'Equipos' : '...'}
                    onFocus={() => setIsFocusE(true)}
                />
                <SelectList setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    placeholder={!isFocus ? 'Posición' : '...'}
                    onFocus={() => setIsFocus(true)}
                />
                </View>

                    <View style={styles.card}>
                <LinearGradient  colors={['#D13256', '#FE5F42']}
                style={styles.imgCard}>    
                <View style={styles.containerPlayerName}>
                    <Text style={styles.playerName}>Neymar Jr</Text>
                </View>
                <View>
                    <Image style={styles.imagePlayer} source={JugadorBra}/>
                </View>
                </LinearGradient>
                <View>    
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                    <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                        <LinearGradient  colors={['#D13256', '#FE5F42']}
                        style={{borderRadius: 10, marginLeft:25}}>
                        <Text style={styles.posiciontext}>DELANTERO</Text>
                        </LinearGradient>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                    <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                        <Text style={styles.textCard}>100.000.000</Text>
                    </View>
                    <View style={{flexDirection: 'row', margin: 3}}>
                    <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                        <Text style={styles.textCard}>2h 20s</Text>
                    </View>
                </View>
                <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                <TouchableOpacity>    
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Editar</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Compra directa</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
                </View>

                <View style={styles.card}>
                <LinearGradient  colors={['#D13256', '#FE5F42']}
                style={styles.imgCard}>    
                <View style={styles.containerPlayerName}>
                    <Text style={styles.playerName}>Neymar Jr</Text>
                </View>
                <View>
                    <Image style={styles.imagePlayer} source={JugadorBra}/>
                </View>
                </LinearGradient>
                <View>    
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                    <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                        <LinearGradient  colors={['#D13256', '#FE5F42']}
                        style={{borderRadius: 10, marginLeft:25}}>
                        <Text style={styles.posiciontext}>DELANTERO</Text>
                        </LinearGradient>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                    <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                        <Text style={styles.textCard}>100.000.000</Text>
                    </View>
                    <View style={{flexDirection: 'row', margin: 3}}>
                    <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                        <Text style={styles.textCard}>2h 20s</Text>
                    </View>
                </View>
                <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                <TouchableOpacity>    
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Editar</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Compra directa</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
                </View>

                <View style={styles.card}>
                <LinearGradient  colors={['#D13256', '#FE5F42']}
                style={styles.imgCard}>    
                <View style={styles.containerPlayerName}>
                    <Text style={styles.playerName}>Neymar Jr</Text>
                </View>
                <View>
                    <Image style={styles.imagePlayer} source={JugadorBra}/>
                </View>
                </LinearGradient>
                <View>    
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                    <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                        <LinearGradient  colors={['#D13256', '#FE5F42']}
                        style={{borderRadius: 10, marginLeft:25}}>
                        <Text style={styles.posiciontext}>DELANTERO</Text>
                        </LinearGradient>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                    <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                        <Text style={styles.textCard}>100.000.000</Text>
                    </View>
                    <View style={{flexDirection: 'row', margin: 3}}>
                    <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                        <Text style={styles.textCard}>2h 20s</Text>
                    </View>
                </View>
                <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                <TouchableOpacity>    
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Editar</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Compra directa</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
                </View>

                <View style={styles.card}>
                <LinearGradient  colors={['#D13256', '#FE5F42']}
                style={styles.imgCard}>    
                <View style={styles.containerPlayerName}>
                    <Text style={styles.playerName}>Neymar Jr</Text>
                </View>
                <View>
                    <Image style={styles.imagePlayer} source={JugadorBra}/>
                </View>
                </LinearGradient>
                <View>    
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                    <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                        <LinearGradient  colors={['#D13256', '#FE5F42']}
                        style={{borderRadius: 10, marginLeft:25}}>
                        <Text style={styles.posiciontext}>DELANTERO</Text>
                        </LinearGradient>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                    <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                        <Text style={styles.textCard}>100.000.000</Text>
                    </View>
                    <View style={{flexDirection: 'row', margin: 3}}>
                    <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                        <Text style={styles.textCard}>2h 20s</Text>
                    </View>
                </View>
                <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                <TouchableOpacity>    
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Editar</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                    <Text style={styles.textbotones}>Compra directa</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
                </View>

            </View>
                
                :null}

                </View>
            </ScrollView>
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EAEAEA',
        padding: 10,
        paddingTop: 16,
    },
    rectanguloMercado:{
        backgroundColor: '#D7D3DA',
        height: 100,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    fondoMercado:{
        backgroundColor: '#E2DDDD',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    editButton: {
        width: 90,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    posiciontext: {
        paddingLeft:3,
        paddingRight:3,
        fontSize: "10",
        lineHeight: 25,
        color: 'white',
        fontWeight: '500'
    },
    textCard: {
        fontSize: "12",
        lineHeight: 25,
        color: 'black',
        fontWeight: '600'
    },
    botonañadir:{
        width: '100%', 
        height: 40,
        borderRadius: 10,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15,
    },
    shadow:{
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
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
        height: 115, 
        marginLeft: 20, 
        resizeMode: 'contain'
    },
    playerName: {
        fontWeight: 'bold',
        fontSize: "14",
        color: '#FFFFFF',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '93%',
        height: 115,
        position: 'relative',
        flexDirection: 'row',
        marginTop: 10
    },
    imgCard:{
        height: '100%',
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    fondo: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    title: {  
        marginTop: 2,
        fontWeight: 'bold',
        fontSize: "28",
        color: '#3D405B'
    },
    buttonSelected: {
        textAlign: 'center',
        margin: '1.66%',
        padding: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#D13256',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        textAlign: 'center',
        margin: '1.66%',
        padding: 8,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: "15",
        lineHeight: '18px',
        color: '#3D405B',
        textAlign: 'center'
    },
    textAñadir: {
        fontWeight: 'bold',
        fontSize: "12",
        lineHeight: '18px',
        color: 'white',
        textAlign: 'left'
    },
    containerButtons: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between'
    },
    textbotones:{
        fontSize: "10",
        color: 'white',
        fontWeight: 'bold'
    }
})
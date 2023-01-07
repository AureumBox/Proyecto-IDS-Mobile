import React, { useState } from "react";
import {
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function PWReset({ navigation }) {
    const [showPass, setShowPass] = useState(true);
    const [showConf, setShowConf] = useState(true);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Text style={styles.body}>Reiniciar Contraseña</Text>
                    <Text style={styles.text}>
                        Tip: Las contraseñas fuertes incluyen una combinación de números, letras y signos de puntuación
                    </Text>
                    <View style={styles.inputContainer}>
                        <Ionicons
                            name="lock-closed-outline"
                            size={24}
                            color="#808080"
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputText}
                            placeholder='Nueva Contraseña'
                            autoCorrect={false}
                            secureTextEntry={showPass}
                        />
                        <TouchableOpacity
                            onPress={() => { setShowPass(!showPass) }}
                            style={styles.buttonEye}
                        >
                            <Ionicons
                                name={showPass === false ? 'eye-outline' : 'eye-off-outline'}
                                size={26}
                                color='#808080'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons
                            name="lock-closed-outline"
                            size={24}
                            color="#808080"
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputText}
                            placeholder='Verificar Contraseña'
                            autoCorrect={false}
                            secureTextEntry={showConf}
                        />
                        <TouchableOpacity
                            onPress={() => { setShowConf(!showConf) }}
                            style={styles.buttonEye}
                        >
                            <Ionicons
                                name={showConf === false ? 'eye-outline' : 'eye-off-outline'}
                                size={26}
                                color='#808080'
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Boton Iniciar Sesión */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PWReset')}
                        style={styles.logInButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Reiniciar Contraseña</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F6FF',
    },
    contentContainer: {
        paddingHorizontal: 30,
        marginTop: 50,
    },
    body: {
        padding: 20,
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 20,
        fontWeight: '400',
        textAlign: 'center',
        color: '#353147',
    },
    text: {
        paddingBottom: 50,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: '400',
        textAlign: 'center',
        color: '#353147',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#DFE3E630',
        marginTop: 20,
        marginBottom: 40,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'FFFFFF70',
        padding: 16,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        marginHorizontal: 10,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    inputIcon: {
        position: 'absolute',
        alignItems: 'center',
        left: 25
    },
    inputText: {
        paddingLeft: 20,
        marginHorizontal: 20
    },
    buttonEye: {
        position: 'absolute',
        right: 25
    },
    logInButton: {
        backgroundColor: '#70ABAF',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 60,
    },
    forgotPW: {
        fontSize: 17,
        lineHeight: 30,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
    }
})
import React from "react";
import {
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Image,
    View
} from "react-native";
import HPANavigation from "../../constants/HPANavigation";
import { Ionicons } from '@expo/vector-icons';

export default function PWRecovery({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Text style={styles.body}>¿Olvidaste tu contraseña?</Text>
                    <Text style={styles.text}>
                        No te preocupes, puede suceder. Por favor ingresa tu Correo Electrónico. Estaremos enviandote un correo para reiniciar tu contraseña
                    </Text>
                    <View style={styles.inputContainer}>
                        <Ionicons
                            name="mail-outline"
                            size={24}
                            color="black"
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputText}
                            placeholder='Correo Electrónico'
                            autoCorrect={false}
                        />
                    </View>
                    {/* Boton Reiniciar Contraseña */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate(HPANavigation.PWRESET)}
                        style={styles.logInButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Enviar correo para reiniciar contraseña</Text>
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
    logInButton: {
        backgroundColor: '#70ABAF',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 30,
    }
})
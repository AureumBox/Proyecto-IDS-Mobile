import React from "react";
import {
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function PWReset({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Text style={styles.body}>Reiniciar Contraseña</Text>
                    <Text style={styles.text}>
                        Tip: Las contraseñas fuertes incluyen una combinación de números, letras y signos de puntuación
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nueva Contraseña'
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Verificar Contraseña'
                        autoCorrect={false}
                    />
                    {/* Boton Iniciar Sesión */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}
                        style={styles.logInButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Reiniciar Contraseña</Text>
                    </TouchableOpacity>
                    {/* Boton HomePage */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('HomeScreen')}
                            style={styles.homePageButton}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>HomePage</Text>
                        </TouchableOpacity>
                    </View>
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
    input: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        marginHorizontal: 5,
    },
    logInButton: {
        backgroundColor: '#70ABAF',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 60,
        // Sombras
        // shadowColor: '#FD6D6A',
        // shadowOffset: {
        //     width: 0,
        //     height: 8,
        // },
        // shadowOpacity: .44,
        // shadowRadius: 10.32,
    },
    forgotPW: {
        fontSize: 17,
        lineHeight: 30,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
    },
    homePageButton: {
        backgroundColor: '#C10001',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 165,
    },
})
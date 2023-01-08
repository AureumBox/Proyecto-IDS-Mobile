import React from "react";
import {
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from "react-native";
import logoVerticalImg from '../../../assets/app/logoVertical.png';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
    const { height } = Dimensions.get('window')

    return (
        <View style={styles.container}>
            <Image
                source={logoVerticalImg}
                style={{
                    width: '85%',
                    height: (height / 3) * 1.4,
                }}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Bienvenido a</Text>
                <Text style={styles.title}>Offside!</Text>
                <Text style={styles.body}>
                    Organiza, Colecciona y Compite en una liga llena de amigos con tu equipo
                    de ensueño favorito
                </Text>
                <View style={styles.buttonContainer}>
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}
                        style={styles.button1}
                    >
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                    
                    <LinearGradient colors={['#D13256', '#FE5F42']} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LogIn')}
                        style={styles.button2}
                    >
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCFCFC',
    },
    contentContainer: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 35,
        textAlign: 'center',
        color: '#353147',
    },
    body: {
        paddingTop: 20,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: '400',
        textAlign: 'center',
        color: '#353147',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        backgroundColor: '#DFE3E630',
        marginTop: 40,
    },
    buttonText: {
        fontWeight: '500',
        color: '#353147',
    },
    button1: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        borderRadius: 6,
    },
    button2: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
})
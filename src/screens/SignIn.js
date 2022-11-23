import React, { useState } from "react";
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
import { signup } from "../services/axiosBD";
import {useForm, Controller} from "react-hook-form";
import Constants from 'expo-constants';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux'
import { logIn } from '../state/authSlice.js';

const SignIn = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const {control, handleSubmit, formState: {errors}, watch} = useForm();
    const pwd = watch("password");
    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const dispatch = useDispatch();

    const sendRegisterData = async (data) =>{
        setLoading(true);
        try {
            const result = await signup(data);
            setLoading(false);
            if (result.data.token){
                dispatch(logIn(result.data.token));
                navigation.navigate('Bienvenida');
            } 
        } catch (error) {
             if (error?.response?.data) {
                alert(error?.response?.data.message);
             }else{
                alert("Error del servidor al registrarse");
            }
        } finally {
            setLoading(false);
        }
    }

    // TODO: Delete it later, is for test propurses
    console.log("EXTRA CONFIG:", Constants.expoConfig.extra);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Spinner
                        visible={loading}
                        textContent={'Cargando...'}
                    />
                    <Text style={styles.body}>Crea una Cuenta</Text>
                    <Controller 
                        control={control}
                        name="name"
                        rules={{required: "Ingrese su nombre de usuario"}}
                        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                            <>
                                {error && (<Text style={{color: 'red', fontWeight: 'bold', lineHeight: 15, textAlign: 'left' }}>
                                    {error.message}</Text>
                                )}
                                <TextInput
                                    value={value}
                                    style={error ? styles.inputError : styles.input}
                                    placeholder='Nombre de usuario'
                                    autoCorrect={false}
                                    onChangeText={onChange}
                                />
                                
                            </>
                        )}
                    />
                    <Controller 
                        control={control}
                        name="email"
                        rules={{
                            required: "Ingrese su correo electrónico",
                            pattern: {value: EMAIL_REGEX, message: "Ingrese un correo válido"}
                        }}
                        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                            <>
                                {error && (<Text style={{color: 'red', fontWeight: 'bold', lineHeight: 15, textAlign: 'left' }}>
                                    {error.message}</Text>
                                )}
                                <TextInput
                                    value={value}
                                    style={error ? styles.inputError : styles.input}
                                    placeholder='Correo Electrónico'
                                    autoCorrect={false}
                                    onChangeText={onChange}
                                />
                                
                            </>
                        )}
                    />
                    <Controller 
                        control={control}
                        name="password"
                        rules={{required: "Ingrese su contraseña"}}
                        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                            <>
                                {error && (<Text style={{color: 'red', fontWeight: 'bold', lineHeight: 15, textAlign: 'left' }}>
                                    {error.message}</Text>
                                )}
                                <TextInput
                                    value={value}
                                    style={error ? styles.inputError : styles.input}
                                    placeholder='Contraseña'
                                    autoCorrect={false}
                                    onChangeText={onChange}
                                    secureTextEntry={true}
                                />
                            </>
                        )}
                    />
                    <Controller 
                        control={control}
                        name="passwordConf"
                        rules={{
                            required: "Verifique su contraseña",
                            validate: value => value === pwd ? true: "Las contraseñas no coinciden"
                        }}
                        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                            <>
                                {error && (<Text style={{color: 'red', fontWeight: 'bold', lineHeight: 15, textAlign: 'left' }}>
                                    {error.message}</Text>
                                )}
                                <TextInput
                                    value={value}
                                    style={error ? styles.inputError : styles.input}
                                    placeholder='Verificar Contraseña'
                                    autoCorrect={false}
                                    onChangeText={onChange}
                                    secureTextEntry={true}
                                />
                            </>
                        )}
                    />

                    {/* Botón Registrarte */}
                    <TouchableOpacity
                        onPress={handleSubmit(sendRegisterData)}
                        style={styles.logInButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Registrarte</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center' }}>o Regístrate con:</Text>

                    {/* Botones de Aplicaciones */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Bienvenida')}
                            style={styles.button}>
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                                }}
                                style={{ width: 40, height: 40 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Bienvenida')}
                            style={styles.button}>
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png'
                                }}
                                style={{ width: 40, height: 40 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Bienvenida')}
                            style={styles.button}>
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'
                                }}
                                style={{ width: 40, height: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Cambiar a pantalla de iniciar sesion */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LogIn')}
                    >
                        <Text style={styles.forgotPW}>Ya tienes una cuenta?, Inicia Sesión!</Text>
                    </TouchableOpacity>

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Bienvenida')}
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


export default SignIn;

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
        marginTop: 5,
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
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        marginHorizontal: 10,
    },
    inputError: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 16,
        marginHorizontal: 5,
    },
    logInButton: {
        backgroundColor: '#70ABAF',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 30,
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
        fontSize: 18,
        lineHeight: 30,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    homePageButton: {
        backgroundColor: '#C10001',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 30,
    },
})
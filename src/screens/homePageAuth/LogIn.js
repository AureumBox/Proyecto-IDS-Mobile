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
import {useForm, Controller} from "react-hook-form";
import { login } from "../../services/auth.services";
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux'
import { logIn as logInRedux } from '../../state/authSlice.js';
import HPANavigation from "../../constants/HPANavigation";
import { store } from "../../state/store";

export default function LogIn({ navigation }) {
    const [loading, setLoading] = useState(false);
    const {control, handleSubmit, formState: {errors}} = useForm();
    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const dispatch = useDispatch();

    const sendLoginData = async (data) =>{
        console.log(data)
        setLoading(true);
        try {
            const result = await login(data);
            setLoading(false);
            if(result.data.token){
                console.log(result.data.token)
                dispatch(logInRedux(result.data.token));
                console.log(store.getState())
                navigation.navigate(HPANavigation.BNB);
            }
        } catch (error) {  
            if (error?.response?.data) {
                alert(error?.response?.data.message);
             }else{
                alert("Error del servidor al autenticarse");
            }
       } finally {
           setLoading(false);
       }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Spinner
                        visible={loading}
                        textContent={'Cargando...'}
                    />
                    <Text style={styles.body}>Inicia sesión en tu Cuenta</Text>
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
                    {/* Boton Olvido su Contraseña */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate(HPANavigation.PWRECOVERY)}
                    >
                        <Text
                            style={[
                                { color: 'gray', fontWeight: 'bold', lineHeight: 30, textAlign: 'right' },
                            ]}>
                            Recuperar Contraseña
                        </Text>
                    </TouchableOpacity>
                    {/* Boton Iniciar Sesión */}
                    <TouchableOpacity
                        onPress={handleSubmit(sendLoginData)}
                        style={styles.logInButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Iniciar Sesión</Text>
                    </TouchableOpacity>

                    <Text style={{ textAlign: 'center' }}>o Inicia Sesión con:</Text>

                    {/* Botones de Aplicaciones */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(HPANavigation.HOME)}
                            style={styles.button}>
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                                }}
                                style={{ width: 40, height: 40 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(HPANavigation.HOME)}
                            style={styles.button}>
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png'
                                }}
                                style={{ width: 40, height: 40 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(HPANavigation.HOME)}
                            style={styles.button}>
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'
                                }}
                                style={{ width: 40, height: 40 }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Boton Cambiar a pantalla de registro */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate(HPANavigation.SIGNIN)}
                    >
                        <Text style={styles.forgotPW}>¿No tienes una cuenta?, ¡Registrate Ahora!</Text>
                    </TouchableOpacity>
                    {/* Boton HomePage */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(HPANavigation.HOME)}
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
        marginVertical: 30,
    },
})
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


const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    function sendUserData(username, email, password, passwordConf, navigation){
        if (((username!="")&&(email!="")&&(password!="")) && (password===passwordConf)){
            signupUser(username, email, password);
            navigation.navigate('Bienvenida')
        } else {
            console.log("Error - contrasena no es igual")
        }
    }
    
    function signupUser(username, email, password){
        const user={
            "name": username,
            "email": email,
            "password": password
        };  
        signup(user);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Text style={styles.body}>Crea una Cuenta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre de Usuario'
                        autoCorrect={false}
                        onChangeText={username => setUsername(username)}
                        value = {username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Correo Electrónico'
                        autoCorrect={false}
                        onChangeText={email => setEmail(email)}
                        value = {email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Contraseña'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        value = {password}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Verificar Contraseña'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={passwordConf => setPasswordConf(passwordConf)}
                        value = {passwordConf}
                    />
                    {/* Botón Registrarte */}
                    <TouchableOpacity
                        onPress={() => sendUserData(username,email,password,passwordConf,navigation)}
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



/*function loginUser(username, email, password, passwordConf, navigation){
    if (((username!="")&&(email!="")&&(password!="")) && (password===passwordConf)){
        const user={
            "name": username,
            "role": "user",
            "email": email,
            "password": password
        };
        createUser(user);
        navigation.navigate('Bienvenida')
    } else {
        console.log("Error - contrasena no es igual")
    }
}*/

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
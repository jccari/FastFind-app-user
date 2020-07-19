import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontiscoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button, Text, Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';


function LoginScreen() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorText, setErrorText] = useState(null);
    const navigation = useNavigation();

    async function tryLogin() {
        setErrorText(null);
        if (email.length === 0 || password.length === 0){
            setErrorText("Por favor ingrese sus datos.")
        }
        console.log('Trying login with: ', email, password);
        auth().signInWithEmailAndPassword(email, password)
            .then( response => {
                navigation.navigate('main');
            })
            .catch( err => {
                Alert('Datos de Autenticación erroneas. Intente de nuevo');
                console.log("Datos de Autenticación erroneas. Intente de nuevo");
                setErrorText("Datos de Autenticación erroneas. POr favor intente de nuevo.")
            });
        // try {
        //     let response = await auth().signInWithEmailAndPassword(email, password);
        //     console.log('user', response.user);
        //     if (response.user) {
        //         navigation.navigate('main');
        //     }
        // } catch (err) {
        //     Alert('Datos de Autenticación erroneas. Intente de nuevo');
        // }
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.logoContainer}>

            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.title}> Iniciar Sesión </Text>

                <Input
                    // label={"Correo electrónico"}
                    placeholder={"Correo electrónico"}
                    leftIcon={
                        <FontiscoIcon
                            name='email'
                            size={24}
                            color='black'
                        />
                    }
                    onChangeText={value => setEmail(value)}
                    containerStyle={styles.emailInputContainer}
                    inputStyle={{fontSize: 16, paddingLeft: 7,}}
                />
                <Input
                    // label={"Contraseña"}
                    placeholder={"Contraseña"}
                    leftIcon={

                        <MaterialIcons
                            name='textbox-password'
                            size={24}
                            color='black'
                        />
                    }
                    secureTextEntry={true}
                    onChangeText={value => setPassword(value)}
                    containerStyle={styles.passwordInputContainer}
                    inputStyle={{fontSize: 16, paddingLeft: 7,}}
                />
                <Button
                    title={'CONTINUAR'}
                    onPress={tryLogin}
                    buttonStyle={styles.continueButton}
                    containerStyle={styles.continueContainerButton}
                />

                {/*{ errorText && <Text style={styles.errorText}> errorText </Text> }*/}


                <Text
                    style={styles.forgotText}
                    onPress={() => console.log('FORGOTTTT')}
                > Olvidé mi contraseña </Text>

                <Text style={styles.createAccountText}> ¿Aún no tienes cuenta? Registrate </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        // backgroundColor: Colors.dark,
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        // backgroundColor: Colors.dark,
    },
    loginContainer: {
        // backgroundColor: Colors.light,
        flex: 2,
        alignItems: 'center',
        marginRight: RFValue(32, 680),
        marginLeft: RFValue(32, 680),
    },
    title: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: RFValue(32, 680),
        marginVertical: RFValue(32, 680),
    },
    emailInputContainer: {
        backgroundColor: Colors.white,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingTop: 5,
    },
    passwordInputContainer: {
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    continueContainerButton: {
        alignSelf: 'stretch',
        marginTop: RFValue(28, 680),
        // width: 100%,
    },
    continueButton: {
        backgroundColor: Colors.primary,
        height: RFValue(46, 680),
        borderRadius: 25,
    },
    errorText:{
        color: Colors.warning
    },
    forgotText: {
        textDecorationLine: 'underline',
        color: Colors.secondary,
        fontSize: 13,
        alignSelf: 'flex-end',
        marginTop: RFValue(28, 680),
    },
    createAccountText: {
        textDecorationLine: 'underline',
        color: Colors.primary,
        fontSize: 14,
        alignSelf: 'flex-start',
        marginTop: RFValue(32, 680),
    },
});

export default LoginScreen;

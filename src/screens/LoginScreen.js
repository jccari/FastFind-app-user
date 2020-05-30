import React, {useState} from 'react';
import {View, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Text, Input} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';


function LoginScreen() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigation = useNavigation();

    async function tryLogin() {
        console.log('Trying login with: ', email, password);
        try {
            let response = await auth().signInWithEmailAndPassword(email, password);
            console.log('user', response.user);
            if (response.user){
                navigation.navigate('main');
            }
        } catch (err) {
            Alert('Datos de Autenticación erroneas. Intente de nuevo');
        }
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}> Iniciar Sesión </Text>

            <Input
                placeholder='Usuario'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
                onChangeText={value => setEmail(value)}
                containerStyle={styles.emailInputContainer}
            />
            <Input
                placeholder='Contraseña'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
                onChangeText={value => setPassword(value)}
                containerStyle={styles.passwordInputContainer}
            />
            <Button title={'CONTINUAR'} onPress={tryLogin} containerStyle={styles.continueButon}/>

            <Text
                style={styles.forgotText}
                onPress={()=> console.log("FORGOTTTT")}
            > Olvidé mi contraseña </Text>

            <Text style={styles.continueButton}> ¿Aún no tienes cuenta? Registrate </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: RFValue(200, 680),
        marginRight: RFValue(32, 680),
        marginLeft: RFValue(32, 680),
    },
    title: {
        color: Colors.secondary,
        fontSize: RFValue(32, 680),
        marginBottom: RFValue(32, 680),
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
    continueButton: {
        backgroundColor: Colors.primary,
        marginTop: RFValue(28, 680),
    },
    forgotText:{
        textDecorationLine: 'underline',
        color: Colors.secondary,
        fontSize: 13,
        alignSelf: 'flex-end',
        marginTop: RFValue(28, 680),
    },
    createAccountText:{
        textDecorationLine: 'underline',
        color: Colors.primary,
        fontSize: 14,
        alignSelf: 'flex-start',
        marginTop: RFValue(32, 680),
    },
});

export default LoginScreen;

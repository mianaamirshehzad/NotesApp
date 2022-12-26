import { useState, useEffect } from 'react';
import { View, Text, Button, TextCustomInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

import CustomInput from '../components/CustomInput';
import styles from '../Style';



const Login = (props) => {

    // const auth = getAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // const handleLogin = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(userCredentials => {
    //             const user = userCredentials.user;
    //             console.log('Register with', user.email);
    //             alert('You have registered into our system!')
    //         })
    //         .catch(error => alert(error.message))
    // }

    // const handleLogin = () => {

    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(userCredentials => {
    //             const user = userCredentials.user;
    //             console.log('Login with', user.email);
    //             // alert('Enter the Right E mail')
    //             props.navigation.navigate('Registration', { email: email })
    //         })
    //         .catch(error => alert(error.message))
    // }

    return (
        <View >

            <Text style={styles.titleText}>
                Hello Again!
            </Text>
            <Text style={styles.subtitleText}>
                Welcome back. You've been missed!
            </Text>
            <CustomInput

                type="Email"
                onText={(t) => { setEmail(t) }}
            />
            <CustomInput

                type='Password'
                onText={(t) => { setPassword(t) }}
                secure={true}
            />
            <TouchableOpacity
                onPress={() => props.navigation.navigate('ForgotPassword')}
            >
                <Text
                    style={styles.placeLeft}
                >
                    Forgot Password?
                </Text>
            </TouchableOpacity>
            {/* <View style={{ width: '90%', alignSelf: 'center', padding: 10 }}> */}

            <CustomButton
                name='Login' />

            <TouchableOpacity
                onPress={() => props.navigation.navigate('ForgotPassword')}
            >
                <Text
                    style={ styles.placeCenter}
                >
                    Not a member? Register now.
                </Text>
            </TouchableOpacity>
            {/* </View> */}
            {/* <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Forgot")
                    }}
                >
                    <Text style={{
                        fontStyle: 'italic', alignSelf: 'flex-end',
                        fontSize: 20, margin: 20, color: 'red'
                    }}>Forgot password </Text>
                </TouchableOpacity> */}

        </View>

    )
}

export default Login;
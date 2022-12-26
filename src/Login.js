import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import firebaseApp from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import Input from '../Input'
import { useNavigation } from '@react-navigation/native'

const Login = (props) => {

    const auth = getAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()


    useEffect(() => {

    }, [])


    // const handleLogin = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(userCredentials => {
    //             const user = userCredentials.user;
    //             console.log('Register with', user.email);
    //             alert('You have registered into our system!')
    //         })
    //         .catch(error => alert(error.message))
    // }

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Login with', user.email);
                // alert('Enter the Right E mail')
                props.navigation.navigate('Registration', { email: email })
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView>
            <View>

                <Text style={{
                    fontStyle: 'normal', color: 'black', alignSelf: 'center',
                    fontSize: 40, margin: 40
                }}>LOGIN </Text>
                <Input
                    hint="E-mail ID"
                    onText={(t) => { setEmail(t) }}
                />
                <Input
                    hint='password'
                    sec={true}
                    onText={(t) => { setPassword(t) }}

                />
                <View style={{ width: '90%', alignSelf: 'center', padding: 10 }}>

                    <Button
                        onPress={handleLogin}
                        title='Login'
                        color='#3f72c4'
                    />

                </View>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Forgot")
                    }}
                >
                    <Text style={{
                        fontStyle: 'italic', alignSelf: 'flex-end',
                        fontSize: 20, margin: 20, color: 'red'
                    }}>Forgot password </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

export default Login;
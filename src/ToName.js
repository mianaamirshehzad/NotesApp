import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import firebaseApp from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import Input from '../Input'
import { useNavigation } from '@react-navigation/native'


const Signup = (props) => {
    const auth = getAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()


    useEffect(() => {

    }, [])


    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Register with', user.email);
                alert('You have registered into our system!')
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView>
            <View>
                <View>
                    <Text style={{
                        fontStyle: 'normal', color: 'black', alignSelf: 'center',
                        fontSize: 40, margin: 40
                    }}>SignUp </Text>
                </View>
                <View>
                    <Text style={{
                        fontStyle: 'normal', color: 'black', alignSelf: 'flex-start',
                        fontSize: 20, margin: 30
                    }}>Require Information to account creation</Text>
                </View>

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
                        onPress={handleSignup}
                        title='Signup'
                        color='#3f72c4'
                    />
                </View>
                <View>
                    <Text style={{
                        fontStyle: 'normal', color: 'black', alignSelf: 'flex-start',
                        fontSize: 20, margin: 30
                    }}>Already have an Account ?</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Login")
                    }
                    }>
                    <Text style={{
                        fontStyle: 'italic', alignSelf: 'flex-start',
                        fontSize: 20, margin: 20, color: 'red'
                    }}>Login </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

export default Signup
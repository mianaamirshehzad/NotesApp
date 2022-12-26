import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Input from '../Input'

const Forgot = (props) => {
    const [email, setEmail] = useState('')



    return (
        <ScrollView>
            <View>

                <Text style={{
                    fontStyle: 'normal', color: 'black', alignSelf: 'center',
                    fontSize: 40, margin: 40
                }}>Forgot password</Text>
                <Text style={{
                    fontStyle: 'normal', alignSelf: 'flex-start',
                    fontSize: 20, margin: 20, color: 'black'
                }}>Don't worry it Happened! plz enter your Email adress associate with your Account
                </Text>
                <Input
                    hint="E-mail ID"
                    onText={(t) => { setEmail(t) }}
                />
                <View style={{ width: '90%', alignSelf: 'center', padding: 10 }}>

                    <Button
                        // onPress={handleLogin}
                        title='Submit'
                        color='#3f72c4'
                    />

                </View>

            </View>

        </ScrollView>
    )
}

export default Forgot
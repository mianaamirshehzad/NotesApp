import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import styles from '../Style';

const Forgot = (props) => {
    const [email, setEmail] = useState('');



    return (
        <View style={styles.container} >
            <Image
            source={require('../../assets/forgot.jpg')} />
            <Text style = {styles.subtitleText} >
                We care about you. Let's start
            </Text>
            <CustomInput
            type = "Recover password" />
            <CustomButton
            name = "Send Email"
            onPress = {() => alert('Reset Email has been sent')} />
        </View>
    )
}

export default Forgot
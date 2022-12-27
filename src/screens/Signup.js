import { View, Text, Button, TextCustomInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { addDoc, getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore'

import CustomInput from '../components/CustomInput';
import styles from '../Style';
import CustomButton from '../components/CustomButton';

const Signup = (props) => {
    console.log(props.route.params.email)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState("");

    // const [age, setAge] = useState('');

    const db = getFirestore(firebaseApp)

    const onSignupPressed = async () => {
        try {
            await setDoc(doc(db, "User", props.route.params.email), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirmPass: confirmPass
            });
            alert('Success in Signup');
        } catch (e) {
            console.log(e);
            alert('Error');
            alert(e);
        }
    }

    // const onGetProfilePressed = async () => {
    //     // const db = getFirestore(firebaseApp)
    //     try {
    //         const docRef = doc(db, "User", props.route.params.email);
    //         const meraVariable = await getDoc(docRef);

    //         if (meraVariable.exists()) {
    //             console.log("Document data:", meraVariable.data());
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }



    return (
        <View>
            <Text style={styles.titleText} >
                Signup
            </Text>
            <Text style={styles.subtitleText}>
                Instant access to see your notes!
            </Text>
            <CustomInput
                type="First Name"
            />
            <CustomInput
                type="Last Name"
            />
            <CustomInput
                type="Email"
            />
            <CustomInput
                type="Password"
            />
            <CustomInput
                type="Confirm Password"
            />

            {/* Button to call a function for Account Creation*/}
            <CustomButton
                name="Signup"
                onPress={() => onSignupPressed()}
            />

            {/* Text to move back to Login Screen */}
            <TouchableOpacity
                style={styles.text}
                onPress={() => props.navigation.navigate('Login')} >
                <Text
                // style={ styles.placeCenter}
                >
                    Have an account? Login now
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup;
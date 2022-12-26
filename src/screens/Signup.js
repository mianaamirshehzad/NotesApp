import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import firebaseApp from '../firebase'
import { addDoc, getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore'
import Input from '../Input'
import { async } from '@firebase/util'


const Signup = (props) => {
    console.log(props.route.params.email)

    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [Adress, setAdress] = useState('')
    const [Age, setAge] = useState('')
    const db = getFirestore(firebaseApp)

    const onSubmitPressed = async () => {
        try {
            await setDoc(doc(db, "User", props.route.params.email), {
                FirtName: fName,
                LastName: lName,
                Adress: Adress,
                Age: Age,
            }); alert('Success')
        } catch (e) {
            console.log(e)
            alert('Error')
        }
    }

    const onGetProfilePressed = async () => {
        // const db = getFirestore(firebaseApp)
        try {
            const docRef = doc(db, "User", props.route.params.email);
            const meraVariable = await getDoc(docRef);

            if (meraVariable.exists()) {
                console.log("Document data:", meraVariable.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (e) {
            console.log(e)
        }

    }



    return (
        <ScrollView>
            <View>

                <Text style={{
                    fontStyle: 'normal', color: 'black', alignSelf: 'center',
                    fontSize: 40, margin: 40
                }}>Registration</Text>
                <Input
                    hint="firstName"
                    onText={(t) => { setfName(t) }}
                />
                <Input
                    hint="lastName"
                    onText={(t) => { setlName(t) }}
                />
                <Input
                    hint="Adress"
                    onText={(t) => { setAdress(t) }}
                />
                <Input
                    hint="Age"
                    onText={(t) => { setAge(t) }}
                />
                <View style={{ width: '30%', alignSelf: 'flex-end', padding: 20 }}>

                    <Button

                        onPress={() => onSubmitPressed()}
                        title='Submit'
                        color='#3f72c4'
                    />
                </View>
                <View style={{ width: '80%', alignSelf: 'center', padding: 20 }}>

                    <Button

                        onPress={() => onGetProfilePressed()}
                        title='Get Profile'
                        color='#3f72c4'
                    />
                </View>
                <View style={{ width: '30%', alignSelf: 'flex-start', padding: 20 }}>

                    <Button
                    onPress={() => {
                        props.navigation.navigate("Notes")
                    }}

                        title='Submit'
                        color='#3f72c4'
                    />
                </View>
            </View>

        </ScrollView>
    )
}

export default Signup
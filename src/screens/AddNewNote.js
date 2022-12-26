import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import firebaseApp from '../firebase'
import { addDoc, getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore'
import { EmailAuthCredential } from 'firebase/auth';
 
const AddNewNote = () => {

    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const db = getFirestore(firebaseApp)

    const onSavedPressed = async () => {
        try {
            await setDoc(doc(db, "notes", 'zohaib@gmail.com' ), {
               title : title,
               notes : notes
            }); alert('Success in Data Sending')
        } catch (e) {
            console.log(e)
            alert('Data not sent to firebase')
        }
    }

    return (
        <View>
            {/* Notes title will go here */}
            <TextInput
                placeholder='Title'
                style={styles.titleText}
                onChangeText={(text) => setTitle(text)}
            />

            {/* Description will be written here */}
            <TextInput
                placeholder='Notes'
                style={styles.notesText}
                onChangeText={(text) => setNotes(text)}
            />
            <View style={{ width: '80%', alignSelf: 'center', padding: 20 }}>

                <Button

                    onPress={() => onSavedPressed()}
                    title='Save'
                    color='#3f72c4'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    notesText: {
        fontSize: 18,
    }
});

export default AddNewNote;
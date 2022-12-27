import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import styles from '../Style';


import { addDoc, getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore'
import { EmailAuthCredential } from 'firebase/auth';

const AddNewNote = () => {

    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');

    const onSavedPressed = async () => {
        try {
            await setDoc(doc(db, "notes", 'zohaib@gmail.com' ), {
               title : title,
               notes : notes
            }); 
            alert('Note successfully saved!');
        } catch (e) {
            console.log(e)
            alert('Something bad happened!');
        };
    };

    return (
        <View>
            {/* <View 
            // style = {styles.imageContainer}
            >
                <Image
                    source={require('../../assets/notes.jpg')}
                    style={styles.image} />
            </View> */}
            <View 
            // style={styles.viewContainer} 
            >
                {/* Notes title will go here */}
                <CustomInput
                    type='Title'
                    // style={styles.titleText}
                    onChangeText={(text) => setTitle(text)}
                />

                {/* Description will be written here */}
                <CustomInput
                    type='Notes'
                    style={styles.notesText}
                    onChangeText={(text) => setNotes(text)}
                />
            </View>
            <CustomButton
                name="Save Notes"
                style={styles.bottomButton}
                onPress = {() => onSavedPressed()} />
        </View>
    )
};


export default AddNewNote;
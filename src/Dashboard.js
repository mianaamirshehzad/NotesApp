import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import firebaseApp from '../firebase'
import { addDoc, getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore'
import { EmailAuthCredential } from 'firebase/auth';
 
const Dashboard = () => {

    // const db = getFirestore(firebaseApp)

    return (
        <View>
            <Text>
                thisis dashboard
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Dashboard;
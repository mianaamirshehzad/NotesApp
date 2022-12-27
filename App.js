import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Forgot from './src/screens/Forgot';
import AddNewNote from './src/screens/AddNewNote';

import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
    <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' #a6a6a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

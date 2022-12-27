import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';
import AddNewNote from '../screens/AddNewNote';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        //   options={{title: 'Welcome'}}
        />
        <Stack.Screen 
        name="Signup" 
        component={Signup} 
        />
        <Stack.Screen 
        name="Forgot" 
        component={Forgot} 
        />
        <Stack.Screen 
        name="AddNewNote" 
        component={AddNewNote} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../auth/screens/Register';
import Login from '../../auth/screens/Login';

const NewUser = () => {
  const newUser = createNativeStackNavigator();

  return (
    <newUser.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <newUser.Screen name="login" component={Login} />
      <newUser.Screen name="register" component={Register} />
    </newUser.Navigator>
  );
};

export default NewUser;

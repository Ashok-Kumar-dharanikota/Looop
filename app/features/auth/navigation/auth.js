import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Auth = () => {
  const Authentication = createNativeStackNavigator();

  return (
    <Authentication.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Authentication.Screen name="register" component={Register} />
      <Authentication.Screen name="login" component={Login} />
    </Authentication.Navigator>
  );
};

export default Auth;

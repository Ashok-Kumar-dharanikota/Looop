import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const auth = () => {
  const Auth = createNativeStackNavigator();

  return (
    <Auth.Navigator>
      <Auth.Screen name="login" component={Login} />
      <Auth.Screen name="register" component={Register} />
    </Auth.Navigator>
  );
};

export default auth;

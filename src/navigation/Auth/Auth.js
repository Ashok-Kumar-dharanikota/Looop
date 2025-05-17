import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Auth = () => {
  const Auth = createNativeStackNavigator();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Register" component={Register} />
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  );
};

export default Auth;

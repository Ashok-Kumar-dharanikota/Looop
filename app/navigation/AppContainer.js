import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '../features/auth/navigation/auth';

const AppContainer = () => {
  const Root = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="auth" component={auth} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../features/auth/navigation/Auth';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import NewUser from '../features/onboardiing/navigation/NewUser';

const AppContainer = () => {
  const {auth, loading} = useSelector(state => state.authSlice);
  const {userToken, email, username} = auth;
  console.log('Auth:', userToken, email, username);
  const Root = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Root.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {userToken == null ? (
            <Root.Screen name="Auth" component={Auth} />
          ) : (
            <Root.Screen name="NewUser" component={NewUser} />
          )}
        </Root.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default AppContainer;

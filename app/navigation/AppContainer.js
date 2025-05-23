import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../features/auth/navigation/Auth';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import NewUser from '../features/onboardiing/navigation/NewUser';
import retrieveAll from '../features/auth/redux/AuthThunk';

const AppContainer = () => {
  const {
    auth: {userToken},
  } = useSelector(state => state.authSlice);
  const {
    onboarding: {completed},
  } = useSelector(state => state.onBoardingSlice);
  const Root = createNativeStackNavigator();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAll());
  }, [dispatch]);

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

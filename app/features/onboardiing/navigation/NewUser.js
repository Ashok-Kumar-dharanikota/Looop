import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import PickCurrency from '../screens/PickCurrency';
import OnBoardNotify from '../screens/OnBoardNotify';

const NewUser = () => {
  const newUser = createNativeStackNavigator();

  return (
    <newUser.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <newUser.Screen name="onboarding" component={OnBoarding} />
      <newUser.Screen name="pickCurrency" component={PickCurrency} />
      <newUser.Screen name="onBoardingNotification" component={OnBoardNotify} />
    </newUser.Navigator>
  );
};

export default NewUser;

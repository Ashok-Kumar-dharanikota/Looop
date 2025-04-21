import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PickCurrency from '../../screens/PickCurrency';
import RecordPage from '../../screens/RecordPage';
import OnBoardNotify from '../../screens/OnBoardNotify';

const NUStack = createNativeStackNavigator();

const NewUser = () => {
  return (
    <NUStack.Navigator screenOptions={{headerShown: false}}>
      <NUStack.Screen name="PickCurrency" component={PickCurrency} />
      <NUStack.Screen name="Record expense" component={RecordPage} />
      <NUStack.Screen name="OnBoardNotify" component={OnBoardNotify} />
    </NUStack.Navigator>
  );
};

export default NewUser;

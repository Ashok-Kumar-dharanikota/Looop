import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoreOptions from '../screens/MoreOptions';

const More = () => {
  const more = createNativeStackNavigator();

  return (
    <more.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#f97316'},
      }}>
      <more.Screen name="more" component={MoreOptions} />
    </more.Navigator>
  );
};

export default More;

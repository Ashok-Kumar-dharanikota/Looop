import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Record from '../screens/Record';

const Recording = () => {
  const recording = createNativeStackNavigator();
  return (
    <recording.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#f97316'},
      }}>
      <recording.Screen name="record" component={Record} />
    </recording.Navigator>
  );
};

export default Recording;

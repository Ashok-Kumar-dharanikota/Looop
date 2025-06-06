import {View, Text} from 'react-native';
import React from 'react';
import Dashboard from '../features/dashboard/screens/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const UserContainer = () => {
  const User = createBottomTabNavigator();

  return (
    <User.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <User.Screen name="dashboard" component={Dashboard} />
    </User.Navigator>
  );
};

export default UserContainer;

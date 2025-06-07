import {View, Text} from 'react-native';
import React from 'react';
import Dashboard from '../features/dashboard/screens/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const UserContainer = () => {
  const User = createBottomTabNavigator();

  return (
    <User.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          borderRadius: 16,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          height: 80,
          borderColor: 'white',
          shadowColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: 'black',
        },
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}>
      <User.Screen name="dashboard" component={Dashboard} />
    </User.Navigator>
  );
};

export default UserContainer;

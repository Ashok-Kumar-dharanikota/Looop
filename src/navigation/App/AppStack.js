import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab/BottomTab';
import ManageAccount from '../../screens/ManageAccount';
import Categories from '../../screens/Categories';
import DefaultCurrency from '../../screens/DefaultCurrency';
import UpdateNotifications from '../../screens/UpdateNotifications';
import Authentication from '../../screens/Authentication';

const AppStack = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="BottomTab" component={BottomTab} />
      <AppStack.Screen name="ManageAccount" component={ManageAccount} />
      <AppStack.Screen name="Categories" component={Categories} />
      <AppStack.Screen name="DefaultCurrency" component={DefaultCurrency} />
      <AppStack.Screen
        name="UpdateNotifications"
        component={UpdateNotifications}
      />
      <AppStack.Screen name="Authentication" component={Authentication} />
    </AppStack.Navigator>
  );
};

export default AppStack;

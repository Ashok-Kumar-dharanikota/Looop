import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ViewRecordsPage from '../../../screens/ViewRecordsPage';
import RecordPage from '../../../screens/RecordPage';
import MorePage from '../../../screens/MorePage';
import styles from './styles';
import RecordPayment from '../../../screens/RecordPayment';
import CameraScanner from '../../../screens/CameraScanner';

const BottomTab = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          // height: 80,
          // borderRadius: 16,
          // marginLeft: 10,
          // marginRight: 10,
          // marginBottom: 10,
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
      <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              className={` ${
                focused ? 'bg-orange-600 ' : ''
              } mt-11 h-12 w-28 items-center justify-center text-center rounded-full`}>
              <Text
                className={` ${focused ? 'text-white' : ''}  font-medium p-1`}>
                View records
              </Text>
            </View>
          ),
        }}
        name="View Records"
        component={ViewRecordsPage}
      />
      <BottomTab.Screen
        name="Record expense"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              className={` ${
                focused ? 'bg-orange-600 ' : ''
              } mt-11 h-12 w-32 items-center justify-center text-center rounded-full`}>
              <Text
                className={` ${focused ? 'text-white' : ''}  font-medium p-1`}>
                Record expense
              </Text>
            </View>
          ),
        }}
        component={RecordPage}
      />
      <BottomTab.Screen
        name="More"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              className={` ${
                focused ? 'bg-orange-600 ' : ''
              } mt-11 h-12 w-28 items-center justify-center text-center rounded-full`}>
              <Text
                className={` ${focused ? 'text-white' : ''}  font-medium p-1`}>
                More
              </Text>
            </View>
          ),
        }}
        component={MorePage}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTab;

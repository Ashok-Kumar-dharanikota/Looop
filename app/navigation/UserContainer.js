import {View, Image} from 'react-native';
import React from 'react';
import Dashboard from '../features/dashboard/screens/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Recording from '../features/recordExpense/navigation/Recording';
import More from '../features/moreOptions/navigation/More';
import {bottomTabIcons} from '../assets/icons/bottomtab';

const UserContainer = () => {
  const User = createBottomTabNavigator();

  return (
    <User.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          borderRadius: 16,
          marginHorizontal: 17,
          marginBottom: 10,
          marginTop: 5,
          backgroundColor: '#000',
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <User.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View className={'items-center justify-center mt-10'}>
              <Image
                source={
                  focused
                    ? bottomTabIcons.analytics
                    : bottomTabIcons.analytics_light
                }
                className={`w-11 h-11 ${
                  focused ? 'tint-black' : 'tint-gray-400'
                }`}
              />
            </View>
          ),
        }}
      />

      <User.Screen
        name="record"
        component={Recording}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="items-center justify-center mt-10">
              <Image
                source={
                  focused ? bottomTabIcons.voice : bottomTabIcons.voice_light
                }
                className={`w-11 h-11 ${
                  focused ? 'tint-black' : 'tint-gray-400'
                }`}
              />
            </View>
          ),
        }}
      />

      <User.Screen
        name="more"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="items-center justify-center mt-10">
              <Image
                source={
                  focused
                    ? bottomTabIcons.options
                    : bottomTabIcons.options_light
                }
                className={`w-11 h-11 ${
                  focused ? 'tint-black' : 'tint-gray-400'
                }`}
              />
            </View>
          ),
        }}
      />
    </User.Navigator>
  );
};

export default UserContainer;

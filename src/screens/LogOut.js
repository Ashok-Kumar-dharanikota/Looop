import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {clearAppContext} from '../redux/Slices/appcontext';

const LogOut = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearAppContext());
  };

  return (
    <TouchableOpacity onPress={logOut}>
      <Text>LogOut</Text>
    </TouchableOpacity>
  );
};

export default LogOut;

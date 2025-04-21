import {View, Text} from 'react-native';
import React from 'react';
import SafeAreaView from '../components/SafeAreaView';
import AppContainer from '../navigation/AppContainer';

const Root = () => {
  return (
    <SafeAreaView>
      <AppContainer />
    </SafeAreaView>
  );
};

export default Root;

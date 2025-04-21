import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const SafeAreaView = ({children}) => {
  return (
    <View className=" flex-1 bg-white">
      <StatusBar backgroundColor={'black'} />
      {children}
    </View>
  );
};

export default SafeAreaView;

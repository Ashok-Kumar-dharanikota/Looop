import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {more} from '../data/more';
import {icons} from '../assets/icons/icons';

const MorePage = () => {
  return (
    <View className=" p-3 flex-1 bg-white">
      <Text className=" text-xl font-bold p-2">Do more on LOOOP.</Text>
      <FlatList
        className=" mt-1"
        data={more}
        renderItem={({item}) => <Card props={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <Text className=" text-gray-500 font-medium text-center">
        looop version 0.0.7
      </Text>
    </View>
  );
};

export default MorePage;

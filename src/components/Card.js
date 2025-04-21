import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from '../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';

const Card = ({props}) => {
  const navigation = useNavigation();

  const handleOnClick = () => {
    navigation.navigate(props.navigateTo);
  };

  return (
    <TouchableOpacity
      onPress={handleOnClick}
      style={props.styles}
      className={` bg-gray-100 border-gray-300 border-[1px] rounded-2xl p-3 flex-1 w-44 m-1 justify-between`}>
      <View>
        <Text className=" text-lg font-bold">{props.title}</Text>
        <Text className=" text-gray-500">{props.description}</Text>
      </View>
      <View>
        <FlatList
          className=" flex-row"
          data={props.images}
          renderItem={({item}) => (
            <View
              className={`p-5 w-5 h-5 items-center justify-center rounded-full ${props.iconStyles} border-white border-[3px] mr-[-10px]`}>
              <Image source={item} className=" w-7 h-7" />
            </View>
          )}
          keyExtractor={item => item}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

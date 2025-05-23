import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import IconCircleView from '../../../components/IconCircleView';
import {icons} from '../../../assets/icons/icons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation();

  const handleOnBoarding = () => {
    navigation.navigate('pickCurrency');
  };

  return (
    <View className=" flex-1 justify-between p-10 bg-white">
      <View className=" items-center justify-between">
        <IconCircleView>
          <Image source={icons.logo_bg_white} style={{width: 24, height: 24}} />
        </IconCircleView>
        <Text className=" text-black font-extrabold text-xl text-center">
          Track your expenses effortlessly.
        </Text>
        <Text className="pt-3 text-center text-gray-600">
          Welcome to Looop, where tracking your expenses is effortless. Discover
          how our app helps you.
        </Text>

        <View className=" pt-8 gap-3">
          <View className=" bg-gray-100 p-4 rounded-2xl border-gray-300 border-[1px]">
            <Text className=" font-medium text-gray-700">
              Effortlessly 🔎 monitor your spending patterns for better
              insights.
            </Text>
          </View>
          <View className=" bg-gray-100 p-4 rounded-2xl border-gray-300 border-[1px]">
            <Text className=" font-medium text-gray-700">
              Categorize 🗂️expenses to understand where your money goes.
            </Text>
          </View>
          <View className=" bg-gray-100 p-4 rounded-2xl border-gray-300 border-[1px]">
            <Text className=" font-medium text-gray-700">
              Stay informed 👂🏿 about your financial health and make informed
              decisions.
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleOnBoarding}
        className=" bg-orange-600 p-4 w-full rounded-3xl">
        <Text className=" text-center text-white font-medium ">
          Start tracking your expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;

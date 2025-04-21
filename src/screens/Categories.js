import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeAreaView from '../components/SafeAreaView';
import {icons} from '../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

  const categories = [
    '🍛Food',
    '🚘Transportation',
    '💡Utility',
    '📱Airtime',
    '🏡Rent',
    '🌐Internet',
  ];

  const Category = ({props}) => {
    return (
      <TouchableOpacity className=" border-[1px] rounded-full mr-5 p-2 m-1 items-center border-gray-300">
        <Text className=" font-medium">{props}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View className=" flex-1 p-5">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-xl font-bold">{'<<'} Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-7 h-7" source={icons.plus} />
          </TouchableOpacity>
        </View>

        <View className="flex-row">
          <FlatList
            className=" mt-5"
            data={categories}
            renderItem={({item}) => <Category props={item} />}
            keyExtractor={(item, index) => index}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Categories;

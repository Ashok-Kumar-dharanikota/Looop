import {View, Text, StatusBar, Image, SectionList} from 'react-native';
import React from 'react';
import {icons} from '../assets/icons/icons';
import {expenses} from '../data/expenses';

const ViewRecordsPage = () => {
  return (
    <View className=" flex-1 bg-white">
      <StatusBar backgroundColor={'#f97316'} />
      <View className=" bg-orange-500 p-5 rounded-b-3xl pt-10">
        <View className=" flex-row justify-between">
          <Text className=" text-xl text-white font-semibold">Records</Text>
          <View className=" flex-row gap-5">
            <Image source={icons.search_white} className=" w-7 h-7" />
            <Image source={icons.filter} className=" w-7 h-7" />
          </View>
        </View>
        <View className=" p-5 bg-orange-600 rounded-2xl flex-row justify-between items-center mt-10">
          <Text className=" text-2xl text-white font-bold">BWP 15,224</Text>
          <Text className=" bg-white p-3 rounded-full font-medium">
            This week
          </Text>
        </View>
      </View>
      <View className=" flex-1 ml-5 mr-5 mt-5">
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={expenses}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View className="mt-2 mb-2">
              <View className=" flex-row justify-between">
                <Text className=" font-semibold text-lg">{item.category}</Text>
                <Text className="font-semibold text-lg">Rs. {item.amount}</Text>
              </View>
              <View className=" flex-row justify-between">
                <Text className=" text-gray-500 font-medium">
                  {item.description}
                </Text>
                <Text className="text-gray-500">{item.time}</Text>
              </View>
            </View>
          )}
          renderSectionHeader={({section: {title, data}}) => (
            <View className=" flex-row justify-between border-b-2 border-gray-100 pb-2 mt-10">
              <Text className=" font-bold text-gray-500 text-xl">{title}</Text>
              <Text className=" font-bold text-black text-xl">Rs. </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ViewRecordsPage;

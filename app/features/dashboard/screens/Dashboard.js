import {View, Text, StatusBar, Image, SectionList} from 'react-native';
import React, {useEffect} from 'react';
import {icons} from '../../../assets/icons/icons';
import {expenses} from '../../../assets/data/expenses';
import {useDispatch, useSelector} from 'react-redux';
import fetchCurrentWeekExpenses from '../redux/fetchCurrentWeekExpenses';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(state => state.dashboardSlice);
  const {
    auth: {userToken},
  } = useSelector(state => state.authSlice);

  useEffect(() => {
    if (userToken) {
      // dispatch(fetchCurrentWeekExpenses(userToken));
    }
  }, [userToken]);

  return (
    <View className=" flex-1 bg-gray-100">
      <StatusBar backgroundColor={'#111827'} />
      <View className=" bg-gray-900 p-5 rounded-b-3xl">
        <View className=" flex-row justify-between">
          <Text className=" text-xl text-white font-semibold">Records</Text>
          <View className=" flex-row gap-5">
            <Image source={icons.search_white} className=" w-7 h-7" />
            <Image source={icons.filter} className=" w-7 h-7" />
          </View>
        </View>
        <View className=" p-5 bg-gray-950 rounded-2xl flex-row justify-between items-center mt-10">
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
            <View className="bg-white p-5 rounded-xl mb-[-15px] shadow-lg">
              <View className=" flex-row justify-between">
                <Text className="text-gray-500">{item.time}</Text>
              </View>
              <View className=" flex-row justify-between items-center">
                <Text className=" text-gray-500 font-medium">
                  {item.description}
                </Text>
                <Text className="font-semibold text-lg">Rs. {item.amount}</Text>
              </View>
            </View>
          )}
          renderSectionHeader={({section: {title, data}}) => (
            <View className=" flex-row justify-between items-center bg-white p-2 mt-7 mb-2 rounded-xl shadow-xl">
              <Text className=" font-bold text-white text-xl bg-black p-2 rounded-xl">
                {title}
              </Text>
              <Text className="text-xl pr-3 text-gray-400">Mon</Text>
            </View>
          )}
          renderSectionFooter={({section: {title, data}}) => (
            <View className=" bg-white p-2 rounded-xl shadow-lg border-t-2 border-gray-300 flex-row justify-between items-center pr-5">
              <Text className=" text-gray-500 text-xl pl-3">Total</Text>
              <Text className=" text-gray-500 font-medium text-xl">
                Rs. {data.reduce((acc, item) => acc + item.amount, 0)}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Dashboard;

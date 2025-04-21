import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import SafeAreaView from '../components/SafeAreaView';
import {icons} from '../assets/icons/icons';
import {notificationTime} from '../data/notificationTime';
import NotifyTime from '../components/NotifyTime';
import {useNavigation} from '@react-navigation/native';

const UpdateNotifications = () => {
  const navigation = useNavigation();
  const OnBoardNotifyRef = [useRef(null), useRef(null), useRef(null)];

  return (
    <SafeAreaView>
      <View className=" flex-1 p-5 justify-between">
        <View className="flex-row justify-between items-center pb-5">
          <Text className=" font-bold text-2xl">Notifications</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image className=" w-10 h-10" source={icons.cross} />
          </TouchableOpacity>
        </View>
        <Text>
          When will you like to be reminded to record your expenses during the
          day?
        </Text>

        <FlatList
          className=" mt-5"
          data={notificationTime}
          renderItem={({item, index}) => (
            <NotifyTime
              props={item}
              OnBoardNotifyRef={OnBoardNotifyRef[index]}
            />
          )}
          keyExtractor={item => item.TimeOfTheDay}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

export default UpdateNotifications;

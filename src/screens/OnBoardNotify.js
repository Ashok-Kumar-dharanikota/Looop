import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useRef} from 'react';
import NotifyTime, {func} from '../components/NotifyTime';
import {notificationTime} from '../data/notificationTime';
import {icons} from '../assets/icons/icons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  updateNewUserStatus,
  updateNotificationsStatus,
} from '../redux/Slices/appcontext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveAppContext} from '../redux/AsyncThunk/AsyncThunk';
import {AsyncStore} from '../storage/AsyncStore';

import notifee, {TriggerType} from '@notifee/react-native';
import PushNotifications from '../services/PushNotifications';

const OnBoardNotify = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const OnBoardNotifyRef = [useRef(null), useRef(null), useRef(null)];

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    // const channelId = await notifee.createChannel({
    //   id: 'default',
    //   name: 'Default Channel',
    // });

    const date = new Date(Date.now());
    date.setHours(15);
    date.setMinutes(7);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };
    // Display a notification
    await notifee.createTriggerNotification(
      {
        title:
          '<p style="color: #ea580c;"><b>Morning reminder!!!</span></p></b></p>',
        body: 'Start your day productive. update your expenses!',
        android: {
          channelId,
          color: '#4caf50',
          largeIcon: icons.logo,
          actions: [
            {
              title: '<b>Record</b>',
              pressAction: {id: 'record'},
            },
            {
              title: '<b>Later</b>',
              pressAction: {id: 'later'},
            },
          ],
        },
      },
      trigger,
    );
  }

  const enableNotifications = async () => {
    const enabled = PushNotifications(OnBoardNotifyRef);
    if (enabled) {
      dispatch(saveAppContext({key: AsyncStore.NEW_USER, status: false}));
      dispatch(
        saveAppContext({key: AsyncStore.NOTIFICATIONS_ENABLED, status: true}),
      );
    }
  };

  return (
    <View className="p-5 flex-1 justify-between">
      <View>
        <Text className=" text-black font-extrabold text-xl text-center">
          Build a habit of recording through consistency 💪🏾
        </Text>
        <Text className="pt-3 text-center text-gray-600">
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

      <View className="p-1 gap-4">
        <TouchableOpacity
          onPress={enableNotifications}
          className=" bg-orange-600 rounded-full flex-row p-4 items-center justify-center">
          <Text className=" font-medium text-white">Enable reminders </Text>
          <Image source={icons.bell} className=" w-7 h-7" />
        </TouchableOpacity>
        <Text className=" text-center">Skip</Text>
      </View>
    </View>
  );
};

export default OnBoardNotify;

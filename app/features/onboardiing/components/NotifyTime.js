import {View, Text, Switch, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';
import CustomSwitch from 'react-native-custom-switch-new';
import {useSelector} from 'react-redux';

export const func = () => {
  console.log('hour time', hour);
};

const NotifyTime = ({props, OnBoardNotifyRef}) => {
  // const {notificationEnabled} = useSelector(state => state.appcontext);

  const [Switch, setSwitch] = useState(false);
  const [hour, setHour] = useState(props.hour);
  const [mins, setMins] = useState(props.mins);
  const [editTime, setEditTime] = useState(false);

  useImperativeHandle(OnBoardNotifyRef, () => ({
    [props.TimeOfTheDay]: {
      hour: hour,
      mins: mins,
      status: Switch,
    },
  }));

  return (
    <View className=" flex-1 justify-between p-3 border-l-[1px] border-r-[1px] border-gray-200">
      <View className=" items-center">
        <View className="items-center pb-5">
          <Text className="text-xl">{props.icon}</Text>
          <Text className=" font-semibold">{props.TimeOfTheDay}</Text>
        </View>
        <TouchableOpacity
          onPress={() => (Switch ? setEditTime(!editTime) : null)}
          className={`flex-row items-center rounded-full bg-gray-300 p-2 mb-5`}>
          {editTime == true && Switch == true ? (
            <View className="flex-row items-center">
              <TextInput
                value={hour}
                keyboardType="numeric"
                className=" rounded-xl text-orange-600 bg-gray-300 p-2 font-semibold"
                placeholderTextColor={'#4b5563'}
                maxLength={2}
                onChangeText={value => setHour(value)}
              />
              <Text>:</Text>
              <TextInput
                value={mins}
                keyboardType="numeric"
                className=" rounded-xl text-orange-600 bg-gray-300 p-2 font-semibold"
                placeholderTextColor={'#4b5563'}
                maxLength={2}
                onChangeText={value => setMins(value)}
              />
            </View>
          ) : (
            <Text
              className={`font-semibold p-1 ${!Switch ? 'text-gray-600' : ''}`}>
              {hour}:{mins}
            </Text>
          )}

          <Text
            className={`font-semibold p-1 ${!Switch ? 'text-gray-600' : ''}`}>
            {props.type}
          </Text>
        </TouchableOpacity>

        <CustomSwitch
          buttonWidth={25}
          animationSpeed={500}
          buttonPadding={3}
          switchBackgroundColor={!Switch ? '#E5E7EB' : '#34C759'}
          onSwitch={() => setSwitch(true)}
          onSwitchReverse={() => setSwitch(false)}
        />
      </View>
    </View>
  );
};

export default NotifyTime;

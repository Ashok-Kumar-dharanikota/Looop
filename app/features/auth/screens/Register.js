import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import IconCircleView from '../components/IconCircleView';
import {icons} from '../../../assets/icons/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Registration from '../service/Registration';
import retrieveAll from '../redux/AuthThunk';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const username = useRef(null);
  const mail = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  useEffect(() => {
    console.log('OnBoarding screen loaded');
  }, []);

  const handleOnRegister = async () => {
    let isUserRegistered = await Registration(
      username,
      mail,
      password,
      confirmPassword,
    );
    if (isUserRegistered) dispatch(retrieveAll());
  };

  const handleClickLogin = () => {
    navigation.navigate('login');
  };

  return (
    <View className=" flex-1 justify-between p-5 bg-white">
      <View className=" items-center justify-between">
        <View className=" items-center p-5">
          <IconCircleView>
            <Image
              source={icons.logo_bg_white}
              style={{width: 24, height: 24}}
            />
          </IconCircleView>
          <Text className=" text-black font-extrabold text-xl text-center">
            Login to access your Looop account...
          </Text>
        </View>

        <View className=" gap-5">
          <TextInput
            ref={username}
            onChangeText={value => (username.current.value = value)}
            keyboardType="text"
            placeholder="e.g Jane Camel"
            className=" rounded-xl text-xl font-bold text-black flex-wrap bg-gray-200 p-5 w-80"
            multiline={true}
            placeholderTextColor={'gray'}
          />

          <TextInput
            ref={mail}
            onChangeText={value => (mail.current.value = value)}
            keyboardType="text"
            placeholder="e.g jane@acme.com"
            className=" rounded-xl text-xl font-bold text-black flex-wrap bg-gray-200 p-5 w-80"
            multiline={true}
            placeholderTextColor={'gray'}
          />

          <TextInput
            ref={password}
            onChangeText={value => (password.current.value = value)}
            secureTextEntry
            keyboardType="text"
            placeholder="password"
            className=" rounded-xl text-xl font-bold text-black flex-wrap bg-gray-200 p-5 w-80"
            placeholderTextColor={'gray'}
          />

          <TextInput
            ref={confirmPassword}
            onChangeText={value => (confirmPassword.current.value = value)}
            secureTextEntry
            keyboardType="text"
            placeholder="confirm password"
            className=" rounded-xl text-xl font-bold text-black flex-wrap bg-gray-200 p-5 w-80"
            placeholderTextColor={'gray'}
          />
        </View>

        <View className="pt-5 flex-row">
          <Text className="font-medium text-lg">Already have an account ?</Text>
          <TouchableOpacity onPress={() => handleClickLogin()}>
            <Text className=" font-medium text-lg text-blue-600"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleOnRegister}
        className=" bg-orange-600 p-4 w-full rounded-3xl">
        <Text className=" text-center text-white font-medium ">Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {icons} from '../../../assets/icons/icons';
import IconCircleView from '../components/IconCircleView';
import {useNavigation} from '@react-navigation/native';
import loginUser from '../service/Login';
import {useDispatch} from 'react-redux';
import {AsyncStore} from '../../../config/AsyncStore';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleUserLogin = () => {
    const userToken = loginUser(emailRef, passwordRef);
    // if (userToken.status) {
    //   dispatch(
    //     saveAppContext({key: AsyncStore.USER_TOKEN, status: userToken.value}),
    //   );
    // }
  };

  const handleClickRegister = () => {
    navigation.navigate('register');
  };

  return (
    <View className="flex-1 justify-between p-5 bg-white">
      <View className=" items-center justify-between">
        <View className=" items-center p-5">
          <IconCircleView>
            <Image
              source={icons.logo_bg_white}
              style={{width: 24, height: 24}}
            />
          </IconCircleView>
          <Text className="text-black font-extrabold text-xl text-center">
            Login to access your Looop account...
          </Text>
        </View>

        <View className=" gap-5">
          <TextInput
            ref={emailRef}
            onChangeText={value => (emailRef.current.value = value)}
            keyboardType="text"
            placeholder="e.g jane@acme.com"
            className=" rounded-xl text-xl font-bold text-black flex-wrap bg-gray-200 p-5 w-80"
            multiline={true}
            placeholderTextColor={'gray'}
          />

          <TextInput
            ref={passwordRef}
            onChangeText={value => (passwordRef.current.value = value)}
            secureTextEntry
            keyboardType="text"
            placeholder="*******"
            className=" rounded-xl text-xl font-bold text-black flex-wrap bg-gray-200 p-5 w-80"
            placeholderTextColor={'gray'}
          />
        </View>

        <View className="pt-5 flex-row">
          <Text className="font-medium text-lg">Don't have an account ? </Text>
          <TouchableOpacity onPress={() => handleClickRegister()}>
            <Text className=" font-medium text-lg text-blue-600">Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleUserLogin}
        className=" bg-orange-600 p-4 w-full rounded-3xl">
        <Text className=" text-center text-white font-medium ">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

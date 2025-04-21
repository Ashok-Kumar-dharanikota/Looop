import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
// import Biometrics from 'react-native-biometrics';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useDispatch} from 'react-redux';
import {setAuth, updateFingerprintAuth} from '../redux/Slices/auth';
import IconCircleView from '../components/IconCircleView';
import {icons} from '../assets/icons/icons';

const AuthLayer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAuthenticate = async () => {
      try {
        const rnBiometrics = new ReactNativeBiometrics({
          allowDeviceCredentials: true,
        });

        const {available, biometryType} =
          await rnBiometrics.isSensorAvailable();

        if (
          available &&
          (biometryType === 'Biometrics' ||
            biometryType === 'FaceID' ||
            biometryType === 'TouchID')
        ) {
          rnBiometrics
            .simplePrompt({promptMessage: 'Authenticate using biometrics'})
            .then(result => {
              if (result.success) {
                setAuthenticated(true);
                dispatch(setAuth());
              } else {
                Alert.alert('Failed', 'Authentication failed!');
              }
            })
            .catch(() =>
              Alert.alert('Failed', 'Authentication failed! at catch'),
            );
        }
      } catch (error) {
        console.error('Failed to Authenticate using fingerprint', error);
      }
    };

    handleAuthenticate();
  }, [dispatch]);

  // const handleAuthenticate = async () => {
  //   try {
  //     const rnBiometrics = new ReactNativeBiometrics({
  //       allowDeviceCredentials: true,
  //     });

  //     const {available, biometryType} = await rnBiometrics.isSensorAvailable();

  //     if (
  //       available &&
  //       (biometryType === 'Biometrics' ||
  //         biometryType === 'FaceID' ||
  //         biometryType === 'TouchID')
  //     ) {
  //       rnBiometrics
  //         .simplePrompt({promptMessage: 'Authenticate using biometrics'})
  //         .then(result => {
  //           if (result.success) {
  //             setAuthenticated(true);
  //             dispatch(updateFingerprintAuth(true));
  //             Alert.alert('Success', 'Authenticated');
  //           } else {
  //             Alert.alert('Failed', 'Authentication failed!');
  //           }
  //         })
  //         .catch(() =>
  //           Alert.alert('Failed', 'Authentication failed! at catch'),
  //         );
  //     }
  //   } catch (error) {
  //     console.error('Failed to Authenticate using fingerprint', error);
  //   }
  // };

  return (
    <View className=" flex-1 p-10 bg-white items-center">
      <View className=" items-center justify-between">
        <IconCircleView>
          <Image source={icons.logo_bg_white} style={{width: 24, height: 24}} />
        </IconCircleView>
        <Text className=" text-black font-extrabold text-xl text-center">
          Protect your expenses at any cost.
        </Text>
        <Text className="pt-3 text-center text-gray-600">
          Welcome to Looop, where tracking your expenses is effortless. Discover
          how our app helps you.
        </Text>
      </View>
      {/* <TouchableOpacity className=" bg-orange-600 p-4 w-full rounded-3xl">
        <Text className=" text-center text-white font-medium ">
          Start tracking your expense
        </Text>
      </TouchableOpacity> */}
      <View
        className={`p-5 w-20 h-20 items-center justify-center rounded-full bg-blue-500 ${
          isAuthenticated ? 'bg-yellow-500' : ''
        } border-white border-[3px] mt-5`}>
        <Image source={icons.fingerprint} className=" w-10 h-10" />
      </View>
    </View>
  );
};

export default AuthLayer;

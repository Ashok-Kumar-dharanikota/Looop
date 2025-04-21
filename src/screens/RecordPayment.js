import {View, Text, StyleSheet, Alert, Image, Linking} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import LogOut from './LogOut';
import SafeAreaView from '../components/SafeAreaView';
import IconCircleView from '../components/IconCircleView';
import {icons} from '../assets/icons/icons';

const RecordPayment = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('front');
  const camera = useRef();

  const [CodeScanned, setCodeScanned] = useState(null);

  const onError = error => {
    Alert.alert('Error!', error.message);
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      if (codes.length > 0) {
        if (codes[0].value) {
          setTimeout(() => setCodeScanned(codes[0]?.value), 500);
          console.log('QR Code', CodeScanned);
          initiatePayment(CodeScanned);
        }
      }
      return;
    },
  });

  const initiatePayment = async upiUrl => {
    try {
      const supported = await Linking.canOpenURL(upiUrl);
      if (supported) {
        await Linking.openURL(upiUrl);
      } else {
        Alert.alert('Error', 'No UPI App found.');
      }
    } catch (error) {
      console.log('Error opening Url', error);
    }
  };

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }

    const handleDeepLink = event => {
      const {url} = event;
      if (url) {
        const parseUrl = new URL(url);
        const params = new URLSearchParams(parseUrl.search);
        const status = params.get('Status');
        const txnId = params.get('txnId');
        const responseCode = params.get('responseCode');

        console.log('Payment', status);
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeAllListeners('url', handleDeepLink);
    };
  }, []);

  if (!hasPermission) {
    return <LogOut />;
  }

  if (device == null) return <LogOut />;

  return (
    <SafeAreaView>
      <View className=" flex-1 p-5">
        <View className=" items-center justify-between">
          <IconCircleView>
            <Image source={icons.dollar} style={{width: 24, height: 24}} />
          </IconCircleView>
          <Text className=" text-black font-extrabold text-xl text-center">
            Record your payments effortlessly.
          </Text>
          <Text className="pt-3 text-center text-gray-600">
            Welcome to Looop, where tracking your payments is effortless.
            Discover how our app helps you.
          </Text>
          <Camera
            style={styles.absoluteFill}
            device={device}
            isActive={true}
            onError={onError}
            ref={camera}
            photo={false}
            codeScanner={codeScanner}
          />
        </View>

        <View className=" flex-1 pt-5">
          <Text className="text-center p-5">Works with:</Text>
          <View className=" flex-row justify-evenly">
            <IconCircleView>
              <Image source={icons.dollar} style={{width: 24, height: 24}} />
            </IconCircleView>
            <IconCircleView>
              <Image source={icons.dollar} style={{width: 24, height: 24}} />
            </IconCircleView>
            <IconCircleView>
              <Image source={icons.dollar} style={{width: 24, height: 24}} />
            </IconCircleView>
            <IconCircleView>
              <Image source={icons.dollar} style={{width: 24, height: 24}} />
            </IconCircleView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecordPayment;

const styles = StyleSheet.create({
  absoluteFill: {
    width: 300,
    height: 300,
    marginTop: 40,
  },

  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'visible',
    backgroundColor: 'skyblue',
    opacity: 0.5,
  },

  box: {
    width: 300,
    height: 300,
    borderRadius: 10,
    opacity: 1,
    borderColor: 'black',
    borderWidth: 2,
    overflow: 'visible',
  },
});

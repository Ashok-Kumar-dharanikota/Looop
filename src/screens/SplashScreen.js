import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {icons} from '../assets/icons/icons';
import SafeAreaView from '../components/SafeAreaView';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const SplashScreen = () => {
  const offset = useSharedValue(20);

  const animatedStyles = useAnimatedStyle(() => ({
    borderRadius: offset.value,
  }));

  useEffect(() => {
    offset.value = withRepeat(withSpring(offset.value + 50), -1, true);
  }, []);
  return (
    // <ImageBackground
    //   source={require('../assets/images/Cover.png')}
    //   className=" w-full h-full items-center justify-center">
    //   <Image
    //     source={icons.logo_bg_white}
    //     className=" bg-orange-600 w-10 h-10 rounded-full"
    //   />
    //   <Text className=" text-white text-3xl text-center font-medium">
    //     Loop Expense Tracker
    //   </Text>
    // </ImageBackground>
    <SafeAreaView>
      <View className="flex-1 items-center justify-between p-5 bg-gray-50">
        <View className="flex-1 items-center justify-center">
          <Animated.View
            style={[animatedStyles]}
            className=" bg-white w-20 h-20 p-5 items-center justify-center shadow-orange-600 shadow-lg">
            <Image source={icons.logo} />
          </Animated.View>
          <Animated.Text className=" text-orange-600 text-3xl text-center font-medium">
            Looop
          </Animated.Text>
        </View>

        <Text className=" text-gray-500 font-medium text-center">
          looop version 0.0.7
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  shadowEffect: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import SafeAreaView from '../components/SafeAreaView';
import IconCircleView from '../components/IconCircleView';
import {icons} from '../assets/icons/icons';
import CustomSwitch from 'react-native-custom-switch-new';
import {useNavigation} from '@react-navigation/native';

const Authentication = () => {
  const navigation = useNavigation();
  const [Switch, setSwitch] = useState(false);

  return (
    <SafeAreaView>
      <View className="p-5 flex-1 gap-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-xl font-bold">{'<<'} Authentication</Text>
        </TouchableOpacity>
        <Text className=" font-medium text-gray-600">
          Add an extra layer of protection to your account.
        </Text>

        <View className=" justify-between flex-row items-center">
          <TouchableOpacity className="flex-row items-center">
            <IconCircleView>
              <Image className=" w-7 h-7" source={icons.fingerprint} />
            </IconCircleView>
            <Text className=" text-lg ml-5">Biometric Authentication</Text>
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
    </SafeAreaView>
  );
};

export default Authentication;

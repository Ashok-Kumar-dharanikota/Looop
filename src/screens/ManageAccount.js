import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import SafeAreaView from '../components/SafeAreaView';
import {icons} from '../assets/icons/icons';
import IconCircleView from '../components/IconCircleView';
import PopUpMessageModal from '../components/PopUpMessageModal';
import {useNavigation} from '@react-navigation/native';

const ManageAccount = () => {
  const navigation = useNavigation();
  const [visibleField, setVisibility] = useState(false);

  return (
    <SafeAreaView>
      <View className=" flex-1 p-5 justify-between">
        <View className="gap-3">
          <View className="flex-row justify-between items-center pb-5">
            <Text className=" font-bold text-2xl">Manage account</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image className=" w-10 h-10" source={icons.cross} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className=" bg-gray-100 p-4 rounded-md">
            <Text className=" text-gray-400 font-bold text-2xl">
              jane@acme.com
            </Text>
          </TouchableOpacity>

          {!visibleField ? (
            <TouchableOpacity onPress={() => setVisibility(!visibleField)}>
              <Text className=" text-blue-500 underline-offset-2 underline font-medium text-lg">
                Change email
              </Text>
            </TouchableOpacity>
          ) : (
            <View>
              <TouchableOpacity className=" bg-gray-100 p-4 rounded-md">
                <Text className=" text-gray-400 font-bold text-2xl">
                  newemail@acme.com
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className=" bg-orange-600 rounded-full flex-row p-4 items-center justify-center mt-5">
                <Text className=" font-medium text-white">Change email</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* <View className="gap-5 mb-10">
          <TouchableOpacity className="flex-row items-center">
            <IconCircleView>
              <Image className=" w-7 h-7" source={icons.userEdit} />
            </IconCircleView>
            <Text className="text-orange-600 text-lg ml-5">
              Delete looop account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center">
            <IconCircleView>
              <Image className=" w-7 h-7" source={icons.logout_white} />
            </IconCircleView>
            <Text className="text-orange-600 text-lg ml-5">Logout</Text>
          </TouchableOpacity>
        </View> */}

        <PopUpMessageModal />
      </View>
    </SafeAreaView>
  );
};

export default ManageAccount;

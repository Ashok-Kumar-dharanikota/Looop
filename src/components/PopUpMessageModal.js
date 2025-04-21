import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import IconCircleView from './IconCircleView';
import {icons} from '../assets/icons/icons';

const popupmessage = [
  {
    title: 'Delete looop account',
    message:
      'Are you sure you want to delete your looop account? Your data will be lost once you delete your account.',
    buttontitle: 'Delete account',
  },
  {
    title: 'Log out',
    message: 'Are you sure you want to log out from your looop account?',
    buttontitle: 'Log out',
  },
];

const PopUpMessageModal = () => {
  const [message, setMessage] = useState(popupmessage[0]);

  const [modalVisible, setModalVisible] = useState(false);
  const [isToLogOut, setIsToLogOut] = useState(true);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View className=" bg-white rounded-t-3xl shadow-lg border-2 border-gray-200">
              <View className="flex-row justify-between items-center p-5 border-b-[1px] border-gray-100">
                <Text className=" font-bold text-xl">{message.title}</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image className=" w-7 h-7" source={icons.cross} />
                </TouchableOpacity>
              </View>

              <View className="p-8 border-b-[1px] border-gray-100">
                <Text className="text-center font-medium text-gray-600">
                  {message.message}
                </Text>
              </View>

              <View className="p-5 gap-3">
                <TouchableOpacity className=" bg-orange-600 rounded-full flex-row p-4 items-center justify-center">
                  <Text className=" font-medium text-white">
                    {message.buttontitle}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  className=" bg-gray-50 rounded-full flex-row p-4 items-center justify-center">
                  <Text className=" font-medium text-black">Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View className="gap-5 mb-10">
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setMessage(popupmessage[0]);
            }}
            className="flex-row items-center">
            <IconCircleView>
              <Image className=" w-7 h-7" source={icons.userEdit} />
            </IconCircleView>
            <Text className="text-orange-600 text-lg ml-5">
              Delete looop account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              setMessage(popupmessage[1]);
            }}
            className="flex-row items-center">
            <IconCircleView>
              <Image className=" w-7 h-7" source={icons.logout_white} />
            </IconCircleView>
            <Text className="text-orange-600 text-lg ml-5">Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PopUpMessageModal;

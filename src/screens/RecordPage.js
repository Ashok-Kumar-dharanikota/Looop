import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import SwipeButton from 'rn-swipe-button';
import {icons} from '../assets/icons/icons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const RecordPage = () => {
  const [buttonStatus, setButtonStatus] = useState('Slide to record');
  const [titleColor, setTitleColor] = useState('black');
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const {loading, context} = useSelector(state => state.appcontext);
  const {onBoardingCompleted, userToken, newUser} = context;

  const categories = [
    '🍛Food',
    '🚘Transportation',
    '💡Utility',
    '📱Airtime',
    '🏡Rent',
    '🌐Internet',
  ];
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(dayjs());
  const [formatedDate, setFormatedDate] = useState(
    `📆 ${dayjs(date).format('DD MMM YYYY')} 🕗 ${dayjs(date).format(
      'hh:mm A',
    )}`,
  );

  const handleDateChange = params => {
    // setDate(params.date.toString());
    // console.log('this is from params', params.date.toString());
    // setDateString(date.toString());
    // console.log('this is date', date);
    // console.log('check', date);
    const temp = params.date.toString();
    setDate(params.date);
    console.log(date.toString());

    setFormatedDate(
      `📆 ${dayjs(temp).format('DD MMM YYYY')} 🕗 ${dayjs(temp).format(
        'hh:mm A',
      )}`,
    );
  };

  const handleCategoryClick = props => {
    setCategory(props);
  };

  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const userSwipping = () => {
    setButtonStatus('recording...');
    setTitleColor('gray');
  };

  const userSwiped = () => {
    setButtonStatus('recorded');
    setTitleColor('white');
    if (newUser) {
      navigation.navigate('OnBoardNotify');
    } else {
      navigation.navigate('RecordPayment');
    }
  };

  const userNotSwiped = () => {
    setButtonStatus('Slide to record');
    setTitleColor('black');
  };

  const handleDateClick = () => {
    setModalVisible(!modalVisible);
  };

  const Category = ({props}) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategoryClick(props)}
        className=" border-[1px] rounded-full mr-5 p-2 m-1 items-center border-gray-300">
        <Text className=" font-medium">{props}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      className="bg-white"
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <GestureHandlerRootView style={{flex: 1, justifyContent: 'center'}}>
        <View className="pl-5 pr-5 pt-5 flex-1 justify-between">
          <View className=" justify-between flex-row pb-5">
            <TouchableOpacity className="p-2 border-gray-300 rounded-full border-2">
              <Image source={icons.arrow_dark} className=" w-7 h-7" />
            </TouchableOpacity>

            <View className=" flex-row gap-2">
              <TouchableOpacity className="p-2 border-white rounded-full border-2 bg-blue-300">
                <Image source={icons.dollar} className=" w-7 h-7" />
              </TouchableOpacity>
            </View>
          </View>

          <View className=" flex-wrap flex-row items-center gap-2">
            <Text className="text-2xl font-bold">I spent Rs.</Text>
            <TouchableOpacity className=" bg-gray-200 rounded-2xl flex-wrap">
              <TextInput
                maxLength={7}
                keyboardType="numeric"
                placeholder="e.g 200"
                className=" rounded-xl text-xl font-bold text-orange-600 text-center"
                multiline={true}
                style={{minWidth: 50, maxWidth: 100}}
                placeholderTextColor={'#9ca3af'}
              />
            </TouchableOpacity>
            <Text className="text-2xl font-bold"> on</Text>
            <TouchableOpacity className=" bg-gray-200 rounded-2xl flex-wrap">
              <TextInput
                maxLength={20}
                keyboardType="text"
                placeholder="e.g jollof and chicken"
                className=" rounded-xl text-xl font-bold text-orange-600 flex-wrap text-center"
                multiline={true}
                style={{minWidth: 300, maxWidth: 300, fontWeight: 'bold'}}
                placeholderTextColor={'#9ca3af'}
              />
            </TouchableOpacity>
            <Text className="text-2xl font-bold"> as</Text>
            <TouchableOpacity
              onPress={() => handleSnapPress(1)}
              className=" bg-gray-200 rounded-2xl flex-wrap p-2">
              <Text
                className={`text-xl font-bold ${
                  category != '' ? 'text-black' : 'text-gray-400'
                }`}>
                {category == '' ? 'e.g food 🥘' : category}
              </Text>
            </TouchableOpacity>
            <Text className="text-2xl font-bold"> on</Text>

            <TouchableOpacity
              onPress={() => handleDateClick()}
              className=" bg-gray-200 rounded-2xl flex-wrap">
              <Text className="text-2xl font-bold p-2">
                {formatedDate}
                {/* 🗓️ 12 March 2024 🕥️ 9:41 */}
              </Text>
            </TouchableOpacity>
          </View>

          <View className={` flex-1 items-center justify-center`}>
            <View
              style={styles.shadow}
              className={` shadow-2xl rounded-2xl bg-white`}>
              {modalVisible && (
                <DateTimePicker
                  mode="single"
                  date={date}
                  onChange={params => handleDateChange(params)}
                  timePicker={true}
                />
              )}
            </View>
          </View>

          <SwipeButton
            disableResetOnTap
            railBackgroundColor="#e5e7eb"
            railBorderColor="#e5e7eb"
            titleFontSize={18}
            titleStyles={{fontWeight: '500', color: titleColor, zIndex: 1}}
            thumbIconBackgroundColor="black"
            thumbIconBorderColor="#e5e7eb"
            railFillBackgroundColor="black"
            railFillBorderColor="#e5e7eb"
            onSwipeStart={() => userSwipping()}
            onSwipeSuccess={() => userSwiped()}
            onSwipeFail={() => userNotSwiped()}
            title={buttonStatus}
            thumbIconComponent={() => (
              <Image source={icons.arrow} className=" w-5 h-5" />
            )}
          />

          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            style={styles.shadow}
            index={-1}
            enableDynamicSizing={false}
            enablePanDownToClose={true}>
            <BottomSheetView style={{flex: 1, padding: 20}}>
              <View className=" flex-row justify-between items-center">
                <Text className=" font-extrabold text-2xl">
                  Pick a category
                </Text>

                <TouchableOpacity className="p-2 border-gray-300 rounded-full border-2">
                  <Image source={icons.plus} className=" w-7 h-7" />
                </TouchableOpacity>
              </View>
              <View className=" flex-wrap sticky">
                <FlatList
                  className=" mt-5"
                  data={categories}
                  renderItem={({item}) => <Category props={item} />}
                  keyExtractor={(item, index) => index}
                  showsHorizontalScrollIndicator={false}
                  numColumns={3}
                />
              </View>
            </BottomSheetView>
          </BottomSheet>

          {/* <Modal animationType="slide" visible={modalVisible}>
          <DateTimePicker
            mode="single"
            date={date}
            onChange={params => handleDateChange(params)}
            timePicker={true}
          />
        </Modal> */}
        </View>
      </GestureHandlerRootView>
      {/* <Modal
        style={{width: 400, height: 400}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}> */}
      {/* <View
        style={styles.shadow}
        className=" shadow-2xl rounded-2xl bg-black w-40 h-40"> */}
      {/* <DateTimePicker
            mode="single"
            date={date}
            onChange={params => handleDateChange(params)}
            timePicker={true}
          /> */}

      {/* <Text>hi</Text> */}
      {/* </View> */}
      {/* </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1.55,
    shadowRadius: 4.84,
    elevation: 18,
    borderRadius: 40,
    margin: 1,
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
});

export default RecordPage;

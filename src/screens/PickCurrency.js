import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useCallback, useMemo, useRef, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {countriesCurrency} from '../data/countriesCurrency';
import {useNavigation} from '@react-navigation/native';
import showToast from '../services/ShowToast';
import {useDispatch} from 'react-redux';
import {saveAppContext} from '../redux/AsyncThunk/AsyncThunk';
import {AsyncStore} from '../storage/AsyncStore';
import Currency from '../../app/features/onboardiing/components/Currency';
const PickCurrency = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [currency, setCurrency] = useState(null);

  const handleContinueClick = () => {
    if (currency != null) {
      dispatch(
        saveAppContext({
          key: AsyncStore.CURRENCY_DETAILS_SET_BY_USER,
          status: JSON.stringify(currency),
        }),
      );
      navigation.navigate('Record expense');
    } else {
      showToast(
        'info',
        'Currency not selected',
        'Please update your currency type.',
      );
    }
  };

  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View className=" flex-1">
        <View className=" p-5 justify-between flex-1">
          <View className=" gap-3">
            <Text className=" font-extrabold text-2xl">My Currency is</Text>
            <TouchableOpacity
              onPress={() => handleSnapPress(1)}
              className=" p-2 bg-gray-200 rounded-xl flex-wrap">
              {currency == null ? (
                <Text className=" text-gray-400 text-2xl font-bold">
                  e.g Canadian dollar(CAD)
                </Text>
              ) : (
                <View className=" flex-row items-center gap-3">
                  <Image className=" w-10 h-10" source={currency.flag} />
                  <Text className="text-2xl font-bold flex-shrink">
                    {currency.country} ({currency.currency})
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleContinueClick}
            className=" bg-orange-600 p-4 w-full rounded-3xl">
            <Text className=" text-center text-white font-medium ">
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          enableDynamicSizing={false}
          style={styles.shadow}
          index={-1}
          enablePanDownToClose={true}>
          <View style={{flex: 1, padding: 20}}>
            <Text className=" font-extrabold text-2xl">Pick a currency</Text>
            <TextInput
              className=" bg-gray-100 rounded-3xl p-3 text-lg mt-3 mb-5"
              placeholderTextColor={'gray'}
              placeholder="Search for a currency/country"
            />

            <BottomSheetFlatList
              showsVerticalScrollIndicator={false}
              data={countriesCurrency}
              renderItem={({item}) => (
                <Currency props={item} func={setCurrency} currency={currency} />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
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
  countriesList: {
    flex: 1,
  },
});

export default PickCurrency;

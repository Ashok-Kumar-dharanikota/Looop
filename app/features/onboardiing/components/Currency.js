import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../../../src/assets/icons/icons';

const Currency = ({props, func, currency}) => {
  const handleCurrencyClick = item => {
    func(item);
  };

  return (
    <TouchableOpacity
      onPress={() => handleCurrencyClick(props)}
      className={`mt-3 rounded-full p-1 ${
        (currency && currency.id) == props.id
          ? 'border-orange-400 border-2'
          : null
      } flex-row justify-between items-center`}>
      <View className=" flex-row items-center">
        <Image className=" w-14 h-14 mr-3" source={props.flag} />
        <View>
          <Text className=" font-bold text-lg">{props.currency}</Text>
          <Text className=" text-gray-600">{props.country}</Text>
        </View>
      </View>

      {(currency && currency.id) == props.id ? (
        <Image className=" w-7 h-7 mr-3" source={icons.check} />
      ) : null}
    </TouchableOpacity>
  );
};

export default Currency;

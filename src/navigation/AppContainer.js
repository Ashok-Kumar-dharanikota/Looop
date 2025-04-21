import {View, Text, Linking} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnBoarding from '../screens/OnBoarding';
import Auth from './Auth/Auth';
import AppStack from './App/AppStack';
import SafeAreaView from '../components/SafeAreaView';
import PickCurrency from '../screens/PickCurrency';
import {useDispatch, useSelector} from 'react-redux';
import LogOut from '../screens/LogOut';
import NewUser from './NewUser/NewUser';
import AuthLayer from '../screens/AuthLayer';
import {loadAppContext} from '../redux/AsyncThunk/AsyncThunk';
import RecordPayment from '../screens/RecordPayment';
import Toast from 'react-native-toast-message';

const AppContainer = () => {
  const Root = createNativeStackNavigator();

  const dispatch = useDispatch();
  const {loading, context} = useSelector(state => state.appcontext);
  const {auth} = useSelector(state => state.auth);
  const {onBoardingCompleted, userToken, newUser, authLayersetByUser} = context;

  console.log('user token is', userToken);

  const linking = {
    prefixes: ['looop://'],
    config: {
      screens: {
        Payment: 'upiresponse',
      },
    },
  };

  useEffect(() => {
    const initialSetUp = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));
      dispatch(loadAppContext());
    };

    const handleDeepLink = event => {
      console.log('Deep Link URL:', event.url);
    };

    Linking.addEventListener('url', handleDeepLink);

    initialSetUp();

    return () => {
      Linking.removeAllListeners('url', handleDeepLink);
    };
  }, [dispatch]);

  if (loading) {
    return <SplashScreen />;
  }

  if (!auth.fingerprint) {
    return <AuthLayer />;
  }

  return (
    <>
      <NavigationContainer>
        <Root.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!onBoardingCompleted ? (
            <Root.Screen name="OnBoarding" component={OnBoarding} />
          ) : userToken == null ? (
            <Root.Screen name="Auth" component={Auth} />
          ) : !newUser ? (
            <Root.Screen name="AppStack" component={AppStack} />
          ) : (
            <Root.Screen name="NUStack" component={NewUser} />
          )}

          <Root.Screen name="LogOut" component={LogOut} />
          <Root.Screen name="RecordPayment" component={RecordPayment} />
        </Root.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default AppContainer;

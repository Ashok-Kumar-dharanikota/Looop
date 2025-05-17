import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import SafeAreaView from './src/components/SafeAreaView';
import OnBoarding from './src/screens/OnBoarding';
import PickCurrency from './src/screens/PickCurrency';
import BottomSheetContainer from './src/components/BottomSheetContainer';
import Temp from './src/screens/Temp';
import RecordPage from './src/screens/RecordPage';
import MorePage from './src/screens/MorePage';
import ViewRecordsPage from './src/screens/ViewRecordsPage';
import OnBoardNotify from './src/screens/OnBoardNotify';
import Root from './src/screens/Root';
import {Provider} from 'react-redux';
// import store from './src/redux/store';
import store from './app/store/store';
import AppContainer from './app/navigation/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

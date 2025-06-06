import {createAsyncThunk} from '@reduxjs/toolkit';
import {query, where, getDocs, Timestamp, doc} from 'firebase/firestore';

import firestore from '@react-native-firebase/firestore';

const fetchCurrentWeekExpenses = createAsyncThunk(
  'dashboard/fetchCurrentWeekExpenses',
  async (userToken, thunkAPI) => {
    try {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

      const monday = new Date(now);
      monday.setHours(0, 0, 0, 0);
      monday.setDate(now.getDate() - diffToMonday);

      const startOfWeekTimestamp = Timestamp.fromDate(monday);
      const nowTimestamp = Timestamp.now();

      const userDocument = firestore().collection('users').doc(userToken);
      const expensesCollection = userDocument.collection('expenses');
      // const userDocument = doc(collection(db, 'users'), userToken);
      // const expensesCollection = collection(userDocument, 'expenses');

      const q = query(
        expensesCollection,
        where('time', '>=', startOfWeekTimestamp),
        where('time', '<=', nowTimestamp),
      );

      const userQuerySnapshot = await getDocs(q);

      let scoresTables = [];
      userQuerySnapshot?.forEach(doc => {
        scoresTables.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return {data: scoresTables};
    } catch (error) {
      console.error(error.message);
      return {error: error.message};
    }
  },
);

export default fetchCurrentWeekExpenses;

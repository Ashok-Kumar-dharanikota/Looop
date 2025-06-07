import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getFirestore,
  collection,
  doc,
  Timestamp,
  query,
  where,
  getDocs,
} from '@react-native-firebase/firestore';

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

      const db = getFirestore();
      const userDocument = doc(db, 'users', userToken);
      const expensesCollection = collection(userDocument, 'expenses');

      const q = query(
        expensesCollection,
        where('timestamp', '>=', startOfWeekTimestamp),
        where('timestamp', '<=', nowTimestamp),
      );

      const userQuerySnapshot = await getDocs(q);

      let expenses = [];
      userQuerySnapshot?.forEach(doc => {
        expenses.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return {data: expenses};
    } catch (error) {
      console.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default fetchCurrentWeekExpenses;

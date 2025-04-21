import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const {userToken} = useSelector(state => state.appcontext);

export const firestoreAPI = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ['expenses'],
  endpoints: builder => ({
    fetchAllExpense: builder.query({
      async queryFn() {
        try {
          const userDocument = firestore().collection('users').doc(userToken);
          const userQuerySnapshot = await getDocs(userDocument);
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
      providesTags: ['expenses'],
    }),
    createExpense: builder.mutation({
      async queryFn() {
        try {
          await firestore().collection('users').doc(userToken).set();
        } catch (error) {}
      },
    }),
  }),
});

export const {usefetchAllExpenseQuery} = firestoreAPI;

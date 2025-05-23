import firestore from '@react-native-firebase/firestore';

const createUserDoc = async user => {
  const userData = {
    username: user.username,
    email: user.email,
    currencyDetails: user.currencyDetails,
    records: [],
    categories: [],
  };

  console.log('userData', userData);
  console.log('userToken', user.userToken);

  try {
    await firestore().collection('users').doc(user.userToken).set(userData);
    console.log('User document created successfully');
  } catch (error) {
    console.error('Error creating user document:', error);
  }
};

export default createUserDoc;

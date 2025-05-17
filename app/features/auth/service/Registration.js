import ValidateRegistration from '../validation/ValidateRegistration';
import showToast from '../../../components/ShowToast';
import auth from '@react-native-firebase/auth';
import {AsyncStore} from '../../../config/AsyncStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const Registration = async (username, mail, password, confirmPassword) => {
//   const isValid = ValidateRegistration(
//     username.current.value,
//     mail.current.value,
//     password.current.value,
//     confirmPassword.current.value,
//   );

//   let isUserRegistered = false;

//   if (isValid) {
//     await auth()
//       .createUserWithEmailAndPassword(
//         mail.current.value,
//         password.current.value,
//       )
//       .then(async userCredentials => {
//         console.log(userCredentials);
//         const user = userCredentials.user;
//         showToast('info', 'Registrating User...', 'Please wait.');
//         await AsyncStorage.setItem(AsyncStore.USERNAME, username.current.value);
//         await AsyncStorage.setItem(AsyncStore.EMAIL, mail.current.value);
//         await AsyncStorage.setItem(AsyncStore.USER_TOKEN, user.uid);

//         await new Promise(resolve => setTimeout(resolve, 3000));
//         showToast('success', 'Registration Successful', 'Welcome to LOOOP.');
//         await new Promise(resolve => setTimeout(resolve, 3000));
//         isUserRegistered = true;
//       })
//       .catch(error => {
//         switch (error.code) {
//           case 'auth/email-already-in-use':
//             showToast(
//               'info',
//               'Email In Use',
//               'This email address is already in use.',
//             );
//             break;
//           case 'auth/invalid-email':
//             showToast(
//               'info',
//               'Invalid Email',
//               'The email address is badly formatted.',
//             );
//             break;
//           case 'auth/weak-password':
//             showToast('info', 'Weak Password', 'The password is too weak.');
//             break;
//           default:
//             showToast('error', 'Something wrong!', 'Please try again later');
//         }
//         isUserRegistered = false;
//       });
//   }
//   return isUserRegistered;
// };

// export default Registration;

const Registration = async (username, mail, password, confirmPassword) => {
  const isValid = ValidateRegistration(
    username.current.value,
    mail.current.value,
    password.current.value,
    confirmPassword.current.value,
  );

  if (!isValid) return false;

  try {
    const userCredentials = await auth().createUserWithEmailAndPassword(
      mail.current.value,
      password.current.value,
    );

    const user = userCredentials.user;
    showToast('info', 'Registrating User...', 'Please wait.');
    await AsyncStorage.setItem(AsyncStore.USERNAME, username.current.value);
    await AsyncStorage.setItem(AsyncStore.EMAIL, mail.current.value);
    await AsyncStorage.setItem(AsyncStore.USER_TOKEN, user.uid);

    await new Promise(resolve => setTimeout(resolve, 3000));
    showToast('success', 'Registration Successful', 'Welcome to LOOOP.');
    await new Promise(resolve => setTimeout(resolve, 3000));

    return true;
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        showToast(
          'info',
          'Email In Use',
          'This email address is already in use.',
        );
        break;
      case 'auth/invalid-email':
        showToast(
          'info',
          'Invalid Email',
          'The email address is badly formatted.',
        );
        break;
      case 'auth/weak-password':
        showToast('info', 'Weak Password', 'The password is too weak.');
        break;
      default:
        showToast('error', 'Something went wrong!', 'Please try again later');
    }
    return false;
  }
};

export default Registration;

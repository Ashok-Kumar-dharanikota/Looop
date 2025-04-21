import ValidateRegistration from '../validations/ValidateRegistration';
import showToast from './ShowToast';
import auth from '@react-native-firebase/auth';

const Registration = async (username, mail, password, confirmPassword) => {
  const isValid = ValidateRegistration(
    username.current.value,
    mail.current.value,
    password.current.value,
    confirmPassword.current.value,
  );

  if (isValid) {
    const userDetails = await auth()
      .createUserWithEmailAndPassword(
        mail.current.value,
        password.current.value,
      )
      .then(async userCredentials => {
        console.log(userCredentials);
        const user = userCredentials.user;
        showToast('info', 'Registrating User...', 'Please wait.');
        await new Promise(resolve => setTimeout(resolve, 3000));
        showToast('success', 'Registration Successful', 'Welcome to LOOOP.');
        await new Promise(resolve => setTimeout(resolve, 3000));
        return {
          status: isValid,
          userToken: user.uid,
          name: username.current.value,
          email: mail.current.value,
        };
      })
      .catch(error => {
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
            showToast('error', 'Something wrong!', 'Please try again later');
        }
        return {status: isValid, userToken: null};
      });

    console.log(userDetails);
    return userDetails;

    // try {
    //   // firebase logic
    //   const userCredentials = await auth().createUserWithEmailAndPassword(
    //     mail.current.value,
    //     password.current.value,
    //   ).then( async (userCredentials) => {
    //     const user = userCredentials.user;
    //     showToast('info', 'Registrating User...', 'Please wait.');
    //     await new Promise(resolve => setTimeout(resolve, 3000));
    //     showToast('success', 'Registration Successful', 'Welcome to LOOOP.');
    //     await new Promise(resolve => setTimeout(resolve, 3000));
    //     return {
    //       status: isValid,
    //       userToken: user.uid,
    //       name: username.current.value,
    //       email: mail.current.value,
    //     };

    //   }).catch(error => {
    //     switch(error.code) {
    //         case 'auth/email-already-in-use':
    //           showToast(
    //             'info',
    //             'Email In Use',
    //             'This email address is already in use.',
    //           );
    //           break;
    //         case 'auth/invalid-email':
    //           showToast(
    //             'info',
    //             'Invalid Email',
    //             'The email address is badly formatted.',
    //           );
    //           break;
    //         case 'auth/weak-password':
    //           showToast('info', 'Weak Password', 'The password is too weak.');
    //           break;
    //         default:
    //           showToast('error', 'Something wrong!', 'Please try again later');
    //     }
    //     return {status: isValid, userToken: null};
    //   })

    //   const user = userCredentials.user;
    //   showToast('info', 'Registrating User...', 'Please wait.');
    //   await new Promise(resolve => setTimeout(resolve, 3000));
    //   showToast('success', 'Registration Successful', 'Welcome to LOOOP.');
    //   await new Promise(resolve => setTimeout(resolve, 3000));
    //   return {
    //     status: isValid,
    //     userToken: user.uid,
    //     name: username.current.value,
    //     email: mail.current.value,
    //   };
    // } catch (error) {
    //   console.log('Registration Error:', error);
    //   isValid = false;
    //   if (error === 'auth/email-already-in-use') {
    //     showToast(
    //       'info',
    //       'Email In Use',
    //       'This email address is already in use.',
    //     );
    //   } else if (error.code === 'auth/invalid-email') {
    //     showToast(
    //       'info',
    //       'Invalid Email',
    //       'The email address is badly formatted.',
    //     );
    //   } else if (error.code === 'auth/weak-password') {
    //     showToast('info', 'Weak Password', 'The password is too weak.');
    //   } else {
    //     showToast('error', 'Something wrong!', 'Please try again later');
    //   }
    //   return {status: isValid, userToken: null};
    // }
  }
};

export default Registration;

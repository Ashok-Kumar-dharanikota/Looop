import auth from '@react-native-firebase/auth';
import showToast from './ShowToast';
import validateEmail from '../validations/validateEmail';
import validatePassword from '../validations/validatePassword';

const loginUser = (emailRef, passwordRef) => {
  const isValidEmail = validateEmail(emailRef);
  const isValidPassword = validatePassword(passwordRef);
  const loginSuccess = {value: null, status: false};

  if (isValidEmail && isValidPassword) {
    const Email = emailRef.current.value;
    const Password = passwordRef.current.value;

    auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(res => {
        console.log('User signed in!', res);
        showToast('success', 'Login Successful!!!', 'Welcome back to Looop!');
        loginSuccess.status = true;
        loginSuccess.value = res;
      })
      .catch(error => {
        console.log(error.code);
        showToast('info', 'Login Failed!!!', 'Something went wrong!');
      });
  } else if (!(isValidEmail && isValidPassword)) {
    if (!isValidEmail) {
      showToast('error', 'Login Failed!!!', 'not a valid email!');
    }
    if (!isValidPassword) {
      showToast('error', 'Login Failed!!!', 'not a valid password!');
    }
  }

  return loginSuccess;
};

export default loginUser;

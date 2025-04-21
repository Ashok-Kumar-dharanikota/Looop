import Toast from 'react-native-toast-message';
import showToast from '../services/ShowToast';
import {EMAIL_PATTERN, PASSWORD_PATTERN, USER_PATTERN} from './Patterns';

const ValidateRegistration = (username, mail, password, confirmPassword) => {
  const isValid = false;

  const vusername = USER_PATTERN.test(username);
  const vmail = EMAIL_PATTERN.test(mail);
  const vpassword = PASSWORD_PATTERN.test(password);
  const vConfPassword = PASSWORD_PATTERN.test(confirmPassword);

  const passwordSame = password == confirmPassword;

  console.log(username, mail, password, confirmPassword);

  if (
    username == undefined ||
    mail == undefined ||
    password == undefined ||
    confirmPassword == undefined
  ) {
    showToast('info', 'Invalid fields', 'fields should not be empty.');
    return false;
  }

  if (vusername && vmail && vpassword && vConfPassword && passwordSame) {
    return true;
  } else {
    console.log('else block');
    let message = '';
    if (!vusername) {
      message += 'username ';
    }
    if (!vmail) {
      message += 'mail ';
    }
    if (!vpassword) {
      message += 'password ';
    }
    if (!vConfPassword) {
      message += 'confirm password ';
    }
    showToast(
      'error',
      'Failed',
      `${message} not valid ${!passwordSame ? 'and Password not match' : ''}`,
    );

    return isValid;
  }
};

export default ValidateRegistration;

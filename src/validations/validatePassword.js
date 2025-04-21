import {PASSWORD_PATTERN} from './Patterns';

const validatePassword = passwordRef => {
  const password = passwordRef.current.value;

  const isValidPassword = PASSWORD_PATTERN.test(password);
  return isValidPassword;
};

export default validatePassword;

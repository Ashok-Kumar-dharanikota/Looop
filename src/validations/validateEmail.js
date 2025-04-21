import {EMAIL_PATTERN} from './Patterns';

const validateEmail = emailRef => {
  const email = emailRef.current.value;

  const isValidEmail = EMAIL_PATTERN.test(email);
  return isValidEmail;
};

export default validateEmail;

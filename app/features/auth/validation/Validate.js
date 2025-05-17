import {EMAIL_PATTERN, PASSWORD_PATTERN} from './Patterns';

export default function Validate(ref, TYPE) {
  const value = ref.current.value;
  console.log(value);

  let isValid;
  switch (TYPE) {
    case 'EMAIL':
      isValid = EMAIL_PATTERN.test(value);
      break;
    case 'PASSWORD':
      isValid = PASSWORD_PATTERN.test(value);
      break;
    default:
      console.log(TYPE, 'is invalid');
      return false;
  }
  return isValid;
}

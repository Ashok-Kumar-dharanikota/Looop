const USER_PATTERN = /^[^\s][a-zA-Z\s]+[^\s]$/;
const EMAIL_PATTERN = /^[a-z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const PASSWORD_PATTERN = /^[\w@#&]{6,15}$/;

export {USER_PATTERN, EMAIL_PATTERN, PASSWORD_PATTERN};

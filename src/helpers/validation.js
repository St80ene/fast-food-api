import e from 'express';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default (data) => {
  if (data.email) {
    if (!emailRegex.test(data.email)) {
      return { status: false, message: 'Please enter a valid email address' };
    }
  }
  if (data.name) {
    if (data.name.length < 3) {
      return { status: false, message: 'Name should be minimum of 3' };
    }
  }
  if (data.password) {
    if (data.password.length < 5) {
      return { status: false, message: 'Password should be minimum of 5' };
    }
  }
  return { status: true, message: 'Validation successful' };
};

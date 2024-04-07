/* eslint-disable no-unused-vars */
const ValidateUser = (userName, email, password) => {
  const checkUserName = userName
    ? /^[A-Za-z][A-Za-z0-9_]{7,12}$/.test(userName)
    : true;
  const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!checkEmail) return "Entered email is inValid !!!";
  if (!checkPassword) return "Entered password is inValid !!!";
  if (!checkUserName) return "Entered userName is inValid !!!";

  return null;
};
export default ValidateUser;

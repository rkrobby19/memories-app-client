import axios from "axios";

const url = process.env.NEXT_PUBLIC_DB_URI;

export const userSignUp = async ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  const data = { firstName, lastName, email, password, confirmPassword };
  const user = await axios.post(`${url}/users/signup`, data);

  return user;
};

export const userSignIn = async ({ email, password }) => {
  const data = { email, password };
  const user = await axios.post(`${url}/users/signin`, data);

  return user;
};

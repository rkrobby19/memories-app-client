import { API } from "./uri";

export const userSignUp = async ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  const data = { firstName, lastName, email, password, confirmPassword };
  const user = await API.post(`/users/signup`, data);

  return user;
};

export const userSignIn = async ({ email, password }) => {
  const data = { email, password };
  const user = await API.post(`/users/signin`, data);

  return user;
};

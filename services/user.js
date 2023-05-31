import { API } from "./uri";

export const userSignUp = async ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  try {
    const data = { firstName, lastName, email, password, confirmPassword };
    const user = await API.post(`/users/signup`, data);

    return user;
  } catch (error) {
    const { response } = error;
    return {
      status: response.status,
      data: response.data,
    };
  }
};

export const userSignIn = async ({ email, password }) => {
  try {
    const data = { email, password };
    const user = await API.post(`/users/signin`, data);
    return user;
  } catch (error) {
    const { response } = error;
    return {
      status: response.status,
      data: response.data,
    };
  }
};

import axios from "axios";
import { URL } from "./ApiURL";

interface SignupObject {
  name: string;
  email: string;
  password: string;
}

interface loginObject {
  email: string;
  password: string;
}

export const SignUpFunc = async (data: SignupObject) => {
  const res = await axios.post(`${URL}/signup`, data);
  return res.data;
};

export const LoginFunc = async (data: loginObject) => {
  const res = await axios.post(`${URL}/login`, data);
  return res.data;
};

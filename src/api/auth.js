import { Await } from "react-router-dom";
import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  setToken(data.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  setToken(data.token);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};
const myTransaction = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

const deposit = async (amount) => {
  const { data } = await instance.put("mini-project/api/transactions/deposit", {
    amount: amount,
  });
  return data;
};
const withdraw = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    {
      amount: amount,
    }
  );
  return data;
};

const transfers = async (amount, username) => {
  const { data } = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    {
      usename: username,
      amount: amount,
    }
  );
  return data;
};

export {
  login,
  deposit,
  withdraw,
  register,
  me,
  getAllUsers,
  myTransaction,
  transfers,
};

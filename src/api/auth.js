import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    userInfo
  );
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

export { login, register, me, getAllUsers };

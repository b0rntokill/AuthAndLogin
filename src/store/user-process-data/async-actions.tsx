import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ApiRoute } from "../../const";
import { api } from "../../services/api";
import { LogInData } from "../../types/log-in-data";
import { UserData } from "../../types/user-data";

const REGISTER_FAIL_MESSAGE = "Отправка данных пользователя завершилась с ошибкой";
const REGISTER_VERIFY_FAIL_MESSAGE = "Подтверждение данных пользователя завершилась с ошибкой";
const LOG_IN_FAIL_MESSAGE = "Отправка логина и пароля завершилась с ошибкой";
const LOG_OUT_FAIL_MESSAGE = "Разлогин завершился с ошибкой";

export const registerNewUserAction = createAsyncThunk(
  "user/registerNewUser",
  async (newUser: UserData) => {
    try {
      await api({
        method: "post",
        url: ApiRoute.RegisterUser,
        data: newUser,
        headers: { "Content-Type": "application/json" },
      });
    } catch (evt) {
      toast.error(REGISTER_FAIL_MESSAGE);
      return Promise.reject(evt);
    }
  }
);

export const registerVerifyAction = createAsyncThunk(
  "user/verifyNewUser",
  async (verifyKey: string) => {
    const key = {
      key: verifyKey,
    };

    try {
      await api({
        method: "post",
        url: ApiRoute.VerifyUser,
        data: key,
        headers: { "Content-Type": "application/json" },
      });
    } catch (evt) {
      toast.error(REGISTER_VERIFY_FAIL_MESSAGE);
      return Promise.reject(evt);
    }
  }
);

export const logInAction = createAsyncThunk("user/logIn", async (data: LogInData) => {
  const login = {
    login: data.login,
    password: data.password,
  };

  try {
    await api({
      method: "post",
      url: ApiRoute.LogIn,
      data: login,
      headers: { "Content-Type": "application/json" },
    });
  } catch (evt) {
    toast.error(LOG_IN_FAIL_MESSAGE);
    return Promise.reject(evt);
  }
});

export const logInConfirmAction = createAsyncThunk("user/logInConfirm", async (data: LogInData) => {
  const loginConfirm = {
    email: data.login,
    code: data.code,
  };

  try {
    const { data: token } = await api({
      method: "post",
      url: ApiRoute.LogInConfirm,
      data: loginConfirm,
      headers: { "Content-Type": "application/json" },
    });

    return token;
  } catch (evt) {
    toast.error(LOG_IN_FAIL_MESSAGE);
    return Promise.reject(evt);
  }
});

export const logOutAction = createAsyncThunk("user/logOut", async () => {
  try {
    await api({
      method: "post",
      url: ApiRoute.LogOut,
    });
    const token = undefined;
    return token;
  } catch (evt) {
    toast.error(LOG_OUT_FAIL_MESSAGE);
    return Promise.reject(evt);
  }
});

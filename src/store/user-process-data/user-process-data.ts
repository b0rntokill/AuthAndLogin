import { createSlice } from "@reduxjs/toolkit";
import { UserProcessData } from "../../types/state";
import {
  logInAction,
  logInConfirmAction,
  logOutAction,
  registerNewUserAction,
  registerVerifyAction,
} from "./async-actions";

const initialState: UserProcessData = {
  token: undefined,
  isRegisterVerify: false,
  isConfirm: false,
  isLoading: false,
};

const dataSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerNewUserAction.fulfilled, (state) => {
        state.isLoading = false;
        state.isRegisterVerify = true;
      })
      .addCase(registerNewUserAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(registerVerifyAction.fulfilled, (state) => {
        state.isRegisterVerify = true;
      })
      .addCase(logInAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInAction.fulfilled, (state) => {
        state.isLoading = false;
        state.isRegisterVerify = false;
        state.isConfirm = true;
      })
      .addCase(logInAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logInConfirmAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInConfirmAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(logInConfirmAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logOutAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isConfirm = false;
        state.isRegisterVerify = false;
        state.token = action.payload;
      })
      .addCase(logOutAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const { reducer } = dataSlice;

export const userData = reducer;

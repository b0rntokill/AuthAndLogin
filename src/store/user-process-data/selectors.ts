import { NameSpace } from "../../const";
import type { RootState } from "../root-reducer";

export const getToken = (state: RootState): string | undefined =>
  state[NameSpace.user].token?.access;
export const getIsLoading = (state: RootState): boolean => state[NameSpace.user].isLoading;
export const getIsRegisterVerify = (state: RootState): boolean =>
  state[NameSpace.user].isRegisterVerify;
export const getIsConfirm = (state: RootState): boolean => state[NameSpace.user].isConfirm;

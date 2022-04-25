export type UserProcessData = {
  token:
    | {
        refresh: string;
        access: string;
      }
    | undefined;
  isRegisterVerify: boolean;
  isConfirm: boolean;
  isLoading: boolean;
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserForm } from "../../components/user-form";
import {
  getIsLoading,
  getIsRegisterVerify,
  registerNewUserAction,
} from "../../store/user-process-data";
import { UserData as Data } from "../../types/user-data";
import "./registration.scss";

function RegistrationPage(): JSX.Element {
  const isLoading = useSelector(getIsLoading);
  const isRegisterVerify = useSelector(getIsRegisterVerify);
  const dispatch = useDispatch();

  const onSubmit = (data: Data) => {
    dispatch(registerNewUserAction(data));
  };

  return (
    <div className="registration">
      {!isRegisterVerify ? (
        <UserForm isLoading={isLoading} onSubmit={onSubmit} />
      ) : (
        <p>
          Мы отправили Вам ссылку на указанную при регистрации почту. Перейдите по ссылке во
          вложении, для завершения регистрации.
        </p>
      )}
    </div>
  );
}

export default RegistrationPage;

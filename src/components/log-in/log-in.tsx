import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { LogInData } from "../../types/log-in-data";
import { CustomButton } from "../common/custom-button";
import { CustomInput } from "../common/custom-input";
import "./log-in.scss";

type UserFormProps = {
  isLoading: boolean;
  isConfirm: boolean;
  onSubmit: (data: LogInData) => void;
};

function LogIn({ isLoading, isConfirm, onSubmit }: UserFormProps): JSX.Element {
  // TODO сделать в хук
  const [formFields, setFormFields] = useState({
    login: "",
    password: "",
    code: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name } = evt.target;
    const { value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onFormSubmit = (evt: FormEvent) => {
    let isValid;

    if (form.current) {
      isValid = form.current.reportValidity();
    }

    setIsSubmited(true);
    evt.preventDefault();

    if (isValid) {
      const userData = {
        login: formFields.login,
        password: formFields.password,
        code: formFields.code,
      };

      onSubmit(userData);
    }
  };

  return (
    <form
      ref={form}
      className={`log-in-form ${!isSubmited ? "log-in-form--no-submited" : ""}`}
      noValidate
      onSubmit={onFormSubmit}
    >
      <h3>Вход в систему</h3>
      <CustomInput
        name="login"
        type="login"
        placeholder="E-mail"
        value={formFields.login}
        onChange={onInputChange}
        required
      />
      {!isConfirm ? (
        <CustomInput
          name="password"
          type="password"
          placeholder="Пароль"
          value={formFields.password}
          onChange={onInputChange}
          required
        />
      ) : (
        <>
          <p className="log-in-form__text">Код подтверждения полученный по e-mail</p>
          <CustomInput
            name="code"
            type="code"
            placeholder="Код подтверждения"
            value={formFields.code}
            onChange={onInputChange}
            required
          />
        </>
      )}
      <div className="user-form__btn-wrapper">
        <CustomButton
          text={!isConfirm ? "Войти" : "Подтвердить"}
          type="submit"
          disabled={isLoading}
        />
      </div>
    </form>
  );
}

export default LogIn;

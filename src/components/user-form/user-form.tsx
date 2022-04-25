import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { UserData } from "../../types/user-data";
import { CustomButton } from "../common/custom-button";
import { CustomInput } from "../common/custom-input";
import { FormFields, FORM_FIELDS } from "./const";
import "./user-form.scss";
import { checkFormField } from "./utils";

type UserFormProps = {
  isLoading: boolean;
  onSubmit: (data: UserData) => void;
};

function UserForm({ isLoading, onSubmit }: UserFormProps): JSX.Element {
  const [formFields, setFormFields] = useState<FormFields>(FORM_FIELDS);

  const form = useRef<HTMLFormElement>(null);

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name } = evt.target;
    const { value } = evt.target;
    setFormFields({ ...formFields, [name]: { value, error: false } });
  };

  const checkFormFields = () => {
    let isValid = true;

    const newFormFields = Object.entries(formFields).map((el) => {
      const newField = checkFormField(el, formFields);
      if (newField[1].error) {
        isValid = false;
      }

      return newField;
    });

    setFormFields(Object.fromEntries(newFormFields) as FormFields);

    return isValid;
  };

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const isValid = checkFormFields();

    if (isValid) {
      const userData = {
        username: formFields.username.value,
        email: formFields.email.value.toLowerCase(),
        password1: formFields.password1.value,
        password2: formFields.password2.value,
        keyword: formFields.keyword.value,
      };

      onSubmit(userData);
    }
  };

  return (
    <form ref={form} className="user-form" noValidate onSubmit={onFormSubmit}>
      <h3>Форма регистрации</h3>
      <CustomInput
        name="username"
        type="text"
        placeholder="Уникальный никнейм"
        message="Никнейм должен быть не менее 2 символов"
        error={formFields.username.error}
        value={formFields.username.value}
        onChange={onInputChange}
      />
      <CustomInput
        name="email"
        type="email"
        placeholder="E-mail"
        message="Введите корректную почту"
        error={formFields.email.error}
        value={formFields.email.value}
        onChange={onInputChange}
      />
      <CustomInput
        name="password1"
        type="password"
        placeholder="Пароль"
        message="От 8 символов содержит буквы, цыфры, знаки препинания"
        error={formFields.password1.error}
        value={formFields.password1.value}
        onChange={onInputChange}
      />
      <CustomInput
        name="password2"
        type="password"
        placeholder="Подтвержение пароля"
        message="Пароли должны быть одинаковы"
        error={formFields.password2.error}
        value={formFields.password2.value}
        onChange={onInputChange}
      />
      <CustomInput
        name="keyword"
        type="text"
        placeholder="Контрольное слово"
        message="От 4 символов"
        error={formFields.keyword.error}
        value={formFields.keyword.value}
        onChange={onInputChange}
      />
      <div className="user-form__btn-wrapper">
        <CustomButton text="Зарегистрироваться" type="submit" disabled={isLoading} />
      </div>
    </form>
  );
}

export default UserForm;

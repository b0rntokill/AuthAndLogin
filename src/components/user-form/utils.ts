import { FieldArr, FormFields } from "./const";

const MAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Za-z]).*$/;

export const checkFormField = (field: FieldArr, formFields: FormFields): FieldArr => {
  const [name, val] = field;
  const { value } = val;
  let error;

  switch (name as keyof FormFields) {
    case "username":
      error = value.length < 2;
      break;
    case "email":
      error = !MAIL_REGEX.test(String(value).toLowerCase());
      break;
    case "password1":
      error = !PASSWORD_REGEX.test(String(value).toLowerCase());
      break;
    case "password2":
      error = value !== formFields.password1.value;
      break;
    case "keyword":
      error = value.length < 4;
      break;
  }

  return [name, { value, error }];
};

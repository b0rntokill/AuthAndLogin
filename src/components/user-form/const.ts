export const FORM_FIELDS = {
  username: {
    value: "",
    error: false,
  },
  email: {
    value: "",
    error: false,
  },
  password1: {
    value: "",
    error: false,
  },
  password2: {
    value: "",
    error: false,
  },
  keyword: {
    value: "",
    error: false,
  },
} as const;

export type FieldArr = [string, { value: string; error: boolean }];
export type FormFields = typeof FORM_FIELDS;

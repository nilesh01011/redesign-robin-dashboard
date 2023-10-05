import * as Yup from "yup";

// Login User DataSchema
export const loginSchema = Yup.object({
  id: Yup.string().required("!This field is required"),
  password: Yup.string()
    .min(6)
    .required("!Password you entered is not matched!"),
});

// Changed password
export const changePassword = Yup.object({
  old_password: Yup.string().required("Old password was required"),
  new_password: Yup.string()
    .min(10)
    .required("Password must contain at least 10 characters"),
  confirm_password: Yup.string()
    .required()
    .oneOf(
      [Yup.ref("new_password"), null],
      "Password you entered is not matched!"
    ),
});

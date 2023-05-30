import * as yup from "yup";
import { REQUIRED_FIELD } from "../constants/index";

const signupSchema = yup
  .object({
    username: yup.string().required(REQUIRED_FIELD),
    email: yup.string().email("Is invalid email").required(REQUIRED_FIELD),
    password: yup.string().required(REQUIRED_FIELD),
    password_check: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(REQUIRED_FIELD),
  })
  .required();
export default signupSchema;

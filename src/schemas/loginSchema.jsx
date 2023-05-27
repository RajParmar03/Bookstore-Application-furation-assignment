import * as Yup from "yup";

export const loginSchema = Yup.object({
    username : Yup.string().min(3).max(15).required("Please enter your username"),
    password : Yup.string().min(6).required("Please enter your password"),
});
import * as Yup from "yup";

export const signupSchema = Yup.object({
    username : Yup.string().min(3).max(15).required("Please enter your username"),
    email : Yup.string().email().required("Please enter your email"),
    password : Yup.string().min(6).required("Please enter your password"),
    confirm_password : Yup.string().required("Please enter confirm password").oneOf([Yup.ref("password") , null] , "Password must match"),
});